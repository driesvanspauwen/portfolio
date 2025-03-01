import {HomeNavMenu, ThemeTogglerNavMenu} from "@/components/navbar/NavigationMenu";

export default function Home() {
    return (
        <main>
            <div className="h-screen">
                <ThemeTogglerNavMenu/>

                <div className="h-[calc(100vh-4rem)] flex flex-col space-y-8 md:space-y-16 items-center justify-center text-center">
                    <div className="flex-none">
                        <h1 className="text-6xl font-bold">DRIES VANSPAUWEN</h1>
                    </div>
                    <p className="max-w-6xl p-10">I am a graduating Computer Science student with a particular interest in programming languages, software design and cyber security. I&aposm looking for a full-time position that challenges me from a technical perspective and where I can let my creativity flow!</p>
                    <div className="w-full p-10 md:w-auto md:p-0">
                        <HomeNavMenu/>
                    </div>
                </div>
            </div>
        </main>
    );
}
