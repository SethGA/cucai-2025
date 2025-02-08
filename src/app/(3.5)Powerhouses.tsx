"use client";
import { IBM_Plex_Sans } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import { Carousel } from 'react-responsive-carousel';
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
        name:"Connected Minds", 
        booth:"sponsorbooth-connected.svg",
        desc:"Connected Minds, based at York and Queen's Universities, addresses human-technology interaction risks through interdisciplinary research, focusing on social health and justice for Indigenous Peoples of Canada.",
        // Dummy links - replace when good
        tier_color:"#4FCCFF",
        website:"/",
        insta:"/",
        linkedin:"/",
    },
    {   
        name:"EY Parthenon", 
        booth:"sponsorbooth-ey.svg",
        desc:"< Copy to be updated > 2-3 line summary of the company’s vision, purpose, and mission with relevant links for attendees to learn more about them.",
        // Dummy links - replace when good
        tier_color:"#E49A09",
        website:"/",
        insta:"/",
        linkedin:"/",
    },
]

export function PowerhousesBehindCUCAI({windowWidth, isDark}:{windowWidth:Number, isDark:boolean}) {
  const box_bg = isDark ? [60, 60, 128] : [131, 187, 243];
  
  return (
    // This isn't actually the fourth section. I just like the gradient it has.
    <div className={`three-point-five-section ${PixelifySans.className} p-8`}>
        <div className={``}>
            <p className={`${isDark ? "text-[#a2d8d7]" : "text-[#4705d2]"} text-xl sm:text-3xl font-[600]`}>
                OUR 2024 SPONSORS
            </p>
            <h1 className={`${isDark ? "text-white" : "text-[#171456]"} text-4xl sm:text-5xl font-[700] w-[70%] sm:w-full h-auto`}>
                AI Powerhouses Behind CUCAI 2025
            </h1>
        </div>
        <div className={`w-[90vw] mx-auto`}>
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                interval={5000000} 
                // Change interval to 5000 when done
            >
                {/* All sponsor booth svg files should be 897px by 730 px */}
                {sponsors.map((sponsor) => 
                    (<div className="flex flex-col md:flex-row p-8" key={sponsor.name}>
                        
                        {/* Booth component */}
                        <div className="relative max-w-[50vw] min-h-[35vh] flex justify-end mx-auto md:mx-none">
                            <img src={sponsor.booth} className=""/>
                        </div>
                        
                        {/* Text component */}
                        <div className="relative flex items-end min-h-[35vh] mx-auto md:mx-none">
                            <div className="pixel-corners--wrapper ml-none md:ml-[5vw] my-[3vh] md:my-none">
                                <div 
                                    className="pixel-corners bg-red-200 p-2 w-[60vw] md:w-[30vw]"
                                    style={{
                                        background: `${sponsor.tier_color}`
                                    }}>

                                    <h1 className="text-md md:text-xl lg:text-4xl font-[800] mt-3 p-3">{sponsor.name}</h1>
                                    <p className="text-wrap text-sm md:text-md lg:text-[19px] font-[400]p-3 mt-4">{sponsor.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>))
                }
            </Carousel>
        </div>
    </div>
  );
}
