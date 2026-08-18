'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/Bitmap (11).webp"
          alt="D'LARUS flagship storefront in bright daylight"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* soft light overlays keeping text readable while staying airy */}
        <div className="absolute inset-0 bg-cream/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-cream/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper/30 bg-cream/70 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          <span className="text-xs font-medium tracking-[0.25em] text-ink-soft uppercase">
            Global HoReCa Franchise System
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="max-w-4xl font-serif text-5xl leading-[1.05] font-bold text-balance sm:text-6xl lg:text-7xl"
        >
          <span className="text-copper-gradient">The Architecture</span>
          <br />
          <span className="text-ink">of Taste &amp; Logistics.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty lg:text-xl"
        >
          Redefining the global HoReCa landscape.{' '}
          <span className="font-semibold text-petrol">
            80% centralized efficiency.
          </span>{' '}
          <span className="font-semibold text-petrol">
            100% Gen-Z Tech-Lounge experience.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#franchise"
            className="copper-sheen group inline-flex items-center justify-center gap-2 rounded-full bg-copper-gradient px-7 py-4 text-base font-semibold text-cream transition-transform hover:scale-[1.03]"
          >
            Explore The Franchise Ecosystem
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#concept"
            className="inline-flex items-center justify-center rounded-full border border-petrol/30 px-7 py-4 text-base font-semibold text-petrol transition-colors hover:bg-petrol/5"
          >
            The System
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-ink/10 pt-8"
        >
          {[
            { value: '€385k', label: 'Cold-chain core investment' },
            { value: '450M', label: 'European consumers in reach' },
            { value: '20%', label: 'In-store plug-and-play model' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-serif text-3xl font-bold text-copper lg:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-ink-soft">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
