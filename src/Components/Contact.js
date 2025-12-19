import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0fcplsm',
        'template_ewyo50v',
        form.current,
        { publicKey: 'RFsQzQ5I5SLv0y4sQ' }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="ContactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>

      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          className="name"
          type="text"
          placeholder="Your Name"
          name="from_name"
          required
        />

        <input
          className="email"
          type="email"
          placeholder="Your Email"
          name="your_email"
          required
        />

        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message..."
          required
        ></textarea>

        <button type="submit" className="submitBtn">
          Submit
        </button>

        {/* Social Links */}
        <div className="links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kalyani-deshmukh-36048721b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./LinkedIn.jpeg"
              className="link"
              alt="LinkedIn"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/KalyaniDeshmukh1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="GithubLogo.png"
              className="link"
              alt="GitHub"
            />
          </a>

          {/* Email */}
          <a href="mailto:deshmukhkalyani2001@gmail.com">
            <img
              src="EmailLogo.png"
              className="link"
              alt="Email"
            />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
