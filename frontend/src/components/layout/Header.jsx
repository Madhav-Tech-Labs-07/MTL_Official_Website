"use client"

import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Logo from "../ui/Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-base font-medium transition-colors duration-300 ${
      isActive ? "text-accent" : "text-primary hover:text-accent"
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-off-white py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
          <span className="ml-2 text-xl font-bold">Madhav Tech Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={navLinkClass}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={navLinkClass}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navLinkClass}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn btn-accent">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 md:hidden" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <div className="w-6 h-6 flex flex-col justify-center items-center relative">
            <span
              className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isMenuOpen ? "absolute rotate-45" : "mb-1.5"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isMenuOpen ? "absolute -rotate-45" : "mt-1.5"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <div
              className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container py-4">
                <ul className="flex flex-col space-y-2">
                  <li>
                    <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" className={navLinkClass} onClick={toggleMenu}>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricing" className={navLinkClass} onClick={toggleMenu}>
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/portfolio" className={navLinkClass} onClick={toggleMenu}>
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" className={navLinkClass} onClick={toggleMenu}>
                      Blog
                    </NavLink>
                  </li>
                  <li className="pt-2">
                    <Link to="/contact" className="btn btn-accent w-full text-center" onClick={toggleMenu}>
                      Let's Connect !
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
