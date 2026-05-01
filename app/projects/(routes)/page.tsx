import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Chiedozie Ehileme across healthcare, productivity, and web application development.",
  openGraph: {
    title: "Projects | Chiedozie Ehileme",
    description: "A selection of projects built by Chiedozie Ehileme.",
  },
};

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  stack: string;
}

const projects: ProjectProps[] = [
  {
    title: "JobSyte",
    description:
      "A construction operations platform that helps contractors organize projects, schedule jobs, manage invoices, and keep field teams aligned.",
    link: "https://jobsyte.co",
    stack: "Next.js, TypeScript, Supabase",
  },
  {
    title: "Cephrius Health",
    description:
      "A healthcare platform that streamlines patient registration, scheduling, medical records, and notifications.",
    link: "https://github.com/Cephrius/Cephrius_Health",
    stack: "Next.js, TypeScript, Twilio",
  },
  {
    title: "Cephrius Markdown",
    description:
      "A markdown editor focused on simple writing and a clean content workflow.",
    link: "https://github.com/Cephrius/Cephrius-Markdown",
    stack: "React, Markdown, Editor UX",
  },
  {
    title: "Cephrius RestAPI",
    description:
      "A REST API project built around standard HTTP methods and clean server communication patterns.",
    link: "https://github.com/Cephrius/Cephrius_RestAPI",
    stack: "Node.js, Express, REST",
  },
  {
    title: "Pantry Tracker",
    description:
      "A pantry app for storing and managing inventory with Firebase and a straightforward UI.",
    link: "https://pantry.chiedozie.me",
    stack: "Next.js, Firebase, TypeScript",
  },
];

export default function Projects() {
  return (
    <div>
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-12 md:pt-16">
        <section className="animate-in-og">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            A selection of projects that reflect how I approach product design,
            frontend development, and practical full-stack implementation.
          </p>
        </section>

        <section className="animate-in-og mt-16 border-t pt-10">
          <ul className="space-y-10">
            {projects.map((project) => (
              <li key={project.title} className="space-y-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-muted-foreground"
                >
                  {project.title}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {project.stack}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
