'use client'

import { projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find(p => p.id === params.id);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}