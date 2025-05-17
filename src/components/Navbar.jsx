import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">GCA</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['home', 'honorary', 'programs', 'publishing', 'testimonials'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
              >
                {item === 'home' ? 'Home' : 
                 item === 'honorary' ? 'Honorary Doctorate' :
                 item === 'programs' ? 'Doctorate Programs' :
                 item === 'publishing' ? 'Publishing' : 'Testimonials'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <button className="md:hidden text-white hover:text-yellow-300 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar