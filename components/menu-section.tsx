'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

const ITEMS = [
  {
    tag: 'The Signature Hybrid',
    title: 'Pistachio Cream Croissant & Premium Simit',
    desc: 'Familiar dough, new twist. A universal DNA that reads as both East and West.',
    image: '/images/baklava.webp',
  },
  {
    tag: 'The Liquid Gold',
    title: 'Pale Green Pistachio Latte',
    desc: 'Our trademark signature pour — the drink people travel across the city for.',
    image: '/images/fistikli.webp',
  },
  {
    tag: 'Grab & Go Engine',
    title: 'High-Margin Instant Delivery',
    desc: 'Automated, high-throughput, and built for peak-hour velocity and margin.',
    image: '/images/tatli.webp',
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-copper uppercase">
            Glocalization Menu
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight font-bold text-balance sm:text-5xl">
              <span className="text-copper-gradient">Familiar Dough,</span>{' '}
              <span className="text-ink">New Twist.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              Our menu adapts to 450M Europeans, the Middle East, and Asia. A
              single universal DNA with regional adaptations.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14">
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 lg:px-8">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="snap-start shrink-0"
            >
              <article className="group relative w-[300px] overflow-hidden rounded-3xl border border-copper/15 bg-anthracite sm:w-[380px]">
                <div className="relative h-[300px] overflow-hidden sm:h-[360px]">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 300px, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-copper/40 bg-anthracite/70 px-3 py-1 text-[11px] font-medium tracking-wide text-copper-bright backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-cream text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {item.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="shrink-0" aria-hidden="true" style={{ width: 1 }} />
        </div>
      </div>
    </section>
  )
}
