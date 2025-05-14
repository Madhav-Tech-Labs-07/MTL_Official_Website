"use client"

import { useState, useEffect } from "react"
import SectionHeading from "../../ui/SectionHeading"
import Hero_Img from "../../../assets/image.png"
import TestimonialCard from "../../ui/TestimonialCard"

const TestimonialsSection = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder, Vadodara",
      content:
        "Madhav Tech Labs delivered exceptional designs for our brand. Their affordable pricing and quick turnaround time made them our go-to design partner.",
      image: {Hero_Img},
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Marketing Manager, Alkapuri",
      content:
        "The social media designs created by Madhav Tech Labs helped us increase our engagement by 40%. Highly recommended for small businesses in Vadodara!",
      image: {Hero_Img},
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "E-commerce Owner, Sayajigunj",
      content:
        "Their backend services are top-notch. They integrated payment gateways and set up automation that saved us countless hours of manual work.",
      image: {Hero_Img},
      rating: 4,
    },
    {
      name: "Meera Desai",
      role: "Tuition Teacher, Manjalpur",
      content:
        "The teaching materials and website they created for my coaching classes are excellent. My students love the digital notes and I got many new inquiries!",
      image: {Hero_Img},
      rating: 5,
    },
    {
      name: "Jayesh Patel",
      role: "Restaurant Owner, Fatehgunj",
      content:
        "They designed our menu and social media posts for Diwali and Navratri. The response was amazing and we saw a 30% increase in orders!",
      image: {Hero_Img},
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay functionality
  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Get visible testimonials (3 at a time on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      return [testimonials[activeIndex]]
    } else {
      return [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length],
      ]
    }
  }

  return (
    <section className="relative section py-16 md:py-24 bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/5 rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent/10 rotate-12 hidden md:block"></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-primary/20 rounded-full hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-accent/20 rotate-45 hidden md:block"></div>

      <div className="container relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied clients in Vadodara"
          centered={true}
        />

        <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                  setTimeout(() => setAutoplay(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-6">Trusted by businesses across Vadodara</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={Hero_Img}
                  alt={`Client ${i}`}
                  className="h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default TestimonialsSection
