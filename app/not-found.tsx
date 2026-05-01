import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Oh no! This page does not exist.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[700px] flex-col gap-4 px-6 pb-24 pt-16 md:px-6 md:pt-20 md:pb-44">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p className="font-light text-muted-foreground">
        Oh No! This page does not exist, maybe you clicked on an old link or
        misspelled. Please try again.
      </p>
      <div>
        <Button asChild variant="outline">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
