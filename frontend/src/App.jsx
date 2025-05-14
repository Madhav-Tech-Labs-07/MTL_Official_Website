"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import MobileNavigation from "./components/layout/MobileNavigation"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import ServiceCategoryPage from "./pages/ServiceCategoryPage"
import PricingPage from "./pages/PricingPage"
import PortfolioPage from "./pages/PortfolioPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServiceCategoryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  )
}

export default App
