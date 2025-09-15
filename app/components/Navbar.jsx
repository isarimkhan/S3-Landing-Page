"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // lucide-react icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#057DFA] text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="px-6 py-5 flex items-center justify-between ml-25">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-s3.png" alt="Logo" width={200} height={50} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-12 font-normal font-inter text-lg relative">
       <li><Link href="/e404">Home</Link></li>
          <li><Link href="/e404">About</Link></li>

          {/* Modules Dropdown */}
          <li
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setModulesOpen(true)}
            onMouseLeave={() => setModulesOpen(false)}
          >
            Modules{" "}
            <span
              className={`text-xs transition-transform duration-300 ${
                modulesOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
            <div
              className={`absolute top-full left-0 mt-2 font-medium font-quicksand text-md bg-white text-[#888686] shadow-lg rounded-lg overflow-hidden transition-all duration-500 ${
                modulesOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="w-70">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">School Management</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">
                  Academic Leaning Module</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Islamic Learing</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Admission Leads CRM</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Finance Management</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Franchis Management</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Tasks & Reminder</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Suppport Helpdesk / Ticketing</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Inventory & Asset Management</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">Online Shop</Link>
                </li>
                
              </ul>
            </div>
          </li>

          {/* Solutions Dropdown */}
          <li
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            Solutions{" "}
            <span
              className={`text-xs transition-transform duration-300 ${
                solutionsOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
            <div
              className={`absolute top-full left-0 mt-2 font-medium font-quicksand text-md bg-white text-[#888686] shadow-lg rounded-lg overflow-hidden transition-all duration-500 ${
                solutionsOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="w-90">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">For Schools & Institutes</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">For Madrassahs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">For Parents & Guardians</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/e404">For Hifz Teachers & Quran Programs</Link>
                </li>
              </ul>
            </div>
          </li>

          <li><Link href="/e404">Pricing</Link></li>
          <li><Link href="/e404">Contact</Link></li>
        </ul>

        {/* Book A Demo Button (desktop only) */}
        <div className="hidden md:block mr-25">
          <Link href="/e404">
            <button className="group relative cursor-pointer bg-[#0DB2F0] h-12 w-40 text-white text-lg px-6 py-2 rounded-full font-semibold overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                Book A Demo
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Book A Demo
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} color="black" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar (Mobile Nav) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white text-black transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-20">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <div className="cursor-pointer">Modules ▼</div>
          <div className="cursor-pointer">Solutions ▼</div>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <button className="w-full bg-[#0DB2F0] text-white py-3 rounded-full font-semibold">
            Book A Demo
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-opacity-50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
