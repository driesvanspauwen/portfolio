'use client'

import {TopNavMenu} from "@/components/navbar/NavigationMenu";
import Project from "@/components/projects/Project";
import PhpLogo from "@/components/ui/logos/PhpLogo";
import NextJsLogo from "@/components/ui/logos/NextJsLogo";
import ProjectCard from "@/components/projects/Project";

export default function Page() {
    return (
        <>
            <TopNavMenu />
            <div className="flex flex-col items-center justify-center py-20 space-y-20">
                <ProjectCard
                    projectName="Burgieclan"
                    projectDescription="File and information sharing platform for students at the Faculty of Engineering Science, KU Leuven."
                    logos={[
                        { Logo: NextJsLogo, width: 30, height: 30 },
                        { Logo: PhpLogo, width: 60, height: 30 }
                    ]}
                    href="/projects/burgieclan"
                />
            </div>
        </>
    )
}