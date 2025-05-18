import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [programsDropdown, setProgramsDropdown] = useState(false)
  const [eventsDropdown, setEventsDropdown] = useState(false)

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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Close dropdowns after successful navigation
      setProgramsDropdown(false)
      setEventsDropdown(false)
    } else {
      console.warn(`Section with id '${id}' not found`)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">GCA</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
            </div>
            <div className="relative">
              <button
                onMouseEnter={() => setProgramsDropdown(true)}
                onMouseLeave={() => setProgramsDropdown(false)}
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group flex items-center"
              >
                Programs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {programsDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setProgramsDropdown(true)}
                  onMouseLeave={() => setProgramsDropdown(false)}
                >
                  {['honorary', 'regular', 'publishing'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="w-full text-left px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300"
                    >
                      {item === 'honorary' ? 'Honorary Doctorate' :
                       item === 'regular' ? 'Regular Doctorate' : 'Publishing'}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onMouseEnter={() => setEventsDropdown(true)}
                onMouseLeave={() => setEventsDropdown(false)}
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group flex items-center"
              >
                Events
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {eventsDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setEventsDropdown(true)}
                  onMouseLeave={() => setEventsDropdown(false)}
                >
                  {['blog', 'events'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="w-full text-left px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300"
                    >
                      {item === 'blog' ? 'Blog' : 'Events'}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {['awards', 'conferences', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
              >
                {item === 'awards'? 'Awards' :
                 item === 'conferences'? 'Conferences' :
                 item === 'testimonials'? 'Testimonials' : 'Contact Us'}
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