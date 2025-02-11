import React, { useState, useEffect } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Business Plan Pro',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    longDescription:
      'Detailed explanation for Business Plan Pro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum orci ac turpis ultricies, nec laoreet lectus cursus. Duis commodo augue at.',
    image: '/images/Project-Mockup-Poslovni-Plan.webp',
    liveLink: 'https://example.com/business-plan-pro',
  },
  {
    id: 2,
    title: 'Market Analyzer',
    shortDescription:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Detailed explanation for Market Analyzer. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/Project-Mockup-Poslovni-Plan.webp',
    liveLink: 'https://example.com/market-analyzer',
  },
  {
    id: 3,
    title: 'Growth Tracker',
    shortDescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    longDescription:
      'Detailed explanation for Growth Tracker. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: '/images/Project-Mockup-Poslovni-Plan.webp',
    liveLink: 'https://example.com/growth-tracker',
  },
  {
    id: 4,
    title: 'Profit Maximizer',
    shortDescription:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    longDescription:
      'Detailed explanation for Profit Maximizer. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.',
    image: '/images/Project-Mockup-Poslovni-Plan.webp',
    liveLink: 'https://example.com/profit-maximizer',
  },
  {
    id: 5,
    title: 'Efficiency Optimizer',
    shortDescription:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    longDescription:
      'Detailed explanation for Efficiency Optimizer. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nulla facilisi. Proin ut augue a quam tristique tristique.',
    image: '/images/Project-Mockup-Poslovni-Plan.webp',
    liveLink: 'https://example.com/efficiency-optimizer',
  },
  {
    id: 6,
    title: 'Efficiency Optimizer2',
    shortDescription:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    longDescription:
      'Detailed explanation for Efficiency Optimizer. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nulla facilisi. Proin ut augue a quam tristique tristique.',
    image: '/images/Project-Mockup-Poslovni-Plan.webp',
    liveLink: 'https://example.com/efficiency-optimizer',
  },
];

const Projects = () => {
  // Index for the first project of the current page
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  // gridStyle will be used to animate the entire grid container
  const [gridStyle, setGridStyle] = useState({
    transform: 'translateX(0)',
    transition: 'transform 0.5s ease',
  });

  // Adjust number of items per view based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 781) {
        setVisibleCount(1);
      } else if (width <= 1220) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalProjects = projectsData.length;
  // Get the array of projects to display for the current page
  const getDisplayedProjects = () => {
    const projects = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % totalProjects;
      projects.push(projectsData[index]);
    }
    return projects;
  };
  const displayedProjects = getDisplayedProjects();

  // NEXT SLIDE: Slide grid left (by 110%), update index, then slide in from right
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setGridStyle({ transform: 'translateX(-110%)', transition: 'transform 0.5s ease' });
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + visibleCount) % totalProjects);
      // Position new grid off-screen to the right (no transition)
      setGridStyle({ transform: 'translateX(110%)', transition: 'none' });
      setTimeout(() => {
        // Animate new grid sliding into view
        setGridStyle({ transform: 'translateX(0)', transition: 'transform 0.5s ease' });
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 50);
    }, 500);
  };

  // PREVIOUS SLIDE: Slide grid right (by 110%), update index, then slide in from left
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setGridStyle({ transform: 'translateX(110%)', transition: 'transform 0.5s ease' });
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - visibleCount + totalProjects) % totalProjects);
      // Position new grid off-screen to the left (no transition)
      setGridStyle({ transform: 'translateX(-110%)', transition: 'none' });
      setTimeout(() => {
        // Animate new grid sliding into view
        setGridStyle({ transform: 'translateX(0)', transition: 'transform 0.5s ease' });
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 50);
    }, 500);
  };

  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  return (
    <section className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="carousel-container">
          {/* The carousel-grid renders exactly the visible items and is animated via inline style */}
          <div className="carousel-grid" style={gridStyle}>
            {displayedProjects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <button className="see-more-button" onClick={() => openModal(project)}>
                  See More
                </button>
              </div>
            ))}
          </div>
          {/* Desktop arrow controls */}
          <div className="carousel-arrows desktop">
            <button className="carousel-control prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
          {/* Mobile arrow controls */}
          <div className="carousel-arrows mobile">
            <button className="carousel-control prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </div>

      {modalProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalProject.title}</h3>
            <img src={modalProject.image} alt={modalProject.title} className="modal-image" />
            <p>{modalProject.longDescription}</p>
            <div className="modal-buttons">
              <a
                href={modalProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="see-live-button"
              >
                See Live
              </a>
              <button className="close-modal-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
