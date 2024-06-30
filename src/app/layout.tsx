import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google"
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dries Vanspauwen",
  description: "Personal website of Dries Vanspauwen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
