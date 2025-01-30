import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

function HomeNavigationMenu() {
    return (
        <NavigationMenu className="px-20 py-4 rounded-md border border-black dark:border-white">
            <NavigationMenuList className="space-x-16">
                <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-8 py-4`}>
                            Projects
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/resume" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-8 py-4`}>
                            Resume
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/resume" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-8 py-4`}>
                            About me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function FloatTopNavigationMenu() {
    return (
        <NavigationMenu className="w-full">
            <NavigationMenuList className="w-full justify-between">
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
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

function ThemeTogglerNavigationMenu() {
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
    HomeNavigationMenu,
    FloatTopNavigationMenu,
    ThemeTogglerNavigationMenu
}