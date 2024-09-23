import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Tooltip,
} from "@nextui-org/react";
import TechStackLabels from "./ui/TechStackLinks";
const TechStack = () => {
  return (
    <div>
      <p className="text-xl font-bold mb-9">My Current Tech Stack</p>
      <ul className="animated-list animate-in-og grid flex-grow grid-cols-2 lg:grid-cols-3 gap-3 delay-300 md:grid-cols-2">
        {TechStackLabels.map((stack) => (
          <Tooltip content={stack.tooltip} key={stack.label} offset={10} color="warning">
            <li className="col-span-1 transition-opacity" key={stack.label}>
              <Link
                href={stack.href}
                className=" bg-cards border-none inline-grid w-full rounded-lg border p-4 no-underline transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{stack.icon}</span>
                  {stack.label}
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
          </Tooltip>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
