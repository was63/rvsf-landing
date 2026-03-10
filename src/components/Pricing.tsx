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
    badge: "BEST VALUE",
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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-blue-800 text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start with a free 7-day trial. No credit card required. Choose a plan when you&apos;re ready.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 relative ${
                plan.highlight
                  ? "bg-blue-800 text-white shadow-2xl shadow-blue-800/25 scale-[1.02]"
                  : "bg-white text-gray-900 border border-gray-200 shadow-lg"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-lg font-semibold ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-bold">₹{plan.price}</span>
                <span className={`text-lg ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`mt-2 text-sm ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-green-400" : "text-green-600"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={APP_URL}
                className={`mt-8 block w-full py-3.5 rounded-lg text-center font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-white text-blue-800 hover:bg-blue-50"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Start 7-Day Free Trial
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          No credit card required to start your free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
