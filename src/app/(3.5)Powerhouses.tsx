"use client";
import { IBM_Plex_Sans } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
// import { sponsors } from "@/data/sponsors"; // bug ATM w/ this import when running npm run build, at least on my end
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sponsors = [
  {
    name: "Accenture",
    booth: "sponsorbooths/sponsorbooth-accenture.png",
    desc: "Accenture is a global professional services company specializing in IT consulting, strategy, digital transformation, and operations.",
    tier_color: "#4FCCFF",
    website: "https://www.accenture.com/ca-en",
    insta: "https://www.instagram.com/accenture/?hl=en",
    linkedin: "https://ca.linkedin.com/company/accenture",
  },
  {
    name: "Connected Minds",
    booth: "sponsorbooths/sponsorbooth-connected.png",
    desc: "Connected Minds, based at York and Queen's Universities, addresses human-technology interaction risks through interdisciplinary research, focusing on social health and justice for Indigenous Peoples of Canada.",
    tier_color: "#E49A09",
    website: "https://www.yorku.ca/research/connected-minds/",
    insta: null,
    linkedin: "https://ca.linkedin.com/company/cfref-connected-minds",
  },
  {
    name: "Cohere",
    booth: "sponsorbooths/sponsorbooth-cohere.png",
    desc: "Cohere is an AI company specializing in large language models (LLMs) for enterprises and developers. It offers powerful NLP tools for tasks like text generation, classification, and search.",
    tier_color: "#E49A09",
    website: "https://cohere.com/",
    insta: null,
    linkedin: "https://ca.linkedin.com/company/cohere-ai",
  },
  {
    name: "EY Canada",
    booth: "sponsorbooths/sponsorbooth-ey.png",
    desc: "EY-Parthenon is the strategy consulting arm of Ernst & Young (EY), specializing in corporate strategy, growth, M&A, and private equity consulting. ",
    tier_color: "#E49A09",
    website: "https://www.ey.com/en_ca/services/strategy/parthenon",
    insta: "https://www.instagram.com/ey_parthenon/",
    linkedin: "https://ca.linkedin.com/company/ey-parthenon",
  },
  {
    name: "REDBIT",
    booth: "sponsorbooths/sponsorbooth-redbit.png",
    desc: "RedBit is a software consulting, design, and engineering company dedicated to delivering solutions that help businesses reach new audiences, drive revenue, and enhance brand awareness. ",
    tier_color: "#E49A09",
    website: "https://www.redbitdev.com/",
    insta: null,
    linkedin: "https://ca.linkedin.com/company/redbit-development",
  },
  {
    name: "RSG International",
    booth: "sponsorbooths/sponsorbooth-rsg.png",
    desc: "RSG International is a Canadian-based provider of infrastructure safety services specializing in construction and installation, product distribution, new product development, and auxiliary services.",
    tier_color: "#E49A09",
    website: "https://www.rsgint.com/",
    insta: "https://www.instagram.com/rsg.international/",
    linkedin: "https://ca.linkedin.com/company/rsg-international-ca",
  },
  {
    name: "School of Queen's Computing",
    booth: "sponsorbooths/sponsorbooth-qsc.png",
    desc: "Queen's School of Computing, part of Queen's University in Kingston, Canada, is a leading institution for computer science education and research.",
    tier_color: "#CE7441",
    website: "https://www.cs.queensu.ca/",
    insta: "https://www.instagram.com/queenscomputing/",
    linkedin: "https://ca.linkedin.com/company/queenscomputing",
  },
  {
    name: "University of Waterloo",
    booth: "sponsorbooths/sponsorbooth-uw.png",
    desc: "The University of Waterloo (UW) is a top-ranked public research university in Waterloo, Ontario, Canada, known for its strong emphasis on co-op education, engineering, computer science, and innovation.",
    tier_color: "#CE7441",
    website: "https://uwaterloo.ca/",
    insta: "https://www.instagram.com/uofwaterloo/",
    linkedin: "https://ca.linkedin.com/school/uwaterloo/",
  },
  {
    name: "Waterloo.AI",
    booth: "sponsorbooths/sponsorbooth-uwai.png",
    desc: "Waterloo.ai, officially known as the Waterloo Data and Artificial Intelligence Institute, is a multidisciplinary research hub at the University of Waterloo.",
    tier_color: "#CE7441",
    website: "https://uwaterloo.ca/artificial-intelligence-institute/",
    insta: "https://www.instagram.com/waterloo.ai/",
    linkedin: "https://ca.linkedin.com/company/waterloo-artificial-intelligence-institute",
  },
  {
    name: "Smith Engineering Queen's University",
    booth: "sponsorbooths/sponsorbooth-smith.png",
    desc: "Smith Engineering, officially known as the Stephen J.R. Smith Faculty of Engineering and Applied Science, is the engineering faculty at Queen's University in Kingston, Ontario, Canada.",
    tier_color: "#CE7441",
    website: "https://smithengineering.queensu.ca/",
    insta: "https://www.instagram.com/smithengineeringqueens/?hl=fr",
    linkedin: "https://ca.linkedin.com/school/smithengineeringqueens/",
  },
  {
    name: "Université de Montréal",
    booth: "sponsorbooths/sponsorbooth-udem.png",
    desc: "Université de Montréal (UdeM) is a prominent public research university located in Montreal, Quebec, Canada. Founded in 1878, it is one of the largest French-language universities in the world. ",
    tier_color: "#CE7441",
    website: "https://www.umontreal.ca/en/",
    insta: "https://www.instagram.com/umontreal/",
    linkedin: "https://ca.linkedin.com/school/universite-de-montreal/",
  },
];


export function PowerhousesBehindCUCAI({
  windowWidth,
  isDark,
}: {
  windowWidth: number;
  isDark: boolean;
}) {
  const box_bg = isDark ? [60, 60, 128] : [131, 187, 243];

  return (
    // This isn't actually the fourth section. I just like the gradient it has.
    <div className={`three-point-five-section ${PixelifySans.className} p-8`}>
      <div className={``}>
        <p
          className={`${
            isDark ? "text-[#a2d8d7]" : "text-[#4705d2]"
          } text-xl sm:text-3xl font-[600]`}
        >
          OUR SPONSORS
        </p>
        <h1
          className={`${
            isDark ? "text-white" : "text-[#171456]"
          } text-4xl sm:text-5xl font-[700] w-[70%] sm:w-full h-auto`}
        >
          AI Powerhouses Behind CUCAI 2025
        </h1>
      </div>
      <div className={`w-[90vw] mx-auto`}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          interval={30000}
          infiniteLoop
        >
          {/* All sponsor booth svg files should be 897px by 730 px */}
          {sponsors.map((sponsor) => (
            <div className="flex flex-col md:flex-row p-8" key={sponsor.name}>

              {/* Booth component */}
              <img src={sponsor.booth} className="max-w-[35vw] h-full flex justify-start mx-auto md:mx-none"/>

              {/* Text component */}
              <div className="relative flex items-end min-h-[35vh] mx-auto mt-3 sm:mt-none">
                <div className="pixel-corners--wrapper mb-[6vh] md:mt-none">
                  <div
                    className="pixel-corners bg-red-200 p-2 w-[60vw] md:w-[30vw]"
                    style={{
                      background: `${sponsor.tier_color}`,
                    }}
                  >
                    <h1 className="text-md md:text-xl lg:text-4xl font-[800] mt-3 p-3">
                      {sponsor.name}
                    </h1>
                    <p className="text-wrap text-sm md:text-md lg:text-[19px] font-[400]p-3 my-4">
                      {sponsor.desc}
                    </p>

                    {/* Links */}
                    <div className="flex flex-row justify-center mt-2 text-sm lg:text-lg underline ">
                      <div
                        className={`flex ${
                          windowWidth >= 810 ? "flex-row gap-2" : "flex-col"
                        }`}
                      >
                        <a
                          href={sponsor.website}
                          className="flex flex-row items-center mx-auto"
                        >
                          <p className="gap-1">Website</p>
                          <img
                            src="./Link.png"
                            alt="Website"
                            className={`max-w-[24px] max-h-[24px] ${
                              isDark && "invert"
                            }`}
                          />
                        </a>
                        {sponsor.insta && (
                          <a
                            href={sponsor.insta}
                            className="flex flex-row items-center gap-1 mx-auto"
                          >
                            <p className="">Insta</p>
                            <img
                              src="./insta.png"
                              alt="Instagram"
                              className={`max-w-[24px] max-h-[24px] ${
                                isDark && "invert"
                              }`}
                            />
                          </a>
                        )}
                        <a
                          href={sponsor.linkedin}
                          className="flex flex-row items-center gap-1 mx-auto"
                        >
                          <p className="">Linkedin</p>
                          <img
                            src="./linkedin.png"
                            alt="Linkedin"
                            className={`w-[24px] h-[24px] ${
                              !isDark && "invert"
                            }`}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
