export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
              About RVSF
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Built for India&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vehicle Recycling
              </span>{" "}
              Industry
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              With India&apos;s Vehicle Scrappage Policy driving the growth of Registered Vehicle Scrapping Facilities, managing operations efficiently has never been more important.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Our ERP platform is purpose-built for RVSFs — from vehicle acquisition and dismantling tracking to GST-compliant invoicing and government reporting.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Government Compliant", icon: "🏛️" },
                { label: "Made for Indian RVSFs", icon: "🇮🇳" },
                { label: "Secure Cloud Platform", icon: "🔒" },
                { label: "Regular Updates", icon: "🚀" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-800 font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20" />

            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

              <h3 className="text-2xl font-bold mb-8 relative z-10">Why Choose Our Platform?</h3>
              <div className="space-y-7 relative z-10">
                {[
                  {
                    number: "01",
                    title: "Industry-Specific",
                    desc: "Not a generic ERP — built exclusively for vehicle scrapping operations.",
                    color: "from-blue-400 to-cyan-400",
                  },
                  {
                    number: "02",
                    title: "Compliance First",
                    desc: "GST, e-way bills, and government reporting built right in.",
                    color: "from-emerald-400 to-green-400",
                  },
                  {
                    number: "03",
                    title: "Easy to Use",
                    desc: "Clean interface designed for daily operations, not IT experts.",
                    color: "from-purple-400 to-violet-400",
                  },
                  {
                    number: "04",
                    title: "Affordable",
                    desc: "Starting at just ₹1,499/month with a free 7-day trial.",
                    color: "from-orange-400 to-amber-400",
                  },
                ].map((item) => (
                  <div key={item.number} className="flex gap-5">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.number}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                      <p className="text-blue-200/70 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
