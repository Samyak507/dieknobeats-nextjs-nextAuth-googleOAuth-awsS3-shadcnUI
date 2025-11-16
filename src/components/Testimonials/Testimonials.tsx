import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "David Kim",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The guitar course transformed my playing. I went from struggling with basic chords to playing complex solos in just 3 months!"
    },
    {
      id: 2,
      name: "Emma Thompson",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Amazing piano lessons! Sarah's teaching style is perfect for beginners. I can now play my favorite songs with confidence."
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The production course gave me the skills to create professional-sounding tracks. Now I'm releasing my own music!"
    }
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Student{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            See what our students are saying about their musical journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Student Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-cyan-500/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  {/* Star Rating */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-base leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}