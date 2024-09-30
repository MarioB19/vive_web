"use client"

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      const timer = setInterval(() => {
        emblaApi.scrollNext()
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setCurrentSlide(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect)
      onSelect()
    }
  }, [emblaApi, onSelect])

  const slides = [
    {
      type: 'video',
      content: (
        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QiMnH0_Z6aw?si=aXNxgstizDM2gUel"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      type: 'vision',
      content: (
        <Card className="bg-white shadow-lg h-full">
          <CardContent className="p-6 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-semibold text-[#8B4513] mb-4">Nuestra Visión</h2>
            <p className="text-[#333333] text-lg">
              Queremos lograr construir un mundo donde todas las personas puedan vivir libres de violencia intrafamiliar. Nuestra casa debería ser el lugar donde nos sentimos más seguros; desgraciadamente, esto aún no es una realidad en México ni en el mundo, pero se puede lograr. Vamos a crear una sociedad consciente y valiente que ponga un alto a este abuso.
            </p>
          </CardContent>
        </Card>
      )
    },
    {
      type: 'mission',
      content: (
        <Card className="bg-white shadow-lg h-full">
          <CardContent className="p-6 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-semibold text-[#8B4513] mb-4">Nuestra Misión</h2>
            <p className="text-[#333333] text-lg">
              Nuestra misión es ayudar a disminuir y concientizar sobre la violencia intrafamiliar a través de una aplicación, un sitio web, redes sociales y la publicación de un libro. Creemos firmemente que todas y todos merecemos vivir una vida libre de violencia. Sabemos que la violencia doméstica, en particular, es difícil de combatir debido a su normalización y al hecho de que, a menudo, se trata como un tema tabú. Por eso, en Vive, nuestra misión es compartir información que facilite la identificación y denuncia de la violencia doméstica.
            </p>
          </CardContent>
        </Card>
      )
    }
  ]

  return (
    <section id="inicio" className="relative bg-[#F5F5DC] py-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#F5F5DC] p-8 rounded-lg shadow-2xl mb-16 relative"> {/* Increased shadow and margin-bottom */}
          <div className="relative z-10"> {/* Ensure content is above pseudo-element */}
            <h1 className="text-6xl font-extrabold text-center mb-2 font-serif text-[#4A3728]">
              VIVE
            </h1>
            <h2 className="text-3xl font-bold text-center mb-6 font-serif text-[#8B4513]">
              Una Vida Segura Libre de Violencia
            </h2>
            <div className="relative">
              <p className="text-2xl text-center text-[#333333] mb-2 font-sans italic">
                "No eres la oscuridad que soportaste, eres la luz que se niega a rendirse"
              </p>
              <p className="text-right text-[#6B4226] font-semibold">
                - Jhon Mark Green
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#F5F5DC] rounded-lg shadow-2xl -bottom-4 -right-4 z-0"></div> {/* Create layered shadow effect */}
        </div>
        
        <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-lg"> {/* Changed to beige background */}
          <Carousel className="w-full max-w-4xl mx-auto" ref={emblaRef}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    {slide.content}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2">
              <ChevronLeft className="h-6 w-6 text-[#8B4513]" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2">
              <ChevronRight className="h-6 w-6 text-[#8B4513]" />
            </CarouselNext>
          </Carousel>
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-[#8B4513]' : 'bg-[#D7CCC8]'
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}