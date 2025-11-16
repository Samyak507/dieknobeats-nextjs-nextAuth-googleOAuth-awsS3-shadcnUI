// import React, { useState } from 'react';
// import { Play, Clock, CheckCircle, Lock, Star, Users, Award, ChevronDown } from 'lucide-react';

// export default function CourseDetailPage() {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [expandedSection, setExpandedSection] = useState(0);

//   const course = {
//     id: 1,
//     title: "Complete Guitar Mastery",
//     instructor: "Marcus Johnson",
//     rating: 4.9,
//     students: 12543,
//     description: "Master guitar from beginner to advanced with world-class instruction. Learn chords, scales, techniques, and songs.",
//     thumbnail: "/api/placeholder/800/450",
//     level: "All Levels",
//     duration: "24 hours",
//     sections: [
//       {
//         id: 1,
//         title: "Getting Started",
//         duration: "45 min",
//         videos: [
//           { id: 1, title: "Welcome to the Course", duration: "5:30", isCompleted: true, isFree: true },
//           { id: 2, title: "Guitar Anatomy & Setup", duration: "12:45", isCompleted: true, isFree: true },
//           { id: 3, title: "Holding the Guitar Properly", duration: "8:20", isCompleted: false, isFree: true },
//           { id: 4, title: "Tuning Your Guitar", duration: "10:15", isCompleted: false, isFree: false }
//         ]
//       },
//       {
//         id: 2,
//         title: "Basic Chords",
//         duration: "2 hours",
//         videos: [
//           { id: 5, title: "Open Chords - Part 1", duration: "15:30", isCompleted: false, isFree: false },
//           { id: 6, title: "Open Chords - Part 2", duration: "18:45", isCompleted: false, isFree: false },
//           { id: 7, title: "Chord Transitions", duration: "22:20", isCompleted: false, isFree: false },
//           { id: 8, title: "Strumming Patterns", duration: "25:40", isCompleted: false, isFree: false }
//         ]
//       },
//       {
//         id: 3,
//         title: "Scales & Theory",
//         duration: "3 hours",
//         videos: [
//           { id: 9, title: "Major Scale Introduction", duration: "14:10", isCompleted: false, isFree: false },
//           { id: 10, title: "Minor Scales", duration: "16:25", isCompleted: false, isFree: false },
//           { id: 11, title: "Pentatonic Scale", duration: "19:30", isCompleted: false, isFree: false },
//           { id: 12, title: "Scale Practice Routines", duration: "21:45", isCompleted: false, isFree: false }
//         ]
//       }
//     ]
//   };

//   const handleVideoClick = (video) => {
//     if (video.isFree || video.isCompleted) {
//       setSelectedVideo(video);
//     }
//   };

//   const toggleSection = (sectionId) => {
//     setExpandedSection(expandedSection === sectionId ? null : sectionId);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section with Video Player */}
//       <div className="bg-gradient-to-b from-gray-900 to-black">
//         <div className="container mx-auto px-4 py-8">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Video Player Section */}
//             <div className="lg:col-span-2">
//               <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-800">
//                 {selectedVideo ? (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <div className="text-center">
//                       <Play className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
//                       <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
//                       <p className="text-gray-400">Duration: {selectedVideo.duration}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <div className="text-center">
//                       <Play className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
//                       <p className="text-xl text-gray-400">Select a video to start learning</p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Course Info */}
//               <div className="mt-6">
//                 <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
//                 <p className="text-gray-400 text-lg mb-6">{course.description}</p>
                
//                 <div className="flex flex-wrap gap-6 text-sm">
//                   <div className="flex items-center gap-2">
//                     <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                     <span className="font-semibold">{course.rating}</span>
//                     <span className="text-gray-400">rating</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users className="w-5 h-5 text-cyan-400" />
//                     <span className="font-semibold">{course.students.toLocaleString()}</span>
//                     <span className="text-gray-400">students</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-5 h-5 text-purple-400" />
//                     <span className="font-semibold">{course.duration}</span>
//                     <span className="text-gray-400">total</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Award className="w-5 h-5 text-green-400" />
//                     <span className="font-semibold">{course.level}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar - Instructor Info */}
//             <div className="lg:col-span-1">
//               <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 sticky top-24">
//                 <h3 className="text-xl font-bold mb-4">Your Instructor</h3>
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold">
//                     MJ
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg">{course.instructor}</h4>
//                     <p className="text-sm text-gray-400">Guitar Virtuoso</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-400 text-sm mb-6">
//                   15+ years of touring experience with world-renowned artists. Passionate about teaching guitar to students of all levels.
//                 </p>
//                 <button className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
//                   Enroll Now - $59/month
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Course Content */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold mb-8">Course Content</h2>
        
//         <div className="max-w-4xl space-y-4">
//           {course.sections.map((section) => (
//             <div
//               key={section.id}
//               className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 overflow-hidden"
//             >
//               {/* Section Header */}
//               <button
//                 onClick={() => toggleSection(section.id)}
//                 className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
//               >
//                 <div className="flex items-center gap-4">
//                   <ChevronDown
//                     className={`w-5 h-5 text-cyan-400 transition-transform ${
//                       expandedSection === section.id ? 'rotate-180' : ''
//                     }`}
//                   />
//                   <div className="text-left">
//                     <h3 className="font-bold text-lg">{section.title}</h3>
//                     <p className="text-sm text-gray-400">
//                       {section.videos.length} videos • {section.duration}
//                     </p>
//                   </div>
//                 </div>
//               </button>

//               {/* Videos List */}
//               {expandedSection === section.id && (
//                 <div className="border-t border-gray-800">
//                   {section.videos.map((video) => (
//                     <button
//                       key={video.id}
//                       onClick={() => handleVideoClick(video)}
//                       disabled={!video.isFree && !video.isCompleted}
//                       className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors border-b border-gray-800/50 last:border-b-0 ${
//                         !video.isFree && !video.isCompleted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
//                       } ${selectedVideo?.id === video.id ? 'bg-cyan-500/10 border-l-4 border-l-cyan-400' : ''}`}
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 flex items-center justify-center">
//                           {video.isCompleted ? (
//                             <CheckCircle className="w-6 h-6 text-green-400" />
//                           ) : video.isFree ? (
//                             <Play className="w-6 h-6 text-cyan-400" />
//                           ) : (
//                             <Lock className="w-6 h-6 text-gray-500" />
//                           )}
//                         </div>
//                         <div className="text-left">
//                           <p className="font-medium">{video.title}</p>
//                           {video.isFree && (
//                             <span className="text-xs text-cyan-400 font-semibold">FREE PREVIEW</span>
//                           )}
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Clock className="w-4 h-4 text-gray-400" />
//                         <span className="text-sm text-gray-400">{video.duration}</span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }