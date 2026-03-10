"use client";

import { useState } from "react";

const APP_URL = "https://app.rvsf-india.com/subscriptions/register/";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">RVSF</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-800 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-800 transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-800 transition-colors text-sm font-medium">
              About
            </a>
            <a
              href={APP_URL}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <a href="#features" onClick={() => setMobileOpen(false)} className="block text-gray-600 hover:text-blue-800 text-sm font-medium py-2">
              Features
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="block text-gray-600 hover:text-blue-800 text-sm font-medium py-2">
              Pricing
            </a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="block text-gray-600 hover:text-blue-800 text-sm font-medium py-2">
              About
            </a>
            <a
              href={APP_URL}
              className="block bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors"
            >
              Get Started Free
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
