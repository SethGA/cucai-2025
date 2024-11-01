import Image from "next/image";
import { SetStateAction, useState } from "react";
import { useSpring, animated } from "react-spring";

let buttons = [
    { name: "About", link: "#about" },
    { name: "Speakers", link: "#speakers" },
    { name: "Schedule", link: "#schedule" },
    { name: "Sponsors", link: "#sponsors" },
    { name: "Register", link: "/" },
  ];
  
export default function Header(
    {
        isDark, 
        setDark
    } : 
    {
        isDark:boolean,
        setDark: React.Dispatch<React.SetStateAction<boolean>>; 
    } ) {

        // const [opacity, setOpacity] = useState(1);
        const [flip, setFlip] = useState(false);
        const [isTransitioning, setTransition] = useState(false);
        const [isFadingIn, setFadeIn] = useState(false)
        const fadeIn = useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            reset: false,
            reverse: flip,
            delay: 50, 
            onRest: () => setFlip(!flip)
        })
        const fadeOut = useSpring({
            to: { opacity: 0 },
            from: { opacity: 1 },
            reset: false,
            reverse: flip,
            delay: 50, 
            onRest: () => setFlip(!flip)
        })
        const changeImage = () => {
            setFadeIn(false);
            setTransition(true);
            setTimeout(()=>{
                setDark(prevDark => !prevDark);
                setFadeIn(true);
            }, 400)
            setTimeout(()=>{
                setTransition(false);
            }, 480)
        }

        const getImage = () => {
            return (
                <Image 
                    src={isDark ? "/(D)Mode Toggle.png" : "/(L)Mode Toggle.png"}
                    alt="Toggle Mode (LIGHT)"
                    width={40}
                    height={40}/>
            )
        }


        return (
            <div className="header bg-gradient-to-t from-[#A2D8EB] to-[#7364FF]">
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
                        <animated.div style={isFadingIn ? fadeIn : fadeOut}>
                            {getImage()}       
                        </animated.div>) : 
                            getImage()
                        }
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
  