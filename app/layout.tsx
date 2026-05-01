import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/ui/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://chiedozie.me"),
  title: {
    default: "Chiedozie Ehileme | Software Engineer",
    template: "%s | Chiedozie Ehileme",
  },
  description:
    "Chiedozie Ehileme is a Computer Science Major at Houston Christian University and aspiring Software Engineer. Explore projects, gear, and more.",
  keywords: [
    "Chiedozie Ehileme",
    "Software Engineer",
    "Computer Science",
    "Houston Christian University",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Chiedozie Ehileme" }],
  creator: "Chiedozie Ehileme",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chiedozie.me",
    siteName: "Chiedozie Ehileme",
    title: "Chiedozie Ehileme | Software Engineer",
    description:
      "Computer Science Major at Houston Christian University. Aspiring Software Engineer building web applications.",
    images: [
      {
        url: "/headshot.jpg",
        width: 400,
        height: 400,
        alt: "Chiedozie Ehileme",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Chiedozie Ehileme | Software Engineer",
    description:
      "Computer Science Major at Houston Christian University. Aspiring Software Engineer.",
    creator: "@CEhileme",
    images: ["/headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2BnZiH8Ld8b_9IeqjCXQZzCUZg08Rv2uAWaTYVL35yI",
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={300}>
            <Navbar />
            <div>
              {children}
              <Analytics />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
