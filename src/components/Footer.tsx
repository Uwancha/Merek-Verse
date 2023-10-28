import React from "react";

import "../styles/footer.css";

import youtubeIcon from "../assets/youtube (1).svg";
import tikokIcon from "../assets/tiktok.svg";
import linkedinIcon from "../assets/linkedin-original.svg";
import githubIcon from "../assets/github.svg";
import twitterIcon from "../assets/twitter_3670151.png";
import instagramIcon from "../assets/instagram.svg";



const Footer: React.FC = () => {

    return (

        <footer className="footer">
            <section className="footer-section" >
                <div>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Contact</a>
                </div>
                <div>
                    <a href="">Blog</a>
                    <a href="">Mentorship</a>
                </div>
            </section>

            <section className="footer-icons">
                <a href=""><img src={youtubeIcon} className="icon" alt="link to YouTube" /></a>
                <a href=""><img src={linkedinIcon} className="icon" alt="link to LinkedIn" /></a>
                <a href=""><img src={tikokIcon} className="icon" alt="link to TikTok" /></a>
                <a href=""><img src={twitterIcon} className="icon" alt="link to Twitter" /></a>
                <a href=""><img src={githubIcon} className="icon" alt="link to GitHub" /></a>
                <a href=""><img src={instagramIcon} className="icon" alt="link to instagram" /></a>
            </section>

            
        </footer>

    )
}

export default Footer;