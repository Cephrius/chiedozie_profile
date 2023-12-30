"use client"

import { cn } from "@/lib/utils"
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation"



export default function Navigation({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/about`,
            label: 'About',
            active: pathname === `/About`
        },
        {
            href: `/projects`,
            label: 'Projects',
            active: pathname === `/projects`
        },
        {
            href: `/gear`,
            label: 'Gear',
            active: pathname === `/gear`
        },
    ]

    return(
        <nav>
            <div>

            </div>
            <div className={cn("flex space-x-4 lg:space-x-6", className)}>
                H
                {routes.map((route) => (
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn("text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-black font-bold dark:text-white": "text-muted-foreground")}
                    >
                        <div className="flex items-center justify-center">
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    )
}