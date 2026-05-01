import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-6 pb-10">
      <Separator className="mb-6" />
      <p className="text-sm text-muted-foreground">
        Chiedozie Ehileme &copy; {new Date().getFullYear()}.
      </p>
    </footer>
  );
}
