import React from "react";
import "../styles/about.css";
import Nav from "../components/Header";

const About: React.FC = () => {

    return (
        <>
        <Nav />
        <div className="about">
            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    Merek is ldjld dfljdlkv lkvlkvj dflvjkdfkl dkljkvdlv
                    jlkljlklkk kdflknljknj lkdfnlkd jdrgz,dvlze j;eivjkzdk flkjlf
                </p>
            </section>

            <section className="about-section">
                <h4>What this site contains</h4>
                <ul>
                    <li>
                        Curated quality self-study resources
                    </li>
                    <li>
                        Best tips that saves your time and energy
                    </li>

                </ul>
            </section>

        </div>
        </>
    )
}

export default About;