// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import "./Hero.css";

const titles = [
  "Full Stack Engineer",
  "Specialized In WordPress",
  "Experienced Problem Solver",
];

const Hero = () => {
  // State for the typewriter effect.
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[textIndex];
    let typeSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Append next character
        setDisplayedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // If full text has been displayed, start deleting after a pause
        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      } else {
        // Delete character by character
        setDisplayedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Smooth scroll function for the Learn More button
  const scrollToContent = () => {
    const contentSection = document.getElementById("about");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Josip Meštrović</h1>
        <h2>
          {displayedText}
          <span className="cursor"></span>
        </h2>
        <p>
          Welcome to my portfolio.
        </p>
        <button onClick={scrollToContent} className="hero-button">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
