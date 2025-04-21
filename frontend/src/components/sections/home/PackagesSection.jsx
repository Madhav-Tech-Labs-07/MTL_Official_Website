import { Link } from "react-router-dom"
import SectionHeading from "../../ui/SectionHeading"
import PackageCard from "../../ui/PackageCard"

const PackagesSection = () => {
  // Featured packages data
  const featuredPackages = [
    {
      title: "Startup Kit",
      price: "499",
      features: ["Logo Design", "Business Card", "Instagram Post Template", "Free Revisions", "Quick Delivery"],
      popular: true,
    },
    {
      title: "Social Buzz Pack",
      price: "699",
      features: ["10 Instagram Posts", "5 Instagram Stories", "YouTube Thumbnail", "Free Revisions", "Quick Delivery"],
    },
    {
      title: "Backend Booster",
      price: "999",
      features: ["Contact Form Setup", "SMTP Configuration", "API Integration", "Technical Support", "Documentation"],
    },
  ]

  return (
    <section className="relative section py-16 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-primary/5 -skew-y-3 transform origin-top-right hidden md:block"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-accent/10 rounded-full hidden md:block"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary/20 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-accent/20 rounded-full hidden md:block"></div>

      <div className="container relative z-10 pt-12">
        <SectionHeading
          title="Featured Packages"
          subtitle="Save more with our carefully curated packages designed for different needs"
          centered={true}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPackages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              popular={pkg.popular}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/pricing" className="btn btn-primary">
            View All Packages
          </Link>
        </div>
      </div>

      {/* Triangle Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  )
}

export default PackagesSection
