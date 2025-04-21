const HeroSection = ({ categoryInfo }) => {
  return (
    <section className="relative bg-primary text-white py-16">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 hidden md:block"></div>
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-white/10 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 border border-accent/20 rounded-full hidden md:block"></div>

      <div className="container relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white mr-4">
            {categoryInfo.icon}
          </div>
          <h1 className="text-4xl font-bold">{categoryInfo.title}</h1>
        </div>
        <p className="text-xl mb-8 text-gray-300 max-w-3xl">{categoryInfo.description}</p>
      </div>

      {/* Diagonal Cut Divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 transform -skew-y-2"></div>
      </div>
    </section>
  )
}

export default HeroSection
