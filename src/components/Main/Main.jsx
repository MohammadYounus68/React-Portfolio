import React from 'react';
import './Main.css'
import FeaturedBox from '../Featured-box/FeaturedBox.jsx';
import AboutBox from '../AboutBox/AboutBox.jsx'
import ProjectBox from './../ProjectBox/ProjectBox';
import ContactBox from '../ContactBox/ContactBox.jsx'

const Main = () => {
    return (
        <div className='wrapper'>
            <FeaturedBox/>
            <AboutBox />
            <ProjectBox/>
            <ContactBox/>
        </div>
    );
};

export default Main;