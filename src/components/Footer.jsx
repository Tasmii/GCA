const Footer = () => {
  const socialIcons = [
    { name: "facebook", url: "#" },
    { name: "twitter", url: "#" },
    { name: "linkedin", url: "#" },
    { name: "instagram", url: "#" },
    { name: "youtube", url: "#" }
  ]

  const accreditations = [
    { name: "ESGCI", logo: "/esgci-logo.png" },
    { name: "RNCP", logo: "/rncp-logo.png" },
    { name: "QUALIOPI", logo: "/qualopi-logo.png" },
    { name: "ACBSP", logo: "/acbsp-logo.png" }
  ]

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 border-t border-blue-700/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">GCA UNIVERSITY</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering Minds. Shaping Futures through excellence in education and research.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a 
                  key={index} 
                  href={icon.url} 
                  className="hover:text-yellow-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {icon.name === "facebook" && (
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    )}
                    {icon.name === "twitter" && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {icon.name === "linkedin" && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                    {icon.name === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    )}
                    {icon.name === "youtube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Honorary Doctorate', 'Doctorate Programs', 'Publishing', 'Testimonials'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {['DBA', 'EdD', 'DM', 'Regular Ph.D.'].map((program, index) => (
                <li key={index}>
                  <a 
                    href="#programs" 
                    className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 relative group"
                  >
                    {program}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2 hover:text-yellow-300 transition-colors duration-300">123 Education Avenue</p>
              <p className="mb-2 hover:text-yellow-300 transition-colors duration-300">Knowledge City, 101010</p>
              <p className="mb-2 hover:text-yellow-300 transition-colors duration-300">Phone: +1 (123) 456-7890</p>
              <p className="mb-4 hover:text-yellow-300 transition-colors duration-300">Email: info@gcauniversity.edu</p>
            </address>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
              Join Us
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-blue-700/30 pt-8">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Accredited By:</h4>
            <div className="flex space-x-4">
              {accreditations.map((acc, index) => (
                <div key={index} className="bg-white p-2 rounded">
                  <img 
                    src={acc.logo} 
                    alt={acc.name} 
                    className="h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-sm text-blue-200">
            <p>© {new Date().getFullYear()} GCA University. All rights reserved.</p>
            <p className="mt-1">Disclaimer: Microsoft Copilot offer subject to terms and conditions.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer