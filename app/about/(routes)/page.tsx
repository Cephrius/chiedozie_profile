
import Section from '@/components/Section'
import Link from '@/components/ui/Link'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "About | Chiedozie Ehileme",
  description: "A little about me"
}

export default function About() {
  return (
      <div>
        <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
          <Section heading="About" headingAlignment='left'  >
            <div className="flex flex-col gap-6 animate-in-og" >
              <p>Hello world, I&apos;m Chiedozie Ehileme!</p>

              <p>
             I&apos;m a passionate and dedicated Computer Science Major at Houston Christian University, on a journey to become a future software engineer. 
              My enthusiasm for technology and coding goes beyond the classroom as I 
              actively engage in various side projects to enhance my skills and pave the way for a successful career in the ever-evolving field of computer science.
              </p>
              <p>
                In addition to coding, I also work on my personal side projects that i have to improve my skills and learn new things.
              </p>
              <p>
                When I&apos;m not working I am probably lifting weights,
                playing soccer, or hanging with friends.
              </p>
            </div>
          </Section>
        </main>
      </div>
    
  )
}
 