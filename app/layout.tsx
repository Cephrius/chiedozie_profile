"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import  Navbar  from '@/components/ui/Navbar';
import { NextUIProvider } from '@nextui-org/react';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
          >
          <div>
            <Navbar />
          </div>
            {children}  
          </ThemeProvider>
        </NextUIProvider>
        </body>
      </html>
  )
}
