"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Hero from '@/components/Hero'
import Impacto from '@/components/Impacto'
import Historia from '@/components/Historia'
import Contacto from '@/components/Contacto'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const AnimatedSection = ({ children, id }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.3, triggerOnce: false })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      id={id}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      <Navbar />
      <AnimatedSection id="inicio">
        <Hero />
      </AnimatedSection>
      <AnimatedSection id="impacto">
        <Impacto />
      </AnimatedSection>
      <AnimatedSection id="historia">
        <Historia />
      </AnimatedSection>
      <AnimatedSection id="contacto">
        <Contacto />
      </AnimatedSection>
      <Footer />
    </main>
  )
}