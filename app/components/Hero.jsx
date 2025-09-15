import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/banner.png"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Overlay Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16">
        {/* Text Section */}
        <div className="text-center lg:text-left text-white max-w-2xl">
          <p className="text-sm sm:text-base font-medium uppercase tracking-wide text-gray-200 mb-2">
            # All-in-One School Management & Learning Platform
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-quicksand leading-tight mb-6">
            Smart{" "}
            <span className="relative inline-block">
              Tools
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400 -z-10 rounded-full"></span>
            </span>{" "}
            for <br />
            Faith-Based <br /> Education
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mb-8">
            Smart School Solutions (S3) is an all-in-one education platform built
            to help schools and madrassahs streamline operations, enrich learning,
            and connect administrators, teachers, students, and parents in one
            user-friendly system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/e404">
            <button className="bg-cyan-400 h-12 w-40 text-lg cursor-pointer hover:bg-[#057DFA] text-white px-6 py-2 rounded-full font-medium font-sans transition-colors duration-200">
              Get Started
            </button>
            <button className="bg-white text-lg h-12 w-40 cursor-pointer text-[#0DB2F0] hover:bg-[#057DFA] hover:text-white px-6 py-2 rounded-full font-medium font-sans transition-colors duration-200">
              Pricing
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
          <Image
            src="/images/1.png"
            alt="Dashboard"
            width={700}
            height={700}
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
