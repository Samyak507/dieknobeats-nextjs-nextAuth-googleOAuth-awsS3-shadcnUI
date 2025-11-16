import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

export interface CourseProps {
  _id: string;
  courseTitle: string;
  totalVideos: number;
  thumbnail_url: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

const CourseCard: React.FC<CourseProps> = ({
  _id,
  courseTitle,
  totalVideos,
  thumbnail_url,
  price,
}) => {
  return (
    <div className="bg-[#0d0f1a] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-800 hover:border-cyan-500/50">
      <Link href={`/courses/${_id}`}>
        <img
          src={thumbnail_url}
          alt={courseTitle}
          className="w-full h-56 object-cover cursor-pointer"
        />
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold text-cyan-400 uppercase">
            {totalVideos} Videos
          </p>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-yellow-400 mr-1" />
            <span>4.9</span>
          </div>
        </div>

        <Link href={`/courses/${_id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
            {courseTitle}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4">
          Enhance your skills with professional-level training.
        </p>

        <div className="flex justify-between items-center">
          <span className="text-cyan-400 text-xl font-bold">₹{price}</span>
          <Link href={`/courses/${_id}`}>
            <button className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all">
              Enroll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;