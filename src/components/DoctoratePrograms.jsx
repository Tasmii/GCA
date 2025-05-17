const DoctoratePrograms = ({ activeTab, setActiveTab }) => {
  const programs = {
    dba: {
      title: "Doctorate of Business Administration (DBA)",
      duration: "36 Months (Accelerate & Complete in 2 Years)",
      credits: "180 Credits",
      immersion: "5-Day Immersion in GLOBALLY",
      thesis: "1:1 Thesis Supervision",
      overview: "This 36-month online program combines advanced leadership, business research, and global immersion to help you transform into a visionary business leader. Earn a globally recognized European doctorate and connect with industry leaders worldwide.",
      career: [
        "CEOs | CFOs | COOs",
        "Management Consultants",
        "Senior Business Strategists",
        "Academic and Industry Thought Leaders"
      ],
      salary: {
        india: "₹9L – ₹75L",
        usa: "$95K – $579K"
      },
      comparison: [
        {
          aspect: "Focus",
          dba: "Real-world business focus",
          phd: "Academic/theoretical focus"
        },
        {
          aspect: "Format",
          dba: "Flexible online + immersion",
          phd: "Full-time campus-based"
        },
        {
          aspect: "Duration",
          dba: "2-3 years completion",
          phd: "4-6 years duration"
        },
        {
          aspect: "Cohort",
          dba: "Executive-level cohort",
          phd: "Primarily academic careers"
        },
        {
          aspect: "Tools",
          dba: "AI-powered productivity tools included",
          phd: "Not included"
        }
      ]
    },
    edd: {
      title: "Doctorate of Education (EdD)",
      tagline: "Transform Education Through Leadership and Innovation",
      description: "The Doctorate of Education (EdD) program at GCA Group is designed for education professionals who aspire to become visionary leaders, change-makers, and innovators in the field of education. This program equips you with advanced research skills, critical thinking, and practical strategies to solve complex educational challenges and drive systemic improvements in schools, universities, and educational organizations worldwide.",
      details: [
        { label: "Program Duration", value: "3 to 4 years (flexible pacing)" },
        { label: "Mode of Study", value: "Fully online with optional in-person residencies" },
        { label: "Key Focus Areas", value: "Educational leadership, curriculum development, policy analysis, technology integration in education, and inclusive education" },
        { label: "Career Opportunities", value: "Educational consultant, school superintendent, curriculum director, higher education leader, policymaker" },
        { label: "Thesis", value: "Original research contributing to educational practice and theory" },
        { label: "Global Recognition", value: "Accredited and internationally respected qualification" }
      ]
    },
    dm: {
      title: "Doctorate of Management (DM)",
      tagline: "Lead Organizations to Success with Advanced Management Expertise",
      description: "The Doctorate of Management (DM) at GCA Group is tailored for experienced managers and executives who seek to deepen their understanding of leadership, strategy, and organizational change. This program blends rigorous academic research with practical applications to empower you to influence high-level decision-making, innovate business processes, and lead sustainable growth in diverse industries.",
      details: [
        { label: "Program Duration", value: "3 years (part-time for working professionals)" },
        { label: "Mode of Study", value: "Online with interactive workshops and mentorship" },
        { label: "Key Focus Areas", value: "Strategic management, organizational behavior, innovation, leadership ethics, global business trends" },
        { label: "Career Opportunities", value: "Senior executive, management consultant, business strategist, academic researcher" },
        { label: "Thesis", value: "Applied research addressing real-world management challenges" },
        { label: "International Accreditation", value: "Recognized worldwide for academic and professional excellence" }
      ]
    },
    phd: {
      title: "Regular Ph.D. Program",
      tagline: "Pursue Advanced Research and Scholarly Excellence",
      description: "The Regular Ph.D. (Doctor of Philosophy) program at GCA Group is offered through a globally accredited university and is fully UGC approved, ensuring international recognition and academic credibility. This advanced degree is designed for dedicated scholars aiming to contribute original knowledge through rigorous and independent research.",
      details: [
        { label: "Program Duration", value: "Typically 3 months, depending on research scope" },
        { label: "Mode of Study", value: "Full-time with flexible research scheduling" },
        { label: "Key Components", value: "Extensive literature analysis, hypothesis formulation, experimental or empirical research, thesis development" },
        { label: "Career Pathways", value: "University professor, research scientist, industry expert, policy advisor, innovation leader" },
        { label: "Academic Rigor", value: "Emphasizes original contributions to knowledge through critical thinking and scholarly inquiry" },
        { label: "Support", value: "Access to senior faculty guidance and research resources throughout the program" }
      ]
    }
  }

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">DOCTORATE PROGRAMS</h2>
        
        <div className="flex border-b border-gray-200 mb-8">
          {['dba', 'edd', 'dm', 'phd'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 font-medium ${activeTab === tab ? 'text-blue-900 border-b-2 border-blue-900' : 'text-gray-500 hover:text-blue-800'}`}
            >
              {tab === 'dba' ? 'DBA' : 
               tab === 'edd' ? 'EdD' : 
               tab === 'dm' ? 'DM' : 'Regular Ph.D.'}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          {activeTab === 'dba' && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">GCA Group | {programs.dba.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Program Highlights</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{programs.dba.title} from GLOBALLY ACCREDITED UNIVERSITY</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Duration: {programs.dba.duration}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{programs.dba.credits}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{programs.dba.immersion}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{programs.dba.thesis}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Why Choose This DBA?</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="py-2 px-4 text-left">Aspect</th>
                          <th className="py-2 px-4 text-left">DBA from GCA GROUP</th>
                          <th className="py-2 px-4 text-left">Traditional PhD</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {programs.dba.comparison.map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-2 px-4 font-medium">{row.aspect}</td>
                            <td className="py-2 px-4">{row.dba}</td>
                            <td className="py-2 px-4">{row.phd}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-2">Program Overview</h4>
                <p className="text-gray-700">{programs.dba.overview}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Career Impact</h4>
                  <p className="mb-4">Join a growing network of executives advancing their careers as:</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {programs.dba.career.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="font-semibold">Expected Salary Ranges:</p>
                  <p>India: {programs.dba.salary.india} | USA: {programs.dba.salary.usa}</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-center">Start your transformative journey today!</h4>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mb-4 transition-colors">
                    Start Application
                  </button>
                  <p className="text-center">Or call: +1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          )}
          
          {['edd', 'dm', 'phd'].includes(activeTab) && (
            <div>
              <h3 className="text-2xl font-bold mb-2 text-blue-800">{programs[activeTab].title}</h3>
              <p className="text-xl font-semibold mb-6 text-yellow-600">{programs[activeTab].tagline}</p>
              
              <p className="mb-6 text-gray-700">{programs[activeTab].description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {programs[activeTab].details.map((detail, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-blue-800 mb-1">{detail.label}</h4>
                    <p className="text-gray-700">{detail.value}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DoctoratePrograms