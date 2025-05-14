"use client"

import { useEffect, useRef } from "react"

const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  const headingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={headingRef}
      className={`mb-12 ${centered ? "text-center" : ""} opacity-0 translate-y-8 transition-all duration-700`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${
          light ? "text-white" : "text-primary"
        } relative inline-block`}
      >
        {title}
        {/* Decorative underline with animation */}
        <span
          className="absolute bottom-0 left-0 w-0 h-1 bg-accent rounded-full transition-all duration-1000"
          style={{
            animation: "expandWidth 1.2s ease-out forwards 0.5s",
            "@keyframes expandWidth": {
              "0%": { width: "0%" },
              "100%": { width: "50%" },
            },
          }}
        ></span>
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${light ? "text-gray-300" : "text-gray-600"} max-w-3xl ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
