"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const funnyMessages = [
  "Oops! The aliens stole this page 👽",
  "404: This page went for a spacewalk 🚀",
  "Lost in hyperspace… try again 🌌",
  "Our astronaut spilled coffee on the server ☕💻",
  "This page doesn’t exist. But hey, neither does Pluto 🪐",
];

const Error404Page = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(20);
  const [score, setScore] = useState(0);

  // Pick random funny message
  useEffect(() => {
    setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
  }, []);

  // Countdown auto redirect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/");
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden text-white">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glitch {
          0% { text-shadow: 2px 2px red; }
          20% { text-shadow: -2px -2px cyan; }
          40% { text-shadow: 2px -2px lime; }
          60% { text-shadow: -2px 2px yellow; }
          100% { text-shadow: 2px 2px red; }
        }
        .glitch {
          animation: glitch 1s infinite;
        }
      `}</style>

      {/* Floating clickable aliens */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          onClick={() => setScore((s) => s + 1)}
          className="absolute cursor-pointer text-4xl animate-bounce"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        >
          👾
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center p-6">
        {/* Big Glitching 404 */}
        <h1 className="text-9xl font-extrabold glitch">404</h1>

        {/* Funny Message */}
        <p className="text-xl text-gray-300 mt-4">{message}</p>

        {/* Countdown */}
        <p className="mt-2 text-sm text-pink-400">
          Redirecting in {countdown}s...  
          (or shoot some aliens while you wait 👾)
        </p>

        {/* Score Counter */}
        <p className="mt-2 text-green-400">Score: {score}</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:scale-110 transition"
          >
            🏠 Back to Earth
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:scale-110 transition"
          >
            🔙 Warp Back
          </button>
        </div>
      </div>

      {/* Floating UFO */}
      <div className="absolute top-10 right-20 animate-bounce text-6xl">🛸</div>

      {/* Astronaut */}
      <div className="absolute bottom-10 left-20 animate-[float_6s_ease-in-out_infinite] text-7xl">
        👨‍🚀
      </div>
    </div>
  );
};

export default Error404Page;
