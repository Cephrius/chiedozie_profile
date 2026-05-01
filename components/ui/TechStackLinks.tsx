import Image from "next/image";

interface TechStackLabel {
  label: string;
  href: string;
  icon: React.ReactNode;
  tooltip: string;
}

const TechStackLabels: TechStackLabel[] = [
  {
    label: "NextJS",
    href: "https://nextjs.org/",
    icon: <Image src="/nextjs.png" width={32} height={32} alt="Next.js logo" />,
    tooltip: "The best React framework of all time.",
  },
  {
    label: "Shadcn/ui",
    href: "https://ui.shadcn.com/",
    icon: <Image src="/shadcnui.png" width={32} height={32} alt="shadcn/ui logo" />,
    tooltip: "The best React component library of all time.",
  },
  {
    label: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <Image src="/typescript.png" width={32} height={32} alt="TypeScript logo" />,
    tooltip: "My go-to language when it works.",
  },
  {
    label: "Appwrite",
    href: "https://appwrite.io/",
    icon: <Image src="/appwrite.png" width={32} height={32} alt="Appwrite logo" />,
    tooltip: "A fun multi-purpose backend platform.",
  },
  {
    label: "ExpressJS",
    href: "https://expressjs.com/",
    icon: <Image src="/expressjs.png" width={32} height={32} alt="Express.js logo" />,
    tooltip: "The magic behind APIs.",
  },
  {
    label: "NodeJS",
    href: "https://nodejs.org/",
    icon: <Image src="/nodejs.png" width={32} height={32} alt="Node.js logo" />,
    tooltip: "The backbone of all JavaScript.",
  },
  {
    label: "Figma",
    href: "https://www.figma.com/",
    icon: <Image src="/figma.png" width={32} height={32} alt="Figma logo" />,
    tooltip: "My favourite design tool.",
  },
];

export default TechStackLabels;
