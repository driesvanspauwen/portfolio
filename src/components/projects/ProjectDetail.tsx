import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';
import { TopNavMenu } from "@/components/navbar/NavigationMenu";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNextChevron,
    CarouselPreviousChevron,
} from "@/components/ui/carousel";

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
    const { name, githubUrl, logos, sections, images } = project;

    return (
        <>
            <div className="flex flex-col items-center justify-center py-5 md:py-20 space-y-5 md:space-y-20 mx-5">
                <div className="w-full max-w-3xl px-8 py-8 rounded-md border border-black dark:border-white items-baseline">
                    <div className="flex flex-col space-y-5 justify-center">
                        <div>
                            <div className="flex-row flex justify-between items-center pb-4 md:pb-1.5">
                                <h1 className="text-2xl font-bold">{name}</h1>
                                <div className="flex flex-row space-x-2 items-center justify-center">
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
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    className="text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {githubUrl}
                                </a>
                            )}
                        </div>

                        {sections.map((section, index) => (
                            <div key={index}>
                                <h1 className="text-xl font-bold pt-2">{section.title}</h1>
                                <ul className="list-disc pt-2 md:pt-1 text-sm md:text-base pl-5 space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="pl-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {images.length > 0 && (
                            <>
                                <h1 className="text-xl font-bold pt-2">Images</h1>
                                <div className="justify-center items-center flex pt-1">
                                    <Carousel className="relative w-full max-w-[40rem]">
                                        <CarouselContent>
                                            {images.map((image, index) => (
                                                <CarouselItem key={index}>
                                                    <Image
                                                        width={700}
                                                        height={350}
                                                        src={image.src}
                                                        alt={image.alt}
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPreviousChevron />
                                        <CarouselNextChevron />
                                    </Carousel>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;