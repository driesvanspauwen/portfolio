import {TopNavMenu} from "@/components/navbar/NavigationMenu";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext, CarouselNextChevron,
    CarouselPrevious, CarouselPreviousChevron,
} from "@/components/ui/carousel"
import Image from "next/image";
import {Github} from "lucide-react";
import React from "react";
import PhpLogo from "@/components/ui/logos/PhpLogo";
import NextJsLogo from "@/components/ui/logos/NextJsLogo";

export default function Burgieclan() {
    const logos = [
        { Logo: NextJsLogo, width: 30, height: 30 },
        { Logo: PhpLogo, width: 60, height: 30 }
    ];

    return (
        <>
            <TopNavMenu/>
            <div className="flex flex-col items-center justify-center py-20 space-y-20">
                <div
                    className="w-full max-w-3xl px-8 py-8 rounded-md border border-black dark:border-white items-baseline">
                    <div className="flex flex-col space-y-5 justify-center">
                        <div>
                            <div className="flex-row flex justify-between items-center">
                                <h1 className="text-2xl font-bold pb-1.5">Burgieclan</h1>
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
                            <a
                                href="https://github.com/VTKLeuven/burgieclan/"
                                className="text-sm"
                                target="_blank"
                            >
                                https://github.com/VTKLeuven/burgieclan/
                            </a>
                        </div>

                        <h1 className="text-xl font-bold pt-2">About</h1>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="pl-1">
                                Burgieclan is a platform for file and information sharing for KU Leuven Engineering
                                Science Students.
                            </li>
                            <li className="pl-1">
                                Each course page allows students to share study tips and upload materials like summaries
                                and exam questions.
                            </li>
                            <li className="pl-1">
                                Faculty students can access the platform using their student accounts to manage uploads
                                and save favorites.
                            </li>
                            <li className="pl-1">
                                The Vlaamse Technische Kring (official student organization) manages the admin side for
                                content moderation and course management.
                            </li>
                        </ul>

                        <h1 className="text-xl font-bold pt-2">Technicalities</h1>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="pl-1">
                                Built by a group of engineering students using NextJS (Typescript & Tailwind CSS)
                                and Symfony (PHP).
                            </li>
                            <li className="pl-1">
                                Self-hosted development and production environments with automated deployment via Github
                                Actions.
                            </li>
                            <li className="pl-1">
                                Custom OAuth 2.0 authorization flow using JWTs to link with existing student accounts.
                            </li>
                        </ul>

                        <h1 className="text-xl font-bold pt-2">Images</h1>
                        <div className="justify-center items-center flex pt-2">
                            <Carousel className="relative w-full max-w-[40rem]">
                                <CarouselContent>
                                    <CarouselItem>
                                        <Image width={700} height={350} src={"/screenshot.png"} alt={"some alt"}/>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Image width={700} height={350} src={"/screenshot.png"} alt={"some alt"}/>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Image width={700} height={350} src={"/screenshot.png"} alt={"some alt"}/>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPreviousChevron className=""/>
                                <CarouselNextChevron className=""/>
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}