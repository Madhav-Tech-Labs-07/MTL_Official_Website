import { Link } from "react-router-dom"
import Hero_Img from "../../../assets/image.png"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-deep-sea text-white py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-accent/20 rotate-45 hidden md:block"></div>
      <div
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/10 rounded-full hidden md:block animate-pulse"
        style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
      ></div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-accent/30 rounded-full hidden md:block"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent-light rounded-full text-sm font-medium mb-4">
              Vadodara's Premier Tech Solution
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Affordable Design & Digital Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-xl">
              Elevate your brand with premium designs and digital solutions at budget-friendly prices. Perfect for
              startups and small businesses in Vadodara and across Gujarat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn btn-accent hover:scale-105 transition-transform">
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-transform"
              >
                Get Free Consultation
              </Link>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img
                  src={Hero_Img}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src={Hero_Img}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src={Hero_Img}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white">Trusted by 100+ businesses in Gujarat</p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-300">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hidden md:block opacity-0 scale-90 animate-[fadeInScale_0.6s_ease-out_0.2s_forwards]"
            style={{
              animation: "fadeInScale 0.6s ease-out 0.2s forwards",
              "@keyframes fadeInScale": {
                "0%": { opacity: 0, transform: "scale(0.9)" },
                "100%": { opacity: 1, transform: "scale(1)" },
              },
            }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-lg -rotate-6"></div>
              <img
                src={Hero_Img || "/placeholder.svg"}
                alt="Madhav Tech Labs Hero"
                className="rounded-lg shadow-lg relative z-10 animate-[float_6s_ease-in-out_infinite]"
                style={{
                  animation: "float 6s ease-in-out infinite",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                  },
                }}
              />

              {/* Tech icons floating around the image */}
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-white p-3 rounded-full shadow-lg animate-[float_6s_ease-in-out_infinite]">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div
                className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4 bg-white p-3 rounded-full shadow-lg animate-[float_6s_ease-in-out_1s_infinite]"
                style={{
                  animation: "float 6s ease-in-out 1s infinite",
                }}
              >
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <div
                className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-[float_6s_ease-in-out_1.5s_infinite]"
                style={{
                  animation: "float 6s ease-in-out 1.5s infinite",
                }}
              >
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Diagonal Divider - No decorative elements in between */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-14 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-off-white"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
