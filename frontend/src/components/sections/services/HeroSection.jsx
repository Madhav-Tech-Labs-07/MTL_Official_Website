const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white py-16">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 hidden md:block"></div>
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-white/10 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 border border-accent/20 rounded-full hidden md:block"></div>

      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
          From eye-catching designs to powerful backend solutions, we offer a wide range of services to help your
          business grow.
        </p>
      </div>

      {/* Diagonal Cut Divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-2"></div>
      </div>
    </section>
  )
}

export default HeroSection
