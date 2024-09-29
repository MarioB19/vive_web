import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Historia() {
  return (
    <section id="historia" className="py-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">Nuestra Historia</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <p className="text-[#333333] mb-4">
              Nuestro proyecto nació de la visión de un grupo de estudiantes comprometidos con el cambio social.
              Desde nuestros humildes comienzos, hemos crecido para impactar positivamente en nuestra comunidad
              y más allá.
            </p>
            <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-white">
              <a href="https://www.ashoka.org/es-ve/historia" target="_blank" rel="noopener noreferrer">
                Conoce más sobre Ashoka
              </a>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/historia.jpg"
              alt="Historia del proyecto"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}