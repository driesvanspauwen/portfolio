type ProjectSection = {
    title: string;
    items: string[];
}

type ProjectLogo = {
    Logo: React.ComponentType<any>;
    width?: number;
    height?: number;
}

export type Project = {
    id: string;
    name: string;
    description: string;
    githubUrl?: string;
    pdfUrl?: string;
    award?: string;
    awardUrl?: string;
    logos: ProjectLogo[];
    sections: ProjectSection[];
    images: {
        src: string;
        alt: string;
    }[];
}