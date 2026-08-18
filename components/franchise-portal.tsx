'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from './reveal'

export function FranchisePortal() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="franchise" className="bg-anthracite py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-copper uppercase">
              B2B Franchise Portal
            </p>
            <h2 className="font-serif text-4xl leading-tight font-bold text-balance sm:text-5xl">
              <span className="text-copper-gradient">Scale The Empire</span>{' '}
              <span className="text-cream">With Us.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70">
              Request the confidential investor memorandum and Franchise
              Disclosure Document. Our expansion team reviews every serious
              inquiry.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-copper/20 bg-petrol/40 p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle2 className="text-copper-bright" size={48} />
                <h3 className="font-serif text-2xl font-bold text-cream">
                  Memorandum Requested
                </h3>
                <p className="max-w-md text-cream/70">
                  Thank you. Our expansion desk will reach out with the investor
                  memorandum &amp; FDD shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-7 sm:grid-cols-2">
                <Field
                  label="Full Name / Corporate Entity"
                  name="name"
                  placeholder="Jane Doe / Acme Holdings"
                  required
                />
                <Field
                  label="Business Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="region"
                    className="text-xs font-medium tracking-wide text-cream/70 uppercase"
                  >
                    Target Region
                  </label>
                  <select
                    id="region"
                    name="region"
                    required
                    defaultValue=""
                    className="border-0 border-b border-copper/25 bg-transparent py-2.5 text-cream outline-none transition-colors focus:border-copper [&>option]:bg-petrol [&>option]:text-cream"
                  >
                    <option value="" disabled>
                      Select a region
                    </option>
                    <option value="europe">Europe</option>
                    <option value="mena">MENA</option>
                    <option value="asia">Asia</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="capital"
                    className="text-xs font-medium tracking-wide text-cream/70 uppercase"
                  >
                    Available Capital Tier
                  </label>
                  <select
                    id="capital"
                    name="capital"
                    required
                    defaultValue=""
                    className="border-0 border-b border-copper/25 bg-transparent py-2.5 text-cream outline-none transition-colors focus:border-copper [&>option]:bg-petrol [&>option]:text-cream"
                  >
                    <option value="" disabled>
                      Select a tier
                    </option>
                    <option value="t1">€250k – €500k</option>
                    <option value="t2">€500k – €1M</option>
                    <option value="t3">€1M – €5M</option>
                    <option value="t4">€5M+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="copper-sheen group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-copper-gradient px-7 py-4 text-base font-semibold text-anthracite transition-transform hover:scale-[1.02] sm:col-span-2"
                >
                  Request Investor Memorandum &amp; FDD
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-medium tracking-wide text-cream/70 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-0 border-b border-copper/25 bg-transparent py-2.5 text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-copper"
      />
    </div>
  )
}
