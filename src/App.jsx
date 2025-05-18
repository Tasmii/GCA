import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import HonoraryDoctorate from './components/HonoraryDoctorate'
import DoctoratePrograms from './components/DoctoratePrograms'
import Publishing from './components/Publishing'
import Awards from './components/Awards'
import Conferences from './components/Conferences'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('dba')

  return (
    <div className="font-sans bg-white">
      <Navbar />
      <Header />
      <About />
      <Awards />
      <Conferences />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App