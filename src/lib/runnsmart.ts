// src/lib/runnsmart.ts
//
// Copy for the /runnsmart brief — a tailored, noindexed extension of the
// portfolio prepared for Andrew Song and his co-founder. Kept as data so the
// page component stays presentational, same convention as data.ts.

export const briefMeta = {
    preparedFor: "Andrew Song & the RunnSmart team",
    date: "August 2026",
    kicker: "Extended brief",
    headline:
        "I build the control layer that lets autonomous agents spend money without blowing up.",
    subhead:
        "RunnBoost spends other people's ad budgets across four networks you don't control. I've spent the last year solving that exact problem in payments — spend caps, human approval on the risky calls, idempotent writes against rate-limited third parties, and reconciling state when one source goes stale and the others don't. Different domain. Identical hard parts.",
    note: "This page is the part that isn't on my portfolio. Top half is the short version. Below the line is the engineering.",
};

export const stats = [
    {
        value: "30M+",
        label: "annual users reached",
        detail: "Telemedicine, learning and booking apps I shipped at Dhanush Healthcare",
    },
    {
        value: "150K+",
        label: "teleconsults a year",
        detail: "Running through the Personal Health ID flow I built and released",
    },
    {
        value: "200 → 5,000",
        label: "concurrent video users",
        detail: "Same SFU-based WebRTC stack, scaled and tuned under real load",
    },
    {
        value: "6",
        label: "money rails in production",
        detail: "Stripe, Plaid, Square, Coinbase, Bridge, Clover — OAuth, webhooks, idempotency",
    },
];

export const fitMap = [
    {
        need: "An agent that spends money without blowing up",
        receipt:
            "This is my day job. I built the Know Your Agent control layer at Harmoney: every agent draws against a named grant, under per-transaction and lifetime caps, through one policy gate that decides allow / deny / escalate — and stamps every decision with an audit trail. Including the bug classes you only find by building it: an agent acting against a grant that was never bound to it, and one tenant's agent credential resolving into another tenant's scope.",
    },
    {
        need: "Human in the loop for the risky actions",
        receipt:
            "Deny is rarely the right answer — parking the action is. I built the full approvals surface: a web console plus a native mobile inbox with slide-to-confirm and in-app step-up auth on the approval itself, so the person approving a spend is provably the person you think it is.",
    },
    {
        need: "Many third-party integrations, none of them yours",
        receipt:
            "Six payment and banking providers in production. OAuth flows, webhook HMAC verification, idempotency keys, and catalog sync with provenance stamping so you can always tell whose data won a conflict.",
    },
    {
        need: "Correctness under partial failure and drift",
        receipt:
            "Append-only event ledger, status derived on read, past events never mutated. That discipline is what let me catch a webhook signature being computed over a stringified object, and a class of migrations that silently no-op'd instead of failing loudly.",
    },
    {
        need: "Multi-tenant isolation as customers land",
        receipt:
            "I led an end-to-end authorization consolidation: two competing auth systems merged into one, every controller moved to org-scoped identity resolved from the caller's own session, a privilege escalation on self-signup closed, and the legacy system decommissioned. 845 tests green at the end of it.",
    },
    {
        need: "Next.js App Router product velocity",
        receipt:
            "app.runnsmart.com is App Router — so is what I ship. Next.js 14 in production with accessibility-gated CI, Playwright and Vitest suites, static rendering and metadata work. This page is that stack.",
    },
    {
        need: "Small team, high ownership, no hand-holding",
        receipt:
            "Founding engineer. I scoped and directed the other engineer on the team, reviewed every pull request, and have run the platform solo since he moved on.",
    },
];

export const controlLayer = {
    intro:
        "When an agent spends money on someone's behalf, five things have to be true. Miss one and you don't get a bug report — you get someone else's budget gone, with no way to explain it.",
    primitives: [
        {
            name: "Grant",
            what: "A budget with an owner and a named holder.",
            why: "The binding is the whole point: the grant says which agent may draw on it, and that check runs on every draw — not once at issue time. Skip it and any agent can spend any budget. That is a real bug I found and closed.",
        },
        {
            name: "Caps",
            what: "Per-action, daily and lifetime ceilings.",
            why: "Evaluated before the spend, not reconciled after. Reconciliation tells you how much you lost; a cap is what stops you losing it.",
        },
        {
            name: "Gate",
            what: "One policy decision point every money action passes through.",
            why: "Returns allow, deny or escalate — and records the decision with the inputs that justified it. One gate, not a policy check scattered across forty call sites, is the difference between an auditable system and a hopeful one.",
        },
        {
            name: "Escalation",
            what: "Above a threshold, the action parks and a human approves it.",
            why: "Autonomy people trust is autonomy with a brake pedal. The approval carries step-up auth, so the audit trail names a verified human, not a session someone left open.",
        },
        {
            name: "Audit",
            what: "Append-only event log. Status derived on read.",
            why: "Nothing is overwritten, so a month later you can still answer 'why did the agent do that' — with the state and the policy as they were at the time. This is what you show a customer, or a regulator.",
        },
    ],
    translation:
        "Point this at advertising and nothing structural changes. The grant is a campaign budget. The caps are daily spend ceilings. The gate is 'may RunnBoost move this budget line, right now, given what it knows.' Escalation is 'this is a 40% jump on one account — get a human.' The audit log is how you tell a customer why their spend moved last Tuesday. I would not be learning this problem at RunnSmart. I would be porting it.",
};

export const outsideRead = {
    intro:
        "Andrew asked what else there is to talk about. This is the part I'd actually want to talk about — what I think is hard about your product, read from the outside. I expect some of it to be wrong. Being corrected on it is most of why I want the technical conversation.",
    caveat:
        "Read entirely from your public surfaces — the marketing site, the app shell, the pricing page and the lead form. No inside knowledge.",
    observations: [
        {
            title: "Your price card is gated on cadence, not features",
            body:
                "The tiers differ by how often the agent optimizes — every five days, every three days, then continuous. That tells me continuous operation is a cost and rate-limit problem, not a packaging choice. Whoever solves the API quota math doesn't ship a feature; they move the price card and the margin at the same time.",
        },
        {
            title: "The integration surface looks like the real constraint",
            body:
                "The homepage tells a four-network story while TikTok and Microsoft read as 'soon' on the lead form. That gap is the gap between what the top tier sells and what it delivers. Integrations against APIs I don't control are the thing I've done most often and most recently.",
        },
        {
            title: "Freshness drift is the silent correctness bug",
            body:
                "Four ad networks report on four different clocks. An agent acting on the freshest slice of an otherwise stale picture makes confident, wrong moves — and they look like normal moves in the logs. Every multi-source optimizer has this. In payments the same class of bug is a double-spend, which is why I've built for it: derive state on read, stamp provenance, and never let one source's staleness silently win.",
        },
        {
            title: "The six-day assessment is a person",
            body:
                "A free PPC assessment that takes six business days is human keyword and competitor research. That's your entire top of funnel, gated on someone's calendar — which is also the difference between self-serve growth and sales-gated growth.",
        },
    ],
};

export const ninetyDays = {
    intro:
        "If I joined, this is where I'd want to start — offered as a proposal to be argued with, not a plan I think I'm entitled to.",
    phases: [
        {
            window: "Days 0–30",
            title: "Close the integration gap",
            body:
                "Take TikTok and Microsoft to parity with Google and Meta. It makes the four-network story true everywhere, it's what the top tier is actually selling, and it's the fastest way for a new engineer to be net-positive instead of net-onboarding.",
        },
        {
            window: "Days 30–60",
            title: "A safety and simulation rail for RunnBoost",
            body:
                "Per-account hard spend ceilings, a velocity circuit breaker on day-over-day jumps, human approval required above a threshold, and a full action log recording every budget move with the inputs that justified it. Then shadow mode: run the agent's decisions without applying them and score them against what actually happened. Your site already promises simulating a move before it's applied — I'd turn that surface into the harness you regression-test the agent against. Every model change after that is a measured change instead of a hopeful one.",
        },
        {
            window: "Days 60–90",
            title: "Automate the assessment",
            body:
                "Six business days to minutes. It's the top of the funnel, it's mechanical, and shipping it converts a sales bottleneck into a growth loop.",
        },
    ],
};

export const leadership = {
    heading: "Where I'm heading",
    body: [
        "I want a Head of Engineering path, and I've been doing the parts of it that don't require the title yet. At Harmoney I scoped and directed the other engineer on the team — broke the work down, handed it off, reviewed every pull request, and caught the things that would otherwise have shipped: a missing agent-to-grant binding, a webhook signature computed over a stringified object, migrations that silently did nothing. Reviewing someone else's work against a spec is a different skill from writing it, and I've now done a lot of it.",
        "He's since moved on, and I've run a live payments platform alone since: migrations by hand, no CI safety net, full ownership with no one to escalate to. It taught me exactly which parts of that are unacceptable to leave in place for the next person. What I want next is to be the one who builds the team and the guardrails so nobody has to work that way.",
    ],
};

export const closing = {
    heading: "Why RunnSmart, honestly",
    body: [
        "The engineering I was hired to build at Harmoney is built. What's left is go-to-market and a multi-year wait on banking partners — good work, but not mine, and not at the speed I want to move. I'd rather be building.",
        "RunnSmart is an agent that autonomously spends other people's money, at a company that just closed a Series A and is at the point where someone needs to own that engine end to end. That's the problem I already know, arriving at the moment it starts to matter. Congratulations on the round, by the way — the timing is a large part of why I reached out.",
    ],
    signoff: "— Pavan Sai Chilukala",
};
