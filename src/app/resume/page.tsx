import {TopNavMenu} from "@/components/navbar/NavigationMenu";

export default function Resume() {

    return (
        <>
            <TopNavMenu/>
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-10">
                <p className="max-w-2xl">I&apos;m currently not looking for a new position, so my resume is kept private.</p>
            </div>
        </>
    )
}
