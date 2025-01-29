"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MainMenu from "@/components/main-menu";
import { useSpring, animated } from "react-spring";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const buttons = [
  { name: "About", link: "#about" },
  { name: "Speakers", link: "#speakers" },
  { name: "Schedule (Soon)", link: "/" },
  { name: "Sponsors (Soon)", link: "/" },
  { name: "Register (Soon)", link: "/" },
];

const useIsMediumScreen = () => {
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateIsMedium = () => setIsMedium(mediaQuery.matches);

    updateIsMedium(); // Set initial value
    mediaQuery.addEventListener("change", updateIsMedium);

    return () => mediaQuery.removeEventListener("change", updateIsMedium);
  }, []);

  return isMedium;
};

export default function Header({
  isDark = false,
  setDark,
}: {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isMediumScreen = useIsMediumScreen();
  const [flip, setFlip] = useState(false);
  const [isTransitioning, setTransition] = useState(false);

  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    reverse: flip,
    delay: 50,
  });

  const fadeOut = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    reset: false,
    reverse: flip,
    delay: 50,
  });

  const changeImage = () => {
    setTransition(true);
    setTimeout(() => {
      setDark((prevDark) => !prevDark);
      document.body.classList.toggle("dark-mode", !isDark);
    }, 100);
    setTimeout(() => {
      setTransition(false);
    }, 100);
  };

  const getImage = () => {
    return (
      <Image
        src={isDark ? "/(L)Mode Toggle.png" : "/(D)Mode Toggle.png"}
        alt={isDark ? "Toggle Mode (DARK)" : "Toggle Mode (LIGHT)"}
        width={40}
        height={40}
      />
    );
  };

  const LongHeader = () => {
    return (
      <div
        className={`flex items-center gap-4 ${isDark ? "text-white" : null}`}
      >
        {buttons.map((b) => (
          <a
            href={b.link}
            className={"menu-option " + PixelifySans.className + " hover:scale-110 transition-all"}
            key={b.name}
          >
            {b.name}
          </a>
        ))}
        <button className="menu-toggle hover:scale-110 transition-all" onClick={changeImage}>
          {isTransitioning ? (
            <animated.div style={isDark ? fadeIn : fadeOut}>
              {getImage()}
            </animated.div>
          ) : (
            getImage()
          )}
        </button>
        {/* <a href="mailto:chair@cucai.ca" className="contact-us hover:scale-110 transition-all">
          <Image
            src="/CTA Button Pixel.png"
            alt="Contact Us"
            className={PixelifySans.className}
            width={123}
            height={45}
          />
        </a> */}
          <a className={``}>
            <img 
              src="./contact-us-button.png"
              alt="mailto:chair@cucai.ca" 
              className={`w-[123px] h-auto hover:brightness-110 active:brightness-90 sm:hover:scale-110 transition-all`}
            />
          </a>

      </div>
    );
  };

  const Burger = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <div
        className={`flex flex-row gap-3 items-center ${
          isDark ? "text-white" : null
        }`}
      >
        <button className="menu-toggle min-w-10" onClick={changeImage}>
          {isTransitioning ? (
            <animated.div style={isDark ? fadeIn : fadeOut}>
              {getImage()}
            </animated.div>
          ) : (
            getImage()
          )}
        </button>

        <MainMenu
          isDark={isDark}
          items={buttons}
          font={PixelifySans}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          onToggle={toggleSidebar}
        />
      </div>
    );
  };

  return (
    <header
      className={`flex ${
        isDark ? "bg-[#171456]" : "bg-[#7364ff]"
      } px-5 md:px-[80px] py-[8px] justify-between`}
    >
      <div className="cucai-logo hover:scale-110 transition-all">
        <Image
          src="/CUCAI LOGO.svg"
          alt="CUCAI logo"
          width={142.8}
          height={68}
          className="min-w-[142.8px]"
        />
      </div>

      {isMediumScreen ? <LongHeader /> : <Burger />}
    </header>
  );
}
