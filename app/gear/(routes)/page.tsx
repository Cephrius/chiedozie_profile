import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import Section from "@/components/Section";

import Link from "next/link";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Gear | Chiedozie Ehileme",
  description: "The gear and tools I use to be productive and get things done.",
};

interface ItemProps {
  item: string;
  description: string;
  image: string | StaticImageData;
  link: string;
}

const Item = ({ item, description, image, link }: ItemProps) => (
  <li className="flex gap-4 items-center transition-opacity ">
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
      category: "Custom PC Build",
      description: "CPU",
      image: "https://m.media-amazon.com/images/I/61m0zH-NiTL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF57FL5/ref=sr_1_1?crid=2X94ZQMMFN99D&keywords=i7-13700k&qid=1691720014&sprefix=i7-13700k%2Caps%2C223&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3",
    },
    {
      item: "NZXT Z690 ",
      category: "Custom PC Build",
      description: "Motherboard",
      image:
        "https://m.media-amazon.com/images/I/71mpNSOGczL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      link: "https://www.amazon.com/NZXT-Z690-Motherboard-N7-Z69XT-B1-connectivity/dp/B09ZNZMNGD/ref=sr_1_1?crid=1BLXH04CHBR2T&keywords=nzxt+z690&qid=1691720033&sprefix=nzxt+z690%2Caps%2C179&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3",
    },
    {
      item: "Corsair Vengeance Pro RGB",
      category: "Custom PC Build",
      description: "64GB DDR4",
      image: "https://m.media-amazon.com/images/I/81PIk2a8YZL._AC_SX355_.jpg",
      link: "https://www.amazon.com/Corsair-Vengeance-4x16GB-PC4-28800-Desktop/dp/B08GSSY4J4/ref=sr_1_4?keywords=corsair+vengance+pro+64bg+ddr4%40+3600mts&qid=1691720105&sr=8-4",
    },
    {
      item: "NZXT Kraken Z63",
      category: "Custom PC Build",
      description: "AIO Cooler",
      image:
        "https://m.media-amazon.com/images/I/71TvN0tgWjL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      link: "https://www.amazon.com/NZXT-Kraken-Z63-280mm-Customizable/dp/B082DYSQVF/ref=sr_1_2?crid=7WX0ZEC01NVA&keywords=z63%2B280mm&qid=1706053079&sprefix=z63%2B280mm%2Caps%2C115&sr=8-2&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&th=1",
    },
    {
      item: "Samsung 980 Pro",
      category: "Custom PC Build",
      description: "1TB NNMe SSD ",
      image: "https://m.media-amazon.com/images/I/713h+shZfQL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/SAMSUNG-PCIe-Internal-Gaming-MZ-V8P1T0B/dp/B08GLX7TNT/ref=sr_1_3?crid=YT9TSIAMNU5A&keywords=1tb%2B980%2Bpro&qid=1691720159&sprefix=1tb%2B980pro%2Caps%2C232&sr=8-3&th=1",
    },

    {
      item: "Samsung 970 Evo",
      category: "Custom PC Build",
      description: "2TB NVMe SSD",
      image: "https://m.media-amazon.com/images/I/51Brl+iYtvL._AC_SL1001_.jpg",
      link: "https://www.amazon.com/Samsung-970-EVO-Plus-MZ-V7S2T0B/dp/B07MFZXR1B/ref=sr_1_3?crid=2HVFMM59M9MGK&keywords=2tb%2B970&qid=1691720217&sprefix=2tb%2B970%2Caps%2C147&sr=8-3&th=1",
    },
    {
      item: "Silicon Power SSD",
      category: "Custom PC Build",
      description: "1TB SATA SSD",
      image: "https://m.media-amazon.com/images/I/71vlEYj7QXL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Silicon-Power-Performance-Internal-SP001TBSS3A55S25/dp/B07B4G19X3/ref=sr_1_4?crid=23F8H5M0E25Y2&keywords=1tb+silicon+power+ssd&qid=1691720275&sprefix=1tb+silicon+power+%2Caps%2C149&sr=8-4",
    },
    {
      item: "Nvidia RTX 4070Ti",
      category: "Custom PC Build",
      description: "MSI Gaming X Trio",
      image: "https://m.media-amazon.com/images/I/81T5jnwzFEL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/MSI-GeForce-RTX-4070-12G/dp/B0BNWBJ8Z6/ref=sr_1_2?keywords=gaming+x+trio+4070+ti&qid=1691720374&sprefix=gaming+x+trio+%2Caps%2C222&sr=8-2&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf",
    },
    {
      item: "NZXT C1000",
      category: "Custom PC Build",
      description: "1000W PSU",
      image: "https://m.media-amazon.com/images/I/51nrWKGjFwL._AC_SL1000_.jpg",
      link: "https://www.amazon.com/NZXT-C1000-PSU-PA-0G1BB-US-Certified/dp/B09YZ33Z46/ref=sr_1_8?crid=BGK3JWVM248T&keywords=c1000&qid=1691720420&sprefix=c1000%2Caps%2C147&sr=8-8&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0",
    },
    {
      item: "NZXT H5 Elite",
      category: "Custom PC Build",
      description: "M-ATX Compact Case",
      image: "https://m.media-amazon.com/images/I/71C-0NcY3WL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/NZXT-Compact-Mid-Tower-Gaming-Built/dp/B0B6Y6NQNF/ref=sr_1_1?crid=3RM90WAVMDAJ6&keywords=h5+elite&qid=1691720519&sprefix=h5%2Caps%2C138&sr=8-1",
    },

    {
      item: "AOC 27in 144hz",
      category: "Monitors",
      description: "27G2G4",
      image: "https://m.media-amazon.com/images/I/81J4utZ5bnL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/AOC-27G2-Frameless-Adjustable-Guarantee/dp/B07WSK5W7V/ref=sr_1_3?crid=153T4XCVSIVH1&keywords=27G2G4&qid=1706210599&sprefix=27g2g4+%2Caps%2C468&sr=8-3",
    },

    {
      item: "LG UltraGear 34in 165Hz Ultrawide",
      category: "Monitors",
      description: "27G2G4",
      image: "https://m.media-amazon.com/images/I/81soN3bwVFL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/LG-UltraGear-34GP63A-B-Compatibility-FreeSync/dp/B0B928B6BC/ref=sr_1_3?keywords=34GP63A-B&qid=1706210759&sr=8-3",
    },

    {
      item: "Glouious GMMK Pro",
      category: "Keyboards",
      description: "Glourious Copper Swiches",
      image: "https://m.media-amazon.com/images/I/71bZdLdOLmS._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Glorious-Modular-Mechanical-Keyboard-Pro/dp/B09963YS4P/ref=sr_1_3?crid=RLUV21MDTOMN&keywords=GMMK%2BPro&qid=1706211228&sprefix=gmmk%2Bpro%2Caps%2C125&sr=8-3&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&th=1",
    },

    {
      item: "Razer Huntsman Mini",
      category: "Keyboards",
      description: "Linear Optical Switches",
      image: "https://m.media-amazon.com/images/I/618etkLUt9L._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Razer-Huntsman-Mini-Gaming-Keyboard/dp/B08B3JSKGR/ref=sr_1_1?crid=16YZJUBUDMGQP&keywords=razer+huntsman+mini+linear&qid=1706211320&sprefix=razer+huntsman+mini+l%2Caps%2C176&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc",
    },

    {
      item: "Razer Viper Ultimate",
      category: "Mice",
      description: "20K DPI Optical Sensor",
      image: "https://m.media-amazon.com/images/I/61M7B24YNEL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Razer-Ultimate-Lightweight-Wireless-Charging/dp/B09TG6KG2T/ref=sr_1_3?crid=2Z78FP6D8JNS7&keywords=Viper%2BUltimate&qid=1706212360&sprefix=viper%2Bultimate%2Caps%2C118&sr=8-3&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&th=1",
    },

    {
      item: "Glourious Model O",
      category: "Mice",
      description: "Ultralight 69g Honeycomb Design ",
      image: "https://m.media-amazon.com/images/I/71gL7gGh3iL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Glorious-Model-Wireless-Gaming-Mouse/dp/B098RDJZFM/ref=sr_1_2_sspa?crid=1MHE3XR0CR1BI&keywords=model%2Bo%2Bwireless&qid=1706212928&sprefix=Model%2Bo%2B%2Caps%2C982&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    },

    {
      item: "Razer Blade Pro 17",
      category: "Laptop",
      description: "i7 9th Gen w/ RTX 2080 Max-Q",
      image:
        "https://static.bhphoto.com/images/multiple_images/images500x500/1575977445_IMG_1288396.jpg",
      link: "https://www.bhphotovideo.com/c/product/1521049-REG/razer_rz09_03148e02_r3u1_17_3_blade_gaming_laptop.html/specs",
    },

    {
      item: "Apple Macbook Pro 16",
      category: "Laptop",
      description: "Apple M1 Pro ",
      image:
        "https://static.bhphoto.com/images/images1000x1000/1634584510_1668189.jpg",
      link: "https://www.amazon.com/Apple-MacBook-16-inch-512GB-Renewed/dp/B09P43P66P/ref=sr_1_3?crid=3DLM8RW8BYLEE&dib=eyJ2IjoiMSJ9.YXlS33FaC_i_a7k_jyn1ZhbPFrbfyub1i5zng6O7m2HoO3nLiDHahiOLpWgDpmEl3D2ManhlI_WO43MOypfrRHl_vfw3fXM3hw3-At-iec4w8ynjfLKGwpBYPAPGiCZAYiUmVXnAdED_w6WOYUSmlVBcxcXbkAciZJb3KXX0TQx2R1bYQ8oYfEqQj6huEyjxPvhvwqY8q8xztfYkhZlF-IOhhFtrnp7zWzo1Od6UYaU.7_Tnr1MpYJhFnDVCl3cZwVfIaf1JB5vQUAul2JyaTCQ&dib_tag=se&keywords=m1%2Bmacbook%2Bpro%2B16&qid=1708125067&sprefix=%2Caps%2C212&sr=8-3&th=1",
    },

    {
      item: "Visual Studio Code",
      category: "Tools and apps that I use",
      description: "Lightweight Code Editor",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBEQACEQEDEQH/xAAbAAACAwADAAAAAAAAAAAAAAAFBwAEBgECA//EADUQAAIBAgQFAQUGBwEAAAAAAAECAwAEBQYRIRIxQVFhcTJicpHRFBUigbLBEyYzobHh8Af/xAAaAQACAwEBAAAAAAAAAAAAAAAEBQADBgEC/8QALREAAQQABAQGAQUBAAAAAAAAAQACAwQRISIxEkFR8AUTMpGx0TQkM0Jh4SP/2gAMAwEAAhEDEQA/AHjUUUqKKVFFwzKilmIVQNSSdgKiiXGbc4vdl7LCZGS3GzzqdDJ4HZf8+nNlXq8Op+6V2LfFpZsq+A43f2VtE0VwzL1SQ8Snf/uVGOrxyt1DNBNsyRO0nJbLCs0Wt46Q3CmCZiANd1Y+vT86XTUXxjibmEygvskIa7IqziWYcMwy6jtru5CSvzABPAO7acqpjrSyN4mjJXy2oonBrjmiaOsiB0YMrDUMDqCKoIwyV4OOYXWeaK3heaeRY4kHEzsdABXQCTgFCQ0YlK7N2bpMXZrSxLR2AO55NN5PYePnTWvWEep26UWbRk0t2+Vli21FoNG8P1FlFqCNtd6tZ6VS/wBSs8WnKvS8YrwzLhV9hOIP9tLSiZiyXHMSf77iqa0zJWaeXJEWYXxP18+fVe+XM0XeCuIzrPZk/ihJ9nyp6enKvFioyYY7Fe61x8Bw3HT6VfNuarnHLgwoGgsUOqRa7v7zfTpVUFYQ77q6xaM+3p73QCNXlkWOJWeRzoqKNST2AognAYlDDEnAJi5UyKsPBeY4qvJzS15qvxdz45etLbFzHTH7ppXpYapPZUc0EDHrsDYAr+kUxp/sNSy7+Q7vkhXFRSFxTKzPJhcWDzNjfD9l05H2i3Th97tWag8zzB5e609nyvLPm7JLLPHI7/wuILqeEPpxadNdOtaNjsRnus09vCf6UcK40beuloO68hxGy3//AJr9yRx8Mev3sQeIzaake54/v3pRfZMN/T3unXh74TkPV3st/SxNEss1n+Ybz4l/SK0VIf8ABqzN78h3fJCtaKwQmKF5rxjEcVxaY4mGiaFyiWx2EI7evnr6aUFXiYxg4OfNH2JXyPPHy5dFeylk69x50uZS1tYA/wBYj8UnhB+/L1quxabFkM3K2vUdNmcmq3m7K0+BSG4t+KbD2Oz9Yz2b61bUttmHCcnKm5TdAeJubfhZtJGR1dGKup1VlOhB7g0aRjkUCCRmEwcq58DcFnjrhTyS65A/H29fnSi14fhqi9vpOaniX8Jvf7Q7NbhswXjKQVJUgjr+EUdS/Hb3zS+8f1Du+SE60UhMU0cUy3hGLXcV3iFkk00WwYkjiHZgPaHg1l2TyRtLWnJa2SvHI4OcM0VVQqhVACgaAAbCqVcussaTRtFKivG40ZWGoI7GugkHELhAIwKVmc8nSYSXvsNVpLDm6c2h+q+elPad0S6H+r5SC7QMWuP0/H+LGltqY4JZii1g2tpHqen71GjJRxzVgHUgDcnYAV1cTqrHraKVFFKii4IDAhgCDsQaiiWedcjvbl8QwOJniO8lqg1KeUHUeOnpydU7/FolOfX7SO54dgeOEZdPpDcvZbxXELeMJbNCnWScFAN/mfyoyW5DCMziegQMVKeY5DAdSt5guULHDnSedjdXKEEMw0VT3C/XWlFjxCSUcLcgnNbw2KIhztR75L//2Q==",
      link: "https://code.visualstudio.com/",
    },
    {
      item: "GitHub",
      category: "Tools and apps that I use",
      description: "Create and manage repositories",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX///8XFRUAAAATEREKBgYRDg7t7e2BgIA3NjbZ2dlTUlLq6urCwsKJiIjGxsb39/ebm5uPj492dXVwcHC5ubnMzMyqqqo+PT1OTU0lJCRYWFiysrIwLy/j4+NIR0d7e3tkY2MdGxs/J1iEAAAB9klEQVRIie2W23aDIBBFdUCNmqjUaDRGY/7/JztcvOFg0qeurtXzZIFNYWY4E8/71x9QXtWFEEVd5T+hevGAWQ/Rf4hVDUDgzwoAhuoDLEyA+5Y4NOE7rttjGu2OuSdQmBR8HXGjk0NydHPlAYdk6eIK0EEEtiUY6DBDQXO94k5eLAC/GJdJ5LgHgIi9QZExCbbLrgUySfmMygQ/xHKaF8XV6oJwVX+k6TQc6q+znq0JUN8MzvQ9KtC33c9cdURdiXZPD/ww5qYy+GBP5CaF4HgK6TRvP7PpKILmTFjn4C26AL3hIrPgYg3f1RWDm5PzErWC363hF3v3BCKdELsGHAdZSZglNPh0g5cjkI9usKRBn5E3WOmkDIz51nDC36TDVAhPrPHIHIQqf6XOLIjoccZdoL7LvsrDqRYdmZzsD3YGq+4eEGdRMrmQzmJLGkCA5u/Dbecs8W2yPyoG4PNSbR1gn8nm19Vnol1aCeEA8t3AoA+FFjnX8rjuQLRBoulIsoVNDKYX7rIcT/sRvtN8QEtsl+HH6h862h0WgYpaWqWr0fvcvuiASzVAeMcMQuPiPA/DDols+/0ehAN3wFrHpMiesdrcgGBXtyWhgr92FgUGbvubFLeYFgtk0NJ9aquObY6KZcje/ACYlZWr1nMusw+xf/2evgEGFBJqrqKT4AAAAABJRU5ErkJggg==",
      link: "https://github.com",
    },
    {
      item: "Stack Overflow",
      category: "Tools and apps that I use",
      description: "Ask anything and find an answer",
      image:
        "data:image/png;base64,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",
      link: "https://stackoverflow.com/",
    },
    {
      item: "ChatGPT",
      category: "Tools and apps that I use",
      description: "Free-to-use AI system.",
      image:
        "data:image/png;base64,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",
      link: "https://chat.openai.com",
    },
    {
      item: "Notion",
      category: "Tools and apps that I use",
      description: "Your connected workspace",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAaVBMVEX///8AAABDQ0Ovr6+5ubne3t6zs7P7+/vT09ONjY3q6uru7u6ioqKAgID29vby8vLk5OTGxsaUlJRubm5oaGhMTEyamprMzMxeXl46Ojpzc3NZWVkwMDAPDw+oqKiGhoYZGRkiIiIpKSn3X9rDAAAB+UlEQVRIid3Wx4KDIBAAULCBBey9Jfn/j1wMaAywGHLbnZPiPCISYAD4F4FiH+duEg5V1UQXuWmG8yApSFX38D1CbT5d1nJ0btAUU6a6SJM392NJmiXI/SxFqTexpkSBg+hzrEiRBDnOYqTkrCyhTqVGhzU2F6MH7da3p0LYXkk0sqxShde/CYItDSsQdvp0GrHp9JYmJIM8MQLC+/a6KM5w67lNsZZd3eumaFXgh9FbwfnhdCUJQ3bpmOA81RXLS1yPTWuUvua10MPRa1keVef//GV1kP4uRLh6eOm+gAilH0FEI7wPlTj9fRbTYIK06h/Pu4E/bvh37torSI5b/sdPsQePhWGCbbLTec/4DAKQ7ffEEvpHA/4W3uyh2B9Xa+g5p5e1guIL3W1h8NwRId8q7CAQ+4ZvDVveOFlDUPLWwhpS0ezPlhB4vHk7yOwgGI9HljD+FoLFBGsDPHrVwcIEMwOkMtySE6lbHeQH3wumfGC1WMV8gQU6uFcBHDbiphf7OmXyVlAtBNMJuqyAYEfIqVKI4+NShvHbGA2xSBDkH8JahmA7MqHufENpthUBrKgjZTVDBT7/Bmy10zjz2zxYmpVUnfOAashFBtLkaANL8LSb/hpzXxNfHY2rJD4cVt+FycIqAT8yHNd46KohbLZC0I/kiu/Pxg/Qxxl2S22/UwAAAABJRU5ErkJggg==",
      link: "https://notion.so/",
    },
    {
      item: "Figma",
      category: "Tools and apps that I use",
      description: "The collaborative interface design tool",
      image:
        "data:image/png;base64,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",
      link: "https://figma.com",
    },
  ];

  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <div>
      <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
        <div className="lg:text-3xl text-xl pb-8 text-primary font-bold animate-in-og">
          <h1>Gear</h1>
          <div className="lg:text-sm text-sm font-light text-secondary animate-in-og delay-100 ">
            <p>Tools I use.</p>
          </div>
        </div>
        <div className="mb-16 sm:mb-14">
          <p className="max-w-lg animate-in-og delay-150 ">
            This is gear that I actually own and use on a daily basis. There
            will be more gear to come; see what you like? Check out the links
            below.
          </p>
        </div>
        <Image
          src={"/setup2.jpg"}
          alt="setup"
          width={1280}
          height={720}
          className="flex rounded-xl animate-in-og delay-150"
        />

        <div className="py-10"></div>
        {categories.map((category, index) => (
          <section
            className="flex flex-col pt-14 gap-8 animate-in-og delay-200"
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
