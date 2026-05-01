"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  heading: string;
  headingAlignment: "left" | "right";
  children: ReactNode;
};

export default function Section({
  heading,
  headingAlignment,
  children,
}: SectionProps) {
  return (
    <section className="flex flex-col gap-2 md:flex-row md:gap-9">
      <h2
        className={cn(
          "shrink-0 text-muted-foreground md:w-32",
          headingAlignment === "right" && "md:text-right"
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
