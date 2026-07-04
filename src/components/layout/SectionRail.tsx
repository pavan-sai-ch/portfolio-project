"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { scrollEngine } from "./scrollEngine";

const SECTIONS = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
] as const;

const NAV = 80; // fixed navbar height

export default function SectionRail() {
    const [active, setActive] = useState<string>("home");
    // Continuous fill (0–1): grows smoothly with scroll, landing on a dot exactly
    // when that section reaches the top. Interpolated between section anchors so
    // it never "snaps" between dots the way an index-based fill did.
    const [fillFraction, setFillFraction] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    // Active section via IntersectionObserver — section is active when its
    // midpoint region crosses the viewport center.
    useEffect(() => {
        const els = SECTIONS
            .map((s) => document.getElementById(s.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Continuous fill driven by scroll position (Lenis drives window scroll, so
    // the native "scroll" event fires every frame → smooth growth).
    useEffect(() => {
        // Layout position via offsetParent chain — transform-immune (Framer).
        const absTop = (el: HTMLElement) => {
            let y = 0;
            let n: HTMLElement | null = el;
            while (n) {
                y += n.offsetTop;
                n = n.offsetParent as HTMLElement | null;
            }
            return y;
        };
        const rail = SECTIONS
            .map((s) => document.getElementById(s.id))
            .filter((el): el is HTMLElement => el !== null);

        const compute = () => {
            if (rail.length < 2) return;
            const anchors = rail.map((el) => Math.max(0, absTop(el) - NAV));
            const y = window.scrollY;
            const last = anchors.length - 1;
            let frac: number;
            if (y <= anchors[0]) frac = 0;
            else if (y >= anchors[last]) frac = 1;
            else {
                let i = 0;
                while (i < last && y >= anchors[i + 1]) i++;
                const span = anchors[i + 1] - anchors[i] || 1;
                frac = (i + (y - anchors[i]) / span) / last;
            }
            setFillFraction(frac);
        };

        compute();
        window.addEventListener("scroll", compute, { passive: true });
        window.addEventListener("resize", compute);
        return () => {
            window.removeEventListener("scroll", compute);
            window.removeEventListener("resize", compute);
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        // Don't let the click bubble to Lenis's window-level anchor handler —
        // it ignores preventDefault and would re-target the glide using
        // getBoundingClientRect (transform-tainted for unrevealed sections).
        e.stopPropagation();
        // Prefer the smooth-scroll engine (Lenis) so clicks feel identical to
        // flicks; fall back to native smooth scroll when the engine is off
        // (reduced motion / coarse pointer).
        if (!shouldReduceMotion && scrollEngine.scrollToId?.(id)) {
            setActive(id);
            return;
        }
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
        setActive(id);
    };

    return (
        <nav
            aria-label="Section navigation"
            className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col"
        >
            <ol className="relative flex flex-col justify-between h-[80vh] pl-5">
                {/* Track — centered on the 12px dot boxes (pl-5 = 20px + 6px = 26px) */}
                <span
                    aria-hidden="true"
                    className="absolute left-[26px] top-2 bottom-2 w-0.5 -translate-x-1/2 rounded-full bg-cream-300"
                />
                {/* Fill — continuous, tracks scroll per frame (no easing lag) */}
                <span
                    aria-hidden="true"
                    className="absolute left-[26px] top-2 w-0.5 -translate-x-1/2 rounded-full bg-terracotta-500 origin-top"
                    style={{
                        height: `calc((100% - 1rem) * ${fillFraction})`,
                        transition: shouldReduceMotion ? "none" : "height 0.08s linear",
                    }}
                />

                {SECTIONS.map((s) => {
                    const isActive = active === s.id;
                    return (
                        <li key={s.id} className="relative">
                            <a
                                href={`#${s.id}`}
                                onClick={(e) => handleClick(e, s.id)}
                                aria-current={isActive ? "true" : undefined}
                                className="group flex items-center gap-3"
                            >
                                {/* Dot — inside a fixed 12px box so its CENTER stays put
                                    regardless of active/inactive size (keeps it on the track) */}
                                <span className="relative z-10 flex w-3 items-center justify-center">
                                    <span
                                        aria-hidden="true"
                                        className={`block rounded-full border-2 transition-all duration-300 ${
                                            isActive
                                                ? "w-3 h-3 bg-terracotta-500 border-terracotta-500 scale-110"
                                                : "w-2.5 h-2.5 bg-cream-100 border-cream-400 group-hover:border-terracotta-400"
                                        }`}
                                    />
                                </span>
                                {/* Label */}
                                <span
                                    className={`text-base tracking-wide transition-all duration-300 ${
                                        isActive
                                            ? "text-ink font-semibold opacity-100 translate-x-0.5"
                                            : "text-ink-soft font-medium opacity-70 group-hover:opacity-100 group-hover:text-terracotta-600"
                                    }`}
                                >
                                    {s.label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
