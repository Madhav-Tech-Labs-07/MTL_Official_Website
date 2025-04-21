import { Link } from "react-router-dom"
import SectionHeading from "../components/ui/SectionHeading"
import PackageCard from "../components/ui/PackageCard"

const PricingPage = () => {
  // Packages data
  const packages = [
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
      title: "Event Kit",
      price: "799",
      features: ["Invitation Design", "Event Poster", "WhatsApp Status", "Free Revisions", "Quick Delivery"],
    },
    {
      title: "Backend Booster",
      price: "999",
      features: ["Contact Form Setup", "SMTP Configuration", "API Integration", "Technical Support", "Documentation"],
    },
    {
      title: "Automation Pack",
      price: "1299",
      features: ["WhatsApp Bot", "CRON Job Setup", "Payment API Integration", "Technical Support", "Documentation"],
    },
    {
      title: "Complete Branding",
      price: "1499",
      features: ["Logo Design", "Business Card", "Letterhead", "Email Signature", "Social Media Kit"],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing & Packages</h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Affordable pricing for quality design and technical services. Choose from our packages or get individual
            services.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Value Packages"
            subtitle="Save more with our carefully curated packages designed for different needs"
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Individual Services"
            subtitle="Browse our individual services by category"
            centered={true}
          />

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Service</th>
                  <th className="py-4 px-6 text-left">Category</th>
                  <th className="py-4 px-6 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-6 font-medium">Instagram Post</td>
                  <td className="py-4 px-6">Social Media</td>
                  <td className="py-4 px-6 text-right">₹149</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Instagram Story</td>
                  <td className="py-4 px-6">Social Media</td>
                  <td className="py-4 px-6 text-right">₹99</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Logo Design (basic)</td>
                  <td className="py-4 px-6">Business & Branding</td>
                  <td className="py-4 px-6 text-right">₹249</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Business Card</td>
                  <td className="py-4 px-6">Business & Branding</td>
                  <td className="py-4 px-6 text-right">₹149</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Poster Design</td>
                  <td className="py-4 px-6">Marketing</td>
                  <td className="py-4 px-6 text-right">₹199</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Wedding Invitation</td>
                  <td className="py-4 px-6">Events & Personal</td>
                  <td className="py-4 px-6 text-right">₹349</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">API Integration</td>
                  <td className="py-4 px-6">Backend</td>
                  <td className="py-4 px-6 text-right">₹499</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">WhatsApp API Bot</td>
                  <td className="py-4 px-6">Backend</td>
                  <td className="py-4 px-6 text-right">₹999</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our pricing and services"
            centered={true}
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you offer revisions?</h3>
              <p className="text-gray-600">
                Yes, we offer free revisions until you're satisfied with the final design. However, major changes that
                alter the scope of the project may incur additional charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What is your turnaround time?</h3>
              <p className="text-gray-600">
                Most design projects are delivered within 24-48 hours. Backend services may take 2-5 business days
                depending on complexity. We'll provide a specific timeline during the consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you offer discounts for bulk orders?</h3>
              <p className="text-gray-600">
                Yes, we offer discounts for bulk orders and long-term contracts. Contact us for a custom quote based on
                your requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept payments via UPI, bank transfer, and major payment gateways like Razorpay and PayPal. We
                typically require a 50% advance for new clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can I request a custom package?</h3>
              <p className="text-gray-600">
                We understand that every business has unique needs. Contact us to discuss your requirements and we'll
                create a custom package for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and get a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-accent">
              Get a Quote
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingPage
