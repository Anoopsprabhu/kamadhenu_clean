import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Impact from '@/components/Impact'
import Caretakers from '@/components/Caretakers'
import Donate from '@/components/Donate'
import Supporters from '@/components/Supporters'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Impact />
      <Caretakers />
      <Donate />
      <Supporters />

      {/* Footer */}
      <Footer />
    </main>
  )
}