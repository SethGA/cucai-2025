import { MenuIcon, X } from "lucide-react";
import { NextFont } from "next/dist/compiled/@next/font";

type MainMenuProps = {
  isDark: boolean;
  items: {
    name: string;
    link: string;
  }[];
  font: NextFont;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onToggle: () => void;
};

export default function MainMenu({
  isDark,
  items,
  font,
  isOpen,
  setIsOpen,
  onToggle,
}: MainMenuProps) {
  const fontSize = 50;

  return (
    <div className="relative">
      {isOpen ? (
        <button onClick={onToggle} className=" fixed top-4 right-4 z-50">
          <X
            size={50}
            color={isDark ? "white" : "black"}
            className={!isDark ? "invert" : ""}
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
      ) : (
        <button onClick={onToggle}>
          <MenuIcon
            size={50}
            color={isDark ? "white" : "black"}
            className={!isDark ? "invert" : ""}
          />
        </button>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={
          isDark
            ? {
                background: "linear-gradient(180deg, #171456 0%, #6A6CB3)",
              }
            : {
                background:
                  "linear-gradient(rgba(115, 100, 255, 1), rgba(162,216,235, 1))",
              }
        }
      >
        <div className="flex flex-col pt-20">
          {items.map((item) => (
            <a
              href={item.link}
              className={`p-4 text-xl hover:bg-black/10 ${
                isDark ? "text-white" : "text-black"
              } ${font.className}`}
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="mailto:chair@cucai.ca"
            className={`p-4 text-xl hover:bg-black/10 ${
              isDark ? "text-white" : "text-black"
            } ${font.className}`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
