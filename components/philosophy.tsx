'use client'

import { Factory, Store, Snowflake, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { Reveal } from './reveal'

export function Philosophy() {
  return (
    <section id="concept" className="bg-marble py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-copper uppercase">
              System Architecture
            </p>
            <h2 className="font-serif text-4xl leading-tight font-bold text-balance sm:text-5xl">
              <span className="text-ink">Not a Bakery. </span>
              <span className="text-copper-gradient">A System Factory.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              We eliminate the &quot;artisan trap.&quot; With our €385k
              centralized cold-chain logistics, 80% of production is perfected
              at the core. The store operates on a 20% plug-and-play model. Zero
              operational friction, ultimate scalability — from Plovdiv to the
              world.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Snowflake,
                  title: 'Centralized Cold-Chain',
                  desc: 'Perfected production, controlled quality.',
                },
                {
                  icon: Zap,
                  title: 'Plug-and-Play Store',
                  desc: 'Launch fast with minimal staffing.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-cream/80 p-5 shadow-[0_2px_16px_-8px_rgba(26,26,26,0.15)]"
                >
                  <item.icon className="mb-3 text-copper" size={22} />
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Flow schematic */}
        <Reveal delay={0.15}>
          <div className="relative rounded-3xl border border-ink/10 bg-cream/70 p-8 shadow-[0_20px_60px_-30px_rgba(18,53,36,0.25)] backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <FlowNode
                icon={Factory}
                label="Trakia 51 Core"
                sub="80% production • cold-chain"
                highlight
              />

              <FlowPipe />

              <div className="grid w-full grid-cols-3 gap-4">
                {['Pavilion', 'Historic', 'Mall Kiosk'].map((label, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <FlowNode icon={Store} label={label} sub="20% finish" />
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-center text-xs tracking-wide text-ink-soft">
              Universal DNA · Regional finishing · Zero operational friction
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FlowNode({
  icon: Icon,
  label,
  sub,
  highlight = false,
}: {
  icon: typeof Factory
  label: string
  sub: string
  highlight?: boolean
}) {
  return (
    <div
      className={`flex w-full flex-col items-center rounded-2xl border px-3 py-4 text-center ${
        highlight
          ? 'border-copper/40 bg-copper/10'
          : 'border-ink/10 bg-cream'
      }`}
    >
      <span
        className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${
          highlight
            ? 'bg-copper-gradient text-cream'
            : 'bg-petrol/10 text-petrol'
        }`}
      >
        <Icon size={18} />
      </span>
      <span className="text-sm font-semibold text-ink">{label}</span>
      <span className="text-[11px] text-ink-soft">{sub}</span>
    </div>
  )
}

function FlowPipe() {
  return (
    <div className="relative my-4 h-12 w-full">
      <div className="absolute top-0 left-1/2 h-6 w-px -translate-x-1/2 bg-copper/40" />
      <div className="absolute bottom-0 left-[16.6%] h-6 w-px bg-copper/30" />
      <div className="absolute bottom-0 left-1/2 h-6 w-px -translate-x-1/2 bg-copper/30" />
      <div className="absolute right-[16.6%] bottom-0 h-6 w-px bg-copper/30" />
      <div className="absolute top-6 left-[16.6%] h-px w-[66.8%] bg-copper/30" />
      <motion.span
        className="absolute top-[22px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-copper"
        animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
