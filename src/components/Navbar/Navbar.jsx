import React from 'react';
import './Navbar.css';
import {myMenuFunction} from './myMenuFunction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons'
// import NavbarLogic from './NavbarLogic'

const Navbar = () => {
    return (
        <div>
            <nav id='header' className='header'>
                <div className='nav-logo'>
                    <p className='nav-name'>Younus</p>
                    <span>.</span>
                </div>
                <div className='nav-menu' id='myNavMenu'>
                    <ul className='nav-menu-list'>
                        <li className="nav-list">
                            <a href="#home" className="nav-link active-link">Home</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav-list">
                            <a href="#about" className="nav-link">About</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav-list">
                            <a href="#projects" className="nav-link">Projects</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav-list">
                            <a href="#contact" className="nav-link">Contact</a>
                            <div className="circle"></div>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn downloadBtn">Download CV <FontAwesomeIcon icon={faDownload} />
                    </button>
                </div>
                <div className="nav-menu-btn">
                    <FontAwesomeIcon 
                        icon={faBars} 
                        onClick={myMenuFunction} 
                        style={{ cursor: 'pointer' }}
                    />    
                </div>
            </nav>
           
        </div>
    );
};

export default Navbar;


