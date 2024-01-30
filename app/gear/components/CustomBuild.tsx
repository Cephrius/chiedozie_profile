import React from "react";
import { Card, CardHeader, Image, Button } from "@nextui-org/react";
import { StaticImageData } from "next/image";

interface GearProps {
  item: string;
  description: string;
  image: string;
  link: string;
}

const App: React.FC<GearProps> = ({ item, description, image, link }: GearProps) => {
  return (
    <Card className="grid bg-popover rounded-xl flex-1 mb-4 ">
      {/* Add mb-4 class for margin-bottom between cards */}
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={image} // Use the correct property from the gear object
          width={40}
          className="rounded-xl"
        />
        <div className="flex flex-col">
          <p className="text-md text-primary">{item}</p>
          <p className="text-small text-default-500">{description}</p>
        </div>
        <div className="ml-auto">
          <Button
            className="bg-secondary-foreground rounded-lg w-12 text-small text-default-500"
            href={link}
          >
            <p className="text-destructive">Get</p>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

const gear = [
  {
    item: "Intel I7-13700K",
    description: "CPU",
    image: "https://m.media-amazon.com/images/I/61m0zH-NiTL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF57FL5/ref=sr_1_1?crid=2X94ZQMMFN99D&keywords=i7-13700k&qid=1691720014&sprefix=i7-13700k%2Caps%2C223&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3",
  },
  {
    item: "Intel I7-13700K",
    description: "CPU",
    image: "https://m.media-amazon.com/images/I/61m0zH-NiTL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF57FL5/ref=sr_1_1?crid=2X94ZQMMFN99D&keywords=i7-13700k&qid=1691720014&sprefix=i7-13700k%2Caps%2C223&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3",
  },
  {
    item: "Intel I7-13700K",
    description: "CPU",
    image: "https://m.media-amazon.com/images/I/61m0zH-NiTL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF57FL5/ref=sr_1_1?crid=2X94ZQMMFN99D&keywords=i7-13700k&qid=1691720014&sprefix=i7-13700k%2Caps%2C223&sr=8-1&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3",
  },
];

// Map the gear array to render the respective Card components
const Custombuild = () => {
  return (
    <>
      {gear.map((item, index) => (
        <App key={index} {...item} />
      ))}
    </>
  );
};

export { Custombuild };
