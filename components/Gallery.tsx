'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { CarouselApi } from '@/components/ui/carousel'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const galleryItems = [
  { id: 1, type: 'image', title: 'Professional Laundry Service', image: '/gallery-1.jpg' },
  { id: 2, type: 'image', title: 'Cleaning & Pressing', image: '/gallery-2.jpg' },
  { id: 3, type: 'image', title: 'Premium Care', image: '/gallery-3.jpg' },
  { id: 4, type: 'image', title: 'Fabric Care', image: '/gallery-5.jpg' },
  { id: 5, type: 'video', title: 'Service Demo' },
  { id: 6, type: 'image', title: 'Quality Assurance', image: '/gallery-4.jpg' },
]

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
    'absolute top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-md border border-gray-200 hover:bg-white transition flex items-center justify-center'
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

function GalleryCarousel({ items }: { items: Array<{ id: number; title: string; image: string }> }) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const lastInteractAtRef = useRef<number>(-1e9)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!api) return

    const intervalMs = 2400
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
        label="Previous images"
        onClick={() => {
          markInteract()
          api?.scrollPrev()
        }}
      />
      <ArrowButton
        direction="right"
        label="Next images"
        onClick={() => {
          markInteract()
          api?.scrollNext()
        }}
      />

      <CarouselContent className="-ml-3">
        {items.map((item) => (
          <CarouselItem key={item.id} className="pl-3 basis-full lg:basis-1/3">
            <div className="relative group rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-md hover:shadow-xl transition-shadow">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/35 md:bg-black/0 md:group-hover:bg-black/45 transition-colors flex items-center justify-center">
                <p className="text-white text-center font-semibold text-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity px-4">
                  {item.title === 'Professional Laundry Service' ? (
                    <>
                      <span className="block sm:inline">Professional Laundry</span>{' '}
                      <span className="block sm:inline">Service</span>
                    </>
                  ) : (
                    item.title
                  )}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default function Gallery() {
  const videoItem = galleryItems.find((i) => i.type === 'video')
  const imageItems = galleryItems.filter(
    (i): i is { id: number; type: 'image'; title: string; image: string } => i.type === 'image',
  )

  return (
    <section id="gallery" className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Showcasing our professional work and premium quality
          </p>
        </div>

        {/* Video Demo (kept above the slider) */}
        {videoItem && (
          <div className="mb-8">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-md">
              <div className="p-10 sm:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-semibold">{videoItem.title}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Images Carousel */}
        <GalleryCarousel items={imageItems} />
      </div>
    </section>
  )
}
