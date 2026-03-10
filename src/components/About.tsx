export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="text-blue-800 text-sm font-semibold uppercase tracking-wider">About RVSF</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Built for India&apos;s Vehicle Recycling Industry
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              With India&apos;s Vehicle Scrappage Policy driving the growth of Registered Vehicle Scrapping Facilities (RVSF), managing operations efficiently has never been more important.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Our ERP platform is purpose-built for RVSFs — from vehicle acquisition and dismantling tracking to GST-compliant invoicing and government reporting. Everything you need, in one place.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Government Compliant",
                "Made for Indian RVSFs",
                "Secure Cloud Platform",
                "Regular Updates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Platform?</h3>
            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Industry-Specific",
                  desc: "Not a generic ERP — built exclusively for vehicle scrapping operations.",
                },
                {
                  number: "02",
                  title: "Compliance First",
                  desc: "GST, e-way bills, and government reporting built right in.",
                },
                {
                  number: "03",
                  title: "Easy to Use",
                  desc: "Clean interface designed for daily operations, not IT experts.",
                },
                {
                  number: "04",
                  title: "Affordable",
                  desc: "Starting at just ₹1,499/month with a free 7-day trial.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-4">
                  <span className="text-blue-300 font-bold text-lg">{item.number}</span>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-blue-200 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
