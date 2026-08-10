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

export const roleFit = {
    heading: "Where I fit",
    lead:
        "Andrew asked this directly, so here's the plain answer: I'm three hires that early teams usually make separately, and the overlap between them is the point — the agent, the data it acts on, and the product people see are the same system.",
    roles: [
        {
            title: "Full-stack engineer",
            body:
                "The product surface, end to end. Next.js App Router in production — the same stack app.runnsmart.com runs on — plus Node and Express APIs, Postgres schema and migrations, third-party auth and webhooks. I ship the front end and the service behind it, not one and then a handoff.",
        },
        {
            title: "AI / agent engineer",
            body:
                "The RunnBoost side. Agent orchestration, tool calling, retrieval, and evaluating whether the agent's decisions were actually good — plus the spend-control layer underneath that makes autonomy safe enough to leave running. This is what I do now, all day.",
        },
        {
            title: "Applied data",
            body:
                "Getting data in and making it mean something. Multi-source ingestion on different schedules, reconciling sources that disagree, deriving state you can defend, and the dashboards on top — I've done the BI and visualization side too, so I can build the charts as well as the pipeline feeding them.",
        },
        {
            title: "Cross-platform, across teams",
            body:
                "At Dhanush Healthcare I shipped React Native apps across three product lines — telemedicine, learning and booking — 16 releases to the App Store and Play Store, 60+ shared components and 150+ REST integrations, coordinating with backend, design and QA teams rather than working in a lane. I also ship native iOS in Swift and SwiftUI. If RunnSmart needs a mobile surface, that's not a new hire either.",
        },
    ],
};

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
        "Andrew asked what else there is to talk about. This is the part I'd actually want to talk about — what I think is hard about the product. Some of it I expect to be wrong, and being corrected on it is most of why I want the technical conversation.",
    caveat:
        "Andrew walked me through the product on our call, and the optimization line charts are genuinely good — that's the surface where all of this becomes legible to a customer, and it's already strong. The rest below is my own read of what sits behind it.",
    observations: [
        {
            title: "Your price card is gated on cadence, not features",
            body:
                "The tiers differ by how often the agent optimizes — every five days, every three days, then continuous. That tells me continuous operation is a cost and rate-limit problem, not a packaging choice. Whoever solves the API quota math doesn't ship a feature; they move the price card and the margin at the same time.",
        },
        {
            title: "Two networks live, two in flight — that's where the leverage is",
            body:
                "Google and Meta are running; TikTok and Microsoft are being built. Landing those is what makes the four-network story true everywhere, and each new network multiplies the freshness and quota problems below rather than just adding a logo. Integrating against APIs I don't own is the thing I've done most often and most recently — six payment and banking providers in production, each with its own auth model, webhook contract and rate limits.",
        },
        {
            title: "Freshness drift is the silent correctness bug",
            body:
                "Four ad networks report on four different clocks. An agent acting on the freshest slice of an otherwise stale picture makes confident, wrong moves — and they look like normal moves in the logs. Every multi-source optimizer has this. In payments the same class of bug is a double-spend, which is why I've built for it: derive state on read, stamp provenance, and never let one source's staleness silently win.",
        },
    ],
};

export const ninetyDays = {
    intro:
        "If I joined, this is where I'd want to start — offered as a proposal to be argued with, not a plan I think I'm entitled to.",
    phases: [
        {
            window: "Days 0–7",
            title: "Learn the engine. Learn ad tech.",
        },
        {
            window: "Days 7–30",
            title: "Help land TikTok and Microsoft.",
        },
        {
            window: "Days 30–90",
            title: "Safety rails, shadow mode, cheaper continuous optimization.",
        },
    ],
};

export const workingStyle = {
    heading: "How I work",
    body: [
        "My model for a team comes from football. I've played my whole life, and the side I take from is Barcelona at their best — total team football: everyone comfortable in more than one position, the shape held by coordination rather than instruction, and whoever is nearest the problem solving it. Nobody stands still waiting to be told where to stand.",
        "In engineering that translates to something concrete: I don't need managing. Give me the objective and the constraints and I'll come back with it built, having asked the questions that actually needed asking rather than the ones that fill a status update. That's been the job at Harmoney — no one to escalate to, so the judgement calls were mine.",
        "Which is why the thing Andrew said that stuck hardest was that RunnSmart runs on three team meetings a week and no micromanagement. That's the environment I do my best work in, and it's the one I'd want to protect as the team grows — coordination over supervision, for as long as you can hold it.",
    ],
};

export const leadership = {
    heading: "Where I'm heading",
    body: [
        "I want a Head of Engineering path, and I've been doing the parts of it that don't require the title yet. At Harmoney I scoped and directed the other engineer on the team — broke the work down, handed it off, reviewed every pull request, and caught the things that would otherwise have shipped: a missing agent-to-grant binding, a webhook signature computed over a stringified object, migrations that silently did nothing. Reviewing someone else's work against a spec is a different skill from writing it, and I've now done a lot of it.",
        "He's since moved on, and I've run a live payments platform alone since: migrations by hand, no CI safety net, full ownership with no one to escalate to. It taught me exactly which parts of that are unacceptable to leave in place for the next person. What I want next is to be the one who builds the team and the guardrails so nobody has to work that way.",
    ],
};

