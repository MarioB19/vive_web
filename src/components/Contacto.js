"use client"

import FormularioContacto from "./FormularioContacto"

export default function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-black mb-16 font-serif italic">Contáctanos</h2>
        <FormularioContacto />
        <p className="text-center mt-4 text-[#3E2723] font-serif italic text-xl">
          O escríbenos directamente a:
          <a
            href="mailto:vive@shieldedchange.com.mx"
            className="text-black hover:underline decoration-dotted underline-offset-4 ml-2 font-bold"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            vive@shieldedchange.com.mx
          </a>
        </p>
      </div>
    </section>
  )
}