"use client";
import Image from "next/image";
import { chunked_partners } from "./page";

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
  </div>);
};
