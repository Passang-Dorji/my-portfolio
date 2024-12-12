"use client";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import About from "./component/About";
import Profile from "./pages/profile/page";
import ProjectPage from "./pages/project/page";
import ContactPage from "./pages/contact/page";
export default function Page() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;
    setIsAtBottom(scrollPosition >= scrollHeight - 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="min-h-screen overflow-y-auto relative">
        <About />;
        <Profile />
        <ProjectPage />
        <ContactPage />
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-2 bg-indigo-700 rounded-full text-white hover:bg-indigo-800 transition duration-300 ease-in-out"
        >
          {isAtBottom ? (
            <ArrowUpCircleIcon className="animate-bounce w-12 h-12" />
          ) : (
            <ArrowDownCircleIcon className="animate-bounce w-12 h-12" />
          )}
        </button>
      </div>
    </>
  );
}
