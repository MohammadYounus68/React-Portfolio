import React from 'react';
import './ContactBox.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faPaperPlane, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faPhone, faPaperPlane, faAnglesRight, faFacebook, faLinkedin);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import useScrollReveal hook
import useScrollReveal from '../../hooks/useScrollReveal';

const ContactBox = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  useScrollReveal([
    {name:'.top-header-contact',options:{origin:'top'}},
    {name:'.left-col',options:{origin:'left'}},
    {name:'.right-col',options:{origin:'right',interval:300}},
  ]);

  return (
    <section className="section contact-section" id="contact">
      <div className="top-header-contact">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="contact-row">
        {/* Left Column */}
        <div className="left-col">
          <div className="contact-infos">
            <h2>
              Find Me <FontAwesomeIcon icon="angles-right" />
            </h2>
            <div className="contact-des">
              <p className='email'>
                <FontAwesomeIcon icon="envelope" /> <a href="https://mail.google.com/mail/?view=cm&to=mohammadyounus3830@gmail.com" target="_blank">mohammadyounus3830@gmail.com</a>
              </p>
              <p>
                <FontAwesomeIcon icon="phone" /> +880 01761030368
              </p>
              <p style={{ color: 'white' }}>
                <FontAwesomeIcon icon={['fab', 'facebook']} /> <a href="https://www.facebook.com/saurav.ahshan/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </p>
              <p style={{ color: 'white' }}>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />  <a href="https://www.linkedin.com/in/abu-mohammad-younus-2557221b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-col">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="form-inputs">
                <input type="text" className="input-field" name="name" placeholder="Name" required />
                <input type="email" className="input-field" name="email" placeholder="Email" required />
              </div>
              <div className="text-area">
                <textarea name="message" placeholder="Message" required></textarea>
              </div>
              <div className="form-button">
                <button type="submit" className="btn">
                  Send <FontAwesomeIcon icon="paper-plane" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
