const APP_URL = "https://app.rvsf-india.com/subscriptions/register/";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          7-Day Free Trial — No Payment Required
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          The Complete ERP for{" "}
          <span className="text-blue-800">Vehicle Recycling</span>{" "}
          & Scrap Facilities
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Manage vehicles, sales, GST compliance, vendors, and analytics — all in one powerful platform built for RVSF operations in India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_URL}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-green-600/25 w-full sm:w-auto text-center"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="border-2 border-gray-300 hover:border-blue-800 text-gray-700 hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto text-center"
          >
            See Features
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-blue-800">100%</div>
            <div className="text-sm text-gray-500 mt-1">GST Compliant</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-800">24/7</div>
            <div className="text-sm text-gray-500 mt-1">Cloud Access</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-800">10+</div>
            <div className="text-sm text-gray-500 mt-1">Modules</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-800">Free</div>
            <div className="text-sm text-gray-500 mt-1">7-Day Trial</div>
          </div>
        </div>
      </div>
    </section>
  );
}
