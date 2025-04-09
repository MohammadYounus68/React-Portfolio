import React from 'react';
import FeaturedBox from '../Featured-box/FeaturedBox.jsx';
import AboutBox from '../AboutBox/AboutBox.jsx'
import ProjectBox from '../ProjectBox/ProjectBox.jsx';
const Main = () => {
    return (
        <div className='wrapper'>
            <FeaturedBox/>
            <AboutBox />
            <ProjectBox/>
        </div>
    );
};

export default Main;