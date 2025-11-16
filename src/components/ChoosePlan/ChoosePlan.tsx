import React from 'react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: 29,
      popular: false,
      features: [
        "5 courses access",
        "Basic support",
        "Mobile app"
      ],
      buttonStyle: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
      checkColor: "text-cyan-400",
      borderColor: "border-gray-800"
    },
    {
      id: 2,
      name: "Pro",
      price: 59,
      popular: true,
      features: [
        "All courses access",
        "Priority support",
        "1-on-1 sessions",
        "Certificates"
      ],
      buttonStyle: "bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/50",
      checkColor: "text-cyan-400",
      borderColor: "border-cyan-500"
    },
    {
      id: 3,
      name: "Premium",
      price: 99,
      popular: false,
      features: [
        "Everything in Pro",
        "Weekly mentorship",
        "Studio access",
        "Exclusive content"
      ],
      buttonStyle: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10",
      checkColor: "text-purple-400",
      borderColor: "border-gray-800"
    }
  ];

  return (
    <section className="bg-black">
      {/* Pricing Cards */}


      {/* CTA Section */}
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="bg-gradient-to-r from-teal-900 via-blue-900 to-purple-900 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of students who have transformed their musical skills with our expert-led courses
            </p>
            <button className="group relative px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10">Start Learning Today</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}