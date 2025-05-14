import { Helmet } from "react-helmet"
import HeroSection from "../components/sections/home/HeroSection"
import WhyChooseUsSection from "../components/sections/home/WhyChooseUsSection"
import ServicesSection from "../components/sections/home/ServicesSection"
import PackagesSection from "../components/sections/home/PackagesSection"
import TestimonialsSection from "../components/sections/home/TestimonialsSection"
import CTASection from "../components/sections/home/CTASection"

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Madhav Tech Labs - Affordable Design & Technical Solutions in Vadodara</title>
        <meta
          name="description"
          content="Affordable design and backend services for startups and small businesses in Vadodara, Gujarat. Get professional websites, social media designs, and technical solutions at budget-friendly prices."
        />
        <meta
          name="keywords"
          content="web design Vadodara, affordable website Gujarat, social media design, backend services, API integration, digital marketing Vadodara"
        />
        <link rel="canonical" href="https://madhavtechlabs.com/" />
      </Helmet>

      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default HomePage
