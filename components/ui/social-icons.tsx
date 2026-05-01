import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function SocialIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <SocialIcon {...props}>
      <path d="M9.5 18v-2.5c-2.5.5-4-1-4-3.5 0-1 .4-1.9 1.1-2.6-.2-.8-.1-1.7.3-2.4 0 0 1-.3 3 1.1a10 10 0 0 1 4 0c2-1.4 3-1.1 3-1.1.4.7.5 1.6.3 2.4.7.7 1.1 1.6 1.1 2.6 0 2.5-1.5 4-4 3.5V18" />
      <path d="M9.5 15.5c-1 .5-1.5-1-2.5-1" />
    </SocialIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <SocialIcon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
      <path d="M8 11v5" />
      <path d="M12 16v-5" />
      <path d="M12 13a2 2 0 0 1 4 0v3" />
    </SocialIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <SocialIcon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </SocialIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <SocialIcon {...props}>
      <path d="M6 5h2.8L18 19h-2.8L6 5Z" fill="currentColor" stroke="none" />
      <path d="M15 5h3L9 19H6l9-14Z" fill="currentColor" stroke="none" />
    </SocialIcon>
  );
}
