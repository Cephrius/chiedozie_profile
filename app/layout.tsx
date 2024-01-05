

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import  Navbar  from '@/components/ui/Navbar';



export const metadata: Metadata = {
  title: 'Home | Chiedozie Ehileme',
  description: 'Chiedozie Ehileme',
}


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" />
        <body className={inter.className}>
        
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
          >
          <div>
            <Navbar />
          </div>
            {children}  
          </ThemeProvider>
        
        </body>
      </html>
  )
}
