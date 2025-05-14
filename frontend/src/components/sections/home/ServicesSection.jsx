"use client"

import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import SectionHeading from "../../ui/SectionHeading"
import ServiceCard from "../../ui/ServiceCard"

const ServicesSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", reveal)
    reveal() // Call once on load

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  // Featured services data
  const featuredServices = [
    {
      title: "Website Design",
      description:
        "Professional, responsive websites for businesses in Vadodara. From digital cards to multi-page sites.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      category: "website-design",
      price: "₹300 - ₹4,500",
    },
    {
      title: "Social Media Designs",
      description: "Eye-catching designs for Instagram, Facebook, and WhatsApp to boost your social media presence.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          ></path>
        </svg>
      ),
      category: "social-media-designs",
      price: "₹300 - ₹1,500",
    },
    {
      title: "Document & Presentation",
      description: "Professional resumes, business proposals, and presentations designed for impact.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
      category: "documents",
      price: "₹200 - ₹1,000",
    },
    {
      title: "Teaching & Ed-Tech",
      description: "Digital solutions for tutors and coaching institutes in Vadodara, including online class setup.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      ),
      category: "teaching-edtech",
      price: "₹50 - ₹1,000",
    },
    {
      title: "Business & Branding",
      description: "Professional branding solutions including logos, business cards, letterheads and more.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      category: "business-branding",
      price: "₹200 - ₹3,000",
    },
    {
      title: "Digital Setup Services",
      description: "WhatsApp Business setup, Google Forms, Drive organization, and more for your digital presence.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
      category: "digital-setup",
      price: "₹200 - ₹800",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative section py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/10 rotate-12 hidden md:block"></div>
      <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-accent/20 rounded-full hidden md:block"></div>

      <div className="container relative z-10">
        <div className="reveal fade-bottom">
          <SectionHeading
            title="Our Popular Services"
            subtitle="From website design to digital solutions, we've got Vadodara businesses covered"
            centered={true}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              category={service.category}
              price={service.price}
            />
          ))}
        </div>

        <div className="mt-12 text-center reveal fade-bottom">
          <Link
            to="/services"
            className="btn btn-primary group relative overflow-hidden"
            style={{
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(10, 95, 108, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = ""
            }}
          >
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-[-8px]">
              View All Services
            </span>
            <svg
              className="w-0 h-0 inline-block transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:ml-2 opacity-0 group-hover:opacity-100 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full bg-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Clean Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default ServicesSection
