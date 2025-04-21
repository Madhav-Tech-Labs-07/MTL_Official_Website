import { Link } from "react-router-dom"

const PackageCard = ({ title, price, features, popular = false }) => {
  return (
    <div
      className={`card p-6 relative group hover:-translate-y-2 transition-all duration-300 ${popular ? "border-2 border-accent" : ""}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 -z-10 transform origin-top-right rotate-45 -translate-x-12 translate-y-12 group-hover:bg-primary/10 transition-all duration-300"></div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">₹{price}</span>
      </div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-accent mt-0.5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className={`btn w-full text-center ${popular ? "btn-accent" : "btn-primary"}`}>
        Get Started
      </Link>
    </div>
  )
}

export default PackageCard
