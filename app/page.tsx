"use client";

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import About from "./components/About";
import Profile from "./components/Profile";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";

export default function Page() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      setIsAtBottom(scrollPosition >= scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-y-auto relative">
      <About />
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
  );
}
