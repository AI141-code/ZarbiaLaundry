'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const openWhatsApp = () => {
    window.open('https://wa.me/97433861144?text=Hi%20Zarbia%20Laundry', '_blank')
  }

  return (
    <section id="home" className="relative w-full sm:min-h-[60vh] flex items-center py-8 sm:py-20 pb-2 sm:pb-14 md:pb-12 overflow-hidden">
      {/* Gradient background - Orange to Red */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-red-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 z-10 text-center md:text-left mb-6 md:mb-0">
            {/* Mobile: logo + headline side-by-side */}
            <div className="md:hidden flex items-center justify-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-lg flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Zarbia Laundry"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-3xl font-bold text-white leading-tight text-left">
                Free Pick-Up &amp; Delivery
              </h1>
            </div>

            {/* Desktop: Logo + Heading side by side */}
            <div className="hidden md:flex items-center gap-6">
              <div className="bg-white rounded-full p-6 shadow-lg flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Zarbia Laundry"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight text-balance">
                Free Pick-Up &amp; Delivery
              </h1>
            </div>

            {/* Mobile: heading moved beside logo */}
            
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Professional Laundry &amp; Cleaning Services — Trusted Since 2015
            </p>

            <p className="text-base sm:text-lg font-medium">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 ring-1 ring-white/25 px-3 py-1 text-white">
                <span aria-hidden="true">✨</span>
                <span>Specialists in Carpet Cleaning</span>
              </span>
            </p>

            {/* Mobile: show illustration right after specialization */}
            <div className="md:hidden pt-2">
              {/* Fixed-height wrapper so scaled illustration doesn't reserve full height */}
              <div className="relative mx-auto h-[190px] w-full max-w-sm">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 origin-top scale-50">
                  {/* Animated washing machine illustration */}
                  <div className="relative w-full max-w-sm">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-red-300 rounded-3xl blur-2xl opacity-30 animate-pulse" />

                    {/* Washing machine container */}
                    <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-orange-200">
                      {/* Drum (rotating) */}
                      <div className="flex justify-center">
                        <div className="relative w-48 h-48 rounded-full border-8 border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden shadow-inner">
                          {/* Spinning animation */}
                          <div className="absolute inset-4 rounded-full border-4 border-gray-200 animate-spin" style={{ animationDuration: '3s' }}>
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute top-2 left-1/2 w-2 h-2 bg-gray-300 rounded-full transform -translate-x-1/2" />
                            <div className="absolute bottom-2 right-1/4 w-2 h-2 bg-gray-300 rounded-full" />
                          </div>

                          {/* Center dot */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-gray-400 rounded-full shadow-md" />
                          </div>
                        </div>
                      </div>

                      {/* Floating bubbles */}
                      <div className="mt-6 flex justify-around px-4">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-4 h-4 bg-gradient-to-b from-blue-300 to-blue-200 rounded-full opacity-60 shadow-lg"
                            style={{
                              animation: `float 2s ease-in-out infinite`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>

                      {/* Details */}
                      <div className="mt-6 text-center">
                        <p className="text-sm font-semibold text-gray-700">Fast & Reliable</p>
                        <p className="text-xs text-gray-500 mt-1">Professional Care</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Animated Visual */}
          <div className="hidden md:flex relative h-52 sm:h-72 md:h-96 items-center justify-center z-10 mt-6 md:mt-0 mb-6 md:mb-0">
            {/* Animated washing machine illustration */}
            <div className="relative w-full max-w-sm">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-red-300 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              {/* Washing machine container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-orange-200">
                {/* Drum (rotating) */}
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 rounded-full border-8 border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden shadow-inner">
                    {/* Spinning animation */}
                    <div className="absolute inset-4 rounded-full border-4 border-gray-200 animate-spin" style={{ animationDuration: '3s' }}>
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute top-2 left-1/2 w-2 h-2 bg-gray-300 rounded-full transform -translate-x-1/2" />
                      <div className="absolute bottom-2 right-1/4 w-2 h-2 bg-gray-300 rounded-full" />
                    </div>

                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-400 rounded-full shadow-md" />
                    </div>
                  </div>
                </div>

                {/* Floating bubbles */}
                <div className="mt-6 flex justify-around px-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-gradient-to-b from-blue-300 to-blue-200 rounded-full opacity-60 shadow-lg"
                      style={{
                        animation: `float 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>

                {/* Details */}
                <div className="mt-6 text-center">
                  <p className="text-sm font-semibold text-gray-700">Fast & Reliable</p>
                  <p className="text-xs text-gray-500 mt-1">Professional Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group"
        title="Chat on WhatsApp"
      >
        <div className="relative flex items-center">
          {/* Hint tooltip */}
          <div className="absolute right-16 bg-gray-800 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800" />
          </div>
          {/* Button */}
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 58 58" fill="none">
              <path style={{fill:'#2CB742'}} d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
              <path style={{fill:'#FFFFFF'}} d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
            </svg>
          </div>
        </div>
      </button>

      {/* Floating animation style */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-20px); opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
