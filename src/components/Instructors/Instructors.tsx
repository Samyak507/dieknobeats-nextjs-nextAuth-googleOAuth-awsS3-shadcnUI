import React from 'react';
import { WavyBackground } from '../ui/wavy-background';

export default function InstructorsSection() {
    const instructors = [
        {
            id: 1,
            name: "Marcus Johnson",
            role: "Guitar Virtuoso",
            experience: "15+ years touring experience",
            image: "/api/placeholder/200/200",
            borderColor: "from-cyan-400 to-blue-500"
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "Piano Master",
            experience: "Julliard graduate",
            image: "/api/placeholder/200/200",
            borderColor: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            name: "Alex Rivera",
            role: "Producer",
            experience: "Grammy nominated",
            image: "/api/placeholder/200/200",
            borderColor: "from-cyan-400 to-teal-500"
        },
        {
            id: 4,
            name: "Luna Martinez",
            role: "Vocal Coach",
            experience: "Broadway veteran",
            image: "/api/placeholder/200/200",
            borderColor: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section className="relative bg-black py-20 px-4 overflow-hidden">
            
            {/* ✅ Wavy Background (FULLSCREEN + HIDDEN ON MOBILE) */}
            <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
                <WavyBackground />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Meet Our{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Instructors
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Learn from Grammy winners, touring musicians, and industry professionals
                    </p>
                </div>

                {/* ✅ Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {instructors.map((instructor) => (
                        <div key={instructor.id} className="flex flex-col items-center text-center group">

                            {/* Image with Gradient Border */}
                            <div className="relative mb-6">
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${instructor.borderColor} blur-sm group-hover:blur-md transition-all duration-300`}></div>
                                <div className={`relative rounded-full p-1 bg-gradient-to-r ${instructor.borderColor}`}>
                                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-800">
                                        <img
                                            src={instructor.image}
                                            alt={instructor.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Instructor Info */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                {instructor.name}
                            </h3>
                            <p className={`text-base md:text-lg font-semibold mb-2 bg-gradient-to-r ${instructor.borderColor} bg-clip-text text-transparent`}>
                                {instructor.role}
                            </p>
                            <p className="text-sm md:text-base text-gray-400">
                                {instructor.experience}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
