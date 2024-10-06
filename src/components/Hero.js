"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const videoRef = useRef(null)
  const [carouselHeight, setCarouselHeight] = useState('auto')

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

  useEffect(() => {
    const updateCarouselHeight = () => {
      if (videoRef.current) {
        const videoHeight = videoRef.current.offsetHeight;
        setCarouselHeight(`${videoHeight + (window.innerWidth > 768 ? 125 : 150)}px`);
      }
    };
  
    updateCarouselHeight()
    window.addEventListener('resize', updateCarouselHeight)

    return () => window.removeEventListener('resize', updateCarouselHeight)
  }, [])

  const slides = [
    {
      type: 'video',
      title: 'Acerca de Nosotros',
      content: (
        <div className="w-full h-full flex items-center justify-center" ref={videoRef}>
          <div className="aspect-video w-full max-w-3xl">
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
        </div>
      )
    },
    {
      type: 'vision',
      title: 'Nuestra Visión',
      content: (
        <p className="text-[#333333] text-sm sm:text-base lg:text-2xl font-serif italic leading-relaxed portrait:text-sm landscape:text-2xl">
          Queremos lograr construir un mundo donde todas las personas puedan vivir libres de violencia intrafamiliar. Nuestra casa debería ser el lugar donde nos sentimos más seguros; desgraciadamente, esto aún no es una realidad en México ni en el mundo, pero se puede lograr. Vamos a crear una sociedad consciente y valiente que ponga un alto a este abuso.
        </p>
      ),
      image: '/conferencia2.jpg'
    },
    {
      type: 'mission',
      title: 'Nuestra Misión',
      content: (
        <p className="text-[#333333] text-sm sm:text-base lg:text-2xl font-serif italic leading-relaxed portrait:text-sm landscape:text-2xl">
          Nuestra misión es ayudar a disminuir y concientizar sobre la violencia intrafamiliar a través de una aplicación, un sitio web, redes sociales y la publicación de un libro. Creemos firmemente que todas y todos merecemos vivir una vida libre de violencia. Sabemos que la violencia doméstica, en particular, es difícil de combatir debido a su normalización y al hecho de que, a menudo, se trata como un tema tabú. Por eso, en Vive, nuestra misión es compartir información que facilite la identificación y denuncia de la violencia doméstica.
        </p>
      ),
      image: '/logo.png'
    }
  ]

  return (
    <section id="inicio" className="relative bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl mb-8 md:mb-16 relative">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-2 font-serif text-[#4A3728]">
              VIVE
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 font-serif text-black">
              Una Vida Segura
            </h2>
            <div className="relative">
              <p className="text-xl md:text-2xl text-center text-[#333333] mb-2 font-serif italic">
                &quot;No eres la oscuridad que soportaste, eres la luz que se niega a rendirse&quot;
              </p>
              <p className="text-right text-[#4A3728] font-semibold font-serif italic">
                - Jhon Mark Green
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-2xl -bottom-4 -right-4 z-0"></div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <Carousel className="w-full max-w-5xl mx-auto" ref={emblaRef}>
            <CarouselContent style={{ height: carouselHeight }}>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="p-1 h-full">
                    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 font-serif italic text-center">{slide.title}</h3>
                    <Card className="bg-[#F5F5F5] shadow-lg h-full overflow-hidden">
                      <CardContent className="p-4 md:p-6 h-full flex items-center justify-center">
                        <ScrollArea className="h-full w-full">
                          <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full items-center">
                            <div className={`flex-1 ${!slide.image ? 'md:w-full' : 'md:w-1/2'}`}>
                              {slide.content}
                            </div>
                            {slide.image && (
                              <div className="flex-1 mt-4 md:mt-0 md:w-1/2">
                                <div className="relative p-4 bg-black shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                                  <div className="absolute inset-0 border-8 border-black opacity-50"></div>
                                  <Image
                                    src={slide.image}
                                    width={400}
                                    height={300}
                                    alt={slide.title}
                                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black text-white hover:bg-[#333333]" />
            <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black text-white hover:bg-[#333333]" />
          </Carousel>
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-black w-6' : 'bg-[#CCCCCC]'}`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}