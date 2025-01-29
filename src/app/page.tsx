"use client";

import Header from "./Header";
import { Landing } from "./(1)LandingPage";
import { AboutCucai } from "./(2)VideoAndAboutCucai";
import { PastSpeakers } from "./(3)AIExpertsOnStage";
import { StudentPartners } from "./(4)StudentPartners";
import { ContactUs } from "./(5)TransformTomorrowTogether";
import { CUCAITeamShowcase } from "./(6)LeadersBehindTheVision";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { About } from "@/components/About";

// TODO: Add other Uni's website and instagram links

const buttons = [
  { name: "Speakers", link: "#speakers" },
  { name: "Programming", link: "#schedule" },
  { name: "Student Partners", link: "#student-partners" },
];

// TODO: Add CUCAI links here
const icons = [
  { src: "/email.png", link: "/" },
  { src: "/instagram.png", link: "/" },
  { src: "/linkedin.png", link: "/" },
];

export default function Home() {
  const [isDark, setDark] = useState<boolean>(false);

  console.log(isDark); // If the page doesn't change, then check this

  const [windowWidth, setWindowWidth] = useState(1600); // breaks components if window width is initialized to 0
  //sets window width to 1600px as default

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize(); // Set initial width
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className={`w-[${windowWidth}px] overflow-x-hidden m-auto`}>
      <Header isDark={isDark} setDark={setDark} />

      <Landing windowWidth={windowWidth} isDark={isDark} />
      
      <About isDark={isDark} />

      <div
        id="speakers"
        className="third-section overflow-auto overflow-x-hidden max-h-full"
      >
        <PastSpeakers isLargeScreen={windowWidth >= 768} isDark={isDark}/>
      </div>

      <StudentPartners windowWidth={windowWidth} isDark={isDark} />

      {/* <ContactUs windowWidth={windowWidth} isDark={isDark} /> */}
      
      <CUCAITeamShowcase isLargeScreen={windowWidth >= 450} isDark={isDark} />
      
      <Footer />
    </div>
  );
}
