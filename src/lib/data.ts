// src/lib/data.ts

export const personalInfo = {
    name: "Pavan Sai Chilukala",
    title: "Full Stack & Mobile Developer",
    email: "pavansai.ch@outlook.com",
    location: "Kansas City, Missouri",
    bio: "M.S. Computer Science candidate (GPA 3.8) with specialized experience in React, React Native, and Cloud Technologies. Passionate about building scalable applications and solving complex algorithmic problems.",
    links: {
        linkedin: "https://linkedin.com/in/pavanchilukala/",
        github: "https://github.com/pavan-sai-ch",
        resume: "/resume-pavan.pdf",
        calendly: "https://calendly.com/pavansai-ch/15min",
    },
};

export const skills = {
    languages: [
        "JavaScript / TypeScript",
        "Swift",
        "Python",
        "Java",
        "C++",
        "SQL",
    ],
    ai: [
        "OpenAI / Claude",
        "Agent Orchestration",
        "RAG",
        "Tool Calling / MCP",
        "LangGraph",
        "LLM Evaluation",
    ],
    frontend: [
        "React",
        "Next.js",
        "React Native",
        "SwiftUI",
        "Tailwind CSS",
        "Web Accessibility (a11y)",
    ],
    backend: [
        "Node.js",
        "Express",
        "GraphQL",
        "Microservices",
        "FastAPI",
        "Auth0 / Stripe / Plaid",
    ],
    databases: [
        "Supabase / PostgreSQL",
        "MongoDB",
        "Neo4j",
        "Firebase",
        "Redis",
        "MySQL",
    ],
    cloud: [
        "AWS",
        "GCP",
        "Serverless",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
    ],
};

export const experience = [
    {
        company: "Harmoney Financial Technologies",
        role: "Founding Software Engineer (Remote)",
        period: "May 2026 – Present",
        description: [
            "Building an Agentic Financial OS with a KYA (Know Your Agent) protocol — infrastructure enabling AI agents to initiate and settle payments between companies autonomously.",
            "Full-stack development in React and Node.js with a Supabase backend, Stripe and Plaid for payment processing and financial data aggregation, and Auth0 for multi-tenant agent identity management, deployed on Railway and Vercel.",
            "Designing agentic workflow orchestration for cross-company financial transactions at a fast-moving startup with full ownership and minimal direction.",
        ],
    },
    {
        company: "StreetCare",
        role: "iOS Developer Volunteer (Remote)",
        period: "Feb 2026 – June 2026",
        description: [
            "Built and shipped new features and resolved bugs in a production Swift and SwiftUI iOS application used by field workers supporting homeless communities across the US.",
            "Integrated Firestore for real-time cloud sync and CoreData for local persistence.",
            "Performed technical root cause analysis, peer code reviews, and release management via App Store Connect and TestFlight.",
        ],
    },
    {
        company: "Dhanush Healthcare Systems",
        role: "Software Engineer",
        period: "Sep 2022 - Nov 2023",
        description: [
            "Built React Native mobile apps serving 30M+ active users annually across telemedicine, learning, and booking platforms; published 16 production releases to App Store and Play Store.",
            "Shipped Personal Health ID: patients enter a single identifier and authorized doctors retrieve full patient history, powering 150K+ teleconsultations annually for rural and underserved communities.",
            "Built 60+ modular React/TypeScript components and integrated 150+ REST APIs; implemented 35+ Firebase deep-linked Redux navigation flows with GitHub Actions CI/CD.",
            "Achieved 80% faster TAT via memoization and 70% faster UI via lazy async loading; scaled SFU-based WebRTC video from 200 to 5,000+ concurrent users.",
        ],
    },
    {
        company: "University of Central Missouri",
        role: "Graduate Teaching Assistant – Algorithms & Data Structures",
        period: "Jan 2025 – Dec 2025",
        description: [
            "Evaluated 500+ assignments for logical correctness, time complexity (Big O), and algorithmic efficiency across 50+ undergraduate students; provided structured written feedback on pseudocode and implementation quality.",
            "Mentored students on optimal data structure selection and scalable system design; collaborated with faculty to develop course content.",
        ],
    },
];

export const projects = [
    {
        title: "volumeMixer",
        year: "2026",
        description:
            "A sophisticated macOS menu bar utility that grants independent volume control for individual applications. Leveraging low-level Core Audio Tap (CATap) APIs, it allows users to mix audio sources seamlessly without affecting system-wide levels.",
        tags: ["Swift", "SwiftUI", "Core Audio", "macOS", "CATap"],
        links: {
            // Add your deployed link here later if you release a dmg/app
            code: "https://github.com/pavan-sai-ch/volumeMixer",
        },
    },
    {
        title: "The Daily Wag",
        year: "2025",
        description:
            "A one stop high-end clinic to all your Pet Needs. Be it grooming, doctor appointments, pet accessories or adoption. We got you and your pets covered.",
        tags: ["React", "PHP", "MySQL", "AWS S3", "Docker"],
        links: {
            // Add your deployed link here later
            code: "https://github.com/pavan-sai-ch/daily-wag-frontend",
        },
    },
    {
        title: "C3-Carpool Connect",
        year: "2024",
        description:
            "A ride-sharing platform connecting riders and passengers. Managed data with MongoDB Atlas and automated deployment pipelines via Vercel and Render.",
        tags: ["React", "Flask", "MongoDB", "Vercel", "Render"],
        links: {
            code: "https://github.com/pavan-sai-ch/carpool-frontend",
        },
    },
    {
        title: "Data Visualization Dashboards",
        year: "2024",
        description: "Trends analyzed and stories written with public sourced data across different websites and created with Tableau.",
        tags: ["Tableau", "Data Visualization", "Business Intelligence"],
        links: {
            code: "https://github.com/pavan-sai-ch/data-vis",
        },
    },
    {
        title: "Privacy Preservation of Biometrics",
        year: "2023",
        description:
            "Built a secure JSP application using encryption algorithms to protect sensitive biometric data stored in the cloud.",
        tags: ["Java", "JSP", "Security", "Encryption"],
        links: {
            code: "https://github.com/pavan-sai-ch",
        },
    },
    {
        title: "Black Friday Sales Prediction",
        year: "2022",
        description:
            "Developed a Python predictive model to analyze customer behavior and optimize holiday inventory stocking.",
        tags: ["Python", "Machine Learning", "Data Analysis"],
        links: {
            code: "https://github.com/pavan-sai-ch",
        },
    },

];

export const about = {
    heading: "More Than Just Code",
    paragraphs: [
        `I define myself as a <strong>product-minded engineer</strong>. While my core strength lies in full-stack development, I don't stop at the code.`,
        `My background in <strong>Data Analytics</strong> allows me to understand the <em>business impact</em> of what I build, while my experience in <strong>Mobile (React Native)</strong> ensures those solutions reach users anywhere. I thrive in environments where I can wear multiple hats and solve problems holistically. The vast skill set I bring is really something I am proud of... As one says, "I am a jack of all trades".`,
    ],
    highlights: [
        {
            icon: "Code2",
            color: "text-terracotta-500",
            borderHover: "hover:border-terracotta-300",
            title: "Engineering",
            description: "Scalable Web & Mobile Apps",
        },
        {
            icon: "BarChart3",
            color: "text-terracotta-500",
            borderHover: "hover:border-terracotta-300",
            title: "Analytics",
            description: "Tableau & Python Data Viz",
        },
    ],
    afkHeading: "When I'm AFK",
    hobbies: [
        {
            title: "Football/Soccer",
            description:
                "I love playing football with my friends. I love to dictate the play in general but am as versatile as a player can be with ability to play in any position.",
        },
        {
            title: "Gaming",
            description:
                "Big fan of strategy games. They keep my problem-solving skills sharp even when relaxing.",
        },
        {
            title: "Cooking",
            description:
                "I enjoy experimenting with new recipes, different cuisines and styles. It's the only time I don't strictly follow documentation and give it my own touch :)",
        },
    ],
};

// Terminal CLI Configuration
export const cliConfig = {
    welcomeMessage: "Welcome to my portfolio! Type 'help' and press enter to see available commands.",
    helpText: `
Available Commands:
  ls              - List available sections
  pwd             - Show current directory
  cat <file>      - Read file contents (about, resume, projects, skills)
  about           - Display my info
  contact         - Show contact information
  skills          - Show technical skills
  clear           - Clear terminal
  help            - Show this help message
`,
    files: {
        about: `Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}

${personalInfo.bio}`,
        resume: `View full resume at: ${personalInfo.links.resume}`,
        projects: `Total Projects: ${projects.length}
Run 'ls' to see all available sections`,
        skills: `Languages: ${skills.languages.join(", ")}
Frontend: ${skills.frontend.join(", ")}
Backend: ${skills.backend.join(", ")}
Databases: ${skills.databases.join(", ")}
AI: ${skills.ai.join(", ")}
Cloud: ${skills.cloud.join(", ")}`,
    },
    currentDir: "/portfolio",
    listings: ["about", "projects", "skills", "experience", "contact"],
};
