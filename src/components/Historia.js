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

const images = [
  { src: "/dialogo1.jpg", alt: "Maria Fernanda Anaya Barajas" },
  { src: "/dialogo2.jpg", alt: "Historia del proyecto 1" },
  { src: "/dialogo3.jpg", alt: "Historia del proyecto 2" },
]

export default function Historia() {
  const [isPortrait, setIsPortrait] = useState(false);

  const handleResize = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    handleResize(); // Establecer el estado inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Limpiar el evento al desmontar
  }, []);

  return (
    <section id="historia" className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl lg:text-6xl font-bold text-center text-[#8B4513] mb-8 lg:mb-16 font-serif italic">Nuestra Historia</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Texto */}
          <div className="lg:w-1/2">
            <p className="text-[#5D4037] text-lg lg:text-3xl mb-4 leading-relaxed font-serif italic">
            &quot;Observé que muchas personas a mi alrededor conocidos, amigos o familia atravesaban una situación de violencia doméstica y no sabían que hacer al respecto, o aún sabiendo que acciones podían tomarse no se atrevían a dar el paso. Todas esas personas tienen que darse cuenta que no están solas y que con una llamada hay otra vida esperándoles al otro lado del teléfono.&quot;
            </p>
            <p className="text-[#5C3317] text-base lg:text-2xl font-bold font-serif mb-8">
              - María Fernanda Anaya Barajas
            </p>

            <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-[#F5E6D3] text-xl lg:text-2xl px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-lg transform transition duration-500 hover:scale-105">
              <a href="https://www.ashoka.org/es-mx/story/historia-de-mar%C3%ADa-fernanda-barajas" rel="noopener noreferrer" className="font-serif" target="_blank">
                Conoce más sobre María Fernanda
              </a>
            </Button>
          </div>
          
          {/* Carrusel de imágenes */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-4 lg:border-8 border-[#D2B48C] rounded-lg overflow-hidden shadow-2xl">
                      <CardContent className="p-0">
                        <div className={`relative ${isPortrait ? 'h-400 w-400' : ''}`} style={isPortrait ? { height: '400px', width: '400px' } : { aspectRatio: '1 / 1' }}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: 'cover' }} // Mantiene la proporción de la imagen
                            className="rounded-lg"
                            unoptimized
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
