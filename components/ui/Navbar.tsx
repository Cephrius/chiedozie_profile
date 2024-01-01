"use client"

import ThemeSwitcher from "../theme-switcher";
import React, { Fragment ,useEffect, useState} from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem,
  
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Sun } from "lucide-react";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import clsx from "clsx";






export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();
  const pathname = usePathname();




  useEffect(() => {
    setMounted(true);
  }, []);
  
  if(!mounted) {
    return null;
  }

  const menuItems = [
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Gear", path: "/gear" },
  ];

  return (
    <nav >

    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <Link href="/">
          <Image
            src={resolvedTheme === "light" ? '/logo.jpg' : '/whitelogo.png'}
            width={30}
            height={30}
            alt="logo"
          />

            <p className="font-bold text-inherit">Chiedozie</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 items-center font-light justify-center" >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.path}
              className={clsx(
                "px-4 py-1.5 rounded-md hover:text-primary transition-colors",
                pathname === item.path ? "bg-gray-200 font-medium" : "font-normal"
              )}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

    <div className="md:pl-40 lg:pl-52 sm:pl-32">
     <NavbarItem>
        <ThemeSwitcher  />
      </NavbarItem>  
    </div> 
 
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className=" items-center justify-start text-4xl w-full "
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </nav>
  );
}
