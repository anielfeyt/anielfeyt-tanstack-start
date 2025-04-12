import React, { useEffect } from "react";

export default function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const button = document.querySelector(".scroll-to-top");

    const handleScroll = () => {
      if (button) {
        if (window.scrollY > 300) {
          button.classList.remove("hidden");
        } else {
          button.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="hidden scroll-to-top fixed bottom-4 right-4 z-50 p-2  text-slate-400 cursor-pointer transition-transform transform hover:scale-120"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-move-up-icon lucide-move-up"
      >
        <path d="M8 6L12 2L16 6" />
        <path d="M12 2V22" />
      </svg>
    </button>
  );
}
