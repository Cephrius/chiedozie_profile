"use client"


import Link from "@/components/ui/Link"
import clsx from "clsx"
import { useTheme } from "next-themes"
import Image, { StaticImageData } from "next/image"



type Education = {
    degreeType: string;
    school: string;
    imageSrc: string | StaticImageData;
    time?: string;
    link?: string

}

function Education({ degreeType,school, imageSrc, time, link }: Education) {
    const { theme } = useTheme();

    const content = (
        <>
            <div className="flex items-center gap-4">
                <Image
                    src={imageSrc}
                    alt={school}
                    width={48}
                    height={48}
                    className={clsx(
                        "rounded-full",
                        school === "Houston Christian University" && "bg-neutral-50"
                    )}

                />
                <div className="flex flex-col gap-px">
                    <p className={link ? "external-arrow" : "" }>{degreeType}</p>
                    <p className="text-secondary">{school}</p>
                </div>
            </div>
            {time && <time className="text-secondary">{time}</time>}
        </>
    );
    return(
        <li className="transtion-opacity" key={school}>
            {link ? (
                <Link 
                    href={link}
                    className="flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
                >
                    {content}
                </Link>
            ) : (
                <div className="flex justify-between">{content}</div>
            )}
        </li>
    );
}
export default function Educations({ items }: { items: Education[] }) {
    return (
      <ul className="flex flex-col gap-8 transistion animated-list delay-300">
        {items.map(Education)}
      </ul>
    );
  }