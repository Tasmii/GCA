import CountdownTimer from './CountdownTimer'
import { useState, useEffect } from 'react'
import '../styles/background.css'
import { useNomination } from '../contexts/NominationContext'

const Header = () => {
  const phrases = ["Honorary-Degree", "Doctorate-Degree", "Book-Publishing", "Conferences", "Awards", "Events"]
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { openNominationForm } = useNomination()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-25 pb-16 text-white relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
      >
        <source src="/Videos/Video 2.mp4" type="video/mp4" />
      </video>
      <div className={`container mx-auto px-4 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 font-montserrat floating">
            GCA Group
          </h1>
          <div className="flex flex-col items-center justify-center space-y-6">
            <div 
              className="bg-white/25 backdrop-blur-sm p-8 rounded-xl w-full max-w-7xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20 overflow-hidden h-32"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative h-full overflow-hidden whitespace-nowrap">
                <div className={`continuous-scroll flex gap-8 ${isHovered ? 'animation-paused' : ''}`} style={{ width: 'max-content' }}>
                  {[...phrases, ...phrases, ...phrases, ...phrases, ...phrases].map((phrase, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
                    >
                      <p className="text-4xl md:text-5xl font-semibold text-yellow-300">
                        {[...phrase].map((letter, letterIndex) => (
                          <span 
                            key={letterIndex}
                            className="inline-block letter-animation"
                            style={{ animationDelay: `${letterIndex * 0.2}s` }}
                          >
                            {letter}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-light fade-in-scale mt-4">
              <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300">"Empowering Minds.</span>
              <span className="text-green-400 hover:text-green-300 transition-colors duration-300"> Shaping Futures."</span>
            </p>
          </div>

          {/* University Logos Scroll */}
          <div 
            className="mx-auto mt-8 bg-white/25 backdrop-blur-sm p-8 rounded-xl w-full max-w-7xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20 overflow-hidden h-36"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-full overflow-hidden whitespace-nowrap">
              <div className={`continuous-scroll flex gap-8 items-center ${isHovered ? 'animation-paused' : ''}`} style={{ width: 'max-content' }}>
                {[
                  'Universities/Emas.jpg', 'Universities/NIILM.png', 'Universities/Prowess.jpeg', 'Universities/UN.jpg', 'Universities/american merit.png',
                  'Universities/american.png', 'Universities/arunanchal.webp', 'Universities/azteca.png', 'Universities/dunster.jpg', 'Universities/hawkins.png',
                  'Universities/kennedy.jpg', 'Universities/mind power.png', 'Universities/oxford.png', 'Universities/scandinavia.jpg', 'Universities/thames.jpg',
                  'Universities/wilmington.png', 'Accredation/niti.jpg', 'Accredation/aacsb.png', 'Accredation/acbsp.png', 'Accredation/eduqua.jpg', 'Accredation/iacbe.png', 'Accredation/mps.png', 'Accredation/msme.jpg', 'Accredation/prme.png', 'Accredation/QSstar.png'
                ].map((logo, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <img 
                      src={`/images/${logo}`} 
                      alt={`University Logo ${index + 1}`}
                      className="h-20 object-contain filter brightness-100 hover:brightness-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 slide-up">
          <button 
            onClick={openNominationForm}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-5 px-20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-500/50 active:scale-95 text-xl"
          >
            Nominate Now
          </button>
          {/* <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 glow">
            <h2 className="text-2xl font-bold mb-6 text-center animate-pulse">Next Batch Starts In:</h2>
            <CountdownTimer />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Header