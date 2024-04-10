import Section from "@/components/Section";
import ConnectLink from "@/components/ui/ConnectLink";
import Link from "@/components/ui/Link";
import { Metadata } from "next";
import Image from "next/image";
import Educations from "../components/Education";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "About | Chiedozie Ehileme",
  description: "A little about me",
};

export default function About() {
  return (
    <div>
      <main className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
        <div className="text-primary animate-in-og pb-8 text-xl font-bold lg:text-3xl">
          <h1>About Me</h1>
          <div className="text-secondary animate-in-og from-neutral-700 text-sm font-light delay-100 lg:text-sm ">
            <p>Just a quick glimpse.</p>
          </div>
        </div>

        <ul className="block gap-4 pb-[31px] pt-4 md:flex md:pb-32 lg:flex lg:pb-32 lg:pt-0 ">
          <li className="animate-in-og delay-150 ease-in-out lg:transition lg:hover:scale-110">
            <Image
              src="/ricevillage1.jpg"
              alt="Chiedozie Ehileme takes a photo in a store"
              width={324}
              height={180}
              className="pointer-events-none relative inset-0 h-72 -rotate-6 scale-[.90] rounded-2xl bg-gray-400 object-cover shadow-lg md:scale-100 lg:top-0 lg:scale-100 "
            />
          </li>
          <li className="animate-in-og delay-150 ease-in-out lg:transition lg:hover:scale-110 ">
            <Image
              src="/outside.jpg"
              alt="Chiedozie Ehileme is juggling a football on a field"
              width={300}
              height={300}
              className=" top- pointer-events-none inset-0 h-72  rotate-6 scale-90 rounded-2xl bg-gray-400 object-cover shadow-2xl md:scale-100 lg:relative lg:scale-100  "
            />
          </li>
        </ul>

        <div className="animate-in-og delay-[250ms]">
          <Section heading="About" headingAlignment="left">
            <div className="flex flex-col gap-6 ">
              <p className="h1">Hello world, I&apos;m Chiedozie Ehileme!</p>

              <p>
                I&apos;m a passionate and dedicated Computer Science Major at
                Houston Christian University, on a journey to become a future
                software engineer. My enthusiasm for technology and coding goes
                beyond the classroom as I actively engage in various side
                projects to enhance my skills and pave the way for a successful
                career in the ever-evolving field of computer science.
              </p>
              <p>
                In addition to coding, I also work on my personal side projects
                that i have to improve my skills and learn new things.
              </p>
              <p>
                When I&apos;m not working I am probably lifting weights, playing
                soccer, or hanging with friends.
              </p>
            </div>
          </Section>
        </div>
        <div className="animate-in-og delay-[350ms pt-16">
          <Section heading="Connect" headingAlignment="left">
            <div className="animate-in-og flex flex-col gap-6">
              <p>
                Have a question or just want to chat? Feel free to{" "}
                <Link href={"mailto:chiedozie.ehileme@gmail.com"}>
                  <span className=" underline-offset-2">email me</span>
                </Link>
                .
              </p>
              <ul className="animated-list animate-in-og grid flex-grow grid-cols-1 gap-2 delay-300 md:grid-cols-2">
                {ConnectLink.map((link) => (
                  <li
                    className="col-span-1 transition-opacity"
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      className="border-primary inline-grid w-full rounded-lg border p-4 no-underline transition-opacity"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{link.icon}</span>
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="text-secondary ml-auto h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
          <div className="pt-20">
            <Section heading={"Education"} headingAlignment="left">
              <div className="flex w-full flex-col gap-8">
                <p>
                  Graduated from Stafford High School in Stafford, Tx and now
                  attending Houston Christian University ~ (formally known as
                  Houston Baptist University).{" "}
                </p>
                <Educations items={education} />
              </div>
            </Section>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const education = [
  {
    degreeType: "Bachelor of Science in Computer Science",
    school: "Houston Christian University",
    imageSrc: "/hcu.png",
    time: "2022 - ",
    link: "https://www.hc.edu",
  },
  {
    degreeType: "High School Diploma",
    school: "Stafford High School",
    imageSrc: "/shs.png",
    time: "2018 - 2022",
    link: "https://www.staffordmsd.org",
  },
];

