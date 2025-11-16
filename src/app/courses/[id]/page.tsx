"use client";

import React, { useState, useEffect } from 'react';
import { Play, Clock, CheckCircle, Lock, Star, Users, Award, ChevronDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

interface Video {
  _id: string;
  title: string;
  length: string;
  video_link: string;
  thumbnail_url?: string;
  isCompleted?: boolean;
  isFree?: boolean;
}

interface Section {
  id: string;
  title: string;
  duration: string;
  videos: Video[];
}

interface Course {
  _id: string;
  courseTitle: string;
  thumbnail_url: string;
  price: number;
  totalVideos: number;
  description?: string;
  instructor?: string;
  rating?: number;
  students?: number;
  level?: string;
  duration?: string;
}

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;

  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [expandedSection, setExpandedSection] = useState<string>("all-videos");

  useEffect(() => {
    const fetchCourseAndVideos = async () => {
      try {
        // Fetch course details
        const courseRes = await fetch(`/api/aws/course/${courseId}`, { cache: 'no-store' });
        const courseData = await courseRes.json();

        console.log("Fetched course data:", courseData);
        setCourse(courseData.course);

        // Fetch videos for this course
        const videosRes = await fetch(`/api/aws/video/getByCourse/${courseId}`, { cache: 'no-store' });
        const videosData = await videosRes.json();

        console.log("Fetched videos data:", videosData);
        console.log("Fetched videos data:", videosData.videos);

        // Map videos to include default values
        const mappedVideos = videosData.videos?.map((video: any) => ({
          ...video// Default to not free (you can update this based on your logic)
        })) || [];

        setVideos(videosData);

        console.log(videosData);

        // Auto-expand the section
        setExpandedSection("all-videos");
      } catch (err) {
        console.error("Error fetching course or videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseAndVideos();
  }, [courseId]);

  const handleVideoClick = (video: Video) => {
    // You can add logic here to check if user has access
    setSelectedVideo(video);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Calculate total duration
  //   const calculateTotalDuration = () => {
  //     if (videos.length === 0) return "0 min";

  //     const totalSeconds = videos.reduce((acc, video) => {
  //       // Parse duration (assuming format like "10:30" or "5:45")
  //       const [mins, secs] = video.duration.split(':').map(Number);
  //       return acc + (mins * 60) + (secs || 0);
  //     }, 0);

  //     const hours = Math.floor(totalSeconds / 3600);
  //     const minutes = Math.floor((totalSeconds % 3600) / 60);

  //     if (hours > 0) {
  //       return `${hours}h ${minutes}m`;
  //     }
  //     return `${minutes} min`;
  //   };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Course not found</h2>
          <Link href="/" className="text-cyan-400 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    router.push(`/paymentpage?price=${course?.price}&courseId=${course?._id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section with Video Player */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player Section */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-800">
                {selectedVideo ? (
                  <div className="w-full h-full">
                    {selectedVideo.video_link ? (
                      <video
                        src={selectedVideo.video_link}
                        controls
                        className="w-full h-full"
                        poster={selectedVideo.thumbnail_url}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                          <p className="text-gray-400">Duration: {selectedVideo.length}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full">
                    <img
                      src={course.thumbnail_url}
                      alt={course.courseTitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
                        <p className="text-xl text-gray-200">Select a video to start learning</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Current Video Info */}
              {selectedVideo && (
                <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedVideo.length}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Course Info */}
              <div className="mt-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.courseTitle}</h1>
                <p className="text-gray-400 text-lg mb-6">
                  {course.description || "Enhance your skills with professional-level training from industry experts."}
                </p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{course.rating || 4.9}</span>
                    <span className="text-gray-400">rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold">{course.students?.toLocaleString() || "1,234"}</span>
                    <span className="text-gray-400">students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    {/* <span className="font-semibold">{calculateTotalDuration()}</span> */}
                    <span className="text-gray-400">total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">{course.level || "All Levels"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold">{videos.length}</span>
                    <span className="text-gray-400">videos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Instructor Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 lg:sticky lg:top-24">
                <h3 className="text-xl font-bold mb-4">Course Details</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold">
                    {course.instructor?.[0] || "D"}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{course.instructor || "Expert Instructor"}</h4>
                    <p className="text-sm text-gray-400">Music Professional</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Learn from experienced professionals who have worked with top artists and are passionate about teaching.
                </p>
                <div className="mb-4 p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-2xl font-bold text-cyan-400 mb-1">₹{course.price}</p>
                  <p className="text-sm text-gray-400">{videos.length} videos included</p>
                </div>
                <button onClick={handleEnroll} className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Course Content</h2>

        <div className="max-w-4xl space-y-4">
          {videos.length > 0 ? (
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() => toggleSection("all-videos")}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform ${expandedSection === "all-videos" ? 'rotate-180' : ''
                      }`}
                  />
                  <div className="text-left">
                    <h3 className="font-bold text-lg">All Videos</h3>
                    <p className="text-sm text-gray-400">
                      {/* {videos.length} videos • {calculateTotalDuration()} */}
                    </p>
                  </div>
                </div>
              </button>

              {/* Videos List */}
              {expandedSection === "all-videos" && (
                <div className="border-t border-gray-800">
                  {videos.map((video, index) => (
                    <button
                      key={video._id}
                      onClick={() => handleVideoClick(video)}
                      className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors border-b border-gray-800/50 last:border-b-0 cursor-pointer ${selectedVideo?._id === video._id ? 'bg-cyan-500/10 border-l-4 border-l-cyan-400' : ''
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center">
                          {video.isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : video.isFree ? (
                            <Play className="w-6 h-6 text-cyan-400" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-semibold text-gray-400">
                              {index + 1}
                            </div>
                          )}
                        </div>
                        <div className="text-left">
                          <p className="font-medium">{video.title}</p>
                          {video.isFree && (
                            <span className="text-xs text-cyan-400 font-semibold">FREE PREVIEW</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{video.length}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-8 text-center">
              <p className="text-gray-400">No videos available for this course yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}