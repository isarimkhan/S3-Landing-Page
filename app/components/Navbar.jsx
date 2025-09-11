"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react"; // lucide-react icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

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
        <ul className="hidden md:flex space-x-12 font-normal font-inter text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className="flex items-center gap-1 cursor-pointer">
            Modules <span className="text-xs">▼</span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            Solutions <span className="text-xs">▼</span>
          </li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Book A Demo Button (desktop only) */}
        <div className="hidden md:block mr-25">
          <button className="group relative cursor-pointer bg-[#0DB2F0] h-12 w-40 text-white text-lg px-6 py-2 rounded-full font-semibold overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
              Book A Demo
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              Book A Demo
            </span>
          </button>
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
          {/* Search Box */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..." 
              className="w-full rounded-full py-2 pl-4 pr-10 text-black border-2 focus:outline-none"
            />
            {/* <Search
              size={18}
              className="absolute right-3 top-2.5 text-black"
            /> */}
          </div>

          {/* Nav Links */}
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <div className="cursor-pointer">Modules ▼</div>
          <div className="cursor-pointer">Solutions ▼</div>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* Button */}
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
