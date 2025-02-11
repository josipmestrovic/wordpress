import React from 'react';
import './FullStackInfo.css';

const situations = [
  {
    id: 1,
    icon: 'fas fa-laptop-code',
    text: 'You need to build interactive, responsive websites that engage users and drive conversions.'
  },
  {
    id: 2,
    icon: 'fas fa-cogs',
    text: 'Your business requires custom applications to automate processes and improve efficiency.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    text: 'Integration of third-party services or APIs is necessary to extend functionality and connectivity.'
  },
  {
    id: 4,
    icon: 'fas fa-chart-line',
    text: 'Optimizing the user experience and performance of your digital platforms is a top priority.'
  },
  {
    id: 5,
    icon: 'fas fa-server',
    text: 'You are planning to scale your infrastructure to handle growing data and traffic seamlessly.'
  },
  {
    id: 6,
    icon: 'fas fa-sync-alt',
    text: 'Maintaining and updating legacy systems to keep them secure and efficient is essential.'
  }
];

const FullStackInfo = () => {
  return (
    <section className="fullstack-info-section">
      <div className="container">
        <h2>When to Hire a Full Stack Developer</h2>
        <p>
          A full stack developer can handle both the front-end and back-end aspects of your project.
          Whether you need to build a new website, develop custom applications, or integrate modern
          technologies, a full stack expert has you covered. Below are some common situations when hiring one makes a real difference:
        </p>
        <ul className="situations-list">
          {situations.map((item) => (
            <li key={item.id} className="situation-item">
              <i className={item.icon}></i>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FullStackInfo;
