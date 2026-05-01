"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TechStackLabels from "./ui/TechStackLinks";

export default function TechStack() {
  return (
    <div>
      <p className="mb-6 text-xl font-bold">My Current Tech Stack</p>
      <ul className="animated-list grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {TechStackLabels.map((stack) => (
          <Tooltip key={stack.label}>
            <TooltipTrigger asChild>
              <li className="col-span-1 transition-opacity">
                <a
                  href={stack.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-grid w-full rounded-lg border bg-card p-4 no-underline transition-colors hover:bg-accent"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{stack.icon}</span>
                    <span className="text-sm font-medium">{stack.label}</span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
                  </div>
                </a>
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <p>{stack.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
}
