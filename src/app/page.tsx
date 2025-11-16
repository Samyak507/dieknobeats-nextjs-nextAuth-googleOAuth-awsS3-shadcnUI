"use client";
import {SessionProvider} from "next-auth/react"
import UserButton from "../components/user-button";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses/FeaturedCourses";
import InstructorsSection from "../components/Instructors/Instructors";
import TestimonialsSection from "../components/Testimonials/Testimonials";
import ChoosePlan from "../components/ChoosePlan/ChoosePlan";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCourses />
      <InstructorsSection />
      <TestimonialsSection />
      <ChoosePlan />
      <Footer />
    </div>
  );
};

export default Home;