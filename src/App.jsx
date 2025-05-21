import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import HonoraryDoctorate from './components/HonoraryDoctorate'
import DoctrateDegree from './components/DoctrateDegree'
import Awards from './components/Awards'
import Publications from './components/Publications'
import Conference2025 from './components/Conference-2025'
import Conference2026 from './components/Conference-2026'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Partners from './components/Partners'
import Footer from './components/Footer'
import { NominationProvider } from './contexts/NominationContext'

function App() {
  const [activeTab, setActiveTab] = useState('dba')

  return (
    <Router>
      <ScrollToTop />
      <NominationProvider>
        <div className="font-sans bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <About />
                <Testimonials />
              </>
            } />
            <Route path="/conference-2025" element={<Conference2025 />} />
            <Route path="/conference-2026" element={<Conference2026 />} />
            <Route path="/honorary-doctorate" element={<HonoraryDoctorate />} />
            <Route path="/doctorate-degree" element={<DoctrateDegree />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
          <Partners />
          <Routes>
          <Route path="/" element={
            <>
              <Gallery />
            </>
          } />
          </Routes>
          <ContactForm />
          <Footer />
        </div>
      </NominationProvider>
    </Router>
  )
}

export default App