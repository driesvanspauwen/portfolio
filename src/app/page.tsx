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
                    <p className="max-w-6xl p-10">
                        Product-minded software engineer with a particular interest in system design, cyber security and genetics. Currently building the next generation of genome interpretation software at Codon One.
                    </p>
                    <div className="w-full p-10 md:w-auto md:p-0">
                        <HomeNavMenu/>
                    </div>
                </div>
            </div>
        </main>
    );
}
