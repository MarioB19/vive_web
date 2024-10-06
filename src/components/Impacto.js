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
    <section id="impacto" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-black mb-16 font-serif italic">Nuestro Impacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <p className="text-2xl text-[#333333] font-serif italic leading-relaxed">
              Según el INEGI en el 2021 hubó 2.76 millones de afectadas por la violencia intrafamiliar. En realidad no es que en México no haya instituciones, es que el problema es un taboo en está sociedad y las personas no tienen la información de como acudir a las instituciones. Busco ayudar a esos 2.76 millones de personas a denunciar de forma segura.
            </p>
            <div className="flex justify-center space-x-12">
              {impactos.map((impacto, index) => (
                <div key={index} className="w-1/2 max-w-xs">
                  <ODSCard {...impacto} />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12 lg:mt-0 mt-12">
            <div className="relative p-4 bg-[#E0E0E0] shadow-lg transform rotate-1">
              <div className="absolute inset-0 border-8 border-black opacity-50"></div>
              <Card className="overflow-hidden relative z-10">
                <Image
                  src="/conferencia1.jpg"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  alt="Conferencia"
                />
              </Card>
            </div>
            <div className="relative p-4 bg-[#E0E0E0] shadow-lg transform -rotate-1">
              <div className="absolute inset-0 border-8 border-black opacity-50"></div>
              <Card className="overflow-hidden relative z-10">
                <Image
                  src="/reconocimiento.jpg"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  alt="Diálogo"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}