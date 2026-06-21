# Graph Report - portfolio-project  (2026-06-21)

## Corpus Check
- 23 files · ~10,679 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 73 nodes · 85 edges · 19 communities (14 shown, 5 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aa5b26f8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Animation & Experience|Animation & Experience]]
- [[_COMMUNITY_Centralized Data Layer|Centralized Data Layer]]
- [[_COMMUNITY_UI Components & Icons|UI Components & Icons]]
- [[_COMMUNITY_File References & UI|File References & UI]]
- [[_COMMUNITY_Build & Style Config|Build & Style Config]]
- [[_COMMUNITY_Terminal CLI Interface|Terminal CLI Interface]]
- [[_COMMUNITY_Root App Layout|Root App Layout]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Next.js Type Defs|Next.js Type Defs]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `Home page` - 10 edges
2. `Terminal` - 8 edges
3. `personalInfo` - 6 edges
4. `cliConfig` - 4 edges
5. `Footer` - 4 edges
6. `GithubIcon()` - 3 edges
7. `skills` - 3 edges
8. `projects` - 3 edges
9. `Experience section` - 3 edges
10. `Projects section` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Portfolio README` --references--> `Home page`  [INFERRED]
  README.md → src/app/page.tsx
- `postcss.config` --references--> `tailwind.config`  [INFERRED]
  postcss.config.mjs → tailwind.config.ts
- `next.config` --references--> `RootLayout`  [INFERRED]
  next.config.ts → src/app/layout.tsx
- `Terminal` --references--> `experience`  [EXTRACTED]
  src/components/sections/Terminal.tsx → src/lib/data.ts
- `Home page` --calls--> `Navbar`  [EXTRACTED]
  src/app/page.tsx → src/components/layout/Navbar.tsx

## Hyperedges (group relationships)
- **Portfolio page sections rendered by Home** — page_home, navbar_navbar, hero_hero, terminal_terminal, projects_projects, skills_skills, experience_experience, about_about, footer_footer [EXTRACTED 1.00]
- **Components consuming centralised lib/data.ts** — data_personalinfo, data_skills, data_experience, data_projects, data_cliconfig, navbar_navbar, hero_hero, footer_footer, experience_experience, projects_projects, skills_skills, terminal_terminal [EXTRACTED 1.00]
- **Sections wrapped in FadeIn for scroll animation** — fadein_fadein, projects_projects, skills_skills, experience_experience, about_about [EXTRACTED 1.00]

## Communities (19 total, 5 thin omitted)

### Community 2 - "Centralized Data Layer"
Cohesion: 0.38
Nodes (7): cliConfig, projects, skills, Terminal CLI UI pattern, Skills section, Terminal, TerminalLine interface

### Community 3 - "UI Components & Icons"
Cohesion: 0.33
Nodes (6): Footer, ProjectCard, Projects section, GithubIcon, LinkedinIcon, Project interface

### Community 4 - "File References & UI"
Cohesion: 0.4
Nodes (4): code:bash (npm run dev), Deploy on Vercel, Getting Started, Learn More

### Community 5 - "Build & Style Config"
Cohesion: 0.4
Nodes (4): RootLayout, next.config, postcss.config, tailwind.config

### Community 6 - "Terminal CLI Interface"
Cohesion: 0.4
Nodes (5): About, FadeIn scroll animation pattern, FadeIn, Home page, Portfolio README

### Community 8 - "PostCSS Config"
Cohesion: 0.5
Nodes (4): personalInfo, Centralized data layer in lib/data.ts, Hero, Navbar

### Community 9 - "Next.js Type Defs"
Cohesion: 0.67
Nodes (3): experience, Experience section, Experience interface

## Knowledge Gaps
- **17 isolated node(s):** `code:bash (npm run dev)`, `Learn More`, `Deploy on Vercel`, `graphify`, `postcss.config` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home page` connect `Terminal CLI Interface` to `PostCSS Config`, `Next.js Type Defs`, `Centralized Data Layer`, `UI Components & Icons`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `Terminal` connect `Centralized Data Layer` to `PostCSS Config`, `Next.js Type Defs`, `Terminal CLI Interface`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `Footer` connect `UI Components & Icons` to `PostCSS Config`, `Terminal CLI Interface`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `code:bash (npm run dev)`, `Learn More`, `Deploy on Vercel` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._