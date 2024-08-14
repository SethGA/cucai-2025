import Image from "next/image";

let buttons = [
    { name: "About", link: "/" },
    { name: "Speakers", link: "/" },
    { name: "Schedule", link: "/" },
    { name: "Sponsors", link: "/" },
    { name: "Register", link: "/" },
  ];
  
export default function Header() {
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
            <a href="/" className="menu-toggle">
                <Image
                src="/Mode Toggle.png"
                alt="Toggle Mode"
                width={40}
                height={40}
                />
            </a>
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
  