"use client";

import { Landing } from "./(1)LandingPage";
import { PastSpeakers } from "./(3)AIExpertsOnStage";
import { StudentPartners } from "./(4)StudentPartners";
import { CUCAITeamShowcase } from "./(6)LeadersBehindTheVision";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { About } from "@/components/About";
import { WhyCUCAI } from "./(2.5)WhyCUCAI";
// import { PowerhousesBehindCUCAI } from "./(3.5)Powerhouses";

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

const achievements = [
  { number: "340+", category: "DELEGATES" },
  { number: "10+", category: "INDUSTRY PARTNERS" },
  { number: "19", category: "SCHOOLS REPRESENTED" },
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
      <Landing windowWidth={windowWidth} isDark={isDark} setDark={setDark} />
      
      <About isDark={isDark} />

      <WhyCUCAI achievements={achievements} isDark={isDark}/>

      <div
        id="speakers"
        className="third-section overflow-auto overflow-x-hidden max-h-full"
      >
        <PastSpeakers isLargeScreen={windowWidth >= 768} isDark={isDark}/>
      </div>
      {/* <PowerhousesBehindCUCAI windowWidth={windowWidth} isDark={isDark}/> */}

      <StudentPartners windowWidth={windowWidth} isDark={isDark} />

      {/* <ContactUs windowWidth={windowWidth} isDark={isDark} /> */}
      
      <CUCAITeamShowcase isLargeScreen={windowWidth >= 450} isDark={isDark} />
      
      <Footer />
    </div>
  );
}
