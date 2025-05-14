"use client"


const TestimonialCard = ({ name, role, content, image, rating = 5 }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 relative border border-gray-100"
      whileHover={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(0, 201, 167, 0.3)",
      }}
    >
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-6xl text-primary/5 font-serif leading-none">"</div>

      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={image || "/placeholder.svg?height=48&width=48"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 relative z-10 mb-4">{content}</p>
      <div className="flex text-accent">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-accent" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard
