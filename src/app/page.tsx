"use client";

import Header from "./Header";
import FirstSection from "./(1)LandingPage";
import { SecondSection } from "./(2)VideoAndAboutCucai";
import ThirdSection from "./(3)AIExpertsOnStage";
import { SixthSection } from "./(6)LeadersBehindTheVision";
import { FifthSection } from "./(5)TransformTomorrowTogether";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { Pixelify_Sans } from "next/font/google";
import { StudentPartners } from "./(4)StudentPartners";

export const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export let speakers = [
  {
    name: "Ben Rossen",
    position: "AI Policy & Regulation",
    img: "/headshots/ben-rossen.png",
    company: "/logos/open-ai-logo.png",
    width: 220.43,
  },
  {
    name: "Eddie Kim",
    position: "Manager of Technical Staff",
    img: "/headshots/eddie-kim.png",
    company: "/logos/cohere-logo.png",
    width: 255.36,
  },
  {
    name: "Ezequiel Lanza",
    position: "AI Open Source Evangelist",
    img: "/headshots/ezequiel-lanza.png",
    company: "/logos/intel-logo.png",
    width: 140.81,
  },
  {
    name: "Dr. Ruslan Salakhutdinov",
    position: "Ex-Director of AI Research",
    img: "/headshots/ruslan.png",
    company: "/logos/apple-logo.png",
  },
  {
    name: "Patricia Arocena",
    position: "Head of Generative AI",
    img: "/headshots/patricia-arocena.png",
    company: "/logos/rbc-logo.png",
  },
  {
    name: "Chris Caira",
    position: "Senior Director",
    img: "/headshots/chris-caira.png",
    company: "/logos/ey-parth-logo.png",
  },
  {
    name: "Sam Talasila",
    position: "Head of LLMs",
    img: "/headshots/sam-talasila.png",
    company: "/logos/wealthsimple-logo.png",
  },
  {
    name: "Diego Magaelhaes",
    position: "Chief Technologist",
    img: "/headshots/diego-magalhaes.png",
    company: "/logos/aws-logo.png",
  },
];


export let buttons = [
  { name: "Speakers", link: "#speakers" },
  { name: "Programming", link: "#schedule" },
  { name: "Student Partners", link: "#student-partners" },
];

// TODO: Add CUCAI links here
export let icons = [
  { src: "/email.png", link: "/" },
  { src: "/instagram.png", link: "/" },
  { src: "/linkedin.png", link: "/" },
];

// TODO: Add CUCAI staff once the carousel works
export let leaders = [
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
  {
    name: "Organizer Name",
    role: "Role Name",
    linkedin: "linkedin",
    hs: "/image.png",
  },
];

export default function Home() {
  const [isDark, setDark] = useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log(chunked_partners);
  // console.log(Math.floor(window.innerWidth / 382));

  return (
    <div className="w-full overflow-x-hidden m-auto">
      <Header isDark={isDark} setDark={setDark} />
      <FirstSection />
      <div id="about">
        <SecondSection />
      </div>
      <div id="speakers">
        <div className="third-section overflow-auto overflow-x-hidden max-h-full">
          {/* 
            AI Experts on Stage
          */}
          <ThirdSection />
        </div>
      </div>
      {/* <FourthSection - Moved here for easier access to array variable/> */}
      <StudentPartners windowWidth={windowWidth}/>
      {/* 
        TODO: Fix formatting for section 5
      */}
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}
