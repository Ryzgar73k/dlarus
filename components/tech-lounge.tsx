'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

export function TechLounge() {
  return (
    <section id="tech-lounge" className="bg-petrol py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-copper uppercase">
            The Experience
          </p>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight font-bold text-balance sm:text-5xl">
            <span className="text-copper-gradient">The Gen-Z </span>
            <span className="text-cream">Social Hub.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
            Curing digital fatigue through physical interaction and
            architectural showmanship.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2 lg:h-[560px]">
          <BentoCard
            className="md:col-span-2 md:row-span-2"
            image="/images/Menu3.jpg"
            index="01"
            title="Kinetic Pipe System"
            desc="A live visual show — coffee beans travel through transparent brass tubing overhead, turning logistics into theatre."
            large
          />
          <BentoCard
            image="/images/Staff.jpg"
            index="02"
            title="The Strike Button"
            desc="Gamification and interactive customer moments that turn a coffee run into a story worth posting."
          />
          <BentoCard
            image="/images/fuar.webp"
            index="03"
            title="Ice-Breaker Zones"
            desc="Seating choreography engineered to trigger socialisation and dwell time."
          />
        </div>
      </div>
    </section>
  )
}

function BentoCard({
  className = '',
  image,
  index,
  title,
  desc,
  large = false,
}: {
  className?: string
  image: string
  index: string
  title: string
  desc: string
  large?: boolean
}) {
  return (
    <Reveal className={`group ${className}`}>
      <article className="relative h-full min-h-[240px] overflow-hidden rounded-3xl border border-copper/15 bg-anthracite">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7">
          <span className="mb-2 font-serif text-sm text-copper-bright">
            {index}
          </span>
          <h3
            className={`font-serif font-bold text-cream text-balance ${large ? 'text-2xl lg:text-3xl' : 'text-xl'
              }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 leading-relaxed text-cream/70 ${large ? 'max-w-md text-base' : 'text-sm'
              }`}
          >
            {desc}
          </p>
        </div>
      </article>
    </Reveal>
  )
}
