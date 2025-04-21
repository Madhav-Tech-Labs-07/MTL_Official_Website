import SectionHeading from "../../ui/SectionHeading"
import TestimonialCard from "../../ui/TestimonialCard"

const TestimonialsSection = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      content:
        "Madhav Tech Labs delivered exceptional designs for our brand. Their affordable pricing and quick turnaround time made them our go-to design partner.",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Priya Patel",
      role: "Marketing Manager",
      content:
        "The social media designs created by Madhav Tech Labs helped us increase our engagement by 40%. Highly recommended for small businesses!",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Vikram Singh",
      role: "E-commerce Owner",
      content:
        "Their backend services are top-notch. They integrated payment gateways and set up automation that saved us countless hours of manual work.",
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <section className="relative section py-16 md:py-24 bg-gray-50">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/5 rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent/10 rotate-12 hidden md:block"></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-primary/20 rounded-full hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-accent/20 rotate-45 hidden md:block"></div>

      <div className="container relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied clients"
          centered={true}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default TestimonialsSection
