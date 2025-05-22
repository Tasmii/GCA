import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useNomination } from '../contexts/NominationContext'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { openNominationForm } = useNomination()
  const [scrolled, setScrolled] = useState(false)
  const [ServicesDropdown, setServicesDropdown] = useState(false)
  const [conferencesDropdown, setConferencesDropdown] = useState(false)

  const isConferencePage = location.pathname === '/conference-2025' || location.pathname === '/conference-2026' || location.pathname === '/honorary-doctorate' || location.pathname === '/doctorate-degree' || location.pathname === '/awards' || location.pathname === '/publications' || location.pathname === '/news' || location.pathname === '/blogs' || location.pathname === '/awards'

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
      // Close all dropdowns after successful navigation
      setServicesDropdown(false)
      setConferencesDropdown(false)
      setEventsDropdown(false)
    } else {
      console.warn(`Section with id '${id}' not found`)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img src="images/Logo.png" alt="GCA Logo" className="h-12 w-auto" />
          </div>
          {isConferencePage ? (
            <div className="hidden md:flex space-x-8 items-center">
              <button
                onClick={() => navigate('/')}
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={openNominationForm}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-500/50 active:scale-95"
              >
                Nominate Now
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group flex items-center"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {ServicesDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <button
                    onClick={() => {
                      setConferencesDropdown(false)
                      navigate('/honorary-doctorate')
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300"
                  >
                    Honorary Doctorate
                  </button>
                  <button
                    onClick={() => {
                      setConferencesDropdown(false)
                      navigate('/doctorate-degree')
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300"
                  >
                    Doctorate Degree
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onMouseEnter={() => setConferencesDropdown(true)}
                onMouseLeave={() => setConferencesDropdown(false)}
                className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group flex items-center"
              >
                Conferences
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {conferencesDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setConferencesDropdown(true)}
                  onMouseLeave={() => setConferencesDropdown(false)}
                >
                  <button
                    onClick={() => {
                      setConferencesDropdown(false)
                      navigate('/conference-2025')
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300"
                  >
                    Conference 2025
                  </button>
                  <button
                    onClick={() => {
                      setConferencesDropdown(false)
                      navigate('/conference-2026')
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:text-yellow-300 transition-all duration-300"
                  >
                    Conference 2026
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setConferencesDropdown(false)
                navigate('/awards')
              }}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              Awards
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => {
                setConferencesDropdown(false)
                navigate('/publications')
              }}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              Publications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 capitalize relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          )}
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