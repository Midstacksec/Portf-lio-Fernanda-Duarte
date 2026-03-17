import Cursor         from '@/components/Cursor'
import ParticleCanvas from '@/components/ParticleCanvas'
import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import About          from '@/components/About'
import Stats          from '@/components/Stats'
import Projects       from '@/components/Projects'
import Contact        from '@/components/Contact'
import Footer         from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
