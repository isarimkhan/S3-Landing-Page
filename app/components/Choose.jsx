import Image from "next/image";

export default function Choose() {
  return (
    <main className="bg-gray-100 text-gray-800">
     <section className="bg-gray-100 py-10 px-6 flex justify-center">
  <div className="bg-white border-[#E2D9FC] border-2 h-70 w-330 rounded-4xl p-10 text-center">
    <p className="text-blue-600 font-medium mb-2">
      # <span className="text-black">Start your journey with Smart School Solutions</span>
    </p>
    <h2 className="text-2xl md:text-3xl font-bold font-quicksand mb-6">
      Bring simplicity, insight, and purpose to every classroom.
    </h2>

    {/* Buttons */}
    <div className="flex justify-center space-x-4">
      <button className="group relative  mr-8 cursor-pointer bg-[#0DB2F0] h-13 w-38 text-white text-lg px-6 py-2 rounded-full font-semibold overflow-hidden">
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
    Pricing
  </span>
  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
    pricing
  </span>
</button>
      <button className="group relative cursor-pointer border h-13 w-38 text-black text-lg px-6 py-2 rounded-full font-semibold overflow-hidden">
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
    Contact
  </span>
  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
    contact
  </span>
</button>
    </div>
  </div>
</section>

 {/* Value Proposition */}
      <section className="bg-grsy-100 py-16 text-center px-6">
        <p className="text-blue-600 font-medium mb-2"># Why <span className="text-black">Choose S3?</span></p>
        <h2 className="text-4xl  font-bold mb-6 font-quicksand">
          The Complete Solution for Smarter, Values-Driven Education
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 font-quicksand text-lg">
          Smart School Solutions is more than just software — it's your school’s
          digital backbone, designed to bring academic excellence and Islamic
          values together in one seamless experience. Whether you're running a
          madrassah, school, or hybrid institution, S3 helps you manage, teach,
          and grow — effortlessly.
        </p>
      </section>
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
          {/* Left Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/images/3.png"
              alt="Dashboard Screenshot"
              width={800}
              height={600}
              className="rounded-xl shadow-xl"
            />
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold font-quicksand">
              Purpose-Built for Islamic Education
            </h2>
            <p className="text-gray-600 font-quicksand">
              S3 is designed specifically for Islamic and value-based schools,
              supporting islamic values, progress tracking, and academic
              excellence in one platform.
            </p>

            {/* Features */}
            <div className="space-y-4 rounded-4xl font-quicksand">
              <FeatureCard
                title="All-in-One Platform"
                description="From attendance and assignments to finances and communication — S3 combines all school operations into one seamless system."
              />
              <FeatureCard
                title="Plug-and-Play Setup"
                description="Schools can sign up and launch the system within minutes using our guided self-onboarding — no technical setup required."
              />
              <FeatureCard
                title="Scalable, Modular & Multilingual"
                description="S3 adapts to your size, language, and needs — scale effortlessly, use only the modules you want, and brand it your way."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Second Image */}
    
    </main>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-100 border border-gray-100 p-4 h-40 hover:bg-white rounded-md  transition-all duration-700 transform hover:scale-105">
      <h3 className="text-2xl text-[#54595F] font-semibold">{title}</h3>
      <p className="text-md text-gray-600">{description}</p>
    </div>
  );
}
