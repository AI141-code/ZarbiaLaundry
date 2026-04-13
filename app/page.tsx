'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Branches from '@/components/Branches'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Branches />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
