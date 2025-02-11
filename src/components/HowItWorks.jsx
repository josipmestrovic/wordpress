import React, { useEffect } from 'react';
import './HowItWorks.css';

const timelineItems = [
  {
    id: 1,
    icon: "fas fa-calendar",
    title: "Initial Meeting Scheduled",
    text: "We begin with a meeting to discuss your project requirements and goals. This conversation helps us understand your vision and plan the next steps.",
    stamp: "Step 1"
  },
  {
    id: 2,
    icon: "fas fa-file-alt",
    title: "Quote Sent",
    text: "A detailed quote is prepared and sent to you, outlining the scope, timeline, and cost of your project.",
    stamp: "Step 2"
  },
  {
    id: 3,
    icon: "fas fa-check",
    title: "Quote Accepted",
    text: "Once you review and approve the quote, we move forward with project planning and preparation.",
    stamp: "Step 3"
  },
  {
    id: 4,
    icon: "fas fa-pencil-alt",
    title: "Prototype Developed",
    text: "A clickable prototype is created for you to review and provide feedback, ensuring the design meets your expectations.",
    stamp: "Step 4"
  },
  {
    id: 5,
    icon: "fas fa-desktop",
    title: "UI/UX Design in Figma",
    text: "Our design team develops pixel‑perfect UI/UX prototypes in Figma that reflect your brand’s identity and user experience goals.",
    stamp: "Step 5"
  },
  {
    id: 6,
    icon: "fas fa-code",
    title: "Development & Testing",
    text: "Our developers build your project while performing thorough testing to ensure quality and reliability.",
    stamp: "Step 6"
  },
  {
    id: 7,
    icon: "fas fa-rocket",
    title: "Project Delivered",
    text: "The final project is delivered and launched, paving the way for your business success and growth.",
    stamp: "Step 7"
  },
];

const HowItWorks = () => {
  useEffect(() => {
    // Simple scroll-triggered reveal (using CSS classes only)
    const timelineBlocks = document.querySelectorAll('.timeline-item');
    const offset = 0.8;

    const hideBlocks = () => {
      timelineBlocks.forEach(block => {
        if (block.getBoundingClientRect().top > window.innerHeight * offset) {
          block.querySelectorAll('.timeline-icon, .timeline-content').forEach(el => {
            el.classList.add('is-hidden');
          });
        }
      });
    };

    const showBlocks = () => {
      timelineBlocks.forEach(block => {
        if (
          block.getBoundingClientRect().top <= window.innerHeight * offset &&
          block.querySelector('.timeline-icon').classList.contains('is-hidden')
        ) {
          block.querySelectorAll('.timeline-icon, .timeline-content').forEach(el => {
            el.classList.remove('is-hidden');
            el.classList.add('animate-it');
          });
        }
      });
    };

    hideBlocks();
    window.addEventListener('scroll', showBlocks);
    return () => {
      window.removeEventListener('scroll', showBlocks);
    };
  }, []);

  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2 className="section-title">How It Works?</h2>
        <div id="timeline">
          {timelineItems.map((item, index) => {
            // Alternate sides: even-indexed items on the left, odd-indexed on the right
            const sideClass = index % 2 === 1 ? "right" : "";
            return (
              <div key={item.id} className={`timeline-item ${sideClass}`}>
                <div className="timeline-icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="time-stamp">{item.stamp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
