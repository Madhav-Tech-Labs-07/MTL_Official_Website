"use client"
import { Helmet } from "react-helmet"
import { useEffect, useRef } from "react"
import SectionHeading from "../components/ui/SectionHeading"

const ServicesPage = () => {
  const servicesRef = useRef(null)

  useEffect(() => {
    // Add scroll reveal animation
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

  // Service categories with detailed offerings
  const serviceCategories = [
    {
      title: "Website Design Services",
      description: "Professional, responsive websites for businesses in Vadodara",
      services: [
        {
          name: "Digital Visiting Card",
          price: "₹300–₹700",
          description: "One scroll page with name, photo, contact links, business services, and WhatsApp button",
        },
        {
          name: "1-Page Website/Landing Page",
          price: "₹1,000–₹2,500",
          description: "Business intro, services, call-to-action, contact form (Google Form embed), responsive",
        },
        {
          name: "Standard Website (3–5 Pages)",
          price: "₹3,000–₹4,500",
          description:
            "Home, About, Services, Contact, Gallery or Testimonials. Includes mobile responsive + SEO basics",
        },
        {
          name: "Link-in-Bio Page",
          price: "₹500–₹800",
          description: "Custom Instagram/YouTube LinkTree-style page with buttons and brand color",
        },
        {
          name: "Business Portfolio Site",
          price: "₹2,000–₹3,000",
          description: "For freelancers, shops, creators—About, Work Showcase, Reviews, WhatsApp link",
        },
        {
          name: "Festival Offer Page",
          price: "₹800–₹1,200",
          description: "Page for special sales/events with countdown timer and custom banner",
        },
      ],
    },
    {
      title: "Social Media Services",
      description: "Eye-catching designs for Instagram, Facebook, and WhatsApp",
      services: [
        {
          name: "Social Media Starter Pack",
          price: "₹1,000–₹1,500/month",
          description: "12 posts (Canva), 3/week, branded for their business",
        },
        {
          name: "Business Insta Profile Setup",
          price: "₹300–₹500",
          description: "Setup username, bio, profile pic, links, highlight covers",
        },
        {
          name: "Festival Post Pack",
          price: "₹500–₹800",
          description: "10 ready-made Canva posts for Indian festivals",
        },
        {
          name: "Reel Strategy Add-on",
          price: "+₹500",
          description: "Content ideas + caption samples + 3 example scripts",
        },
        { name: "Post Template Pack", price: "₹500", description: "10 Canva editable templates with client branding" },
      ],
    },
    {
      title: "Document & Presentation Services",
      description: "Professional documents and presentations for businesses and individuals",
      services: [
        {
          name: "Professional Resume Design",
          price: "₹250–₹500",
          description: "Modern resume in Word + PDF format (Canva or custom template)",
        },
        {
          name: "Business Proposal or Pricing PDF",
          price: "₹300–₹700",
          description: "Well-designed PDF with branding for services/products",
        },
        {
          name: "PPT Presentation Design",
          price: "₹500–₹1,000",
          description: "6–12 slides, professional layout, icons, transitions",
        },
        {
          name: "Notes Formatting for Teachers",
          price: "₹400–₹800",
          description: "Convert raw content into clean, readable PDFs with titles, bullets",
        },
        {
          name: "Custom Certificate Design",
          price: "₹200–₹500",
          description: "Editable Canva or image-based certificate for online classes or events",
        },
      ],
    },
    {
      title: "Teaching & Ed-Tech Services",
      description: "Digital solutions for tutors and coaching institutes in Vadodara",
      services: [
        {
          name: "1:1 Doubt Solving Class",
          price: "₹50–₹100 (20–30 min)",
          description: "On Zoom/Meet, any subject/topic (Gujarati/Hindi/English)",
        },
        {
          name: "Chapter-wise Online Class",
          price: "₹150–₹300 (60 min)",
          description: "Full chapter explanation with notes and examples",
        },
        {
          name: "Weekly Tutoring Plan",
          price: "₹700–₹1,000",
          description: "5 classes/week via Zoom/Meet (Science, Math, English)",
        },
        {
          name: "Basic YouTube Teaching Channel Setup",
          price: "₹500",
          description: "Help them create banner, thumbnails, upload first video",
        },
        {
          name: "Custom Notes Creation",
          price: "₹500–₹1,000",
          description: "PDF study notes in easy language, diagrams if needed",
        },
        {
          name: "Student Google Classroom Setup",
          price: "₹300",
          description: "Create class, invite students, guide how to use",
        },
      ],
    },
    {
      title: "Utility & Digital Setup Services",
      description: "Setup and configuration services for your digital presence",
      services: [
        {
          name: "WhatsApp Business Setup",
          price: "₹500",
          description: "Business profile setup, welcome message, quick replies, catalog",
        },
        {
          name: "Google Form Creation",
          price: "₹200–₹400",
          description: "Custom form with branding (for feedback, booking, etc.)",
        },
        {
          name: "Google Drive Resource Folder Setup",
          price: "₹300",
          description: "Create organized folder for notes, files, shareable links",
        },
        {
          name: "Free Hosting Help (GitHub Pages)",
          price: "₹200",
          description: "Host static site for free using GitHub",
        },
        {
          name: "Basic SEO Optimization",
          price: "₹300–₹800",
          description: "Add titles, meta tags, image alt tags, performance improvements",
        },
        {
          name: "Payment Link Setup (Razorpay/Instamojo)",
          price: "₹250–₹400",
          description: "Setup account + create 1 product link or donation link",
        },
      ],
    },
  ]

  // Combo packages
  const comboPackages = [
    {
      name: "Start-Up Digital Kit",
      price: "₹3,000",
      description: "1-page website + 12 social posts + Insta profile setup",
    },
    { name: "Teaching Pack", price: "₹2,500", description: "Google Classroom setup + PPT + Notes PDF + Resume" },
    { name: "Personal Branding Kit", price: "₹2,000", description: "Resume + Link-in-Bio Page + 10 Canva Templates" },
    {
      name: "Mini Institute Pack",
      price: "₹4,500",
      description: "3-page site + WhatsApp setup + 12 posts + certificate design",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Our Services - Madhav Tech Labs | Vadodara's Premier Tech Solution</title>
        <meta
          name="description"
          content="Explore our comprehensive range of affordable digital services including website design, social media, document creation, teaching solutions and more for businesses in Vadodara."
        />
        <meta
          name="keywords"
          content="website design Vadodara, social media design, resume design, teaching services, digital services Gujarat"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-deep-sea text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

        <div className="container relative z-10 text-center">
          <div className="opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              From eye-catching designs to digital solutions, we offer a wide range of affordable services tailored for
              businesses and individuals in Vadodara.
            </p>
          </div>
        </div>

        {/* Clean Diagonal Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="container">
          <div className="reveal fade-bottom">
            <SectionHeading
              title="Our Complete Service Menu"
              subtitle="Affordable digital solutions for businesses and individuals in Vadodara"
              centered={true}
            />
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className={`reveal ${index % 2 === 0 ? "fade-right" : "fade-left"}`}>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-primary">
                  {category.title}
                  <div className="h-1 w-16 bg-accent mt-2 rounded-full"></div>
                </h2>
                <p className="text-lg text-gray-600 mb-8">{category.description}</p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-md">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="py-4 px-6 text-left">Service</th>
                        <th className="py-4 px-6 text-left">Price</th>
                        <th className="py-4 px-6 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {category.services.map((service, serviceIndex) => (
                        <tr key={serviceIndex} className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6 font-medium">{service.name}</td>
                          <td className="py-4 px-6 text-primary font-medium">{service.price}</td>
                          <td className="py-4 px-6 text-gray-600">{service.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="reveal fade-bottom">
            <SectionHeading
              title="Combo Packages"
              subtitle="Save more with our carefully curated packages"
              centered={true}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comboPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 reveal fade-bottom"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Combo Pack
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-4">₹{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <a
                  href="https://wa.me/9173337926?text=I'm%20interested%20in%20the%20combo%20package:%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center"
                >
                  Get This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="reveal fade-bottom">
            <SectionHeading
              title="Add-On Services"
              subtitle="Enhance your project with these additional services"
              centered={true}
            />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "WhatsApp Floating Button", price: "₹150" },
              { name: "Map Integration", price: "₹100" },
              { name: "Instagram Embed", price: "₹100" },
              { name: "Favicon Setup", price: "₹100" },
              { name: "Logo Design (Basic Canva)", price: "₹500" },
              { name: "Upload to Client's Domain", price: "₹300" },
              { name: "Install Free SSL (Cloudflare or cPanel)", price: "₹150" },
            ].map((addon, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 reveal fade-bottom"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{addon.name}</h3>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-deep-sea text-white">
        <div className="container text-center">
          <div className="reveal fade-bottom">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements and get a free quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn btn-accent">
                Get a Quote
              </a>
              <a
                href="https://wa.me/9173337926"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
