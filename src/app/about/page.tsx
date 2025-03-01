import {TopNavMenu} from "@/components/navbar/NavigationMenu";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function About() {
    return (
        <>
            <TopNavMenu/>
            <div className="flex flex-col items-center justify-center py-10 space-y-10 w-full px-5">
                <div
                    className="w-full max-w-3xl px-8 py-8 rounded-md border border-black dark:border-white items-baseline">
                    <div className="flex flex-col space-y-5 justify-center">
                        <h1 className="text-2xl font-bold">About me</h1>
                        <p>
                            Hi, I&apos;m Dries, a graduating Computer Science student with a particular interest in
                            programming languages, software design and cyber security.
                            I&apos;m looking for a full time job that challenges me technically and where I can let my
                            creativity flow.
                        </p>
                        <p>
                            I think one of my strengths is my{' '}
                            <span>
                                <HoverCard>
                                  <HoverCardTrigger
                                      className="font-bold underline cursor-pointer">eye for simplicity</HoverCardTrigger>
                                  <HoverCardContent className="w-full max-w-xl">
                                      <div className="flex flex-col justify-between space-y-2">
                                          <p className="text-sm">Simple can be harder than complex; you have to work hard to get your thinking
                                            clean to make it simple. But it&apos;s worth it in the end because once you get
                                            there, you can move mountains.</p>
                                          <p className="text-xs">Steve Jobs - interview, in Business Week 25 May 1998</p>
                                      </div>
                                  </HoverCardContent>
                                </HoverCard>
                            </span>.
                            My engineering background taught me how ubiquitous over-engineering is and I believe the
                            impact is often underestimated,
                            especially for long-term projects involving multiple people working on the same thing.
                        </p>
                        <p>
                            Besides spending a lot of time nerding out behind my PC, I regularly go to the gym,
                            and I love good food and a strong Belgian beer. I enjoy talking ideas over a coffee,
                            so if you ever want to chat about anything, feel free to{' '}
                            <span><a href="https://www.linkedin.com/in/driesvanspauwen"
                                     className="font-bold underline">reach out</a></span>! :)
                        </p>
                        <div className="flex flex-row items-center justify-center pt-5">
                            <Dialog>
                                <DialogTrigger>
                                    <Image className="cursor-pointer hover:opacity-80" width={400} height={200}
                                           src={"/dries.jpg"} alt={"Me"}></Image>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl w-full">
                                    <DialogHeader>
                                        <DialogTitle></DialogTitle>
                                        <DialogDescription>
                                            <div className="flex flex-col space-y-8 p-8">
                                                <Image width={1200} height={600} src={"/dries.jpg"} alt={"Me"}></Image>
                                                <p>This was in Krka, Croatia.</p>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}