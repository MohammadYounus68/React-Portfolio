import React, { useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

    useEffect(() => {
      const sections = document.querySelectorAll('section[id]');
    
      function scrollActive() {
        const scrollY = window.scrollY;
    
        sections.forEach((current) => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 100;
          const sectionId = current.getAttribute('id');
          const link = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    
          if (link) {
            const circle = link.nextElementSibling;
    
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              link.classList.add('active-link');
              if (circle && circle.classList.contains('circle')) {
                circle.classList.add('active-circle');
              }
            } else {
              link.classList.remove('active-link');
              if (circle && circle.classList.contains('circle')) {
                circle.classList.remove('active-circle');
              }
            }
          }
        });
      }
    
      window.addEventListener('scroll', scrollActive);
    
      return () => {
        window.removeEventListener('scroll', scrollActive);
      };
    }, []);
    
  const handleMenuToggle = () => {
    const navMenu = document.getElementById('myNavMenu');
    if (navMenu) {
      navMenu.classList.toggle('responsive');
    }
  };

  // const handleDownloadCV = () => {
  //   const link = document.createElement('a');
  //   link.href = '/assets/CV Abu Mohammad Younus.pdf';
  //   link.download = 'CV Abu Mohammad Younus.pdf';
  //   link.click();
  // };

  return (
    <nav id="header" className="header">
      <div className="nav-logo">
        <p className="nav-name">Younus</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav-menu-list">
          {['home', 'about', 'projects', 'contact'].map((id) => (
            <li className="nav-list" key={id}>
              <a href={`#${id}`} className="nav-link">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
              <div className="circle"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-button">
        <button
          className="btn downloadBtn"
          onClick={props.handleDownloadCV}
          aria-label="Download CV"
        >
          Download CV <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
      <div className="nav-menu-btn" aria-label="Toggle Menu">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleMenuToggle}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
