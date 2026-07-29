import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, FileText, Github, Star } from 'lucide-react';
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

const pillBase = "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium";
const pillLink = "group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm";
const pillNeutral = "border-black/50 dark:border-white/50 bg-black/5 dark:bg-white/5 hover:border-black dark:hover:border-white hover:bg-black/10 dark:hover:bg-white/10";
const pillAward = "border-yellow-400/50 bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/20";

const PillArrow = () => (
    <ArrowUpRight
        size={14}
        className="opacity-50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
    />
);

const githubLabel = (url: string) => {
    const path = url
        .replace(/^https?:\/\/(www\.)?github\.com\//, '')
        .replace(/\/+$/, '');
    return path.split('/').slice(0, 2).join('/') || url;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
    const { name, description, githubUrl, pdfUrl, award, awardUrl, logos, sections, images } = project;

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
                            {(award || githubUrl || pdfUrl) && (
                                <div className="flex flex-row flex-wrap items-center gap-2 pt-4 md:pt-3">
                                    {githubUrl && (
                                        <a
                                            href={githubUrl}
                                            className={`${pillBase} ${pillLink} ${pillNeutral}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={16} />
                                            {githubLabel(githubUrl)}
                                            <PillArrow />
                                        </a>
                                    )}
                                    {pdfUrl && (
                                        <a
                                            href={pdfUrl}
                                            className={`${pillBase} ${pillLink} ${pillNeutral}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FileText size={16} className="" />
                                            Paper
                                            <PillArrow />
                                        </a>
                                    )}
                                    {award && (
                                        awardUrl ? (
                                            <a
                                                href={awardUrl}
                                                className={`${pillBase} ${pillLink} ${pillAward}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                                {award}
                                                <PillArrow />
                                            </a>
                                        ) : (
                                            <div className={`${pillBase} ${pillAward}`}>
                                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                                {award}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        <p className="text-sm md:text-base">{description}</p>

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
                                <h1 className="text-xl font-bold pt-2 hidden md:block">Images</h1>
                                <div className="justify-center items-center pt-1 hidden md:flex">
                                    <Carousel className="relative w-full max-w-[40rem] hidden md:block">
                                        <CarouselContent>
                                            {images.map((image, index) => (
                                                <CarouselItem key={index}>
                                                    <Image
                                                        width={700}
                                                        height={350}
                                                        src={image.src}
                                                        alt={image.alt}
                                                        className="rounded-md"
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