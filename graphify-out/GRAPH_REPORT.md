# Graph Report - /Users/pavansai/Documents/coding/portfolio-project  (2026-05-06)

## Corpus Check
- Corpus is ~17,104 words - fits in a single context window. You may not need a graph.

## Summary
- 62 nodes · 72 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.92)
- Token cost: 9,800 input · 1,950 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Animation & Experience|Animation & Experience]]
- [[_COMMUNITY_Centralized Data Layer|Centralized Data Layer]]
- [[_COMMUNITY_UI Components & Icons|UI Components & Icons]]
- [[_COMMUNITY_File References & UI|File References & UI]]
- [[_COMMUNITY_Build & Style Config|Build & Style Config]]
- [[_COMMUNITY_Terminal CLI Interface|Terminal CLI Interface]]
- [[_COMMUNITY_ESLint Rules|ESLint Rules]]
- [[_COMMUNITY_CLI Command Type|CLI Command Type]]

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
- `Navbar` --references--> `personalInfo`  [EXTRACTED]
  src/components/layout/Navbar.tsx → src/lib/data.ts
- `Hero` --references--> `personalInfo`  [EXTRACTED]
  src/components/sections/Hero.tsx → src/lib/data.ts

## Hyperedges (group relationships)
- **Portfolio page sections rendered by Home** — page_home, navbar_navbar, hero_hero, terminal_terminal, projects_projects, skills_skills, experience_experience, about_about, footer_footer [EXTRACTED 1.00]
- **Components consuming centralised lib/data.ts** — data_personalinfo, data_skills, data_experience, data_projects, data_cliconfig, navbar_navbar, hero_hero, footer_footer, experience_experience, projects_projects, skills_skills, terminal_terminal [EXTRACTED 1.00]
- **Sections wrapped in FadeIn for scroll animation** — fadein_fadein, projects_projects, skills_skills, experience_experience, about_about [EXTRACTED 1.00]

## Communities (15 total, 4 thin omitted)

### Community 1 - "Animation & Experience"
Cohesion: 0.18
Nodes (11): About, experience, FadeIn scroll animation pattern, Experience section, FadeIn, Hero, Navbar, Home page (+3 more)

### Community 2 - "Centralized Data Layer"
Cohesion: 0.36
Nodes (8): cliConfig, personalInfo, projects, skills, Centralized data layer in lib/data.ts, Terminal CLI UI pattern, Terminal, TerminalLine interface

### Community 3 - "UI Components & Icons"
Cohesion: 0.33
Nodes (6): Footer, ProjectCard, Projects section, GithubIcon, LinkedinIcon, Project interface

### Community 5 - "Build & Style Config"
Cohesion: 0.4
Nodes (4): RootLayout, next.config, postcss.config, tailwind.config

## Knowledge Gaps
- **13 isolated node(s):** `postcss.config`, `eslint.config`, `next.config`, `Project interface`, `Experience interface` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home page` connect `Animation & Experience` to `Centralized Data Layer`, `UI Components & Icons`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Why does `Terminal` connect `Centralized Data Layer` to `Animation & Experience`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `Footer` connect `UI Components & Icons` to `Animation & Experience`, `Centralized Data Layer`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `postcss.config`, `eslint.config`, `next.config` to the rest of the system?**
  _13 weakly-connected nodes found - possible documentation gaps or missing edges._