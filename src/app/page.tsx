"use client";

import Header from "./Header";
import FirstSection from "./FirstSection";
import { SecondSection } from "./SecondSection";
import FourthSection from "./(Unneeded) FourthSection";
import ThirdSection from "./ThirdSection";
import { SixthSection } from "./SixthSection";
import { FifthSection } from "./FifthSection";
import { Footer } from "./Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

export let speakers = [{
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
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
    width: 120,
  },
  {
    name: "McGill AI",
    logo: "/logos/mcgill-ai-logo.png",
    university: "McGill University",
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
    width: 130,
  },
  {
    name: "UofT AI",
    logo: "/logos/uoftai-logo.png",
    university: "University of Toronto",
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
    width: 297,
  },
  {
    name: "Wester Cyber Society",
    logo: "/logos/wcs-logo.png",
    university: "University of Western Ontario",
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
    width: 297,
    height: 100,
  },
  {
    name: "UVic AI",
    logo: "/logos/uvic-ai-logo.png",
    university: "University of Victoria",
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
    width: 150,
    height: 100,
  },
  {
    name: "UdeM AI",
    logo: "/logos/udem-ai-logo.png",
    university: "Universitié de Montréal",
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
    width: 120,
    height: 100,
  },
  {
    name: "UTMIST",
    logo: "/logos/utmist-logo.png",
    university: "University of Toronto",
    website: "https://watai.ca/",
    insta: "https://www.instagram.com/wataiteam/",
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

export default function Home() {
  const [isDark, setDark] = useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const chunked_partners = chunk_array(student_partners, Math.min(Math.floor(window.innerWidth / 382) ,3));

  console.log(chunked_partners);
  console.log(Math.floor(window.innerWidth / 382));

  return (
    <div className="w-full overflow-x-hidden">
      <Header isDark={isDark} setDark={setDark} />
      <FirstSection/>
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
      <div id="student-partners" className="fourth-section">
        {/* <FourthSection - Moved here for easier access to array variable/> */}

        <div>
          <div className="title">
            <p className="small-liner">OUR STUDENT PARTNERS</p>
            {windowWidth >= 768 ? (
              <h1 className="big-liner">{"Empowering Tomorrow's Experts Today"}</h1>
            ):(
              <>
                <h1 className="big-liner">{"Empowering Tomorrow's"}</h1>
                <h1 className="big-liner">{"Experts Today"}</h1>
              </>
            )}
          </div>
          <div className="partner-content">
            <div className="partner-feature flex flex-col md:flex-row gap-8 overflow-auto">
              <Image
                src={"/logos/qmind-logo.png"}
                width={1488}
                height={2125}
                alt="QMIND Logo"
                className="main-feature-logo"
              />
              <div className="main-partner-text">
                <h1 className="main-partner-title">QMIND</h1>
                <p className="main-partner-details">{"Queen's University"}</p>
                <p className="main-partner-links">
                  <a className="inner-text" href="https://qmind.ca/">
                    <u>Website</u>
                    <Image
                      src={"/Link.png"}
                      width={24}
                      height={24}
                      alt="Link Symbol"
                      className="link-symbol"
                    />
                  </a>
                  <a
                    className="inner-text"
                    href="https://www.instagram.com/qmind.ai/"
                  >
                    <u>Insta</u>
                    <Image
                      src={"/insta.png"}
                      width={24}
                      height={24}
                      alt="Insta Symbol"
                      className="link-symbol"
                    />
                  </a>
                </p>
              </div>
            </div>
            {/* TODO: Fix typing problem */}
            <div className="partner-grid">
            {chunked_partners.map((row) => (
                <div 
                  className="partner-rows items-baseline" 
                  key={"Partner Rows"}
                >
                  {row.map((partner) => (
                    <div key={partner.name}>
                      <div
                        className="flex flex-col h-[347px] w-[382px] py-8 px-16 gap-4 -ml-[50px]"
                        key={partner.name}
                      >
                        <img src={partner.logo} class="w-[382px] h-[150px] object-contain"></img>
                        <p class="font-bold !text-[23pt]">{partner.name}</p>
                        <p class="text-[16pt] font-normal">{partner.university}</p>
                        
                        <p className="partner-inner-text">
                          <a className="partner-links" href={partner.website}>
                            <u className="partner-link-text">Website</u>
                            <Image
                              src={"/Link.png"}
                              width={24}
                              height={24}
                              alt="Link Symbol"
                              className="link-symbol"
                            />
                          </a>
                          <a className="partner-links" href={partner.insta}>
                            <u className="partner-link-text">Insta</u>
                            <Image
                              src={"/insta.png"}
                              width={24}
                              height={24}
                              alt="Insta Symbol"
                              className="link-symbol"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

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
