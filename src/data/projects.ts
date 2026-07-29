import { Project } from '@/types/project'
import NextJsLogo from "@/components/ui/logos/NextJsLogo";
import PhpLogo from "@/components/ui/logos/PhpLogo";
import CSharpLogo from "@/components/ui/logos/CSharpLogo";
import PythonLogo from "@/components/ui/logos/PythonLogo";

export const projects: Project[] = [
    {
        id: 'wemu',
        name: 'WeMu',
        description: 'The first framework for analyzing Microarchitectural Weird Machines, a technique that conceals malware through CPU side effects. Awarded Best Paper at the Microarchitecture Security Conference (uASC 2026).',
        githubUrl: 'https://github.com/driesvanspauwen/wemu',
        pdfUrl: '/wemu/wemu.pdf',
        award: 'Best Paper Award',
        awardUrl: 'https://www.linkedin.com/posts/uasc26-microarchitecture-security-share-7424473198878109696-Q0Yb',
        logos: [
            { Logo: PythonLogo, width: 30, height: 30 },
        ],
        sections: [
            {
                title: 'About',
                items: [
                    'A research project extending my Master\'s thesis, with Lesly-Ann Daniel and Jo Van Bulck.',
                    'Microarchitectural Weird Machines are a new technique for hiding computation in CPU side effects, keeping malware invisible to conventional analysis tools.',
                    'WeMu is the first framework that turns the "black box" into a "clear box", making the hidden computations observable.',
                ]
            },
            {
                title: 'Technicalities',
                items: [
                    'Extended the Unicorn CPU emulator with abstractions of modern CPU microarchitecture, including caching, transient and out-of-order execution',
                    'Designed cache-aware transient scheduling: a novel algorithm that reproduces out-of-order execution by walking instructions sequentially, avoiding a full pipeline model.',
                    'Correctly emulates circuits up to 35,904 gates, including full AES and SHA-1 rounds.',
                ]
            }
        ],
        images: []
    },
    {
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
                    'Currently a work in progress being finished by active members of VTK.'
                ]
            }
        ],
        images: [
            {
                src: '/burgieclan/login.png',
                alt: 'Burgieclan login page'
            },

            {
                src: '/burgieclan/upload.png',
                alt: 'Burgieclan upload page'
            },
            {
                src: '/burgieclan/document.png',
                alt: 'Burgieclan document page'
            },
        ]
    },
    {
        id: 'jackpots',
        name: 'Jackpots',
        description: 'A promotional jackpot feature for online casinos, made during an internship at Green Island.',
        logos: [
            { Logo: CSharpLogo, width: 30, height: 30 },
            { Logo: PythonLogo, width: 30, height: 30 }
        ],
        sections: [
            {
                title: 'About',
                items: [
                    'These jackpots are operator jackpots, a specific type of jackpot that can be won by playing any game on the platform.',
                    'The operator can customize the jackpots heavily, including the mathematical model behind it, when they are active, at what amount they start, and more.',
                ]
            },
            {
                title: 'Technicalities',
                items: [
                    'Built the backend for the jackpot feature from scratch, including the mathematical model and API-endpoints.',
                    'Designed the mathematical model by conducting data analysis and reverse-engineering techniques on existing jackpots.',
                    'Built the backend in C# using the .NET Core framework.',
                    'Used high-performance features like batch processing, caching, event sourcing and message queues, to handle high loads of transactions.',
                    'Wrote extensive API endpoints using OpenAPI, Swagger and NHibernate ORM, to facilitate both the public page and the operator\'s admin panel.',
                    'Currently in production at multiple online casinos, e.g. Hotwin.'
                ]
            }
        ],
        images: [
            {
                src: '/green-island/jackpots.png',
                alt: 'Jackpots admin panel'
            },
        ]
    },
]