'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const branches = [
  {
    id: 1,
    name: 'Al Mansoura',
    area: '',
    phone: '+974 5099 4422',
    whatsapp: '97450994422',
    address: 'Al Mansoura, Qatar'
  },
  {
    id: 2,
    name: 'Al Dafna',
    area: 'Al Jazi Garden',
    phone: '+974 5043 5533',
    whatsapp: '97450435533',
    address: 'Al Dafna, Al Jazi Garden, Qatar'
  },
  {
    id: 3,
    name: 'Al Wukair',
    area: 'Ezdan',
    phone: '+974 7407 6076',
    whatsapp: '97474076076',
    address: 'Al Wukair, Ezdan, Qatar'
  },
  {
    id: 4,
    name: 'Al Shamal',
    area: '',
    phone: '+974 3386 1144',
    whatsapp: '97433861144',
    address: 'Al Shamal, Qatar'
  }
]

export default function Branches() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleBranch = (id: number) => {
    if (isMobile) {
      // Mobile: toggle all branches
      setExpandedId(expandedId === id ? null : id)
    } else {
      // Desktop: only one expanded at a time
      setExpandedId(expandedId === id ? null : id)
    }
  }

  const openWhatsApp = (whatsappNumber: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi%20Zarbia%20Laundry`, '_blank')
  }

  const openMaps = (query: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
    window.open(url, '_blank')
  }

  return (
    <section id="branches" className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span>Our </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Branches</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find us at convenient locations across the city
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                expandedId === branch.id
                  ? 'border-2 border-orange-500 shadow-lg'
                  : 'border border-gray-200 shadow hover:border-orange-400'
              } bg-white hover:shadow-md`}
            >
              {/* Card Header */}
              <button
                onClick={() => toggleBranch(branch.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors min-h-[152px]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {branch.area}
                    </p>
                    <p className="text-xs text-orange-500 font-medium mt-2">
                      Tap to view details
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-2 ${
                      expandedId === branch.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === branch.id && (
                <div className="px-6 pt-4 pb-6 border-t border-gray-200 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  {/* Address */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Address
                    </p>
                    <p className="text-sm text-gray-600">
                      {branch.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Action Icons */}
                  <div className="flex items-center justify-center gap-3 pt-1">
                    <Button
                      onClick={() => openWhatsApp(branch.whatsapp)}
                      size="icon"
                      className="h-11 w-11 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-sm"
                      aria-label="WhatsApp"
                      title="WhatsApp"
                    >
                      <svg className="h-6 w-6" viewBox="0 0 58 58" fill="none">
                        <path style={{fill:'#FFFFFF'}} d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
                        <path style={{fill:'#2CB742'}} d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
                      </svg>
                    </Button>

                    <Button
                      onClick={() => openMaps(branch.address)}
                      size="icon"
                      variant="outline"
                      className="h-11 w-11 rounded-full border-gray-300 bg-white shadow-sm"
                      aria-label="Location"
                      title="Location"
                    >
                      <div className="relative h-6 w-6">
                        <Image
                          src="/google-maps.png"
                          alt=""
                          fill
                          className="object-contain"
                          sizes="24px"
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
