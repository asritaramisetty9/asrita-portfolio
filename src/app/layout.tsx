import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asrita Ramisetty | Software Engineer Portfolio",
  description: "Portfolio of Asrita Ramisetty, an Electronics and Communication Engineering graduate specializing in Python development, AI systems, backend design, and high-performance algorithms.",
  keywords: [
    "Asrita Ramisetty",
    "Software Engineer",
    "Python Developer",
    "AI Developer",
    "Backend Developer",
    "ECE Graduate Software",
    "Portfolio",
    "Problem Solver"
  ],
  authors: [{ name: "Asrita Ramisetty" }],
  openGraph: {
    title: "Asrita Ramisetty | Software Engineer",
    description: "Portfolio of Asrita Ramisetty. ECE graduate specializing in Python, backend development, and AI tools.",
    url: "https://asritaramisetty.dev",
    siteName: "Asrita Ramisetty Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asrita Ramisetty | Software Engineer",
    description: "Electronics & Communication Engineering graduate passionate about scalable software and AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
