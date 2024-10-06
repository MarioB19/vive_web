import Link from 'next/link'
import { Instagram, Youtube, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-semibold mb-2">Vive</h2>
            <p className="text-sm italic">Vive una vida segura.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.instagram.com/vive_unavidasegura" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
              <Instagram size={28} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.youtube.com/@Vive_una_vida_segura" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
              <Youtube size={28} />
              <span className="sr-only">YouTube</span>
            </Link>
            <a href="mailto:vive@shieldedchange.com.mx" className="hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
              <Mail size={28} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="font-serif mb-2">Contáctanos:</p>
            <a href="mailto:vive@shieldedchange.com.mx" className="hover:underline text-gray-300">vive@shieldedchange.com.mx</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Vive. Todos los derechos reservados.</p>
          <div className="inline-block bg-white text-black px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="https://brandonmuro.com" target="_blank" rel="noopener noreferrer" className="font-serif font-bold text-lg flex items-center justify-center">
              Hecho por Brandon Muro
              <ExternalLink size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}