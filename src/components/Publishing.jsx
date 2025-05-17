const Publishing = () => {
  const packages = [
    {
      name: "Basic",
      priceInr: "₹38,990",
      priceUsd: "$499 + GST",
      services: "Publish Paperback, Sell across India"
    },
    {
      name: "Essential",
      priceInr: "₹48,990",
      priceUsd: "$599 + GST",
      services: "Basic + Print & eBook, Author Website, Press Kit"
    },
    {
      name: "Popular",
      priceInr: "₹89,990",
      priceUsd: "$1,099 + GST",
      services: "Essential + Global Sales, Copy Editing (up to 50k words)"
    },
    {
      name: "Premium",
      priceInr: "₹1,34,990",
      priceUsd: "$1,599 + GST",
      services: "Popular + Press Release, Enhanced Editing & Illustration"
    },
    {
      name: "Premium +",
      priceInr: "₹1,99,990",
      priceUsd: "$2,399 + GST",
      services: "Premium + Amazon Prime, Oxford Listing, Book Launch & Website"
    }
  ]

  return (
    <section id="publishing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">GCA PUBLISHING</h2>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Publishing Made Easy!</h3>
          <p className="text-xl mb-6">Start Publishing Today & Showcase Your Work at Global Book Fairs</p>
          <p className="text-gray-700 mb-8">
            Turn your ideas into professional-quality books, magazines, or ebooks with GCA Publishing.
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Ready To Publish Your Book?
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">20,000+</div>
            <div className="text-gray-600">Books Published</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">150,000+</div>
            <div className="text-gray-600">Community Members</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">15,000+</div>
            <div className="text-gray-600">Authors</div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Publishing Packages</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Package</th>
                  <th className="py-3 px-4 text-left">Price (INR/USD)</th>
                  <th className="py-3 px-4 text-left">Services Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {packages.map((pkg, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-medium">{pkg.name}</td>
                    <td className="py-3 px-4">{pkg.priceInr} / {pkg.priceUsd}</td>
                    <td className="py-3 px-4">{pkg.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Know Us</h3>
            <p className="text-gray-700 mb-4">
              Learn about GCA Publishing's mission to empower authors through seamless, high-quality self-publishing. Our leadership shares insights into why owning full rights and control over your book matters.
            </p>
            <p className="text-gray-700">
              Watch our interview videos to discover why GCA Publishing is your ideal publishing partner.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="font-medium">Register — Create your free account and start your publishing journey.</li>
              <li className="font-medium">Choose Format — Pick from eBook, Paperback, or Audiobook.</li>
              <li className="font-medium">Write or Upload — Use our intuitive DIY tool or upload your print-ready files.</li>
              <li className="font-medium">Publish — Review your creation and submit for publication.</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-blue-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Get Started Today</h3>
          <p className="text-center mb-6">
            Turn your manuscript into a professionally published book and reach readers worldwide. Join the GCA Publishing family now!
          </p>
          <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors">
              Publish Your Book
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publishing