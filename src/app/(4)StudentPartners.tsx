"use client";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

export const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const chunk_array = (array: {}[], size: number) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

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

export function StudentPartners({windowWidth}) {

  const chunked_partners = chunk_array(
    student_partners,
    Math.min(Math.floor(window.innerWidth / 382), 3)
  );

  var fade_speed = 5;

  const gradients = Array.from({ length: chunked_partners.length }, (_, i) => ({
    from: `rgb(${116 - i * fade_speed}, ${173 - i * fade_speed}, 246)`,
    to: `rgb(${116 - (i + 1) * fade_speed}, ${
      173 - (i + 1) * fade_speed
    }, 246)`,
  }));


  return (
    <div id="student-partners" className="fourth-section">
      <div>
        <div className="title">
          <p className="small-liner">OUR STUDENT PARTNERS</p>
          {windowWidth >= 768 ? (
            <h1 className="big-liner">
              {"Empowering Tomorrow's Experts Today"}
            </h1>
          ) : (
            <>
              <h1 className={"big-liner " + PixelifySans.className}>
                {"Empowering Tomorrow's Experts Today"}
              </h1>
            </>
          )}
        </div>
        <div className="partner-content">
          <div className="partner-feature flex flex-col md:flex-row gap-8 overflow-hidden">
            <div className="main-partner-text">
              <h1 className="main-partner-title self-end">QMIND</h1>
              <p className="main-partner-details self-end">
                {"Queen's University"}
              </p>
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
                  className="inner-text ml-[32px]"
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
            <Image
              src={"/logos/qmind-logo.png"}
              width={488}
              height={155}
              alt="QMIND Logo"
              className="main-feature-logo"
            />
          </div>
          {/* TODO: Fix typing problem */}
          <div className="partner-grid">
            {chunked_partners.map((row, row_index) => (
              <div className="partner-rows items-baseline" key={"Partner Rows"}>
                {row.map((partner) => (
                  <div key={partner.name}>
                    <div className="py-4 px-8">
                      <div
                        className="partner-body flex flex-col h-[347px] w-[382px] gap-4 -ml-[50px]"
                        key={partner.name}
                        style={{
                          background: `linear-gradient(to bottom, ${gradients[row_index].from}, ${gradients[row_index].to})`,
                        }}
                      >
                        <img
                          src={partner.logo}
                          class="w-[182px] h-[100px] mt-8 object-contain"
                        ></img>
                        <p class="font-bold !text-[23pt]">{partner.name}</p>
                        <p class="text-[16pt] font-normal">
                          {partner.university}
                        </p>

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
                          <a
                            className="partner-links ml-[32px]"
                            href={partner.insta}
                          >
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
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href="/" className="partner-button--wrapper">
        <img
          src="become_a_partner.png"
          alt="Become A Partner"
          className="mt-8 ml-[40px] h-[61px] w-[220px]"
        />
      </a>
    </div>
  );
}
