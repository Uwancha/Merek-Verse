import React from "react";

import "../styles/footer.css";

import tikokIcon from "../assets/tiktok.svg";
import linkedinIcon from "../assets/linkedin-original.svg";
import githubIcon from "../assets/github.svg";
import twitterIcon from "../assets/twitter_3670151.png";
import instagramIcon from "../assets/instagram.svg";



const Footer: React.FC = () => {

    return (

        <footer className="footer">
            <section className="footer-hero">
                <div>
                    <h2>Merek Verse</h2>
                    <p>Merek Verse is ...</p>
                </div>

                <section className="footer-icons">
                <a href=""><img src={linkedinIcon} className="icon" alt="link to LinkedIn" /></a>
                <a href=""><img src={tikokIcon} className="icon" alt="link to TikTok" /></a>
                <a href=""><img src={twitterIcon} className="icon" alt="link to Twitter" /></a>
                <a href=""><img src={githubIcon} className="icon" alt="link to GitHub" /></a>
                <a href=""><img src={instagramIcon} className="icon" alt="link to instagram" /></a>
            </section>
            </section>

            <section className="footer-section" >
                <div>
                    <h4>About Us</h4>
                    <a href="">About</a>
                    <a href="">Blog</a>
                </div>
                <div>
                    <h4>Support</h4>
                    <a href="">Contact Us</a>
                    <a href="">Buy Me Coffe</a>
                </div>
                <div>
                    <h4>Guides</h4>
                    <a href="">Mentorship</a>
                    <a href="">YouTube Channel</a>
                </div>
            </section>

            
        </footer>

    )
}

export default Footer;