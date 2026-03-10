"use client";

import { useState, useEffect } from "react";

const APP_URL = "https://app.rvsf-india.com/subscriptions/register/";
const LOGIN_URL = "https://app.rvsf-india.com/accounts/login/";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/25">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
              RVSF
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-sm font-medium transition-colors group ${
                  scrolled ? "text-gray-600 hover:text-blue-700" : "text-white/80 hover:text-white"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href={LOGIN_URL}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-blue-700" : "text-white/80 hover:text-white"
              }`}
            >
              Login
            </a>
            <a
              href={APP_URL}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-gray-100 text-gray-700" : "hover:bg-white/10 text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-2 p-4 shadow-2xl border border-gray-100 space-y-2">
            {["Features", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-blue-700 text-sm font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href={LOGIN_URL}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-700 hover:text-blue-700 text-sm font-medium py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Login
            </a>
            <a
              href={APP_URL}
              className="block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl text-sm font-semibold text-center mt-2"
            >
              Get Started Free
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
