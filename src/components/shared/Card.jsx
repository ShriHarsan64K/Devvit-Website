import React from 'react'
// KAN-9 | Shared Component: Card
// Variants: feature (What We Do), event, team member

export default function Card({
  variant = 'feature',
  title,
  subtitle,
  description,
  date,
  image,
  name,
  role,
  quote,
  className = '',
  children,
}) {
  // ── Feature Card (What We Do section) ──────────────────────
  if (variant === 'feature') {
    return (
      <div
        className={`relative overflow-hidden border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-devvit-purple/50 hover:bg-white/10 group ${className}`}
      >
        {subtitle && (
          <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-devvit-purple mb-3">
            {subtitle}
          </p>
        )}
        <h3 className="font-lexend font-bold text-xl text-devvit-white mb-2 group-hover:text-devvit-purple transition-colors duration-200">
          {title}
        </h3>
        {description && (
          <p className="font-inter text-sm text-white/60 leading-relaxed">{description}</p>
        )}
        {children}
        {/* Hover accent line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-devvit-purple transition-all duration-300 group-hover:w-full" />
      </div>
    )
  }

  // ── Event Card ──────────────────────────────────────────────
  if (variant === 'event') {
    return (
      <div
        className={`border border-white/10 bg-white/5 p-6 flex gap-6 transition-all duration-300 hover:border-devvit-purple/40 group ${className}`}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-cover flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        )}
        <div className="flex flex-col justify-center">
          {date && (
            <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-devvit-orange mb-2">
              {date}
            </p>
          )}
          <h3 className="font-lexend font-bold text-xl text-devvit-white mb-2">{title}</h3>
          {description && (
            <p className="font-inter text-sm text-white/60 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    )
  }

  // ── Team Member Card ────────────────────────────────────────
  if (variant === 'team') {
    return (
      <div
        className={`border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-devvit-purple/40 group ${className}`}
      >
        <h3 className="font-lexend font-bold text-base text-devvit-white mb-1">{name}</h3>
        {role && (
          <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-devvit-purple mb-4">
            {role}
          </p>
        )}
        {quote && (
          <p className="font-inter text-sm text-white/60 leading-relaxed italic">"{quote}"</p>
        )}
      </div>
    )
  }

  // ── Default / Generic Card ──────────────────────────────────
  return (
    <div
      className={`border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-devvit-purple/40 ${className}`}
    >
      {title && (
        <h3 className="font-lexend font-bold text-xl text-devvit-white mb-2">{title}</h3>
      )}
      {description && (
        <p className="font-inter text-sm text-white/60 leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  )
}