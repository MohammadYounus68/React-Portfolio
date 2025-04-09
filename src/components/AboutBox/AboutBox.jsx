import React from 'react';
import './AboutBox.css';
const AboutBox = () => {
    const skills = {
        frontend: ['HTML','CSS','Bootstrap', 'React', 'jQuery'],
        backend: ['PHP','JAVA','C++'],
        database: ['MySQL']
    };
    return (
        <section className='section' id='about'>
            <div className="top-header">
                <h1>About Me</h1>
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