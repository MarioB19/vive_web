"use client"

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
  { src: "/reconocimiento.jpg", alt: "Reconocimiento del proyecto" },
  { src: "/dialogo3.jpg", alt: "Historia del proyecto 2" },
]

export default function Historia() {
  return (
    <section id="historia" className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-12 font-serif">Nuestra Historia</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
          <p className="text-[#5D4037] text-2xl mb-4 leading-relaxed font-serif italic">
  Observé que muchas personas a mi alrededor conocidos, amigos o familia atravesaban una situación de violencia doméstica y no sabían que hacer al respecto, o aún sabiendo que acciones podían tomarse no se atrevían a dar el paso. Todas esas personas tienen que darse cuenta que no están solas y que con una llamada hay otra vida esperándoles al otro lado del teléfono.
</p>
<p className="text-[#5C3317] text-xl font-bold font-serif mb-8">
  - Maria Fernanda Anaya Barajas
</p>



            <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-[#F5E6D3] text-xl px-8 py-4 rounded-full shadow-lg transform transition duration-500 hover:scale-105">
              <a href="https://www.ashoka.org/es-mx/story/historia-de-mar%C3%ADa-fernanda-barajas" rel="noopener noreferrer" className="font-serif"   target="_blank">
                Conoce más sobre Maria Fernanda
              </a>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-8 border-[#D2B48C] rounded-lg overflow-hidden shadow-2xl">
                      <CardContent className="p-0">
                        <div className="relative aspect-square">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: 'cover' }} // Usa CSS directamente para objectFit
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