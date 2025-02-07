import { Project } from '@/types/project'
import NextJsLogo from "@/components/ui/logos/NextJsLogo";
import PhpLogo from "@/components/ui/logos/PhpLogo";

export const projects: Project[] = [{
    id: 'burgieclan',
    name: 'Burgieclan',
    description: 'File and information sharing platform for students at the Faculty of Engineering Science, KU Leuven.',
    githubUrl: 'https://github.com/VTKLeuven/burgieclan/',
    logos: [
        { Logo: NextJsLogo, width: 30, height: 30 },
        { Logo: PhpLogo, width: 60, height: 30 }
    ],
    sections: [
        {
            title: 'About',
            items: [
                'Burgieclan is a platform for file and information sharing for KU Leuven Engineering Science Students.',
                'Each course page allows students to share study tips and upload materials like summaries and exam questions.',
                'Faculty students can access the platform using their student accounts to manage uploads and save favorites.',
                'The Vlaamse Technische Kring (official student organization) manages the admin side for content moderation and course management.'
            ]
        },
        {
            title: 'Technicalities',
            items: [
                'Built by a group of engineering students using NextJS (Typescript & Tailwind CSS) and Symfony (PHP).',
                'Self-hosted development and production environments with automated deployment via Github Actions.',
                'Custom OAuth 2.0 authorization flow using JWTs to link with existing student accounts.',
                'Currently a work in progress, with a planned release in the first half of 2025'
            ]
        }
    ],
    images: []
}]