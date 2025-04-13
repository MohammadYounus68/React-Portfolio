import React from 'react';
import './AboutBox.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const AboutBox = () => {
    const skills = {
        frontend: ['HTML','CSS','Bootstrap', 'React', 'jQuery'],
        backend: ['PHP','JAVA','C++'],
        database: ['MySQL']
    };

    // scroll code 
    useScrollReveal([
        { name: '.top-header', options: { origin: 'top' } },
    { name: '.about-info', options: { origin: 'left' } },
    { name: '.skills-box', options: { origin: 'right', interval: 200 } },
    ]);
    return (
        <section className='section' id='about'>
            <div className="top-header">
                <h2>About Me</h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className="about-info">
                        <h3 className='test'>My Introduction</h3>
                        <p>
                        A proactive BSC in CSE student at the Stamford University Bangladesh 
                        with strong academic achievement with volunteering experience. 
                        To pursue a professional career where my skills and creativity 
                        can utilize in maximizing company profit while providing career 
                        advancement opportunities.
                        </p>
                    </div>
                </div>
                <div className="col">
                {Object.entries(skills).map(([category, items]) => (
                    <div className="skills-box" key={category}>
                        <div className="skills-header">
                            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        </div>
                        <div className="skills-list">
                            {items.map(skill => (
                            <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        
    );
};

export default AboutBox;