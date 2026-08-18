import Image from 'next/image'

type LogoProps = {
  size?: number
  showWordmark?: boolean
  className?: string
  wordmarkClassName?: string
}

export function Logo({
  size = 44,
  showWordmark = true,
  className,
  wordmarkClassName = 'text-ink',
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <span
        className="relative inline-block shrink-0 rounded-full ring-1 ring-copper/30"
        style={{
          width: size,
          height: size,
          boxShadow:
            '0 6px 18px -8px rgba(169,99,31,0.45), 0 1px 3px rgba(0,0,0,0.08)',
        }}
      >
        <Image
          src="/images/dlaruslogo.webp"
          alt="D'LARUS seagull emblem"
          fill
          sizes="64px"
          className="rounded-full object-cover"
          priority
        />
      </span>
      {showWordmark && (
        <span
          className={`font-serif text-xl font-bold tracking-[0.2em] ${wordmarkClassName}`}
        >
          D&apos;LARUS
        </span>
      )}
    </div>
  )
}
