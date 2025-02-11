// src/components/AboutMe.jsx
import React from 'react';
import './AboutMe.css';

/* 
  Ensure that Font Awesome is available in your project.
  Add the following in your public/index.html <head>:
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
*/

const skills = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Frontend Development",
    description: "Crafting interactive user interfaces.",
    more: "I use React, HTML, and CSS to build responsive and engaging web applications.",
  },
  {
    id: 2,
    icon: "fas fa-server",
    title: "Backend Development",
    description: "Building robust server-side logic.",
    more: "Using Node.js and Express, I design secure and scalable back-end systems.",
  },
  {
    id: 3,
    icon: "fas fa-database",
    title: "Database Management",
    description: "Efficient data storage solutions.",
    more: "I work with both SQL and NoSQL databases to ensure data integrity and performance.",
  },
  {
    id: 4,
    icon: "fas fa-sync-alt",
    title: "API Integration",
    description: "Connecting systems seamlessly.",
    more: "I integrate third-party services and build RESTful APIs for smooth data exchange.",
  },
  {
    id: 5,
    icon: "fas fa-cogs",
    title: "DevOps & Deployment",
    description: "Automating and streamlining deployments.",
    more: "I employ CI/CD pipelines, containerization, and cloud services to ensure reliable product releases.",
  },
  {
    id: 6,
    icon: "fas fa-check-circle",
    title: "Testing & QA",
    description: "Ensuring software quality.",
    more: "I utilize various testing strategies (unit, integration, automated) to maintain high quality standards.",
  },
  {
    id: 7,
    icon: "fab fa-wordpress",
    title: "WordPress Development",
    description: "Building dynamic websites with WordPress.",
    more: "I customize themes, plugins, and leverage WordPress for efficient content management.",
  },
  {
    id: 8,
    icon: "fas fa-palette",
    title: "UI/UX & Prototyping",
    description: "Designing intuitive experiences.",
    more: "I create user-centric designs and prototypes using Figma to ensure seamless user interactions.",
  },
];
const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <h2>About Me</h2>
       
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-card">
              <div className="icon-container">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              {/* The hint container */}
              <div className="hint">
                <button className="hint-button">?</button>
                <span className="tooltip">{skill.more}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default AboutMe;
