
import Hero from '@/components/Hero'
import Impacto from '@/components/Impacto'
import Historia from '@/components/Historia'
import Contacto from '@/components/Contacto'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      <Navbar />
      <Hero />
      <Impacto />
      <Historia />
      <Contacto />
      <Footer></Footer>
    </main>
  )
}