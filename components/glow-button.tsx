"use client"

import * as React from "react"

export interface GlowBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colors?: string[]
  duration?: number
  glowIntensity?: "subtle" | "medium" | "intense"
  paused?: boolean
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowBorderButtonProps>(
  (
    {
      children,
      colors = ["#d43a22", "#8e56f6", "#81c2f8"],
      duration = 3,
      glowIntensity = "subtle",
      paused = false,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const glowConfig = {
      subtle: { blur: "10px", opacity: 0.4 },
      medium: { blur: "20px", opacity: 0.6 },
      intense: { blur: "30px", opacity: 0.8 },
    }

    const { blur, opacity } = glowConfig[glowIntensity]
    const gradient = `conic-gradient(from var(--glow-angle), ${colors.join(", ")}, ${colors[0]})`

    return (
      <button
        className={"group relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-bold transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"}
        ref={ref}
        style={
          {
            "--glow-duration": `${duration}s`,
            "--glow-blur": blur,
            "--glow-opacity": opacity,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {/* Keyframes injection */}
        <style>{`
        @property --glow-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes glow-rotate {
          from { --glow-angle: 0deg; }
          to { --glow-angle: 360deg; }
        }
      `}</style>

        {/* Glow layer (behind) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[2px] rounded-xl opacity-[var(--glow-opacity)] blur-[var(--glow-blur)]"
          style={{
            background: gradient,
            animation: paused ? "none" : "glow-rotate var(--glow-duration) linear infinite",
          }}
        />

        {/* Border layer */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[2px] rounded-xl"
          style={{
            background: gradient,
            animation: paused ? "none" : "glow-rotate var(--glow-duration) linear infinite",
          }}
        />

        {/* Inner background */}
        <span className="pointer-events-none absolute inset-[2px] rounded-[10px] bg-background" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 text-foreground">{children}</span>
      </button>
    )
  },
)

GlowButton.displayName = "GlowBorderButton"

export default GlowButton;