import React from "react";
import "../styles/skills.css";
import { Link } from "react-router-dom";

const Skills: React.FC = () => {

    return (
        <div className="skills">
            <article className="skill-category">
                <h3>IT & Software Engineering</h3>
                <section className="skills-section" >
                    <Link to="/skills/web-dev">
                        Web Development
                    </Link>
                    <Link to="/skills/mobile-app">
                        Mobile App Development
                    </Link>
                    <Link to="/skills/software-engineering">
                        Software Engineering
                    </Link>
                    <Link to="/skills/cybersecurity">
                        Cybersecurity
                    </Link>
                    <Link to="/skills/machine-learning">
                        Machine Learning
                    </Link>
                    <Link to="/skills/data-science">
                        Data Science
                    </Link>
                    <Link to="/skills/cloud-coumputing">
                        Cloud Computing
                    </Link>
                </section>
            </article>

            <article className="skill-category">
                <h3>Design & Media</h3>
                <section className="skills-section" >
                    <Link to="/skills/graphic-design">
                        Graphic Design
                    </Link>
                    <Link to="/skills/ux-ui">
                        UI/UX Design
                    </Link>
                    <Link to="/skills/video-editing">
                        Video Editing
                    </Link>
                    <Link to="/skills/photography">
                        Photography
                    </Link>
                    <Link to="/skills/threeD">
                        3D & Animation
                    </Link>
                </section>
            </article>

            <article className="skill-category">
                <h3>Marketing & Sales</h3>
                <section className="skills-section" >
                    <Link to="/skills/digital-marketing">
                        Digital Marketing
                    </Link>
                    <Link to="/skills/content-marketing">
                        Content Marketing
                    </Link>
                    <Link to="/skills/social-media">
                        Social Media Marketing
                    </Link>
                    <Link to="/skills/sales">
                        Sales
                    </Link>
                </section>
            </article>

            <article className="skill-category">
                <h3>Lifestyle</h3>
                <section className="skills-section" >
                    <Link to="/skills/health-health-fitness">
                        Health & Fitness
                    </Link>
                    <Link to="/skills/personal-development">
                        Personal Development
                    </Link>
                    <Link to="/skills/languages">
                        Languages
                    </Link>
                    <Link to="/skills/music">
                        Music
                    </Link>
                </section>
            </article>

        </div>
    )
}

export default Skills;