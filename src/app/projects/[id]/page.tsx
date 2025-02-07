'use client'

import { projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { notFound } from "next/navigation";
import {TopNavMenu} from "@/components/navbar/NavigationMenu";
import React from "react";

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find(p => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <>
            <TopNavMenu backLink="/projects" />
            <ProjectDetail project={project} />
        </>
    );
}