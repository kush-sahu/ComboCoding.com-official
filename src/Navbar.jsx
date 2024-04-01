


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hamburger.css';
import linkedin from './linkeddin.jpg'
import logo from "./logo.jpeg";
import twitter from './twitter.png'
import wp from './wp.png'
import Git from './github.png'

function Navbar() {
    const [showNav, setShowNav] = useState(true);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowNav(window.innerWidth > 768);
            if (window.innerWidth > 768) {
                setShowList(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleList = () => {
        setShowList(!showList);
    };

    const closeList = () => {
        setShowList(false);
    };

    return (
        <>
            {showNav ? (
                <ul className="nav-links">
                    <li><img className='logo' src={logo} alt="ComboCoding Logo" /></li>
                    <li><Link to="/leetcode">LeetCode</Link></li>
                    <li className="center"><Link to="/hackerrank">HackerRank</Link></li>
                    <li className="upward"><Link to="/codingninja">CodingNinja</Link></li>
                    <li className="forward"><Link to="/Gfg">GreekforGreks</Link></li>
                    {/* <li className="forward"><a href="https://" target="_blank" rel="noopener noreferrer">ComboCoding</a></li> */}
                </ul>
            ) : (
                <div className="hamburger-menu" onClick={toggleList}>
                    <img className='logo' src={logo} alt="ComboCoding Logo" />
                    <div className="combo-text">ComboCoding</div>
                    <div className="menu-icon">☰</div>
                </div>
            )}

            {showList && (
                <div className="list-menu">
                    <ul>
                        {/* <li onClick={closeList}><a href="https://www.combocoding.com" target="_blank" rel="noopener noreferrer">ComboCoding.com</a></li> */}
                        <li onClick={closeList}><Link to="/leetcode">LeetCode</Link></li>
                        <li onClick={closeList}><Link to="/hackerrank">HackerRank</Link></li>
                        <li onClick={closeList}><Link to="/codingninja">CodingNinja</Link></li>
                        <li onClick={closeList}><Link to="/Gfg">GreekforGreks</Link></li>

                        <p><span id='para'><i>What are we offering....</i>
                        </span> </p> <p>At our website, we offer a comprehensive resource for mastering Data Structures and Algorithms (DSA) with questions sourced from platforms like LeetCode, HackerRank, and Coding Ninjas. Featuring video solutions, our platform caters to diverse learning preferences, ideal for students, seasoned developers, or anyone keen on honing problem-solving skills.</p>
                        {/* <div className='media'>
                      < img className='logo' src={wp} alt="ComboCoding Logo" />
                      < img className='logo' src={linkedin} alt="ComboCoding Logo" />
                      < img className='logo' src={twitter} alt="ComboCoding Logo" />
                      < img className='logo' src={Git} alt="ComboCoding Logo" />
                        </div> */}
                         <h6 id='connect1'>Connect With Us</h6>

                        <div className='media'>
                        
                            {/* <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                                <img className='logo' src={wp} alt="ComboCoding Logo" />
                            </a> */}
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img className='logo' src={linkedin} alt="ComboCoding LinkedIn Logo" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img className='logo' src={twitter} alt="ComboCoding Twitter Logo" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <img className='logo' src={Git} alt="ComboCoding GitHub Logo" />
                            </a>
                        </div>

                    </ul>

                </div>
            )}
        </>
    );
}

export default Navbar;