const APP_URL = "https://app.rvsf-india.com/subscriptions/register/";

export default function CTABanner() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 animate-gradient" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-float-reverse" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Transform Your{" "}
          <span className="underline decoration-white/30 decoration-4 underline-offset-8">RVSF Operations</span>?
        </h2>
        <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
          Join the growing number of vehicle scrapping facilities using our platform. Start your free trial today.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_URL}
            className="bg-white text-indigo-700 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl shadow-black/20 hover:shadow-black/30 hover:scale-105 w-full sm:w-auto text-center"
          >
            Start Free Trial — No Card Required
          </a>
        </div>

        <p className="mt-6 text-white/50 text-sm">
          7 days free · All features included · Cancel anytime
        </p>
      </div>
    </section>
  );
}
