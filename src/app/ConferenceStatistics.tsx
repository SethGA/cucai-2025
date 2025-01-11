"use client";
import { PixelifySans, achievements } from "./(5)TransformTomorrowTogether";

// ToDo: Rebuild this from bottom-up using React & tailwind
export const ConferenceStatistics = () => {
  return (
    <div className={`flex flex-col p-8 text-white`}>
      <p
        className={`${PixelifySans.className} text-[#171456] text-6xl font-extrabold`}
      >
        Conference Statistics
      </p>
      <div className={`flex flex-row gap-8`}>
        <div>
          <p className={`text-[#77cde4] ${PixelifySans.className}`}>
            Delegate statistics for 2024
          </p>

          <div className="flex flex-row">
            {/* Stats stuff */}
            <div className="flex flex-col items-center">
              {achievements.map((item, index) => (
                <div key={index} className="flex flex-row gap-8">
                  <div
                    className={`text-[90px] font-extrabold bg-gradient-to-br from-blue-100 to-[#77cde4] bg-clip-text text-transparent drop-shadow-[0_-4px_0px_rgba(0,0,0,1)] ${PixelifySans.className}`}
                  >
                    {item.number}
                  </div>

                  {/* Text is always contstant height, so we can constant top margin */}
                  <p className={`mt-[60.5px] text-white`}>
                    &nbsp;{item.category}
                  </p>
                </div>
              ))}
            </div>

            {/* Map of Canada */}
            <div>
              <img
                src="./canMap.svg"
                alt="Our schools"
                className="w-[50vw] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
