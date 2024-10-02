"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsOpen(false)
  }

  const NavItems = ({ mobile = false }) => (
    <>
      {['inicio', 'impacto', 'historia', 'contacto'].map((item) => (
        <motion.div
          key={item}
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            className={`text-[#F5F5DC] hover:text-[#8B4513] hover:bg-[#F5F5DC] transition-all duration-300 ${
              mobile ? 'w-full justify-start text-lg py-4' : ''
            }`}
            onClick={() => scrollToSection(item)}
          >
            <span className="font-serif">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </Button>
          {activeSection === item && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5F5DC]"
              layoutId="activeSection"
              initial={false}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </motion.div>
      ))}
    </>
  )

  return (
    <nav className="bg-[#8B4513] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-[#F5F5DC] transition-transform duration-300 group-hover:scale-110">
            <Image src="/logo.png" alt="Logo" layout="fill" objectFit="cover" />
          </div>
          <span className="text-2xl font-bold text-[#F5F5DC] font-serif group-hover:text-white transition-colors duration-300">
            Vive
          </span>
        </Link>
        <div className="hidden md:flex space-x-1">
          <NavItems />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#F5F5DC] hover:text-[#8B4513] hover:bg-[#F5F5DC]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-[#8B4513] border-l border-[#F5F5DC]">
            <nav className="flex flex-col space-y-1 mt-6">
              <NavItems mobile />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}