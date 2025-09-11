import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full h-260 flex items-center">
      {/* Background Image */}
      <Image
        src="/images/banner.png"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-40 z-10"></div>
      
      {/* Overlay Content */}
      <div className="relative z-20s ml-15 mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 w-full">
        {/* Text Section */}
        <div className="text-left text-white max-w-2xl">
          <p className="text-md font-medium uppercase tracking-wide text-gray-200 mb-2">
            # All-in-One School Management & Learning Platform
          </p>
          
          <h1 className="text-7xl font-medium font-quicksand leading-tight mb-6">
            Smart{" "}
            <span className="relative inline-block">
              Tools
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400 -z-10 rounded-full"></span>
            </span>{" "}
            for <br />
            Faith-Based <br /> Education
          </h1>
          
          <p className="text-lg text-gray-200 mb-8">
            Smart School Solutions (S3) is an all-in-one education platform built to
            help schools and madrassahs streamline operations, enrich learning, and
            connect administrators, teachers, students, and parents in one
            user-friendly system.
          </p>
          
          <div className="flex gap-4">
            <button className="bg-cyan-400 h-12 w-40 text-lg hover:bg-[#057DFA] text-white px-6 py-2 rounded-full font-medium font-sans transition-colors duration-200">
              Get Started
            </button>
            <button className="bg-white text-lg h-12 w-40 text-[#0DB2F0] hover:bg-[#057DFA] hover:text-white px-6 py-2 rounded-full font-medium font-sans transition-colors duration-200">
              Pricing
            </button>
          </div>
        </div>
        
        {/* Right Side Image */}
        <div className="relative flex flex-col items-center mr-25">
          <Image
            src="/images/1.png"
            alt="Dashboard"
            width={900}
            height={900}
            className=""
          />
        </div>
      </div>
    </section>
  );
}