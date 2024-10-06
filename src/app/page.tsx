"use client";

import Header from "./Header";
import FirstSection from "./FirstSection";
import { useState } from "react";
import Image from "next/image";
import { SecondSection } from "./SecondSection";

let speakers = [
  { name: "Ben Rossen", position: "AI Policy & Regulation", img: "/headshots/ben-rossen.png",company: "/logos/open-ai-logo.png", width: 220.43},
  { name: "Eddie Kim", position: "Manager of Technical Staff", img: "/headshots/eddie-kim.png",company: "/logos/cohere-logo.png", width: 255.36},
  { name: "Ezequiel Lanza", position: "AI Open Source Evangelist", img: "/headshots/ezequiel-lanza.png",company: "/logos/intel-logo.png", width: 140.81},
  { name: "Dr. Ruslan Salakhutdinov", position: "Ex-Director of AI Research", img: "/headshots/ruslan.png",company: "/logos/apple-logo.png", width: 44.66},
];

// TODO: Add other Uni's website and instagram links

let student_partners = [
  { name: "WAT.ai", logo: "/logos/wat-ai-logo.png", university:"University of Waterloo", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 297},
  { name: "Western AI", logo: "/logos/wai-logo.png", university:"University of Western Ontario", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 120},
  { name: "McGill AI", logo: "/logos/mcgill-ai-logo.png", university:"McGill University", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 130},
  { name: "UofT AI", logo: "/logos/uoftai-logo.png", university:"University of Toronto", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 297},
  { name: "Wester Cyber Society", logo: "/logos/wcs-logo.png", university:"University of Western Ontario", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 297, height: 100},
  { name: "UVic AI", logo: "/logos/uvic-ai-logo.png", university:"University of Victoria", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 150, height: 100},
  { name: "UdeM AI", logo: "/logos/udem-ai-logo.png", university:"Universitié de Montréal", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 120, height: 100},
  { name: "UTMIST", logo: "/logos/utmist-logo.png", university:"University of Toronto", website: "https://watai.ca/", insta: "https://www.instagram.com/wataiteam/", width: 297, height: 100},
]

// TODO: Add CUCAI staff once the carousel works

let leaders = [
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
  { name: "Organizer Name", role: "Role Name", linkedin: "linkedin", hs: "/image.png" },
]

const chunk_array = (array: {}[], size: number) => {
  let result = []
  for(let i = 0; i < array.length; i+=size){
    result.push(array.slice(i, i+size));
  }
  return result
}
const chunked_partners = chunk_array(student_partners, 3);

export default function Home() {
  const [isDark, setDark] = useState<boolean>(true);

  return (
    <div>
      <Header isDark={isDark} setDark={setDark} />
      <FirstSection/>
      <div id="about">
        <SecondSection />
      </div>
      <div id="speakers">
        <div className="third-section">
          {/* 
            AI Experts on Stage
          */}
          <div className="title">
            <p className="small-font">OUR 2025 SPEAKERS</p>
            <h1 className="big-font">AI EXPERTS ON STAGE</h1>
          </div>
          <div className="speaker-list">
          {speakers.map((speaker) => (
            <div className="speaker-elem" key={speaker.name}>
                <Image
                  src={speaker.img}
                  alt={speaker.name}
                  width={250}
                  height={250}
                  className="speaker-img"
                />
                <p className="speaker-name">{speaker.name}</p>
                <p className="speaker-text">{speaker.position}</p>
                <Image
                  src={speaker.company}
                  alt={speaker.company}
                  width={speaker.width}
                  height={55}
                  className="speaker-logo"
                />
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* <div className="tbd-section">
        <div id="schedule">
          <h1>EVENT AGENDA:</h1>
          <p>TBD</p>
        </div>
        <div id="sponsors">
          <h1>OUR SPONSORS</h1>
          <p>TBD</p>
        </div>
      </div> */}
      
      <div className="fourth-section">
        <div className="title">
          <p className="small-liner">OUR STUDENT PARTNERS</p>
          <h1 className="big-liner">{"Empowering Tomorrow\'s Experts Today"}</h1>
        </div>
        <div className="partner-content">
          <div className="partner-feature">
            <Image 
              src={"/logos/qmind-logo.png"}
              width={1488}
              height={2125}
              alt="QMIND Logo"
              className="main-feature-logo"
            />
            <div className="main-partner-text">
              <h1 className="main-partner-title">QMIND</h1>
              <p className="main-partner-details">{'Queen\'s University'}</p>
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
                <a className="inner-text" href="https://www.instagram.com/qmind.ai/">
                  <u>Instagram</u>
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
              <div className="partner-rows" key={"Partner Rows"}>
                {row.map((partner) => (
                  <div className="partner-body" key={partner.name}>
                      <Image
                        src={partner.logo}
                        width={partner.width}
                        height={100}
                        alt={partner.name}
                        className="partner-logo"
                      />
                      <div className="partner-paragraph">
                        <b className="partner-title">{partner.name}</b>
                        <p className="partner-uni">{partner.university}</p>
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
      <div className="fifth-section">
        {/* 
          Transform Tomorrow Together
          TODO: Fix formatting
        */}
        <div className="text-part">
          <div className="title">
            <p className="small-text">JOIN US</p>
            <h1 className="big-text">Transform Tomorrow Together</h1>
            <div className="text-part">
              <p>Have questions or want to get involved?</p>
              <p>Get in touch with us and join the CUCAI Community!</p>
              <a href="/" className="contact-button">Contact Us</a>
            </div>
          </div>
        </div>
        <Image 
          src={"/image 32.png"}
          width={1000}
          height={1000}
          alt={"CUCAI Team Picture"}
          className="join-us-pic"
        />
      </div>
      <div className="sixth-section">
        {/* 
          Leaders Behind the Vision
        */}
        {/* TODO: Implement Carousel Version - Check CUCAI 2024 Repo for more */}
        <div className="team-title">
          <p className="small-text">MEET OUR TEAM</p>
          <h1 className="big-text">Leaders Behind the Vision</h1>
        </div>
        <div className="the-team">
          {leaders.map((leader) => (
            <div className="carousel-item" key={leader.name}>
                <Image
                  src={leader.hs}
                  alt={leader.name}
                  width={400}
                  height={250}
                  className="leader-img"
                />
                <div className="leader-text">
                  <p className="leader-name">{leader.name}</p>
                  <p className="leader-role">{leader.role}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Footer">

      </div>
    </div>
  );
}
