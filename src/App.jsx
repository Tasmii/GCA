import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import HonoraryDoctorate from './components/HonoraryDoctorate'
import DoctoratePrograms from './components/DoctoratePrograms'
import Publishing from './components/Publishing'
import Awards from './components/Awards'
import Conference2025 from './components/Conference-2025'
import Conference2026 from './components/Conference-2026'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('dba')

  return (
    <Router>
      <div className="font-sans bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Awards />
              <Testimonials />
              <ContactForm />
            </>
          } />
          <Route path="/conference-2025" element={<Conference2025 />} />
          <Route path="/conference-2026" element={<Conference2026 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App