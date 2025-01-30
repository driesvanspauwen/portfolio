'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative flex items-center justify-center">
            {theme === "dark" ? (
                <Sun
                    className="w-auto h-[1.5rem] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:rotate-180"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <Moon
                    className="w-auto h-[1.5rem] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:rotate-180"
                    onClick={() => setTheme("dark")}
                />
            )}
        </div>
    );
};

export default ThemeToggle;
