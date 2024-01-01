import Image from 'next/image'
import type { Metadata } from 'next'
import { 
  BsEnvelopeFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import  { Link }  from '@nextui-org/react';




export const metadata: Metadata = {
  title: 'Home | Chiedozie Ehileme',
  description: 'Computer Science Student in Katy, Texas',
}

export default function Home() {
  return (
    <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
      <div className='lg:text-3xl text-2xl pb-8  font-bold '>
        
          <h1>Chiedozie Ehileme</h1>
        
        <div className='lg:text-sm font-normal text-sm from-neutral-700 '>
          <p>Computer Science Major</p>
        </div>
      </div>
      <div className='flex items-center space-x-11  '> {/* Use flexbox for horizontal alignment */}
        <Image
          src="/headshot.jpg"
          width={100}
          height={100}
          alt="logo"
          className='justify-center rounded-full shadow-lg'
        />
        <div className='flex items-center space-x-4 text-2xl '>
          <div className='duration-300 hover:scale-125 '>
            <Link
              href={"/"}
            >
              <BsEnvelopeFill  />
            </Link>
          </div>
          <div className='duration-300 hover:scale-125'>
            <Link
              href={"https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/"}
            >
              <BsLinkedin />
            </Link>
          </div>
          <div className='duration-300 hover:scale-125 text-3xl'>
            <Link
              href={"https://www.instagram.com/chi3dozie/"}
            >
              <AiFillInstagram />
            </Link>
          </div>
          <div className='duration-300 hover:scale-125'>
            <Link
              href={"https://twitter.com/CEhileme"}
            >
              <BsTwitter />
            </Link>
          </div>
          <div className='duration-300 hover:scale-125'>
            <Link
              href={"https://github.com/Cephrius"}
            >
              <BsGithub />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className='lg:text-sm text-sm font-medium pt-10 lg:mr-16 '>
          Hi, I&apos;m Chiedozie Ehileme, a future software engineer studying Computer Science at Houston Christian University. I love to work on side projects of my own to improve my skills for later down the road.
        </p>
      </div>
    </main>
  )
}
