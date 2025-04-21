const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-primary"} relative inline-block`}
      >
        {title}
        {/* Decorative underline */}
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
      </h2>
      {subtitle && <p className={`text-lg ${light ? "text-gray-300" : "text-gray-600"}`}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
