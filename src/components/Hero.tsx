const APP_URL = "https://app.rvsf-india.com/subscriptions/register/";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 animate-gradient" />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-float" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          7-Day Free Trial — No Payment Required
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto animate-fade-in-up delay-100">
          <span className="text-white">The Complete ERP for </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Vehicle Recycling
          </span>
          <span className="text-white"> & Scrap Facilities</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Manage vehicles, sales, GST compliance, vendors, and analytics — all in one powerful platform built for RVSF operations in India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href={APP_URL}
            className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 animate-pulse-glow w-full sm:w-auto text-center"
          >
            Start Free Trial
            <span className="ml-2">→</span>
          </a>
          <a
            href="#features"
            className="border-2 border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all hover:bg-white/5 w-full sm:w-auto text-center backdrop-blur-sm"
          >
            Explore Features
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-400">
          {[
            { value: "100%", label: "GST Compliant", icon: "🛡️" },
            { value: "24/7", label: "Cloud Access", icon: "☁️" },
            { value: "10+", label: "Modules", icon: "📦" },
            { value: "Free", label: "7-Day Trial", icon: "🎁" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-blue-200/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
