"use client"

import { Link } from "react-router-dom"
import SectionHeading from "../../ui/SectionHeading"
import PackageCard from "../../ui/PackageCard"

const PackagesSection = () => {
  // Featured packages data
  const featuredPackages = [
    {
      title: "Website Starter",
      price: "1,000",
      features: [
        "1-Page Website/Landing Page",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "WhatsApp Button",
        "Free Revisions",
        "24-48 Hour Delivery",
      ],
      popular: false,
      badge: "Best for Small Businesses",
    },
    {
      title: "Business Growth Pack",
      price: "3,000",
      features: [
        "3-5 Page Website",
        "Social Media Starter Pack (12 posts)",
        "Business Profile Setup",
        "SEO Basics",
        "Free Revisions",
        "Priority Support",
      ],
      popular: true,
      badge: "Most Popular",
    },
    {
      title: "Teaching Pack",
      price: "2,500",
      features: [
        "Google Classroom Setup",
        "Professional PPT Design",
        "Notes PDF Creation",
        "Resume Design",
        "Free Revisions",
        "Technical Support",
      ],
      popular: false,
      badge: "Perfect for Educators",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative section py-16 md:py-24 bg-gray-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-primary/5 -skew-y-3 transform origin-top-right hidden md:block"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-accent/10 rounded-full hidden md:block"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary/20 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-accent/20 rounded-full hidden md:block"></div>

      <div className="container relative z-10 pt-12">
        <SectionHeading
          title="Featured Packages"
          subtitle="Save more with our carefully curated packages designed for Vadodara businesses"
          centered={true}
        />

        <div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredPackages.map((pkg, index) => (
            <div key={index} variants={itemVariants}>
              <PackageCard
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular}
                badge={pkg.badge}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/pricing" className="btn btn-primary">
            View All Packages
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            Need a custom package?{" "}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              Contact us
            </Link>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>

      {/* Triangle Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}

export default PackagesSection
