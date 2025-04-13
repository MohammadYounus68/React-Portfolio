import React, { useEffect,useRef } from 'react';
import Typed from 'typed.js';
import './FeaturedBox.css'
import myPic from '../../../assets/images/myPic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core';
import {faDownload,faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
//import scroll hook 
import useScrollReveal from '../../../hooks/useScrollReveal';

// Add icons to the library
library.add(faDownload, faSquareFacebook, faSquareGithub);

// component for Featuredbox =======================
const FeaturedBox = () => {
    /* Typing effect js code */
    // typed.js use packege
    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: ["Developer", "Designer", "Programmer"],
          typeSpeed: 100,
          backSpeed: 80,
          loop: true,
          backDelay: 2000
        });
      
        // Cleanup
        return () => {
          typed.destroy();
        };
    }, []);

    //useScrollReveal array of objet pass under the cod
        useScrollReveal([
            { name: '.featured-text', options: { origin: 'left', distance: '60px' } },
            { name: '.featured-image', options: { origin: 'right', distance: '60px', delay: 200 } },
            { name: '.featured-text-card', options: { delay: 300, origin: 'top' } },
            { name: '.featured-text-info', options: { delay: 400, origin: 'bottom' } },
            { name: '.featured-text-btn', options: { delay: 500, origin: 'bottom', interval: 200 } },
            { name: '.social-icons .icon', options: { interval: 150, origin: 'bottom' } },
          ]); 
    return (
        <section className='featured-box' id='home'> 
            <div className='featured-text'>
                <div className="featured-text-card">
                    <span>Mohammad Younus</span>
                </div>
                <div className="featured-name">
                    <p>I'm <span className='typedText' ref={typedRef}></span></p>
                </div>
                <div className="featured-text-info">
                    <p>Skilled web developer with experience in React, Javascript,
                        Node.js, PHP, HTML, CSS, Bootstrap, 
                        and MySQL, focused on building responsive and efficient
                        applications.
                    </p>
                </div>
                
                <div className="featured-text-btn">
                    <a href="#contact-from">
                        <button className='btn blue-btn'>Hire Me</button>
                    </a>
                    <button className="btn downloadBtn">Download CV <FontAwesomeIcon icon={faDownload}/></button>
                </div>
                <div className="social-icons">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/abu-mohammad-younus-2557221b7/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/saurav.ahshan/"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/MohammadYounus68"><FontAwesomeIcon icon={faSquareGithub} /></a>
                    </div>
                    <div className="icon">
                        <a href="https://mohammad-younus-portfolio.netlify.app/"><FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>

            <div className="featured-image">
                    <div className="image">
                        <img src={myPic} alt="myPic"/>
                    </div>
            </div>


        </section>
    );
};

export default FeaturedBox;