import Image from "next/image";
import Link from "next/link";
export default function Choose() {
  return (
    <main className="bg-gray-100 text-gray-800">
      <section className="bg-gray-100 py-10 px-4 flex justify-center">
        <div className="bg-white border-[#E2D9FC] border-2  rounded-3xl p-6 sm:p-10 text-center shadow-sm">
          <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">
            #{" "}
            <span className="text-black">
              Start your journey with Smart School Solutions
            </span>
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-quicksand mb-6">
            Bring simplicity, insight, and purpose to every classroom.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-2">
            <Link href="/e404">
            <div className="flex gap-2 sm:gap-4">
  <button className="group relative cursor-pointer bg-[#0DB2F0] h-8 sm:h-10 w-28 sm:w-32 text-white text-sm sm:text-base px-4 rounded-full font-medium overflow-hidden">
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
      Pricing
    </span>
    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
      Pricing 
    </span>
  </button>

  <button className="group relative cursor-pointer border h-8 sm:h-10 w-24 sm:w-32 text-black text-sm sm:text-base px-4 rounded-full font-medium overflow-hidden">
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
      Contact
    </span>
    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
      Contact
    </span>
  </button>
</div>

            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 sm:py-16 text-center px-4 sm:px-6">
        <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">
          # Why <span className="text-black">Choose S3?</span>
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-quicksand leading-snug">
          The Complete Solution for Smarter, Values-Driven Education
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 font-quicksand text-base sm:text-lg">
          Smart School Solutions is more than just software — it's your school’s
          digital backbone, designed to bring academic excellence and Islamic
          values together in one seamless experience. Whether you're running a
          madrassah, school, or hybrid institution, S3 helps you manage, teach,
          and grow — effortlessly.
        </p>
      </section>
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:space-x-12">
          {/* Left Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/images/3.png"
              alt="Dashboard Screenshot"
              width={800}
              height={600}
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-quicksand">
              Purpose-Built for Islamic Education
            </h2>
            <p className="text-gray-600 font-quicksand text-base sm:text-lg">
              S3 is designed specifically for Islamic and value-based schools,
              supporting Islamic values, progress tracking, and academic
              excellence in one platform.
            </p>

            {/* Features */}
            <div className="space-y-4 font-quicksand">
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
    </main>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-100 border border-gray-200 p-4 sm:p-6 hover:bg-white rounded-md transition-all duration-500 transform hover:scale-105">
      <h3 className="text-lg sm:text-xl md:text-2xl text-[#54595F] font-semibold mb-1">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
}
