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
    backend: ["Node.js", "Express", "Flask", "PostgreSQL", "MySQL", "MongoDB"],
    tools: [
        "Git",
        "GitHub",
        "AWS S3",
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