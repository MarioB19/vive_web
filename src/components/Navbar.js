"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'impacto', 'historia', 'contacto']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavItems = () => (
    <>
      {['inicio', 'impacto', 'historia', 'contacto'].map((item) => (
        <Button
          key={item}
          variant="ghost"
          className={`text-[#8B4513] hover:text-[#A0522D] transition-all duration-300 ${
            activeSection === item ? 'border-b-2 border-[#8B4513]' : ''
          }`}
        >
          <Link href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
        </Button>
      ))}
    </>
  )

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#8B4513]">ProyectoImpacto</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavItems />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col space-y-4 mt-6">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}