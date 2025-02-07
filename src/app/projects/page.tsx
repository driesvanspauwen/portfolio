'use client'

import { TopNavMenu } from "@/components/navbar/NavigationMenu";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <>
            <TopNavMenu />
            <div className="flex flex-col items-center justify-center py-10 space-y-10 w-full px-10">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </>
    );
}