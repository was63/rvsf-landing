const APP_URL = "https://app.rvsf-india.com/subscriptions/register/";

const plans = [
  {
    name: "Monthly",
    price: "1,499",
    period: "/month",
    description: "Flexible month-to-month billing",
    badge: null,
    features: [
      "Full ERP Access",
      "All Modules Included",
      "Unlimited Users",
      "Cloud-Based — Access Anywhere",
      "Email Support",
      "Automatic Updates",
    ],
    highlight: false,
  },
  {
    name: "Yearly",
    price: "16,000",
    period: "/year",
    description: "Save ₹1,988 compared to monthly",
    badge: "MOST POPULAR",
    features: [
      "Full ERP Access",
      "All Modules Included",
      "Unlimited Users",
      "Cloud-Based — Access Anywhere",
      "Priority Email Support",
      "Automatic Updates",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />

      {/* Decorative blobs */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-reverse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
            Pricing
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="mt-5 text-lg text-blue-100/70 max-w-2xl mx-auto">
            Start with a free 7-day trial. No credit card required. Choose a plan when you&apos;re ready.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/20 scale-[1.03] hover:scale-[1.05]"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02]"
              }`}
            >
              {/* Shimmer effect on highlighted card */}
              {plan.highlight && (
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
                </div>
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-green-500/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="relative z-10">
                {/* Plan name */}
                <h3 className="text-lg font-semibold text-blue-200">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-bold text-white">₹{plan.price}</span>
                  <span className="text-lg text-blue-300/70">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-blue-200/60">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-blue-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={APP_URL}
                  className={`mt-8 block w-full py-4 rounded-xl text-center font-semibold transition-all text-lg ${
                    plan.highlight
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Start 7-Day Free Trial
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-blue-200/50 text-sm">
          No credit card required to start your free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
