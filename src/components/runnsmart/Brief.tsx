import React from "react";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
    briefMeta,
    stats,
    roleFit,
    fitMap,
    controlLayer,
    outsideRead,
    ninetyDays,
    workingStyle,
    leadership,
    closing,
} from "@/lib/runnsmart";

/** Section shell — inherits the alternating cream banding used on the home page. */
function Band({
    id,
    labelledBy,
    tone = "base",
    children,
}: {
    id: string;
    labelledBy: string;
    tone?: "base" | "alt";
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            aria-labelledby={labelledBy}
            className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-300 ${
                tone === "alt" ? "bg-cream-200" : "bg-cream-100"
            }`}
        >
            <div className="max-w-3xl mx-auto">{children}</div>
        </section>
    );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm font-mono uppercase tracking-[0.2em] text-terracotta-700 mb-3">
            {children}
        </p>
    );
}

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2
            id={id}
            className="text-3xl md:text-4xl font-bold text-ink mb-6 tracking-tight"
        >
            {children}
        </h2>
    );
}

export default function Brief() {
    return (
        <>
            {/* ── Header ─────────────────────────────────────────────── */}
            <header className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-cream-100">
                <div className="max-w-3xl mx-auto">
                    <Eyebrow>{briefMeta.kicker}</Eyebrow>
                    <p className="text-ink-muted mb-8 text-sm">
                        Prepared for{" "}
                        <span className="font-semibold text-ink">
                            {briefMeta.preparedFor}
                        </span>
                        <span aria-hidden="true"> · </span>
                        {briefMeta.date}
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.15] mb-6">
                        {briefMeta.headline}
                    </h1>
                    <p className="text-lg text-ink-muted leading-relaxed mb-8">
                        {briefMeta.subhead}
                    </p>

                    <p className="text-sm text-ink-muted border-l-2 border-terracotta-300 pl-4 italic">
                        {briefMeta.note}
                    </p>
                </div>
            </header>

            {/* ── Numbers ────────────────────────────────────────────── */}
            <Band id="numbers" labelledBy="numbers-heading" tone="alt">
                <h2 id="numbers-heading" className="sr-only">
                    Track record in numbers
                </h2>
                <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {stats.map((stat) => (
                        <StaggerItem key={stat.label}>
                            <div className="h-full bg-cream-50 border border-cream-300 rounded-lg p-6">
                                <div className="text-3xl font-bold text-terracotta-600 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-base font-semibold text-ink mt-1">
                                    {stat.label}
                                </div>
                                <p className="text-sm text-ink-muted mt-2 leading-relaxed">
                                    {stat.detail}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Band>

            {/* ── Where I fit ────────────────────────────────────────── */}
            <Band id="role-fit" labelledBy="role-fit-heading">
                <Reveal>
                    <Eyebrow>The role</Eyebrow>
                    <Heading id="role-fit-heading">{roleFit.heading}</Heading>
                    <p className="text-ink-muted leading-relaxed">{roleFit.lead}</p>
                </Reveal>

                <Stagger className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {roleFit.roles.map((role) => (
                        <StaggerItem key={role.title}>
                            <div className="h-full bg-cream-50 border border-cream-300 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-ink mb-2">
                                    {role.title}
                                </h3>
                                <p className="text-ink-muted leading-relaxed">
                                    {role.body}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Band>

            {/* ── Fit map ────────────────────────────────────────────── */}
            <Band id="fit" labelledBy="fit-heading" tone="alt">
                <Reveal>
                    <Eyebrow>The short version</Eyebrow>
                    <Heading id="fit-heading">
                        What you need, and what I&apos;ve already shipped
                    </Heading>
                </Reveal>

                <Stagger className="mt-10 space-y-8">
                    {fitMap.map((row) => (
                        <StaggerItem key={row.need}>
                            <div className="border-l-2 border-terracotta-300 pl-5">
                                <h3 className="text-lg font-bold text-ink mb-2">
                                    {row.need}
                                </h3>
                                <p className="text-ink-muted leading-relaxed">
                                    {row.receipt}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Band>

            {/* ── Divider into the technical half ────────────────────── */}
            <div className="bg-ink py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm font-mono uppercase tracking-[0.2em] text-terracotta-200 mb-3">
                        Below the line
                    </p>
                    <p className="text-cream-100 text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
                        The engineering half — how the spend-control layer works, what
                        I think is hard about RunnSmart, and where I&apos;d start.
                    </p>
                </div>
            </div>

            {/* ── Control layer ──────────────────────────────────────── */}
            <Band id="control-layer" labelledBy="control-heading" tone="alt">
                <Reveal>
                    <Eyebrow>The transferable part</Eyebrow>
                    <Heading id="control-heading">
                        Five primitives for letting an agent spend money
                    </Heading>
                    <p className="text-ink-muted leading-relaxed">
                        {controlLayer.intro}
                    </p>
                </Reveal>

                <Stagger className="mt-10 space-y-6">
                    {controlLayer.primitives.map((p, i) => (
                        <StaggerItem key={p.name}>
                            <div className="bg-cream-50 border border-cream-300 rounded-lg p-6">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span
                                        className="text-xs font-mono text-terracotta-600 tabular-nums"
                                        aria-hidden="true"
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                                </div>
                                <p className="text-ink font-medium mb-2">{p.what}</p>
                                <p className="text-ink-muted leading-relaxed">{p.why}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>

                <Reveal>
                    <p className="mt-10 text-ink leading-relaxed bg-terracotta-50 border border-terracotta-200 rounded-lg p-6">
                        {controlLayer.translation}
                    </p>
                </Reveal>
            </Band>

            {/* ── Outside read ───────────────────────────────────────── */}
            <Band id="outside-read" labelledBy="read-heading">
                <Reveal>
                    <Eyebrow>What I think is hard</Eyebrow>
                    <Heading id="read-heading">Reading RunnSmart from the outside</Heading>
                    <p className="text-ink-muted leading-relaxed mb-4">
                        {outsideRead.intro}
                    </p>
                    <p className="text-sm text-ink-muted italic mb-2">
                        {outsideRead.caveat}
                    </p>
                </Reveal>

                <Stagger className="mt-10 space-y-8">
                    {outsideRead.observations.map((o) => (
                        <StaggerItem key={o.title}>
                            <div>
                                <h3 className="text-lg font-bold text-ink mb-2">
                                    {o.title}
                                </h3>
                                <p className="text-ink-muted leading-relaxed">{o.body}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Band>

            {/* ── First 90 days ──────────────────────────────────────── */}
            <Band id="ninety-days" labelledBy="ninety-heading" tone="alt">
                <Reveal>
                    <Eyebrow>Where I&apos;d start</Eyebrow>
                    <Heading id="ninety-heading">The first 90 days</Heading>
                    <p className="text-ink-muted leading-relaxed">{ninetyDays.intro}</p>
                </Reveal>

                <Stagger className="mt-10 space-y-10">
                    {ninetyDays.phases.map((phase) => (
                        <StaggerItem key={phase.window}>
                            <div className="relative pl-6 border-l-2 border-terracotta-400">
                                <span className="text-xs font-semibold text-terracotta-700 uppercase tracking-wider bg-terracotta-50 px-2.5 py-1 rounded-full">
                                    {phase.window}
                                </span>
                                <h3 className="text-lg font-bold text-ink mt-3 mb-2">
                                    {phase.title}
                                </h3>
                                <p className="text-ink-muted leading-relaxed">
                                    {phase.body}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Band>

            {/* ── Working style ──────────────────────────────────────── */}
            <Band id="working-style" labelledBy="working-style-heading">
                <Reveal>
                    <Eyebrow>Fit</Eyebrow>
                    <Heading id="working-style-heading">{workingStyle.heading}</Heading>
                    <div className="space-y-5">
                        {workingStyle.body.map((para, i) => (
                            <p key={i} className="text-ink-muted leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                </Reveal>
            </Band>

            {/* ── Leadership ─────────────────────────────────────────── */}
            <Band id="leadership" labelledBy="leadership-heading" tone="alt">
                <Reveal>
                    <Eyebrow>Trajectory</Eyebrow>
                    <Heading id="leadership-heading">{leadership.heading}</Heading>
                    <div className="space-y-5">
                        {leadership.body.map((para, i) => (
                            <p key={i} className="text-ink-muted leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                </Reveal>
            </Band>

            {/* ── Closing ────────────────────────────────────────────── */}
            <Band id="closing" labelledBy="closing-heading">
                <Reveal>
                    <Eyebrow>The honest version</Eyebrow>
                    <Heading id="closing-heading">{closing.heading}</Heading>
                    <div className="space-y-5">
                        {closing.body.map((para, i) => (
                            <p key={i} className="text-ink-muted leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                    <p className="mt-8 font-semibold text-ink">{closing.signoff}</p>
                </Reveal>
            </Band>
        </>
    );
}
