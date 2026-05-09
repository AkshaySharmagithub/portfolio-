import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshay Sharma | Full Stack Developer",
  description:
    "Personal portfolio of Akshay Sharma — Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies. Available for full-time roles.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Akshay Sharma" }],
  openGraph: {
    title: "Akshay Sharma | Full Stack Developer",
    description: "Personal portfolio of Akshay Sharma — Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
