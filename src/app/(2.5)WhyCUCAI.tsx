"use client";
import { Pixelify_Sans} from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export const WhyCUCAI = ({
    achievements, 
    isDark
}:{
    achievements:{number:string, category:string}[], 
    isDark:boolean
}) => {
    const textColor = isDark ? "text-white" : "text-black";
    const headColor = isDark ? "text-[#a2d8d7]" : "text-[#4705d2]";
    const titleColor = isDark ? "text-white" : "text-[#171456]";

    return (
    <div className={`details-section ${PixelifySans.className} flex flex-col p-[80px] ${textColor}`}>
        
        <p className={`font-[600] text-[24px] text-[#4705d2] text-center sm:text-left ${headColor}`}>
            OUR HISTORY
        </p>
        
        <p className={`${titleColor} text-5xl text-center sm:text-6xl sm:text-left font-extrabold`}>
            Why CUCAI?
        </p>
        
        <div className="flex flex-row justify-center">
            <div className={`flex flex-col text-center ${headColor}`}>
                <p className={`text-center font-[700] text-3xl lg:text-[24px]    mt-[5vh]`}>
                    Our 2024 Conference
                </p>

                {/* Stats stuff */}
                <div className="flex flex-col md:flex-row md:gap-8 md:ml-[1%]">
                    {achievements.map((item, index) => (
                    <div key={index} className="my-[5vh] lg:mt-none">
                        {isDark ? 
                        <div
                            className={`text-[90px] font-extrabold bg-[#1aa9cb] bg-clip-text text-transparent drop-shadow-[0_-4px_0px_rgba(91,196,233,1)] ${PixelifySans.className}`}
                        >
                            {item.number}
                        </div>
                        : 
                        <div
                            className={`text-[90px] font-extrabold bg-[#4705d2] bg-clip-text text-transparent drop-shadow-[0_-4px_0px_rgba(186,154,255,1)] ${PixelifySans.className}`}
                        >
                            {item.number}
                        </div>}

                        {/* Text is always contstant height, so we can constant top margin */}
                        <p className={`font-[600] text-[24px] ${isDark ? "text-[#a2d8d7]" : "text-[#171456]"} w-[100vw] md:w-[30vw]`}>
                            &nbsp;{item.category}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
