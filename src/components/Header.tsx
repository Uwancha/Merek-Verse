import React, { useState, useEffect } from "react";
import "../styles/header.css"
import { Link } from "react-router-dom";


const Nav: React.FC = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrollPosition > 30 ? '#fff' : 'transparent', 
    transition: 'background-color .5s ease',
    position: 'fixed',
    width: '100%',
    top: 0,

    display: 'flex',
    padding: "0 4rem",
    color: scrollPosition > 30 ? "tomato" : "#fff",
    boxShadow: scrollPosition > 30 ? 'rgba(50, 50, 93, 0.1) 0px 13px 27px -15px,rgba(0, 0, 0, 0.25) 0px 8px 16px -20px' : 'none'

  }


    return (
        <div style={headerStyle}>
            <h3 className="header-h3">Merek Verse</h3>
            <nav className="nav">
                <Link to="/" className="header-a">Home</Link>
                <Link to="/skills" className="header-a">Skills</Link>
                <Link to="/blog" className="header-a">Blog</Link> 
                <Link to="/about" className="header-a">About</Link>  
            </nav>
        </div>
    )
}

export default Nav; 