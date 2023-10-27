import React from "react";

const Nav: React.FC = () => {

    return (
        <div>
            <h3>Merek Verse</h3>
            <nav className="nav">
                <a href="/" >Home</a>
                <a href="/skills">Skills</a>
                <a href="/blog">Blog</a> 
                <a href="/about">About</a>  
            </nav>
        </div>
    )
}

export default Nav; 