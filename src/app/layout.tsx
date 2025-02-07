import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google"
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dries Vanspauwen",
    description: "Personal website of Dries Vanspauwen",
};

export default function RootLayout({
    children }: Readonly<{ children: React.ReactNode; }>)
{
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={jetBrainsMono.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-preference"
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}