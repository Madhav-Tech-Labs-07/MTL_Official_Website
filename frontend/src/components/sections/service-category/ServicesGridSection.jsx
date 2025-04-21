"use client"

import ServiceCard from "../../ui/ServiceCard"

const ServicesGridSection = ({ filteredServices, setPriceRange, setSortBy }) => {
  return (
    <section className="relative section py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/10 rotate-12 hidden md:block"></div>
      <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-accent/20 rounded-full hidden md:block"></div>
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border border-primary/20 rotate-45 hidden md:block"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              price={service.price}
              link="/contact"
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setPriceRange([0, 2000])
                setSortBy("default")
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-primary"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-primary"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default ServicesGridSection
