import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-12">
        {/* Main Content Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - App Mockup */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/4.png"
              alt="Scalable Platform Illustration"
              width={600}
              height={400}
              className="w-full max-w-md sm:max-w-lg h-auto mx-auto"
            />
          </div>

          {/* Right Column - Features */}
          <div className="w-full md:w-1/2">
            <header className="text-center md:text-left mb-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-2">
                #{" "}
                <span className="text-black text-base sm:text-lg md:text-xl">
                  Real-Time Updates. Seamless Connection.
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug max-w-3xl">
                Powerful Mobile App for Parents & Students
              </h2>
            </header>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
              Empower parents and students with instant access to important
              school information — all from a sleek, easy-to-use mobile app.
              Whether it’s checking attendance or tracking assignments,
              communication between home and school has never been more
              effortless.
            </p>

            {/* Features List */}
            <div className="space-y-5">
              {[
                "Track Daily Attendance & Assignments — Parents stay on top of their child’s academic routine",
                "Receive Instant Alerts & Announcements — Parents be the first to know about events, changes, or updates",
                "Engage with Teachers — Parents send and receive messages directly within the app",
                "Get partners and brand advocates to post your content.",
              ].map((text, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-800 mr-3 mt-1">
                    ✔
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>

            {/* Store Badges */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Image
                src="/images/9.png"
                alt="Google Play"
                width={150}
                height={50}
                className="w-32 sm:w-36 md:w-40 h-auto"
              />
              <Image
                src="/images/11.png"
                alt="App Store"
                width={150}
                height={50}
                className="w-32 sm:w-36 md:w-40 h-auto"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
