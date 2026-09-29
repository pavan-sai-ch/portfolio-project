"use client";

import { useEffect, useRef } from "react";
import { startVitals } from "./vitals";

/**
 * Decorative ECG / breathing animation behind the landing headline.
 * The same <canvas> renders on server and client; motion preference is only
 * read inside the effect, so there is no hydration mismatch (see Reveal history).
 */
export default function VitalsCanvas({ className }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        return startVitals(ref.current, reduce);
    }, []);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
}
