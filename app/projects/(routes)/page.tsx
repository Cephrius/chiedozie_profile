import Image from 'next/image'
import { Metadata } from "next";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const metadata: Metadata = {
  title: "Projects | Chiedozie Ehileme",
  description:
    "Here are some of the projects I've worked on.",
};

const Project = ({ title, description, image, link }: ProjectProps) => 
(
 <li className="flex gap-4 items-center transition-opacity ">
  <a
    className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[4rem] min-w-[4rem] h-[4rem] lg:w-[8rem] lg:min-w-[11rem] lg:h-[7rem] shadow"
    href={link}
    target="_blank"
  >
    <Image
      src={image}
      alt={title}
      className="object-center "
      fill
    />
  </a>
  <div className="grow flex justify-between gap-2 items-center">
    <div className="space-y-1 flex-1"> {/* Added flex-1 to occupy remaining space */}
      <h3 className="text-primary line-clamp-2 leading-tight font-medium mt-[0.5rem]"> {/* Added mt-[0.5rem] to adjust margin */}
        {title}
      </h3>
      <p className="text-secondary line-clamp-3 lg:line-clamp-4 text-sm">
        {description}
      </p>
    </div>
    <div>
      <a
        className="ml-auto text-sm rounded-full px-4 py-1 bg-secondary text-white h-fit"
        href={link}
        target="_blank"
      >
        Get
      </a>
    </div>
  </div>
</li>

)

const listProject = [
      {
        title:"Husky Treads",
        description: "Husky Threads is a social platform where users can engage in community discussions by creating threads, replying to others, and sharing their thoughts. With a focus on real-time interaction, Husky Threads provides a vibrant environment for dynamic discussions.",
        image: "/huskythreads.png",
        link: "https://github.com/Cephrius/Husky_Threads"
      },
      {
        title: "Weather App",
        description: "Welcome to WeatherApp, a simple web application that provides weather forecasts for different locations. With WeatherApp, you can quickly retrieve weather information, including temperature, weather conditions, and more, for the current day and the next few days.",
        image: "https://github.com/Cephrius/minimalWeatherApp/raw/main/screenshot.png",
        link: "https://github.com/Cephrius/minimalWeatherApp"
      },

]

export default function Projects() {
  return (
    <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
     <div className='lg:text-3xl text-xl pb-8 text-primary font-bold animate-in-og' >
        <h1>Projects</h1>
      <div className='lg:text-sm text-sm font-light text-secondary animate-in-og delay-100 pb-1 lg:pb-16 md:pb-16' >
        <p>Here are some of the projects I&apos;ve worked on.</p>
          </div>
      </div>
      <div className='animate-in-og delay-150'>
        <ul className="space-y-8 lg:space-y-14 animated-list"> 
          {listProject.map((project) => (
            <Project 
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          
          ))}
        </ul> 
        <div className="pt-20">
          <p className='text-secondary text-center text-sm'>Stay tuned for more projects...</p>
        </div>
      </div>
    </main>
  )
}
