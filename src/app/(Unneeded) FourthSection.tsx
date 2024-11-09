"use client";
import Image from "next/image";
import { chunked_partners } from "./page";

// NO LONGER USED - NEW CODE FOR THIS FUNCTION IS NOW IN page.tsx

export default function fourth_section(){
  return (
  <div>
    <div className="title">
      <p className="small-liner">OUR STUDENT PARTNERS</p>
      <h1 className="big-liner">{"Empowering Tomorrow's Experts Today"}</h1>
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
            className="partner-rows items-baseline overflow-auto no-scrollbar max-h-full"  
            key={"Partner Rows"}
          >
            {row.map((partner) => (
              <div key={partner.name}>
                <div
                  className="flex flex-col h-[347px] w-[382px] py-8 px-16 gap-4 overflow-x-hidden"
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
  </div>);
};