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
                            Hi, I&apos;m Dries, a software engineer at Codon One, where I help build the next generation of genome interpretation software. In an age where AI is taking over coding, 
                            I have the most fun with the parts it can't handle on its own yet: building maintainable systems that scale, designing interfaces people actually enjoy using, and thinking about the product behind it all.
                        </p>
                        <p>
                            I think one of my strengths is my{' '}
                            <span>
                                <HoverCard openDelay={50} closeDelay={50}>
                                  <HoverCardTrigger
                                      className="font-bold underline cursor-pointer">eye for simplicity</HoverCardTrigger>
                                  <HoverCardContent className="w-full max-w-xl">
                                      <div className="flex flex-col justify-between space-y-2">
                                          <p className="text-sm">&ldquo;Simple can be harder than complex; you have to work hard to get your thinking
                                            clean to make it simple. But it&apos;s worth it in the end because once you get
                                            there, you can move mountains.&rdquo;</p>
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
                            When I&apos;m not immersed in code, you&apos;ll find me at the gym, enjoying good food,
                            or appreciating a quality Belgian beer.
                            I love talking ideas over a coffee, so if you ever want to chat about anything,
                            feel free to{' '}
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