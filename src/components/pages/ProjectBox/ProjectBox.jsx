import React from 'react';
import './ProjectBox.css'; // External CSS
import useScrollReveal from '../../../hooks/useScrollReveal';

const ProjectBox = () => {
  const projectData = [
    {
      title: "Hotel booking System",
      description:
        "Hotel booking system with a modern UI for browsing rooms, checking availability, and making reservations.",
      image: "assets/images/hotel.png",
      link: "https://hotel-booking-system-react.netlify.app/",
      gitLink: "https://github.com/MohammadYounus68/hotel-booking-system-react",
    },
    {
      title: "Emazon Online Shopping Platform",
      description:
        "Shop items and instantly view detailed order summaries with total cost.",
      image: "assets/images/emazon.png",
      link: "https://emazon-clone0.netlify.app/",
      gitLink: "https://github.com/MohammadYounus68/emazon/tree/main",
    },
    {
      title: "Lyrics Detector System",
      description:
        "Users can type in a song name, click the search button, and instantly retrieve the lyrics.",
      image: "assets/images/lyrics.png",
      link: "https://lyrics-detector.netlify.app/",
      gitLink: "https://github.com/MohammadYounus68/lyrics-detector",
    }
  ];

  useScrollReveal([
    { name: '.top-header', options: { origin: 'top' } },
    { name: '.project-grid', options: { origin: 'bottom', distance: '40px' } },
    { name: '.project-card', options: { origin: 'bottom', distance: '60px', interval: 500 } },
  ]);

  return (
    <section className="section" id='projects'>
      <div className="top-header">
        <h2>Projects</h2>
      </div>
      <div className='project-grid'>
        {projectData.map((element, index) => (
          <div className='project-card' key={index}>
            <img src={element.image} alt={element.title} />
            <div className='project-content'>
              <h3>{element.title}</h3>
              <p>{element.description}</p>
              <div className='project-button-style'>
                <a href={element.link} target="_blank" rel="noopener noreferrer">
                  <button className='project-button'>Live View</button>
                </a>
                <a href={element.gitLink} target="_blank" rel="noopener noreferrer">
                  <button className='project-button'>GitHub</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectBox;
