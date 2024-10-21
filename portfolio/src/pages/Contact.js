import React from 'react';
import "../Contact.css"
import github from "../img/github.png"
import linkedin from "../img/linkedin.webp"
import mail from "../img/email.jpg"


// Define the URLs for your GitHub, LinkedIn, and email
const githubURL = 'https://github.com/nkosimate';  // Replace with your actual GitHub URL
const linkedinURL = 'https://linkedin.com/in/nkosinathi-mate';  // Replace with your actual LinkedIn URL
const emailAddress = 'mailto:nkosimate@gmail.com';  // Replace with your email

function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>
      <div className="contact-links">
        {/* GitHub Link */}
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <img
            src= {github}
            alt="GitHub"
            className="contact-icon"
          />
        </a>

        {/* LinkedIn Link */}
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="contact-icon"
          />
        </a>

        {/* Email Link */}
        <a href={emailAddress}>
          <img
            src={mail}
            alt="Email"
            className="contact-icon"
          />
        </a>
      </div>
    </section>
  );
}

export default Contact;
