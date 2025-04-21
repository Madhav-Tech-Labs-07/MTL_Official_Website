import SectionHeading from "../components/ui/SectionHeading";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Madhav Tech Labs</h1>
              <p className="text-xl mb-8 text-gray-300">
                We're a team of passionate designers and developers creating affordable solutions for startups and small businesses.
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="/placeholder.svg?height=300&width=500" 
                alt="Madhav Tech Labs Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Story" 
            subtitle="How we started and where we're going"
            centered={true}
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/placeholder.svg?height=400&width=500" 
                alt="Our Story" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                Madhav Tech Labs was founded in 2022 with a simple mission: to provide affordable design and technical solutions to startups and small businesses.
              </p>
              <p className="text-gray-600 mb-4">
                We noticed that many small businesses struggle to afford professional design and technical services, often settling for subpar solutions that don't represent their brand well.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, with experience in both design and development, decided to bridge this gap by offering high-quality services at prices that small businesses can afford.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped hundreds of businesses establish their online presence and create a strong brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Mission" 
            subtitle="What drives us every day"
            centered={true}
          />
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600">
              Our mission is to democratize access to professional design and technical services, making them accessible to businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                💰
              </div>
              <h3 className="text-xl font-bold mb-2">Affordability</h3>
              <p className="text-gray-600">
                We believe quality design shouldn't break the bank. Our services are priced for small businesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-2">Creativity</h3>
              <p className="text-gray-600">
                We use modern tools like Canva and custom code to bring brands to life with stunning visuals and smart backend.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                ⚙️
              </div>
              <h3 className="text-xl font-bold mb-2">Simplicity</h3>
              <p className="text-gray-600">
                We simplify tech for our clients. No jargon. Just clean, fast, effective solutions that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The creative minds behind Madhav Tech Labs"
            centered={true}
          />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <img src="/placeholder.svg?size=150" alt="Founder" className="mx-auto rounded-full mb-4" />
              <h4 className="font-bold text-lg">Rahul Sharma</h4>
              <p className="text-gray-500">Founder & Full-Stack Developer</p>
            </div>
            <div>
              <img src="/placeholder.svg?size=150" alt="Designer" className="mx-auto rounded-full mb-4" />
              <h4 className="font-bold text-lg">Nisha Verma</h4>
              <p className="text-gray-500">Creative Designer</p>
            </div>
            <div>
              <img src="/placeholder.svg?size=150" alt="Automation" className="mx-auto rounded-full mb-4" />
              <h4 className="font-bold text-lg">Ankit Patel</h4>
              <p className="text-gray-500">Automation Specialist</p>
            </div>
          </div>
        </div>
      </section>

 
    </>
  );
};

export default AboutPage;
