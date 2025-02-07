import React from 'react';

const ProjectCard = ({
    projectName,
    projectDescription,
    logos = [],
    href,
    className = ""
}) => {
    const handleClick = (e) => {
        // Only navigate if clicking the interactive area
        if (e.target.closest('.interactive-area')) {
            window.location.href = href;
        }
    };

    return (
        <div
            className={`max-w-3xl px-5 py-5 rounded-md border border-black dark:border-white ${className}`}
            onClick={handleClick}
        >
            <div className="flex flex-col space-y-5 justify-center">
                <div className="flex flex-col space-y-5 justify-center interactive-area group cursor-pointer">
                    <h1 className="text-2xl font-bold group-hover:underline">
                        {projectName}
                    </h1>
                    <p>{projectDescription}</p>
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