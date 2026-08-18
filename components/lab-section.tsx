'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

const GALLERY = [
  {
    image: '/images/lab-interior.png',
    caption: 'R&D Lab & commercial workplace',
    span: 'md:col-span-2',
  },
  {
    image: '/images/Brunch .jpg',
    caption: 'Freestanding pavilion format',
    span: '',
  },
  {
    image: '/images/mobileseller.jpg',
    caption: 'Historic building integration',
    span: '',
  },
]

export function LabSection() {
  return (
    <section id="lab" className="bg-anthracite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-copper uppercase">
            Physical Proof
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight font-bold text-balance sm:text-5xl">
              <span className="text-copper-gradient">Proven at Trakia 51,</span>{' '}
              <span className="text-cream">Plovdiv.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-cream/70">
              Our commercial workplace and R&amp;D Lab — built for ultimate
              architectural flexibility: freestanding pavilions, historic
              building integrations, and mall kiosks.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {GALLERY.map((item, i) => (
            <Reveal key={item.image} delay={i * 0.08} className={item.span}>
              <figure className="group relative h-[280px] overflow-hidden rounded-3xl border border-copper/15 md:h-[360px]">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 rounded-full border border-copper/30 bg-anthracite/70 px-4 py-1.5 text-sm font-medium text-cream backdrop-blur-sm">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
