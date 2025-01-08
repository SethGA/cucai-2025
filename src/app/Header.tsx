"use client";

import Image from "next/image";
import { useState } from "react";
import MainMenu from "@/components/main-menu"
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

export default function Header({
    windowWidth,
    isDark = false,
    setDark,
}: {
    windowWidth: number,
    isDark: boolean,
    setDark: React.Dispatch<React.SetStateAction<boolean>>,
}) {
    const [flip, setFlip] = useState(false);
    const [isTransitioning, setTransition] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const fadeIn = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        reverse: flip,
        delay: 50,
        onRest: () => setFlip(!flip)
    });

    const fadeOut = useSpring({
        to: { opacity: 0 },
        from: { opacity: 1 },
        reset: false,
        reverse: flip,
        delay: 50,
        onRest: () => setFlip(!flip)
    });

    // console.log("Header re-rendered");

    const changeImage = () => {
        setTransition(true);
        setTimeout(() => {
            setDark(prevDark => !prevDark);
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
        return (<div className="menu-list">
            {buttons.map((b) => (
                <a href={b.link} className={"menu-option " + PixelifySans.className} key={b.name}>
                    {b.name}
                </a>
            ))}
            <button className="menu-toggle" onClick={changeImage}>
                {isTransitioning ? (
                    <animated.div style={isDark ? fadeIn : fadeOut}>
                        {getImage()}
                    </animated.div>
                ) : (
                    getImage()
                )}
            </button>
            <a href="mailto:chair@cucai.ca" className="contact-us">
                <Image
                    src="/CTA Button.png"
                    alt="Contact Us"
                    className={PixelifySans.className}
                    width={123}
                    height={45}
                />
            </a>
        </div>);
    }
    

    return (
        <div className="header">
            {/* Improve responsiveness by switching to hamburger menu if window size is less than 768 pixels */}
            <div className="cucai-logo">
                <Image src="/image.png" alt="CUCAI logo" width={142.8} height={68} className="min-w-[142.8px]"/>
            </div>
            {windowWidth >= 906 ? (
                <LongHeader />
            ) : (
                <div className="flex flex-row">
                    <button className="menu-toggle min-w-10 pr-[60px]" onClick={changeImage}>
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
                    />
                </div>
            )}
        </div>
    );
}