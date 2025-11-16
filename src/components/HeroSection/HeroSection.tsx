import React from 'react';
import Image from 'next/image';
import HeroImage from '../../assets/heroSection.jpg';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Music concert background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-pink-900/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Master Music with
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            World-Class
          </span>
          <br />
          <span className="text-white">Instructors</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mb-10 leading-relaxed">
          Learn guitar, piano, vocals, and music production from
          <br className="hidden md:block" />
          industry professionals. Start your musical journey today.
        </p>

        <button onClick={() => router.push("/auth/sign-up") } className="group relative px-12 py-5 text-xl font-bold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
          <span className="relative z-10">Start Learning Now</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </button>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}