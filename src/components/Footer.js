import Link from 'next/link'
import { Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Vive</p>
            <p className="text-sm">Vive una vida segura.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://www.instagram.com/vive_unavidasegura" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5DC] transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="https://www.youtube.com/@Vive_una_vida_segura" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5DC] transition-colors">
              <Youtube size={24} />
            </Link>
           
          </div>
          <div className="text-sm text-center md:text-right">
            <p>Contáctanos:</p>
            <a href="mailto:vive@shieldedchange.com.mx" className="hover:underline">vive@shieldedchange.com.mx</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vive. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}