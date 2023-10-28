import React from "react";
import "../styles/header.css"
import { Link } from "react-router-dom";
const Nav: React.FC = () => {

    return (
        <div className="header">
            <h3>Merek Verse</h3>
            <nav className="nav">
                <Link to="/" >Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/blog">Blog</Link> 
                <Link to="/about">About</Link>  
            </nav>
        </div>
    )
}

export default Nav; 