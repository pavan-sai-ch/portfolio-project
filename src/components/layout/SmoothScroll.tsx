"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { scrollEngine } from "./scrollEngine";

/**
 * Apple-style continuous smooth scroll, powered by Lenis (~2kb).
 *
 * Why this works where naive approaches jittered: Lenis owns the wheel
 * (preventDefault) and drives window scroll itself from a single rAF loop —
 * native scroll and JS animation never fight. Every flick feeds an
 * exponential lerp toward the target, so input BLENDS into the glide
 * (buttery inertia, soft landing) instead of hard section jumps.
 *
 * - Keyboard / scrollbar scrolling stays native; Lenis resyncs from the
 *   native scroll event, so there is no double-scroll.
 * - Nested scrollables (the terminal log) do NOT trap the wheel — page
 *   navigation glides past them (allowNestedScroll stays off).
 * - Disabled entirely on touch + prefers-reduced-motion: native scroll there.
 * - Rail/anchor glides go through the same engine (scrollEngine handle) and
 *   use offsetTop-chain positions, which are immune to Framer's translateY
 *   (getBoundingClientRect would drift for not-yet-revealed sections).
 */
export default function SmoothScroll() {
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const coarse = window.matchMedia("(pointer: coarse)").matches;
        if (reduce || coarse) return;

        const NAV = 80; // fixed navbar height

        const lenis = new Lenis({
            autoRaf: true,       // Lenis runs its own single rAF loop
            lerp: 0.09,          // exponential smoothing — the Apple glide
            wheelMultiplier: 1,
            smoothWheel: true,
            syncTouch: false,    // touch stays fully native
            // Plain #hash links (navbar "home") glide too. No extra offset:
            // Lenis already honors the root's scroll-padding-top (5rem = NAV),
            // so adding one would double-subtract and land 80px short.
            anchors: true,
        });

        // Layout position via offsetParent chain — transform-immune.
        const absTop = (el: HTMLElement) => {
            let y = 0;
            let n: HTMLElement | null = el;
            while (n) {
                y += n.offsetTop;
                n = n.offsetParent as HTMLElement | null;
            }
            return y;
        };

        // easeOutExpo — same decaying-energy family as the wheel lerp, so
        // rail clicks feel like a long, weighted flick.
        const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

        scrollEngine.scrollToId = (id: string) => {
            const el = document.getElementById(id);
            if (!el) return false;
            lenis.scrollTo(Math.max(0, absTop(el) - NAV), {
                duration: 1.15,
                easing: easeOutExpo,
            });
            return true;
        };

        return () => {
            scrollEngine.scrollToId = null;
            lenis.destroy();
        };
    }, []);

    return null;
}
