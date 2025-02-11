// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import ContactInfo from "./components/ContactInfo";
import FullStackInfo from "./components/FullStackInfo";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="site-main">
      <Header className="header" />
      <Hero className="hero" />
      <main>
        <AboutMe />
        <Projects />
        <ContactInfo />
        <HowItWorks />
        <Reviews />
     
        <FullStackInfo />
        {/* Additional sections can follow */}
      </main>
    </div>
  );
}

export default App;
