
import Section from '@/components/Section'
import ConnectLink from '@/components/ui/ConnectLink'
import Link from '@/components/ui/Link'
import { Metadata } from 'next'
import Image from 'next/image'
import Educations from '../components/Education'
import Footer from '@/components/ui/footer'


export const metadata: Metadata = {
  title: "About | Chiedozie Ehileme",
  description: "A little about me"
}

export default function About() {
  return (
      <div>
        <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
          <div className='lg:text-3xl font-bold text-xl pb-8 text-primary animate-in-og' >
              <h1>About Me</h1>
          <div className='lg:text-sm text-sm font-light from-neutral-700 text-secondary animate-in-og delay-100 ' >
              <p>Just a quick glimpse.</p>
          </div>
          </div>
        
           <ul className='block pt-4 lg:pt-0 gap-4 pb-[31px] lg:pb-32 md:pb-32 lg:flex md:flex '>
            <li className='lg:transition delay-150 ease-in-out lg:hover:scale-110 animate-in-og'>
              <Image 
                src="/ricevillage1.jpg"
                alt="Airpods"
                width={324}
                height={180}
                className ='relative h-72 scale-[.90] lg:scale-100 md:scale-100 inset-0 object-cover bg-gray-400 shadow-lg pointer-events-none rounded-2xl lg:top-0 -rotate-6 '
              />
            </li>
            <li className='lg:transition delay-150 ease-in-out lg:hover:scale-110 animate-in-og '>
              <Image 
                src="/outside.jpg"
                alt="Airpods"
                width={300}
                height={300}
                className=' rounded-2xl h-72 inset-0 scale-90  lg:scale-100 md:scale-100 object-cover bg-gray-400 shadow-2xl pointer-events-none rotate-6 top- lg:relative  '
              />
            </li>
           </ul>
          
          <div className='animate-in-og delay-[250ms]'> 
            <Section heading="About" headingAlignment='left'   >
              <div className="flex flex-col gap-6 " >
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
          </div>
          <div className='animate-in-og delay-[350ms pt-16'>
            <Section heading="Connect" headingAlignment='left'>
              <div className="flex flex-col gap-6 animate-in-og">
                  <p>Have a question or just want to chat? Feel free to <Link href={"mailto:chiedozie.ehileme@gmail.com"}><span className=' underline-offset-2'>email me</span></Link>.</p>
                  <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list animate-in-og delay-300">
                    {ConnectLink.map((link) => (
                      <li className='transition-opacity col-span-1' key={link.label}>
                        <Link
                          href={link.href}
                          className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">
                              {link.icon}
                            </span>
                            {link.label}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 ml-auto text-secondary"
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
            <div className='pt-20'>
                <Section heading={"Education"} headingAlignment='left'>
                <div className='flex flex-col w-full gap-8'>
                        <p>Graduated from Stafford High School in Stafford, Tx and now attending Houston Christian University ~ (formally known as Houston Baptist University). </p>
                        <Educations items={education}/>
                </div>
                </Section>
            </div>
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    
  )
}

const education = [
  {
    degreeType: "Bachelor of Science in Computer Science",
    school: "Houston Christian University",
    imageSrc: "/hcu.png",
    time: "2022 - ",
    link: "https://www.hc.edu"
  },
  {
    degreeType: "High School Diploma",
    school: "Stafford High School",
    imageSrc: "/shs.png",
    time: "2018 - 2022",
    link: "https://www.staffordmsd.org"
  },

]
 