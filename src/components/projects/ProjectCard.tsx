import React from 'react';
import {Project} from '@/types/project';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    className = ""
}) => {
    const {name, description, logos} = project;

    const handleClick = () => {
        window.location.href = `/projects/${project.id}`;
    };

    return (
        <div
            className={`max-w-3xl px-5 py-5 rounded-md border border-black dark:border-white ${className}`}
        >
            <div className="flex flex-col space-y-5 justify-center">
                <div
                    className="flex flex-col space-y-5 justify-center interactive-area group cursor-pointer"
                    onClick={handleClick}
                >
                    <h1 className="text-2xl font-bold group-hover:underline">
                        {name}
                    </h1>
                    <p>{description}</p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    {logos.map(({Logo, width = 30, height = 30}, index) => (
                        <Logo
                            key={index}
                            width={width}
                            height={height}
                            className=""
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;