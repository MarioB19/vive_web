"use client"

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import ODSCard from './ODSCard'

const impactos = [
  {
    color: '#4C9F38',
    image: '/ods/ODS3.jpg',
    title: 'Salud y Bienestar',
    description: 'Garantizar una vida saludable y promover el bienestar para todos, abordando enfermedades y mejorando la atención médica.',
  },
  {
    color: '#FF3A21',
    image: '/ods/ODS5.jpg',
    title: 'Igualdad de Género',
    description: 'Lograr la igualdad de género y empoderar a mujeres y niñas en todos los niveles.',
  },
]

export default function Impacto() {
  return (
    <section id="impacto" className="bg-gradient-to-b from-white to-[#F5F5DC] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-12 font-serif">Nuestro Impacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-xl text-[#333333] mb-12 font-sans leading-relaxed">
              En ProyectoImpacto, nos enfocamos en crear un cambio significativo y duradero en nuestra comunidad. 
              Nuestras iniciativas están alineadas con los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas, 
              centrándonos específicamente en áreas clave donde creemos que podemos hacer la mayor diferencia.
            </p>
            <div className="flex justify-center space-x-8">
              {impactos.map((impacto, index) => (
                <div key={index} className="w-1/2 max-w-xs">
                  <ODSCard {...impacto} />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative p-4 bg-[#F5E5DC] shadow-lg transform rotate-1">
              <div className="absolute inset-0 border-8 border-[#8B4513] opacity-50"></div>
              <Card className="overflow-hidden relative z-10">
                <Image
                  src="/conferencia1.jpg"
                  alt="Impacto en la comunidad"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                <CardContent className="p-4">
                  <p className="text-[#333333] font-serif text-lg">Transformando vidas a través de la educación</p>
                </CardContent>
              </Card>
            </div>
            <div className="relative p-4 bg-[#F5E5DC] shadow-lg transform -rotate-1">
              <div className="absolute inset-0 border-8 border-[#8B4513] opacity-50"></div>
              <Card className="overflow-hidden relative z-10">
                <Image
                  src="/dialogo2.jpg"
                  alt="Reducción de desigualdades"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                <CardContent className="p-4">
                  <p className="text-[#333333] font-serif text-lg">Construyendo un futuro más equitativo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}