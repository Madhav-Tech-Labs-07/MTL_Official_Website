"use client"

import { useState } from "react"
import SectionHeading from "../components/ui/SectionHeading"

const PortfolioPage = () => {
  // Filter state
  const [activeFilter, setActiveFilter] = useState("all")

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: "Instagram Post Series",
      category: "social-media",
      image: "/placeholder.svg?height=300&width=400",
      description: "A series of Instagram posts for a fashion brand.",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "branding",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity for a tech startup.",
    },
    {
      id: 3,
      title: "Product Brochure",
      category: "marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Tri-fold brochure design for a product launch.",
    },
    {
      id: 4,
      title: "Wedding Invitation",
      category: "event",
      image: "/placeholder.svg?height=300&width=400",
      description: "Digital wedding invitation design.",
    },
    {
      id: 5,
      title: "WhatsApp Bot",
      category: "backend",
      image: "/placeholder.svg?height=300&width=400",
      description: "Custom WhatsApp bot for customer support.",
    },
    {
      id: 6,
      title: "YouTube Channel Art",
      category: "social-media",
      image: "/placeholder.svg?height=300&width=400",
      description: "YouTube banner and thumbnail designs.",
    },
    {
      id: 7,
      title: "Logo Collection",
      category: "branding",
      image: "/placeholder.svg?height=300&width=400",
      description: "A collection of logo designs for various clients.",
    },
    {
      id: 8,
      title: "Event Poster",
      category: "event",
      image: "/placeholder.svg?height=300&width=400",
      description: "Poster design for a music festival.",
    },
    {
      id: 9,
      title: "Payment Integration",
      category: "backend",
      image: "/placeholder.svg?height=300&width=400",
      description: "Razorpay payment gateway integration for an e-commerce site.",
    },
  ]

  // Filter portfolio items based on active filter
  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  // Modal state
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Check out some of our recent work across different categories.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Work"
            subtitle="Browse through our portfolio to see what we can do for you"
            centered={true}
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "all" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "social-media" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("social-media")}
            >
              Social Media
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "branding" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("branding")}
            >
              Branding
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "marketing" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("marketing")}
            >
              Marketing
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "event" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("event")}
            >
              Event
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "backend" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("backend")}
            >
              Backend
            </button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="card overflow-hidden cursor-pointer group" onClick={() => openModal(item)}>
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No items found</h3>
              <p className="text-gray-600 mb-4">Try selecting a different category.</p>
              <button className="btn btn-primary" onClick={() => setActiveFilter("all")}>
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="mb-6">
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Description</h4>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Category</h4>
                  <p className="text-gray-600 capitalize">{selectedItem.category.replace("-", " ")}</p>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button className="btn btn-primary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Like What You See?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Let's work together to create something amazing for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn btn-accent">
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioPage
