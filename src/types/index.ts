export interface Project {
    title: string;
    year: string;
    description: string;
    tags: string[];
    links: {
        demo?: string;
        code: string;
    };
    image: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}