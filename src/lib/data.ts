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
        "Python",
        "Java",
        "C++",
        "PHP",
        "SQL",
    ],
    frontend: [
        "React",
        "React Native",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5/CSS3",
    ],
    backend: ["Node.js", "Express", "Flask", "PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Neo4j"],
    tools: [
        "Claude Code",
        "Git",
        "GitHub",
        "AWS S3",
        "Docker",
        "Kubernetes",
        "Firebase",
        "Vercel",
        "Render",
        "Postman",
        "Tableau",
    ],
};

export const experience = [
    {
        company: "University of Central Missouri",
        role: "Teaching Assistant - Algorithms",
        period: "Jan 2025 – Dec 2025",
        description:
            "Evaluated 500+ assignments involving pseudo-code and flowcharts. Assessed solutions for logical correctness and efficiency (Time Complexity/Big O) and provided feedback.",
    },
    {
        company: "Dhanush Infotech Pvt Ltd",
        role: "React Native Intern",
        period: "Sep 2022 – Dec 2022",
        description:
            "Built 50+ UI components for mobile apps and integrated 100+ APIs. Implemented deep linking with Redux and push notifications using Firebase. Optimized UI performance by integrating open-source packages.",
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
