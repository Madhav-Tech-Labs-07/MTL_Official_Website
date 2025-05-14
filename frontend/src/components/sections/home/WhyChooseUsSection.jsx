"use client"

import SectionHeading from "../../ui/SectionHeading"

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: "Affordable Pricing",
      description: "Premium quality designs and services at budget-friendly prices, starting from just ₹99.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Quick Turnaround",
      description: "Fast delivery on all projects. Most designs are delivered within 24-48 hours.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
      title: "Quality Guaranteed",
      description: "We don't compromise on quality. Free revisions until you're 100% satisfied.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          ></path>
        </svg>
      ),
      title: "Local Support",
      description: "Based in Vadodara, we offer support in English, Gujarati, and Hindi for your convenience.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
      title: "Innovative Solutions",
      description: "We combine creativity with technical expertise to deliver solutions that stand out.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: "24/7 Availability",
      description: "We're always available on WhatsApp for urgent requirements and support.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative section py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full hidden md:block"></div>
      <div className="absolute bottom-0 left-10 w-24 h-24 bg-accent/5 rotate-45 hidden md:block"></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-accent rounded-full hidden md:block"></div>

      <div className="container relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We combine creativity with technical expertise to deliver solutions that work for your business in Vadodara"
          centered={true}
        />

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-custom transform transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-lg border border-gray-100"
              variants={itemVariants}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-deep-sea rounded-xl shadow-custom-lg overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <div className="p-6 md:p-8 text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm md:text-base text-gray-300">Happy Clients</div>
            </div>
            <div className="p-6 md:p-8 text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-300">Projects Completed</div>
            </div>
            <div className="p-6 md:p-8 text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24h</div>
              <div className="text-sm md:text-base text-gray-300">Average Turnaround</div>
            </div>
            <div className="p-6 md:p-8 text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.9</div>
              <div className="text-sm md:text-base text-gray-300">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Cut Divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 transform -skew-y-2"></div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
