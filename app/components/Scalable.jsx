import Image from "next/image";

export default function Scalable() {
  return (
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <p className="text-blue-600 font-medium text-base sm:text-lg md:text-xl mb-2">
            #{" "}
            <span className="text-black">
              One Platform. Any School. Anywhere. S3?
            </span>
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            Scalable. Customizable. <br /> Multilingual.
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base lg:text-lg">
            S3 is designed to scale with you — whether you’re a small community
            madrassah or a multi-campus international institution. With modular
            features, multilingual support, and fully customizable workflows, S3
            adapts to your educational mission, not the other way around.
          </p>

          {/* Checklist */}
          <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-lg sm:text-xl">✓</span>
              <span>
                Easily deploy S3 across one or many campuses — no tech expertise
                needed
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-lg sm:text-xl">✓</span>
              <span>
                Choose only the modules you need and scale as your school grows
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-lg sm:text-xl">✓</span>
              <span>
                Offer a localized experience to students and parents in their
                preferred language
              </span>
            </li>
          </ul>

         {/* Bottom Stats */} <div className="flex flex-wrap mt-12 gap-10"> <div className='hover:bg-[#0DB2F0] px-4 py-2 hover:text-white rounded-lg transition-colors duration-500'> <p className="text-gray-500 text-md">Students</p> <p className="text-5xl ">Unlimited</p> </div> <div className="bg-blue-10 px-4 py-4 hover:bg-[#0DB2F0] hover:text-white rounded-lg transition-colors duration-500"> <p className="text-md text-gray-500">Languages</p> <p className="text-5xl">12+</p> </div> <div className='hover:bg-[#0DB2F0] px-4 py-2 hover:text-white rounded-lg transition-colors duration-500"> '> <p className="text-gray-500 text-md">Configurable</p> <p className="text-5xl">Fully</p> </div> </div> </div>

        {/* Right Image */}
        <div className="text-center">
          <Image
            src="/images/5.png"
            alt="Scalable Platform Illustration"
            width={600}
            height={400}
            className="mx-auto w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
