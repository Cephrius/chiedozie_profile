import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Gear | Chiedozie Ehileme",
  description: "The gear and tools I use to be productive and get things done."
}


export default function Gear() {
  return (
    <div>
      <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
        <div className='lg:text-2xl text-xl pb-8 font-bold animate-in-og' >
              <h1>Gear</h1>
          <div className='lg:text-sm text-sm font-light from-neutral-700 animate-in-og delay-100 ' >
              <p>The gear and tools I use</p>
          </div>
        </div>
        <Image 
          src={"/setup.jpg"}
          alt='setup'
          width={230}
          height={230}
          className='flex items-center justify-center'
        />

      </main>
    </div>
  )
}
