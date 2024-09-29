"use client"

import FormularioContacto from "./FormularioContacto"

export default function Contacto() {

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">Contáctanos</h2>
        <FormularioContacto></FormularioContacto>
        
        <p className="text-center mt-4 text-[#333333]">
          O escríbenos directamente a: <a href="mailto:vive@shieldedchange.com.mx" className="text-[#8B4513] hover:underline">vive@shieldedchange.com.mx</a>
        </p>
      </div>
    </section>
  )
}