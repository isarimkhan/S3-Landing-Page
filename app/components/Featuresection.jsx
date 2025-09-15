// app/components/Featuresection.jsx
"use client";
import {
  Monitor,
  BookOpen,
  Book,
  Handshake,
  ChartNoAxesCombined,
  ClipboardCheck,
  Video,
  Smartphone,
  Funnel,
  Link,
} from "lucide-react";
const features = [
  {
    title: "School Management Module",
    description:
      "Efficiently manage student records, attendance, class schedules, and parent communication.",
    icon: Monitor,
  },
  {
    title: "Academic Learning Module",
    description:
      "Create curriculum, assign and grade tasks, and track academic progress with ease.",
    icon: BookOpen,
  },
  {
    title: "Islamic & Quranic Learning",
    description:
      "Monitor Hifz, recitation, and Salah with purpose-built tools like the Hifz Tracker and Quran integration.",
    icon: Book,
  },
  {
    title: "Finance Management",
    description:
      "Handle invoicing, fee collection, expense tracking, and generate automated profit & loss reports.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Admission Leads CRM",
    description:
      "Capture, track, and convert leads into enrolled students with a built-in admissions CRM.",
    icon: Video,
  },
  {
    title: "Tasks & Reminders",
    description:
      "Assign internal tasks, set deadlines, and receive reminders — for smoother school operations.",
    icon: ClipboardCheck,
  },
  {
    title: "Support Helpdesk / Ticketing",
    description:
      "Let parents and staff raise support tickets and manage queries centrally and transparently.",
    icon: Handshake,
  },
  {
    title: "Inventory & Asset Management",
    description:
      "Track school assets, supplies, and inventory across locations with full control and visibility.",
    icon: Funnel,
  },
  {
    title: "Online Shop",
    description:
      "Sell school-related items such as uniforms, books, and supplies directly to parents or students online.",
    icon: Smartphone,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white text-center px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
          # <span className="text-black">Key Features</span>
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium font-quicksand mb-4 leading-snug">
          Everything Your School Needs — In One Smart System
        </h2>
        <p className="text-gray-600 font-inter text-base sm:text-lg">
          Smart School Solutions brings together powerful tools to manage, teach,
          and grow your school with ease. Whether you're running a full academic
          institution, a madrassah, or a blended model, our features help you
          streamline operations, track progress, and improve communication —
          all under one roof.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 py-6 rounded-xl transition-shadow duration-300"
            >
              <div className="sm:w-15 sm:h-15 rounded-full border-2 border-gray-200 bg-gray-50 text-[#0DB2F0] hover:bg-[#F1FAFE] transition-colors duration-500 flex items-center justify-center mb-4">
                <Icon size={28} className="sm:size-7 " />
              </div>
              <h3 className="text-xl sm:text-2xl font-inter font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-inter text-sm sm:text-base md:text-lg font-medium">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
