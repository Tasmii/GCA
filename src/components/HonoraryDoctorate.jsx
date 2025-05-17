const HonoraryDoctorate = () => {
  const reasons = [
    "To Recognize Excellence",
    "To Inspire Society",
    "To Strengthen Institutional Values",
    "To Promote Public Good",
    "To Foster Global Partnerships",
    "To Celebrate Lifelong Learning"
  ]

  const comparisonData = [
    {
      aspect: "Purpose",
      honorary: "Awarded to honor achievements or contributions in a field or society",
      regular: "Earned through original academic research and scholarly work"
    },
    {
      aspect: "Eligibility",
      honorary: "No formal academic qualifications required",
      regular: "Requires a master's degree (usually) and prior academic credentials"
    },
    {
      aspect: "Process",
      honorary: "Conferred by nomination and approval from a university or council",
      regular: "Involves coursework, comprehensive exams, research, and dissertation"
    },
    {
      aspect: "Duration",
      honorary: "Not time-bound; awarded at ceremonies",
      regular: "Typically takes 3–7 years to complete"
    },
    {
      aspect: "Academic Value",
      honorary: "Symbolic and honorary; does not confer academic or teaching rights",
      regular: "Recognized as the highest academic qualification in a field"
    },
    {
      aspect: "Title Usage",
      honorary: "\"Dr.\" usage often discouraged outside the awarding institution",
      regular: "\"Dr.\" title formally recognized in academia and professional settings"
    },
    {
      aspect: "Research Requirement",
      honorary: "No research or thesis required",
      regular: "Requires original research and a dissertation defense"
    },
    {
      aspect: "CV Placement",
      honorary: "Listed under Awards or Honors",
      regular: "Listed under Education or Academic Qualifications"
    },
    {
      aspect: "Career Impact",
      honorary: "Mostly ceremonial, but enhances public image or recognition",
      regular: "Required for academic and research careers"
    }
  ]

  return (
    <section id="honorary" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">HONORARY DOCTORATE</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">About GCA GROUP</h3>
          <p className="mb-4 text-gray-700">
            GCA GROUP is a visionary institution dedicated to academic excellence, community engagement, and global impact. Our mission is to empower individuals through transformative education, fostering innovation, ethical leadership, and a commitment to lifelong learning.
          </p>
          <p className="text-gray-700">
            We take pride in recognizing outstanding contributions to society by conferring <span className="font-bold">Honorary Doctorates</span> upon individuals who have demonstrated exceptional achievements in their respective fields. These symbolic academic honors serve to inspire others and underscore our commitment to celebrating excellence.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">Why Honorary Doctorate?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
                <h4 className="font-bold text-lg mb-2">{reason}</h4>
                <p className="text-gray-600">
                  {reason === "To Recognize Excellence" && "It honors individuals who have made significant achievements in areas like education, science, arts, business, social service, or public leadership."}
                  {reason === "To Inspire Society" && "Honoring exemplary individuals serves as a source of inspiration for students, educators, and the broader community."}
                  {reason === "To Strengthen Institutional Values" && "By associating with individuals who uphold high standards of service, innovation, or integrity, the university reinforces its own mission and values."}
                  {reason === "To Promote Public Good" && "It acknowledges those who have positively impacted society, driven social change, or contributed to global development, aligning with the university's commitment to community service and sustainability."}
                  {reason === "To Foster Global Partnerships" && "Honorees often become ambassadors of the institution, helping to build networks, collaborations, and international goodwill."}
                  {reason === "To Celebrate Lifelong Learning" && "It emphasizes that impactful learning and leadership can happen beyond the classroom, honoring practical knowledge, experience, and wisdom."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">Honorary Doctorate vs Regular Ph.D.</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Aspect</th>
                  <th className="py-3 px-4 text-left">Honorary Doctorate (Honoris Causa)</th>
                  <th className="py-3 px-4 text-left">Regular Ph.D. (Doctor of Philosophy)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-medium">{row.aspect}</td>
                    <td className="py-3 px-4">{row.honorary}</td>
                    <td className="py-3 px-4">{row.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-gray-700 italic">
            At GCA University, the Honorary Doctorate is more than a title—it's a symbol of gratitude, respect, and inspiration. It celebrates those whose lives and work have elevated the world through dedication, innovation, and service.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HonoraryDoctorate