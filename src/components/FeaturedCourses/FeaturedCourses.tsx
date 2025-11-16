"use client";
import React, { useEffect, useState } from "react";
import CourseCard, { CourseProps } from "./CourseCard";
import { Check } from "lucide-react";
import { useSession } from "next-auth/react";

const FeaturedCourses: React.FC = () => {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const downloads = [
    {
      id: 1,
      title: "Hip-Hop Beat Pack",
      description: "10 premium hip-hop beats in WAV + MP3",
      file: "/downloads/hiphop-pack.zip",
    },
    {
      id: 2,
      title: "Lo-Fi Chill Pack",
      description: "Relaxing lo-fi loops and stems",
      file: "/downloads/lofi-pack.zip",
    },
    {
      id: 3,
      title: "EDM Festival Pack",
      description: "High-energy EDM drops and samples",
      file: "/downloads/edm-pack.zip",
    },
  ];

  const handleDownload = (file: string) => {
    if (!session) {
      window.location.href = "/auth/sign-in?callbackUrl=/downloads";
      return;
    }
    window.location.href = file;
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/aws/course/getAllCourses", {
          cache: "no-store",
        });
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      {/* FEATURED COURSES (Coming Soon) */}
      <section className="bg-black text-white py-16 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Discover our most popular courses designed by expert musicians and
            producers
          </p>
        </div>

        {/* Coming Soon — Courses Hidden */}
        <p className="text-center text-gray-400 text-xl font-semibold py-20">
          🎧 Courses Coming Soon...
        </p>
      </section>

      {/* DOWNLOAD PACKS SECTION */}
      <section className="bg-black">
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Download{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Music Packs
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                Premium sample packs available exclusively for registered users
              </p>
            </div>

            {/* Download Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {downloads.map((pack) => (
                <div
                  key={pack.id}
                  className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border-2 border-gray-800 hover:scale-105 transition-all duration-300"
                >
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {pack.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-400 mb-6">{pack.description}</p>

                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-8">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Includes ZIP File</span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(pack.file)}
                    className="w-full py-4 px-6 rounded-xl text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 text-black transition-all duration-300"
                  >
                    {session ? "Download Pack" : "Login to Download"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCourses;
