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
    },
};

export const skills = {
    languages: [
        "JavaScript",
        "TypeScript",
        "Swift",
        "Python","PHP","R",
        "Java",
        "C++",
        "SQL",
    ],
    frontend: [
        "React",
        "React Native",
        "SwiftUI",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5/CSS3",
    ],
    backend: ["Node.js", "Express", "FastAPI", "Flask", "PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Neo4j"],
    tools: [
        "Claude Code", "Codex", "Gemini",
        "Git/GitHub",
        "AWS EC2,S3",
        "Docker",
        "Kubernetes",
        "Firebase",
        "Vercel",
        "Render",
        "Tableau",
    ],
};

export const experience = [
    {
        company: "Harmoney Financial Technologies",
        role: "Software Engineer (Remote)",
        period: "May 2026 – Present",
        description:
            "Building an Agentic Financial OS with a KYA (Know Your Agent) protocol — infrastructure enabling AI agents to initiate and settle payments between companies autonomously. Full-stack development in React and Node.js with a Supabase backend, Stripe and Plaid for payment processing and financial data aggregation, and Auth0 for multi-tenant agent identity management, deployed on Railway and Vercel. Designing agentic workflow orchestration for cross-company financial transactions at a fast-moving startup with full ownership and minimal direction.",
    },
    {
        company: "StreetCare",
        role: "iOS Developer Volunteer (Remote)",
        period: "Feb 2026 – June 2026",
        description:
            "Contributing as volunteer iOS developer for a non-profit helping homeless communities. Adding new features and resolving bugs in production Swift and SwiftUI applications. Integrating Firestore as real-time cloud database backend, managing data synchronization between iOS app and backend services. Performing technical root cause analysis, peer code reviews, and participating in full SDLC: design, development, testing, and release.",
    },
    {
        company: "Dhanush Healthcare Systems",
        role: "Software Engineer",
        period: "Sep 2022 - Nov 2023",
        description:
            "Built 60+ modular UI components to enhance frontend scalability, applied memoization and open-source libraries across 30+ existing components achieving 80% faster TAT. Integrated 150+ RESTful APIs for real-time mobile/backend synchronization with complex state management, used lazy async dynamic loading to achieve 70% faster UI responsiveness. Published 16 application updates to App Store and Play Store, integrated Google OAuth and leveraged Firebase to create 35+ dynamic deep-linked (Redux) navigation flows. Managed version control and complex merge conflicts in a strict Git-flow environment, designed and implemented CI/CD workflows via GitHub Actions for stable production releases.",
    },
    {
        company: "University of Central Missouri",
        role: "Graduate Teaching Assistant – Algorithms & Data Structures",
        period: "Jan 2025 – Dec 2025",
        description:
            "Supported Design and Analysis of Algorithms course for 50+ undergraduate students, evaluating 500+ assignments for logical correctness, time complexity (Big O), and algorithmic efficiency. Provided structured written feedback on pseudocode, flowcharts, and implementation quality, mentoring students on optimal data structure selection and scalable system design. Collaborated with faculty to resolve curriculum conflicts, develop course content, and deliver improvements with high ownership and minimal oversight.",
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
        image: "/images/projects/volume-mixer.png",
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
        image: "/images/projects/vet-clinic.png",
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
        image: "/images/projects/carpool.png",
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
        image: "/images/projects/biometrics.png",
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
            color: "text-green-400",
            borderHover: "hover:border-green-500",
            title: "Engineering",
            description: "Scalable Web & Mobile Apps",
        },
        {
            icon: "BarChart3",
            color: "text-blue-400",
            borderHover: "hover:border-blue-400",
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
Tools: ${skills.tools.join(", ")}`,
    },
    currentDir: "/portfolio",
    listings: ["about", "projects", "skills", "experience", "contact"],
};
