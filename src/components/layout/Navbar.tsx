"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import UserButton from "../user-button"; // Adjusted path

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800/50"
          : "bg-black"
      }`}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-4xl text-cyan-400">♫</span>
          <span className="hidden text-xl tracking-wide sm:inline bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent font-bold">
            DieknoBeats
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center space-x-8">
            <Link href="/courses" className="text-lg text-gray-300 transition-colors duration-300 hover:text-cyan-400">
              Courses
            </Link>
            <Link href="/instructors" className="text-lg text-gray-300 transition-colors duration-300 hover:text-cyan-400">
              Instructors
            </Link>
            <Link href="/pricing" className="text-lg text-gray-300 transition-colors duration-300 hover:text-cyan-400">
              Pricing
            </Link>
            <Link href="/about" className="text-lg text-gray-300 transition-colors duration-300 hover:text-cyan-400">
              About
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center">
          <UserButton />
        </div>
      </nav>
    </header>
  );
}