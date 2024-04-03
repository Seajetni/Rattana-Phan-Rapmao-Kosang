import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Nav } from "./Nav";
export default function Layout(props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
      {showButton && (
        <button
          className="fixed bottom-4 right-4 w-12 h-12 text-center flex items-center justify-center rounded-full text-white bg-[#A77419]  z-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}

      <nav>
        <Nav />
      </nav>

      <div>{props.children}</div>

      <footer>
        <Footer />
      </footer>
      
    </>
  );
}
