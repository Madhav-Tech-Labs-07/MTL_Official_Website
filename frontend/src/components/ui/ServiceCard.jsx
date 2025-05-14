"use client"

import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"

const ServiceCard = ({ title, description, icon, price, link, category }) => {
  const cardRef = useRef(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="card p-6 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 border border-gray-100 opacity-0 translate-y-8 transition-all duration-500"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        willChange: "transform, opacity, box-shadow",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)"
        e.currentTarget.style.borderColor = "rgba(0, 201, 167, 0.3)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)"
        e.currentTarget.style.borderColor = "rgba(229, 231, 235, 1)"
      }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -z-10 transform origin-bottom-left rotate-45 translate-x-8 -translate-y-8 group-hover:bg-accent/10 transition-all duration-300"></div>

      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="ml-3 text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {price && (
        <div className="mb-4">
          <span className="text-lg font-bold text-primary">{price}</span>
        </div>
      )}
      <Link
        to={link || `/services/${category}`}
        className="btn btn-primary w-full text-center group overflow-hidden relative"
      >
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-8px]">
          {price ? "Get This Service" : "View Details"}
        </span>
        <svg
          className="w-0 h-0 inline-block transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:ml-2 opacity-0 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  )
}

export default ServiceCard
