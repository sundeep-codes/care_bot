import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import BookAppointment from './components/BookAppointment'
import ChatWidget from './components/ChatWidget'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <BookAppointment />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
