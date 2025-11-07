import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jana Hamed Al-madadha | Junior Software Engineer",
  description: "Portfolio website of Jana Hamed Al-madadha, a passionate Junior Software Engineer based in Amman, Jordan, specializing in C++ and modern software development.",
  keywords: ["software engineer", "developer", "C++", "Jordan", "Amman", "programming"],
  authors: [{ name: "Jana Hamed Al-madadha" }],
  openGraph: {
    title: "Jana Hamed Al-madadha | Junior Software Engineer",
    description: "Crafting innovative solutions with code. Passionate about building elegant software that makes a difference.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
