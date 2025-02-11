import React, { useState } from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  const email = 'info@example.com';
  const [copyStatus, setCopyStatus] = useState("Click here to copy");

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopyStatus("Mail copied!");
    setTimeout(() => {
      setCopyStatus("Click here to copy");
    }, 3000);
  };

  return (
    <section className="contact-info-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-info-wrapper">
          <div className="contact-block email-block">
            <div className="email-header">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <a href={`mailto:${email}`} className="email-link">
                {email}
              </a>
              <button className="copy-button" onClick={copyEmail} title="Copy email">
                {copyStatus}
              </button>
            </div>
          </div>
          <div className="contact-block linkedin-block">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-cta"
            >
              <img
                src="/images/linkedin-logo.webp"
                alt="LinkedIn"
                className="linkedin-logo"
              />
              <span>DM me on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
