import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Careerline } from '@/components/Timeline'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Footer } from '@/components/Footer'

export default function page() {
  return (
    <main className='min-h-screen bg-black antialiased bg-grid-white/[0.02]'>
   <Navbar/>
   <Hero/>
   <Careerline/>
   <Projects/>
    <Skills/>
    <Footer/>
    </main>
 
  )
}
