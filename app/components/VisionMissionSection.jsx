import { Goal, Flag } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/images/2.png" // 👉 Replace with your actual image path in `public/`
            alt="Educators"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-lg text-blue-600 font-medium mb-2">
            # <span className='text-black'>Rooted in Purpose. Driven by Progress.</span>
          </p>
          <h2 className="text-3xl sm:text-4xl text-black font-quicksand font-bold mb-4">
            Built by Educators, Powered by Innovation
          </h2>
          <p className="text-gray-600 mb-8">
            Smart School Solutions is proudly developed by Sidr Productions, a UK-based edtech company passionate about reshaping the future of education. With a deep understanding of both classroom needs and digital possibilities, we go beyond just software — we partner with schools to empower students, teachers, and communities with meaningful, future-ready tools.
          </p>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Vision */}
            <div>
            <div className="flex flex-col gap-2 mb-6  ">
  <div className="w-20 h-20 border-2 border-gray-300 rounded-full bg-blue-50 text-[#39BEF1] flex items-center justify-center">
    <Goal size={40} />
  </div>
  <h3 className="text-3xl font-semibold">Vision</h3>
</div>

              <p className="text-[#5D6268] text-md mb-2">
                <strong>Value Driven Tools</strong> – To create accessible, values-driven digital education tools for every school, everywhere.
              </p>
              <p className="text-[#5D6268] text-md mb-2">
                <strong>Islamic Education Transformation</strong> – To lead the transformation of Islamic education through purposeful technology.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex flex-col  gap-3 mb-6">
                <div className="w-20 h-20 border-2 border-gray-300 rounded-full bg-blue-50 text-[#39BEF1] flex items-center justify-center">
                  <Flag size={40} />
                </div>
                <h3 className="text-3xl font-semibold">Mission</h3>
              </div>
              <p className="text-[#5D6268] text-md mb-2">
                <strong>Innovative Learning</strong> – To bridge traditional education with smart innovation, grounded in real learning environments.
              </p>
              <p className="text-[#5D6268] text-md">
                <strong>Intuitive System</strong> – To co-develop intuitive systems that make school management easier, more transparent, and impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}