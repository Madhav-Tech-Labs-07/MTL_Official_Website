import { Link } from "react-router-dom"

const ServiceCard = ({ title, description, icon, price, link, category }) => {
  return (
    <div className="card p-6 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -z-10 transform origin-bottom-left rotate-45 translate-x-8 -translate-y-8 group-hover:bg-primary/10 transition-all duration-300"></div>

      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="ml-3 text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {price && (
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
        </div>
      )}
      <Link to={link || `/services/${category}`} className="btn btn-primary w-full text-center">
        {price ? "Get This Design" : "View Services"}
      </Link>
    </div>
  )
}

export default ServiceCard
