"use client";
import { useState, useEffect } from "react";
import { Cookie } from 'lucide-react';
export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        setIsOpen(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsOpen(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200/30 backdrop-blur-md z-50">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[90%] max-w-lg text-center animate-fadeIn">
  <div className="flex items-center justify-center gap-2 mb-4">
    <Cookie className="text-[#F4BA7E] w-8 h-8" />
    <h2 className="text-2xl font-bold text-gray-800">
      Cookie Setting
    </h2>
  </div>
        <p className="text-gray-600 text-base mb-6">
          We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better expe rience. By clicking accept, you agree to this, as outlined in our Cookie Policy.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={acceptCookies}
            className="bg-[#0DB2F0] text-white px-6 py-2 rounded-full font-medium hover:bg-cyan-600 transition"
          >
            Accept All Cookies
          </button>
          <button
            onClick={declineCookies}
            className="border border-gray-400 text-gray-700 px-6 py-2 rounded-full font-medium hover:text-red-700 hover:border-red-700 hover:bg-gray-100 transition"
          >
           All Decline
          </button>
        </div>
      </div>
    </div>
  );
}
