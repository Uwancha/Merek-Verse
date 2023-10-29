import React from "react";
import "../styles/skills.css";
import { Link } from "react-router-dom";

const Skills: React.FC = () => {

    return (
        <div className="skills">
            <article className="skill-category">
                <h3>IT & Software Engineering</h3>
                <section className="skills-section" >
                    <Link to="/skills/web-dev" className="link" >
                        Web Development
                    </Link>
                    <Link to="/skills/mobile-app" className="link" >
                        Mobile App Development
                    </Link>
                    <Link to="/skills/software-engineering" className="link" >
                        Software Engineering
                    </Link>
                    <Link to="/skills/cybersecurity" className="link" >
                        Cybersecurity
                    </Link>
                    <Link to="/skills/machine-learning" className="link" >
                        Machine Learning
                    </Link>
                    <Link to="/skills/data-science" className="link" >
                        Data Science
                    </Link>
                    <Link to="/skills/cloud-coumputing" className="link" >
                        Cloud Computing
                    </Link>
                </section>
            </article>

            <article className="skill-category">
                <h3>Design & Media</h3>
                <section className="skills-section" >
                    <Link to="/skills/graphic-design" className="link" >
                        Graphic Design
                    </Link>
                    <Link to="/skills/ux-ui" className="link" >
                        UI/UX Design
                    </Link>
                    <Link to="/skills/video-editing" className="link" >
                        Video Editing
                    </Link>
                    <Link to="/skills/photography" className="link" >
                        Photography
                    </Link>
                    <Link to="/skills/threeD"className="link" >
                        3D & Animation
                    </Link>
                </section>
            </article>

            <article className="skill-category">
                <h3>Marketing & Sales</h3>
                <section className="skills-section" >
                    <Link to="/skills/digital-marketing" className="link" >
                        Digital Marketing
                    </Link>
                    <Link to="/skills/content-marketing" className="link" >
                        Content Marketing
                    </Link>
                    <Link to="/skills/social-media" className="link" >
                        Social Media Marketing
                    </Link>
                    <Link to="/skills/sales" className="link" >
                        Sales
                    </Link>
                </section>
            </article>

            <article className="skill-category">
                <h3>Lifestyle</h3>
                <section className="skills-section" >
                    <Link to="/skills/health-health-fitness" className="link" >
                        Health & Fitness
                    </Link>
                    <Link to="/skills/personal-development" className="link" >
                        Personal Development
                    </Link>
                    <Link to="/skills/languages" className="link" >
                        Languages
                    </Link>
                    <Link to="/skills/music" className="link" >
                        Music
                    </Link>
                </section>
            </article>

        </div>
    )
}

export default Skills;