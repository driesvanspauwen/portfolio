import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

function HomeNavMenu() {
    return (
        <NavigationMenu className="px-4 md:px-20 py-4 rounded-md border border-black dark:border-white w-full">
            <NavigationMenuList className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-16 items-center w-full">
                <NavigationMenuItem className="w-full md:w-auto">
                    <Link href="/projects" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full text-center px-4 md:px-8 py-3 md:py-4`}>
                            Projects
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full md:w-auto">
                    <Link href="/resume" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full text-center px-4 md:px-8 py-3 md:py-4`}>
                            Resume
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full md:w-auto">
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full text-center px-4 md:px-8 py-3 md:py-4`}>
                            About me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function TopNavMenu({ backLink = "/" }) {
    return (
        <NavigationMenu className="w-full">
            <NavigationMenuList className="w-full justify-between">
                <NavigationMenuItem className="hidden md:block">
                    <Link href={backLink} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-4 py-4 h-auto`}>
                            <p className="text-xl">BACK</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-4 py-4 h-auto`}>
                            <p className="text-xl">DRIES VANSPAUWEN</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <div className="px-4 py-4">
                        <ThemeToggle />
                    </div>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ThemeTogglerNavMenu() {
    return(
        <NavigationMenu className="w-full">
            <NavigationMenuList className="w-full justify-end">
                <NavigationMenuItem>
                    <div className="px-4 py-4">
                        <ThemeToggle />
                    </div>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export {
    HomeNavMenu,
    TopNavMenu,
    ThemeTogglerNavMenu
}