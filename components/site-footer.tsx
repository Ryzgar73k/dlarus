import { Logo } from './logo'

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'The Concept', href: '#concept' },
      { label: 'Menu Engine', href: '#menu' },
      { label: 'Trakia 51 Lab', href: '#lab' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'EUIPO Trademark', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
  {
    heading: 'Portals',
    links: [
      { label: 'B2B Ordering (ekmeksepeti.com)', href: '#' },
      { label: 'Franchise Portal', href: '#franchise' },
      { label: 'dlarus.eu', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-copper/15 bg-petrol">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size={64} showWordmark={false} />
            <p className="mt-5 font-serif text-2xl font-bold tracking-[0.15em] text-copper-gradient">
              D&apos;LARUS
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/55">
              Operated by Focal Point International.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold tracking-[0.25em] text-copper uppercase">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-copper-bright"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-copper/10 pt-6">
          <p className="text-xs text-cream/50">
            © 2026 D&apos;LARUS EOOD. Engineered for the Future.
          </p>
        </div>
      </div>
    </footer>
  )
}
