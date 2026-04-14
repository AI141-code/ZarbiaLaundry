'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

type Service = { en: string; ar: string; iconSrc: string }

const laundryServices: Service[] = [
  { en: 'Washing & Ironing', ar: 'الغسيل والكي', iconSrc: '/laundry-remove-bg-io_r1_c1.png' },
  { en: 'Only Pressing', ar: 'الكي فقط', iconSrc: '/laundry-remove-bg-io_r1_c2.png' },
  { en: 'Dry Cleaning', ar: 'التنظيف الجاف', iconSrc: '/laundry-remove-bg-io_r1_c3.png' },
  { en: 'Blankets & Comforters', ar: 'تنظيف البطانيات واللحافات', iconSrc: '/laundry-remove-bg-io_r1_c4.png' },
  { en: 'Carpet & Rugs Cleaning', ar: 'تنظيف السجاد والموكيت', iconSrc: '/laundry-remove-bg-io_r1_c5.png' },
  { en: 'Mattress Protector', ar: 'حافظات المراتب', iconSrc: '/laundry-remove-bg-io_r2_c1.png' },
  { en: 'Party & Bridal Gowns', ar: 'فساتين السهرة وفساتين الزفاف', iconSrc: '/laundry-remove-bg-io_r2_c2.png' },
  { en: 'Curtains & Blackout', ar: 'تنظيف الستائر والبلاك أوت', iconSrc: '/laundry-remove-bg-io_r2_c3.png' },
  { en: 'Hand Bags & Shoes Cleaning', ar: 'تنظيف جميع أنواع الحقائب والأحذية', iconSrc: '/laundry-remove-bg-io_r2_c4.png' },
  { en: 'Leather Jacket Cleaning & Polishing', ar: 'تنظيف وتلميع جاكيتات الجلد', iconSrc: '/laundry-remove-bg-io_r2_c5.png' },
]

const inHouseServices: Service[] = [
  { en: 'Deep Cleaning', ar: 'التنظيف العميق', iconSrc: '/laundry-remove-bg-io_r3_c1.png' },
  { en: 'Sofa & Chairs Cleaning', ar: 'تنظيف الكنب والكراسي', iconSrc: '/laundry-remove-bg-io_r3_c2.png' },
  { en: 'Carpet & Rug Cleaning', ar: 'تنظيف السجاد والموكيت', iconSrc: '/laundry-remove-bg-io_r3_c3.png' },
  { en: 'Headboard, Bed & Mattress Cleaning', ar: 'تنظيف الهيدبورد، السرير، والمراتب', iconSrc: '/laundry-remove-bg-io_r3_c4.png' },
  { en: 'Car Detailing with Shampoo & Steaming', ar: 'تلميع وتنظيف السيارات بالشامبو والبخار', iconSrc: '/laundry-remove-bg-io_r3_c5.png' },
]

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 hover:border-primary/30 h-full">
      {/* English Title */}
      <h3 className="text-lg font-bold text-gray-900 leading-tight">
        {service.en}
      </h3>

      {/* Icon */}
      <div className="mt-4 mb-4 flex items-center justify-center">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24">
          <Image
            src={service.iconSrc}
            alt={service.en}
            fill
            sizes="96px"
            className="object-contain drop-shadow-sm"
            priority={false}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-red-500 rounded-full my-3" />

      {/* Arabic Title */}
      <p className="text-sm font-semibold text-gray-700 text-right" dir="rtl">
        {service.ar}
      </p>
    </div>
  )
}

function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: 'left' | 'right'
  onClick: () => void
  label: string
}) {
  const common =
    'absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-md border border-gray-200 hover:bg-white transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center'
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`${common} ${direction === 'left' ? 'left-2' : 'right-2'}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2">
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  )
}

function ServicesCarousel({ services }: { services: Service[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const lastInteractAtRef = useRef<number>(-1e9)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!api) return

    const intervalMs = 2200
    const idleAfterInteractMs = 1200

    const tick = () => {
      if (paused) return
      const t = typeof performance !== 'undefined' ? performance.now() : Date.now()
      if (t - lastInteractAtRef.current < idleAfterInteractMs) return
      api.scrollNext()
    }

    const id = window.setInterval(tick, intervalMs)
    return () => window.clearInterval(id)
  }, [api, paused])

  const markInteract = () => {
    lastInteractAtRef.current = typeof performance !== 'undefined' ? performance.now() : Date.now()
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: 'start' }}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onPointerDownCapture={markInteract}
      onTouchStartCapture={markInteract}
    >
      <ArrowButton
        direction="left"
        label="Previous services"
        onClick={() => {
          markInteract()
          api?.scrollPrev()
        }}
      />
      <ArrowButton
        direction="right"
        label="Next services"
        onClick={() => {
          markInteract()
          api?.scrollNext()
        }}
      />

      <CarouselContent className="-ml-3">
        {services.map((service, idx) => (
          <CarouselItem key={`${service.en}-${idx}`} className="pl-3 basis-full lg:basis-1/3">
            <ServiceCard service={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default function Services() {
  return (
    <section id="services" className="w-full py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span>Our </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-700">
            Professional Laundry, Specialized Carpet cleaning, and In-house cleaning solutions
          </p>
          <p className="mt-2 text-base text-gray-600 font-semibold text-center" dir="rtl">
            غسيل احترافي، وتنظيف سجاد متخصص، وحلول تنظيف داخل البيت
          </p>
        </div>

        {/* Laundry Services */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <svg className="w-8 h-8 text-yellow-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Laundry Services
          </h3>

          <ServicesCarousel services={laundryServices} />
        </div>

        {/* In-House Services */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            In-House Services
          </h3>

          <ServicesCarousel services={inHouseServices} />
        </div>
      </div>
    </section>
  )
}
