import Link from "@/components/ui/Link";
import { Metadata } from "next";

export const metadata: Metadata ={
    title: "404 | Chiedozie Ehileme",
    description:
    "Oh no! This page does not exist",
};

const Custom404 = (): JSX.Element => (
    <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
        <div className="flex flex-col gap-2">
            <h1>404- Page not found</h1>
                <p className="font-light">Oh No! This page does not exist, maybe you clicked on old link or misspelled. Please try again</p>
            <div className="h-2 text-sm">
                <Link href="/" underline>
                    Return home
                </Link>
            </div>
        </div>
    </main>
)

export default Custom404;
