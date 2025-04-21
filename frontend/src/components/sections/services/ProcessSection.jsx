import SectionHeading from "../../ui/SectionHeading"

const ProcessSection = () => {
  return (
    <section className="relative section py-16 md:py-24 bg-gray-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full hidden md:block"></div>
      <div className="absolute bottom-0 left-10 w-24 h-24 bg-accent/5 rotate-45 hidden md:block"></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-accent rounded-full hidden md:block"></div>

      <div className="container relative z-10">
        <SectionHeading
          title="Our Process"
          subtitle="Simple, transparent, and efficient - here's how we work"
          centered={true}
        />

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Consultation</h3>
            <p className="text-gray-600">We discuss your requirements and understand your vision.</p>

            {/* Connector Line - Only visible on desktop */}
            <div className="absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-8 hidden md:block"></div>
          </div>

          <div className="text-center relative">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Proposal</h3>
            <p className="text-gray-600">We provide a detailed proposal with timeline and pricing.</p>

            {/* Connector Line - Only visible on desktop */}
            <div className="absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-8 hidden md:block"></div>
          </div>

          <div className="text-center relative">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Creation</h3>
            <p className="text-gray-600">Our team works on your project with regular updates.</p>

            {/* Connector Line - Only visible on desktop */}
            <div className="absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-8 hidden md:block"></div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
              4
            </div>
            <h3 className="text-xl font-bold mb-2">Delivery</h3>
            <p className="text-gray-600">We deliver the final product with any necessary revisions.</p>
          </div>
        </div>
      </div>

      {/* Diagonal Cut Divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-primary transform -skew-y-2"></div>
      </div>
    </section>
  )
}

export default ProcessSection
