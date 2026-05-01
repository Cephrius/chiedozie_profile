"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "../theme-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-2xl px-6 pt-6 md:pt-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium tracking-tight">
            Chiedozie Ehileme
          </Link>

          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-6 md:flex">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "border-b border-transparent pb-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                        isActive && "border-foreground text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 md:hidden">
                  Menu
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-56">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <nav className="mt-8 flex flex-col gap-2">
                  {links.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "rounded-md px-4 py-2 text-sm transition-colors hover:bg-muted",
                          isActive ? "bg-muted font-medium" : "font-normal",
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="mt-4 border-b border-border/70" />
      </nav>
    </header>
  );
}
