import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Chiedozie Ehileme is a software engineer building simple, reliable web products with a focus on clean interfaces and maintainable frontend systems.",
  openGraph: {
    title: "Chiedozie Ehileme | Software Engineer",
    description:
      "Software engineer focused on projects, frontend systems, and clean web experiences.",
  },
};

const selectedProjects = [
  {
    title: "JobSyte",
    description:
      "A construction operations platform for managing projects, job schedules, invoices, and field team workflows.",
    href: "https://jobsyte.co",
    meta: "Next.js, TypeScript, Supabase",
  },
  {
    title: "Cephrius Health",
    description:
      "A healthcare platform for registration, scheduling, medical records, and notification flows.",
    href: "https://github.com/Cephrius/Cephrius_Health",
    meta: "Next.js, TypeScript, Twilio",
  },
  {
    title: "Cephrius Markdown",
    description:
      "A lightweight markdown editor built for focused writing and clean note taking.",
    href: "https://github.com/Cephrius/Cephrius-Markdown",
    meta: "React, Markdown, Editor UX",
  },
  {
    title: "Pantry Tracker",
    description:
      "A practical pantry management app with a simple interface and fast inventory workflows.",
    href: "https://pantry.chiedozie.me",
    meta: "Next.js, Firebase, shadcn/ui",
  },
];

const quickLinks = [
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1ZCAmaGjm1R6O-m47GxtmhQ_ZHSF9Ayav/view?usp=sharing",
  },
  {
    label: "GitHub",
    href: "https://github.com/Cephrius",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/",
  },
  {
    label: "Email",
    href: "mailto:chiedozie.ehileme@gmail.com",
  },
];

const currentFocus = [
  "Building frontend experiences that feel clear, fast, and polished.",
  "Improving portfolio projects with stronger structure and cleaner UI systems.",
  "Growing into a product-minded software engineer through consistent shipping.",
];

export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-12 md:pt-16">
        <section className="animate-in-og">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Chiedozie Ehileme
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Software engineer and Computer Science student building thoughtful
            web products with a strong focus on frontend clarity, simple user
            experience, and maintainable code.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-in-og mt-16 border-t pt-10">
          <h2 className="text-xl font-semibold tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            A few projects that best represent how I think about interface
            design, product usability, and practical engineering.
          </p>

          <ul className="mt-8 space-y-8">
            {selectedProjects.map((project) => (
              <li key={project.title} className="space-y-2">
                <a
                  href={project.href}
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
                  {project.meta}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              View all projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <section className="animate-in-og mt-16 border-t pt-10">
          <h2 className="text-xl font-semibold tracking-tight">Currently</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            I&apos;m currently studying Computer Science at Southern New
            Hampshire University while continuing to refine my skills through
            personal products and portfolio work.
          </p>

          <ul className="mt-6 space-y-4">
            {currentFocus.map((item) => (
              <li key={item} className="text-sm leading-7 text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-in-og mt-16 border-t pt-10">
          <h2 className="text-xl font-semibold tracking-tight">Connect</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            If you&apos;d like to collaborate, chat about a project, or just say
            hello, feel free to reach out.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:chiedozie.ehileme@gmail.com"
              className="text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              chiedozie.ehileme@gmail.com
            </a>
            <a
              href="https://calendly.com/ehilemece/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              Book a call
            </a>
            <a
              href="https://github.com/Cephrius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
