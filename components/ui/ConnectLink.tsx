import React from 'react';
import { FaRegKeyboard,FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


interface ConnectLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const ConnectLink: ConnectLink[] = [{
    label: "MonkeyType",
    href: "https://monkeytype.com/profile/cephrius",
    icon: (
       <FaRegKeyboard />
    ),
  },
  {
    label: "Email (School)",
    href: "mailto:ehilemece@hc.edu",
    icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://www.github.com/Cephrius",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "www.instagram.com/chi3dozie",
    icon: <FaInstagram />,
  },
  {
    label: "Twitter",
    href: "www.x.com/cehileme",
    icon: <FaTwitter />,
  },
];

export default ConnectLink;