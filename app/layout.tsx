"use client";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" />
      <body
        className={clsx(
          inter.className,
          "antialiased bg-background text-primary width-full"
        )}
      >
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <div>
              {children}
              <Analytics />
            </div>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
