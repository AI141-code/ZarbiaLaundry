'use client'

import { Button } from '@/components/ui/button'

export default function Contact() {
  const openWhatsApp = () => {
    window.open('https://wa.me/97433861144?text=Hi%20Zarbia%20Laundry', '_blank')
  }

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Ready to experience premium laundry care?
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-8 sm:p-12 space-y-8 border border-white/60">
          {/* WhatsApp CTA */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Contact Us Easily
            </h3>
            <p className="text-gray-600 text-lg">
              Send us your blue address plate photo on WhatsApp and we&apos;ll get started!
            </p>

            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden bg-white border border-sky-100 shadow-sm p-2">
                <img
                  src="/address_plate.gif"
                  alt="Blue address plate example"
                  className="block w-auto h-auto max-w-full"
                />
              </div>
            </div>
            
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-700 text-white rounded-full px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 58 58" fill="none">
                <path style={{fill:'#2CB742'}} d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
                <path style={{fill:'#FFFFFF'}} d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
              </svg>
              WhatsApp Us Now
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Phone Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 text-center">
              Call Us
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="tel:+97433861144"
                className="block bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <p className="text-sm text-gray-600 mb-1">Main Line</p>
                <p className="text-2xl font-bold text-primary">+974 3386 1144</p>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 font-semibold mb-4">
            Operating Hours: Monday - Sunday, 7:00 AM - 10:00 PM
          </p>
          <p className="text-gray-600">
            We offer same-day pickup service for orders before 12:00 PM
          </p>
        </div>
      </div>
    </section>
  )
}
