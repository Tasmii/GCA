import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import HonoraryDoctorate from './components/HonoraryDoctorate'
import DoctoratePrograms from './components/DoctoratePrograms'
import Publishing from './components/Publishing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('dba')

  return (
    <div className="font-sans bg-white">
      <Navbar />
      <Header />
      <HonoraryDoctorate />
      <DoctoratePrograms activeTab={activeTab} setActiveTab={setActiveTab} />
      <Publishing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App