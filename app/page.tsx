

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
import { useEffect } from 'react';

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import Head from 'next/head';


export default function Home() {

  return (
  <div>
    <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto " >
      <div className='lg:text-2xl text-xl pb-8 font-bold animate-in-og' >
          <h1>Chiedozie Ehileme</h1>
      <div className='lg:text-sm text-sm font-light from-neutral-700 animate-in-og delay-100 ' >
          <p>Computer Science Major</p>
      </div>
      </div>
      <div className='flex items-center space-x-11  '> {/* Use flexbox for horizontal alignment */}
        <Image
          src="/headshot.jpg"
          width={100}
          height={100}
          alt="logo"
          className='justify-center rounded-full shadow-lg animate-in-og delay-150 ' 
        />

        {/* SOCIAL LINKS */}
          <ul className='flex space-x-5 items-center animate-in-og delay-150 '>
            
            <li className='text-sm lg:text-sm hover:scale-125 duration-300'>
                <Link href={"https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/"}>
                <BsLinkedin />
              </Link>
            </li>
            <li className='text-lg lg:text-lg hover:scale-125 duration-300'>
                <Link href={"https://www.instagram.com/chi3dozie/"}>
                <AiFillInstagram />
              </Link>
            </li>
            <li className='text-lg lg:text-lg hover:scale-125 duration-300'>
                <Link href={"https://twitter.com/CEhileme"}>
                <BsTwitter />
              </Link>
            </li>
            <li className='text-lg lg:text-lg hover:scale-125 duration-300'>
                <Link href={"https://github.com/Cephrius"}>
                <BsGithub />
              </Link>
            </li>
          </ul>
        
      </div>
      <div>
        <p className='lg:text-sm text-sm font-light pt-10 lg:mr-40 animate-in-og delay-300 mr-16' >
          Hi, I&apos;m Chiedozie Ehileme, a future software engineer studying Computer Science at Houston Christian University. I love to work on side projects of my own to improve my skills for later down the road.
        </p>
        <ul className='flex space-x-10 lg:pt-10 pt-8 text-sm animate-in-og delay-500'>
          <li className='flex items-center'>
            <Link className='space-x-2 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer' href='https://drive.google.com/file/d/1cIuU900DZjXOxCQ8TYq8u_ENAN9hv36M/view?usp=drive_link'>
              <ArrowUpRightIcon className=' h-5 w-5'/>
              <span>Resume</span>
            </Link>
          </li>
          <li className='flex items-center'>
            <Link className='space-x-2 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer ' href="mailto:chiedozie.ehileme@gmail.com">
              <ArrowUpRightIcon className='h-5 w-5'/>
              <span>Email Me</span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  </div>
  )
}
