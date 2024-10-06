"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AnimatePresence, motion } from 'framer-motion'

const images = [
  { src: "/dialogo1.jpg", alt: "Maria Fernanda Anaya Barajas" },
  { src: "/dialogo2.jpg", alt: "Historia del proyecto 1" },
  { src: "/dialogo3.jpg", alt: "Historia del proyecto 2" },
]

const autoplayOptions = {
  delay: 3000,
  playOnInit: true,
  stopOnInteraction: false,
  stopOnMouseEnter: false,
}

export default function Historia() {
  const [isPortrait, setIsPortrait] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    [Autoplay(autoplayOptions)]
  )

  const handleResize = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentIndex(emblaApi.selectedScrollSnap())
      })
    }
    
    return () => {
      if (emblaApi) {
        emblaApi.destroy()
      }
    }
  }, [emblaApi])

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.9,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="historia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-6xl font-bold text-center text-black mb-8 lg:mb-16 font-serif italic"
        >
          Nuestra Historia
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <p className="text-[#3E2723] text-lg lg:text-3xl mb-4 leading-relaxed font-serif italic">
              &quot;Observé que muchas personas a mi alrededor conocidos, amigos o familia atravesaban una situación de violencia doméstica y no sabían que hacer al respecto, o aún sabiendo que acciones podían tomarse no se atrevían a dar el paso. Todas esas personas tienen que darse cuenta que no están solas y que con una llamada hay otra vida esperándoles al otro lado del teléfono.&quot;
            </p>
            <p className="text-[#1B0000] text-base lg:text-2xl font-bold font-serif mb-8">
              - María Fernanda Anaya Barajas
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-black hover:bg-[#3E2723] text-white text-xl lg:text-2xl px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-lg transition duration-300">
                <a href="https://www.ashoka.org/es-mx/story/historia-de-mar%C3%ADa-fernanda-barajas" rel="noopener noreferrer" className="font-serif" target="_blank">
                  Conoce más sobre María Fernanda
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Carrusel de imágenes */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 flex items-center justify-center"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden">
              <div className="relative" ref={emblaRef}>
                <div className="flex">
                  {images.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentIndex}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                        >
                          <Card className="border-4 lg:border-8 border-[#3E2723] rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                            <CardContent className="p-0">
                              <div className={`relative ${isPortrait ? 'h-400 w-400' : ''}`} style={isPortrait ? { height: '400px', width: '400px' } : { aspectRatio: '1 / 1' }}>
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                  className="rounded-lg"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}