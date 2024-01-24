import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import { Custombuild }  from '../components/CustomBuild'
import Section from '@/components/Section'



import Link from 'next/link';


export const metadata: Metadata = {
  title: "Gear | Chiedozie Ehileme",
  description: "The gear and tools I use to be productive and get things done."
}

interface ItemProps {
  item: string;
  description: string;
  image: string | StaticImageData;
  link: string;

}


const Item = ({ item, description, image, link }: ItemProps) => 
  (
    <li className="flex gap-4 items-center transition-opacity">
    <a
      className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[4rem] min-w-[4rem] h-[4rem] shadow"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={item}
        className="object-center object-cover w-full h-full"
        fill
      />
    </a>
    <div className="grow flex justify-between gap-2 items-center">
      <div className="space-y-1">
        <h3 className="text-primary line-clamp-2 leading-tight font-medium">
          {item}
        </h3>
        <p className="text-secondary line-clamp-3 leading-tight text-sm">
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
  );


export default function Gear() {
  
  const gear = [
    {
      item: "Intel I7-13700K",
      category: "Custom Build",
      description: "CPU",
      image: "https://m.media-amazon.com/images/I/61m0zH-NiTL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF57FL5/ref=sr_1_1?crid=2X94ZQMMFN99D&keywords=i7-13700k&qid=1691720014&sprefix=i7-13700k%2Caps%2C223&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3",
    },
    {
      item: "NZXT Z690 ",
      category: "Custom Build",
      description: "Motherboard",
      image: "https://m.media-amazon.com/images/I/71mpNSOGczL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      link: "https://www.amazon.com/NZXT-Z690-Motherboard-N7-Z69XT-B1-connectivity/dp/B09ZNZMNGD/ref=sr_1_1?crid=1BLXH04CHBR2T&keywords=nzxt+z690&qid=1691720033&sprefix=nzxt+z690%2Caps%2C179&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3"
    },
    {
      item: "Corsair Vengeance Pro RGB",
      category: "Custom Build",
      description: "64GB DDR4",
      image: "https://m.media-amazon.com/images/I/81PIk2a8YZL._AC_SX355_.jpg",
      link: "https://www.amazon.com/Corsair-Vengeance-4x16GB-PC4-28800-Desktop/dp/B08GSSY4J4/ref=sr_1_4?keywords=corsair+vengance+pro+64bg+ddr4%40+3600mts&qid=1691720105&sr=8-4"    
    },
    {
      item: "NZXT Kraken Z63",
      category: "Custom Build",
      description: "AIO Cooler",
      image: "https://m.media-amazon.com/images/I/71TvN0tgWjL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      link: "https://www.amazon.com/NZXT-Kraken-Z63-280mm-Customizable/dp/B082DYSQVF/ref=sr_1_2?crid=7WX0ZEC01NVA&keywords=z63%2B280mm&qid=1706053079&sprefix=z63%2B280mm%2Caps%2C115&sr=8-2&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&th=1",  
    },
    {
      item: "Samsung 980 Pro",
      category: "Custom Build",
      description: "1TB ",
      image: "https://m.media-amazon.com/images/I/713h+shZfQL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/SAMSUNG-PCIe-Internal-Gaming-MZ-V8P1T0B/dp/B08GLX7TNT/ref=sr_1_3?crid=YT9TSIAMNU5A&keywords=1tb%2B980%2Bpro&qid=1691720159&sprefix=1tb%2B980pro%2Caps%2C232&sr=8-3&th=1",  
    },
    {
      item: "Corsair RM850x",
      category: "Custom Build",
      description: "Power Supply",
      image: "https://m.media-amazon.com/images/I/71ZvVlq1GGS._AC_SL1500_.jpg",
      link: "https://www.amazon.com/CORSAIR-RM850x-Certified-Modular-Supply/dp/B079H6111J/ref=sr_1_1?crid=1J9J3Q3Z1QJ4V&keywords=corsair+rm850x&qid=1691720183&sprefix=corsair+rm850%2Caps%2C179&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3",  
    },
    {
      item: "Samsung 980 Pro",
      category: "Custom Build",
      description: "1TB NVMe SSD",
      image: "https://m.media-amazon.com/images/I/71QFyXz3D7L._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Samsung-980-PRO-1TB-MZ-V8P1T0B/dp/B08NXDZGM6/ref=sr_1_1?crid=1X6"
    },
    {
      item: "Samsung 970 Evo",
      category: "Custom Build",
      description: "2TB NVMe SSD",
      image: "https://m.media-amazon.com/images/I/51Brl+iYtvL._AC_SL1001_.jpg",
      link: "https://www.amazon.com/Samsung-970-EVO-Plus-MZ-V7S2T0B/dp/B07MFZXR1B/ref=sr_1_3?crid=2HVFMM59M9MGK&keywords=2tb%2B970&qid=1691720217&sprefix=2tb%2B970%2Caps%2C147&sr=8-3&th=1"
    },
    {
      item: "Silicon Power SSD",
      category: "Custom Build",
      description: "1TB SATA SSD",
      image: "https://m.media-amazon.com/images/I/71vlEYj7QXL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Silicon-Power-Performance-Internal-SP001TBSS3A55S25/dp/B07B4G19X3/ref=sr_1_4?crid=23F8H5M0E25Y2&keywords=1tb+silicon+power+ssd&qid=1691720275&sprefix=1tb+silicon+power+%2Caps%2C149&sr=8-4"
    },
    {
      item: "Nvidia RTX 4070Ti",
      category: "Custom Build",
      description: "MSI Gaming X Trio",
      image: "https://m.media-amazon.com/images/I/81T5jnwzFEL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/MSI-GeForce-RTX-4070-12G/dp/B0BNWBJ8Z6/ref=sr_1_2?keywords=gaming+x+trio+4070+ti&qid=1691720374&sprefix=gaming+x+trio+%2Caps%2C222&sr=8-2&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf"
    },
    {
      item: "NZXT C1000",
      category: "Custom Build",
      description: "1000W PSU",
      image: "https://m.media-amazon.com/images/I/51nrWKGjFwL._AC_SL1000_.jpg",
      link: "https://www.amazon.com/NZXT-C1000-PSU-PA-0G1BB-US-Certified/dp/B09YZ33Z46/ref=sr_1_8?crid=BGK3JWVM248T&keywords=c1000&qid=1691720420&sprefix=c1000%2Caps%2C147&sr=8-8&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0"
    },

  ];

  
  const categories = gear.reduce((acc, item) => {
    if(!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[])
  
  categories.sort();

  return (
    <div>
      <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
        <div className='lg:text-3xl text-xl pb-8 text-primary font-bold animate-in-og' >
          <h1>Gear</h1>
          <div className='lg:text-sm text-sm font-light text-secondary animate-in-og delay-100 ' >
            <p>Tools I use.</p>
          </div>
        </div>
        <div className='mb-16 sm:mb-14'>
          <p className="max-w-lg animate-in-og delay-150 ">
            This is gear that I actually own and use on a daily basis. There will be more gear to come; see what you like? Check out the links below.
          </p>
        </div>
        <Image
          src={"/setup.jpg"}
          alt='setup'
          width={1280}
          height={720}
          className='flex rounded-xl animate-in-og delay-150'
        />

        <div className="py-10"></div>
        {categories.map((category, index) => (
          <section
            className='flex flex-col gap-8 animate-in-og delay-200'
            key={index}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8 animated-list">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      item={item.item}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}