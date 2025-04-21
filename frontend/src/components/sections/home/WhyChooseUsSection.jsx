import SectionHeading from "../../ui/SectionHeading"

const WhyChooseUsSection = () => {
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
          subtitle="We combine creativity with technical expertise to deliver solutions that work for your business"
          centered={true}
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-custom transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
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
            </div>
            <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">
              Premium quality designs and services at budget-friendly prices, starting from just ₹99.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-custom transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
            <p className="text-gray-600">
              Fast delivery on all projects. Most designs are delivered within 24-48 hours.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-custom transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
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
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">We don't compromise on quality. Free revisions until you're 100% satisfied.</p>
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
