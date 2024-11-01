"use client";

import Header from "./Header";
import FirstSection from "./FirstSection";
import { useState } from "react";
import { SecondSection } from "./SecondSection";
import FourthSection from "./FourthSection";
import ThirdSection from "./ThirdSection";
import { SixthSection } from "./SixthSection";
import { FifthSection } from "./FifthSection";
import { Footer } from "./Footer";

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

// TODO: Add other Uni's website and instagram links

let student_partners = [
  {
    name: "WAT.ai",
    logo: "/logos/wat-ai-logo.png",
    university: "University of Waterloo",
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
    width: 297,
  },
  {
    name: "Western AI",
    logo: "/logos/wai-logo.png",
    university: "University of Western Ontario",
    website: "https://www.westernuai.ca/",
    insta: "https://www.instagram.com/westernu.ai/",
    width: 120,
  },
  {
    name: "McGill AI",
    logo: "/logos/mcgill-ai-logo.png",
    university: "McGill University",
    website: "https://mcgillai.com/",
    insta: "https://www.instagram.com/mcgillaisociety/",
    width: 130,
  },
  {
    name: "UofT AI",
    logo: "/logos/uoftai-logo.png",
    university: "University of Toronto",
    website: "https://www.uoft.ai/",
    insta: "https://www.instagram.com/uoftaigroup/",
    width: 297,
  },
  {
    name: "Wester Cyber Society",
    logo: "/logos/wcs-logo.png",
    university: "University of Western Ontario",
    website: "https://www.westerncybersociety.com/items/",
    insta: "https://www.instagram.com/westerncybersociety/",
    width: 297,
    height: 100,
  },
  {
    name: "UVic AI",
    logo: "/logos/uvic-ai-logo.png",
    university: "University of Victoria",
    website: "https://uvicai.ca/",
    insta: "https://www.instagram.com/uvicaiclub/",
    width: 150,
    height: 100,
  },
  {
    name: "UdeM AI",
    logo: "/logos/udem-ai-logo.png",
    university: "Universitié de Montréal",
    website: "https://utmist.gitlab.io/",
    insta: "https://www.instagram.com/udem.ai/",
    width: 120,
    height: 100,
  },
  {
    name: "UTMIST",
    logo: "/logos/utmist-logo.png",
    university: "University of Toronto",
    website: "https://utmist.gitlab.io/",
    insta: "https://www.instagram.com/uoft_utmist/",
    width: 297,
    height: 100,
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

const chunk_array = (array: {}[], size: number) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
export const chunked_partners = chunk_array(student_partners, 3);

export default function Home() {
  const [isDark, setDark] = useState<boolean>(true);

  return (
    <div>
      <Header isDark={isDark} setDark={setDark} />
      <FirstSection />
      <div id="about">
        <SecondSection />
      </div>
      <ThirdSection/>
      <div id="student-partners" className="fourth-section">
        <FourthSection />
      </div>

      {/* 
        TODO: Fix formatting for section 5
      */}
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}
