import Head from 'next/head';
import Image from 'next/image';
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
                      className="mx-auto"
                    />
          </div>

          {/* Right Column - Features */}
          <div className="w-full md:w-1/2">
          <header className="text-center mb-16">
          <h1 className=" text-4xl2xl text-blue-600 mb-4 ">
           #<span className="text-black text-lg">Real-Time Updates. Seamless Connection.</span>
          </h1>
          <h1 className="text-5xl text-black max-w-3xl mx-auto">
            Powerful Mobile App for Parents & Students
          </h1>
        </header>
            <p className="text-md text-gray-500 mb-8">
              Empower parents and students with instant access to important school information — all from a sleek, easy-to-use mobile app. Whether it's checking attendance or tracking assignments, communication between home and school has never been more effortless.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-800 mr-3 mt-1">
                  ✔
                </div>
                <div>
                  <p className="text-gray-600">Track Daily Attendance & Assignments — Parents stay on top of their child’s academic routine</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-800 mr-3 mt-1">
                  ✔
                </div>
                <div>
                 
                  <p className="text-gray-600">Receive Instant Alerts & Announcements — Parents be the first to know about events, changes, or updates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-800 mr-3 mt-1">
                  ✔
                </div>
                <div>
                  
                  <p className="text-gray-600">Engage with Teachers — Parents send and receive messages directly within the app</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-800 mr-3 mt-1">
                  ✔
                </div>
                <div>
                 <p className="text-gray-600">Get partners and brand advocates to post your content.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Image
                      src="/images/9.png"
                      alt="google"
                      width={150}
                      height={150}
                    />
                     <Image
                      src="/images/11.png"
                      alt="Apple"
                      width={150}
                      height={150}
                    />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}