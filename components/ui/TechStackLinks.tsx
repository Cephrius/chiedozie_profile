import Image from "next/image";

interface TechStackLabels {
  label: string;
  href: string;
  icon: React.ReactNode;
  tooltip: string;
}

const TechStackLabels: TechStackLabels[] = [
  {
    label: "NextJS",
    href: "https://nextjs.org/",
    icon: <Image src="/nextjs.png" width="40" height="40" alt="image" />,
    tooltip: "The best react framework of all time."
  },
  {
    label: "Shadcn/ui",
    href: "https://nextjs.org/",
    icon: <Image src="/shadcnui.png" width="40" height="40" alt="image" />,
    tooltip: "The best react component library of all times."
  },
  {
    label: "NextUI",
    href: "https://nextjs.org/",
    icon: <Image src="/nextui.png" width="40" height="40" alt="image" />,
    tooltip: "My second favorite component library"
  },
  {
    label: "TypeScript",
    href: "https://nextjs.org/",
    icon: <Image src="/typescript.png" width="40" height="40" alt="image" />,
    tooltip: "My go-to language when it works."
  },
  {
    label: "Appwrite",
    href: "https://nextjs.org/",
    icon: <Image src="/appwrite.png" width="40" height="40" alt="image" />,
    tooltip: "A fun multi-purpose backend platform"
  },
  {
    label: "ExpressJS",
    href: "https://nextjs.org/",
    icon: <Image src="/expressjs.png" width="40" height="40" alt="image" />,
    tooltip: "The magic behind APIs"
  },
  {
    label: "NodeJS",
    href: "https://nextjs.org/",
    icon: <Image src="/nodejs.png" width="40" height="40" alt="image" />,
    tooltip: "The backbone of all javascript"
  },
  {
    label: "Figma",
    href: "https://nextjs.org/",
    icon: <Image src="/figma.png" width="40" height="40" alt="image" />,
    tooltip: "My favourite design tool"
  },
];

export default TechStackLabels;
