import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Workshops from "@/components/workshops"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Workshops />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
