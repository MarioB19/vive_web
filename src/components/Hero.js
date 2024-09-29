"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const slides = [
    {
      type: 'video',
      content: (
        <div className="aspect-video rounded-lg overflow-hidden">
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
              Aspiramos a crear un mundo donde cada individuo tenga la oportunidad de alcanzar su máximo potencial,
              independientemente de sus circunstancias. Visualizamos una sociedad equitativa, sostenible y
              empoderada, donde el impacto social positivo sea la norma y no la excepción.
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
              Nuestra misión es implementar soluciones innovadoras y sostenibles que aborden los desafíos sociales
              más apremiantes de nuestra comunidad. Nos comprometemos a empoderar a las personas, fomentar la
              colaboración y catalizar el cambio positivo a través de la educación, la tecnología y la acción comunitaria.
            </p>
          </CardContent>
        </Card>
      )
    }
  ]

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-[#F5F5DC] to-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-[#8B4513] mb-4">Proyecto de Impacto Social</h1>
        <p className="text-2xl text-center text-[#5D4037] mb-12">Transformando vidas, construyendo futuros</p>
        <Carousel 
          className="w-full max-w-4xl mx-auto"
          selectedIndex={currentSlide}
          setSelectedIndex={setCurrentSlide}
        >
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
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}