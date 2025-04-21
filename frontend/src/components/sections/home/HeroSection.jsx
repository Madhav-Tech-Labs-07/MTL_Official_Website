import { Link } from "react-router-dom"
import Hero_Img from "../../../assets/image.png"

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-accent/20 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/10 rounded-full hidden md:block"></div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-accent/30 rounded-full hidden md:block"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl text-white lg:text-6xl font-bold mb-6">Affordable Design & Backend Solutions</h1>
            <p className="text-xl mb-8 text-gray-300">
              Elevate your brand with premium designs and technical solutions at budget-friendly prices. Perfect for
              startups and small businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn btn-accent">
                Explore Services
              </Link>
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us ..
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-lg -rotate-6"></div>
              <img
                src={Hero_Img}
                alt="Madhav Tech Labs Hero"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-14 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-off-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
