import { Mail, Keyboard } from "lucide-react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icons";

interface ConnectLinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLinkItem[] = [
  {
    label: "MonkeyType",
    href: "https://monkeytype.com/profile/cephrius",
    icon: <Keyboard className="h-5 w-5" />,
  },
  {
    label: "Email (School)",
    href: "mailto:ehilemece@hc.edu",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Cephrius",
    icon: <GitHubIcon className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/",
    icon: <LinkedInIcon className="h-5 w-5" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chi3dozie",
    icon: <InstagramIcon className="h-5 w-5" />,
  },
  {
    label: "Twitter",
    href: "https://x.com/cehileme",
    icon: <XIcon className="h-5 w-5" />,
  },
];

export default ConnectLinks;
