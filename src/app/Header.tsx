import Image from "next/image";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const buttons = [
    { name: "About", link: "#about" },
    { name: "Speakers", link: "#speakers" },
    { name: "Schedule", link: "#schedule" },
    { name: "Sponsors", link: "#sponsors" },
    { name: "Register", link: "/" },
];

export default function Header({
    isDark = false,
    setDark
}: {
    isDark: boolean,
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [flip, setFlip] = useState(false);
    const [isTransitioning, setTransition] = useState(false);

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

    return (
        <div className="header">
            <div className="cucai-logo">
                <Image src="/image.png" alt="CUCAI logo" width={142.8} height={68} />
            </div>
            <div className="menu-list">
                {buttons.map((b) => (
                    <a href={b.link} className="menu-option" key={b.name}>
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
                <a href="/" className="contact-us">
                    <Image
                        src="/CTA Button.png"
                        alt="Contact Us"
                        width={123}
                        height={45}
                    />
                </a>
            </div>
        </div>
    );
}
