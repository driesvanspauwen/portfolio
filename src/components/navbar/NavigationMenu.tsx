import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu2";
import Link from "next/link";

export default function NavBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-2xl`}>
                            Projects
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/resume" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-2xl`}>
                            Resume
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/resume" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-2xl`}>
                            About me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}