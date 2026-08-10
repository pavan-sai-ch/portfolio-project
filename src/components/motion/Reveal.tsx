"use client";

import { motion, type Variants } from 'framer-motion';
import React from "react";

// Reduced motion is handled in CSS (globals.css), not by branching on
// useReducedMotion() here. The hook is false during SSR, so the server emitted
// a motion.div with inline opacity:0 while the client rendered a plain div with
// no style — hydration never cleared the inline style and every revealed
// section stayed invisible for reduced-motion users. Keeping one element shape
// and letting `[data-reveal]` be overridden by an !important rule removes the
// divergence entirely, and still works if JS never loads.

type Direction = "up" | "down" | "left" | "right" | "none";

// Keep travel modest so entrances read as a drift, not a jump — cohesive
// with the continuous lerp scroll (SmoothScroll.tsx).
const offset: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 22 },
    down: { y: -22 },
    left: { x: 22 },
    right: { x: -22 },
    none: {},
};

// easeOutQuint-family curve — same decaying-energy feel as the scroll lerp.
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered reveal — fade + slide, fires once when in view.
 * Harmony-style entrance motion. Honors prefers-reduced-motion.
 */
export default function Reveal({
    children,
    delay = 0,
    direction = "up",
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    direction?: Direction;
    className?: string;
}) {
    return (
        <motion.div
            data-reveal
            className={className}
            initial={{ opacity: 0, ...offset[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
}

/**
 * Stagger container — cascades child <StaggerItem> reveals.
 */
export function Stagger({
    children,
    className,
    stagger = 0.08,
}: {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
}) {
    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
    };

    return (
        <motion.div
            data-reveal
            className={className}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
        >
            {children}
        </motion.div>
    );
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function StaggerItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div data-reveal className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}
