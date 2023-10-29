import React from "react";
import "../styles/skills.css";
import { Link } from "react-router-dom";

const Skills: React.FC = () => {

    return (
        <div className="skills">
            <article className="skill-category">
                <h3>IT & Software Engineering</h3>
                <section className="skills-section" >
                    <section className="card" >
                        <h4>Web Development</h4>
                        <p>A brief introduction about the skill...</p>
                        <Link to="/skills/web-dev" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Mobile Development</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/mobile-app" className="link" >
                            View full detais
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Software Engineering</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/software-engineering" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Cyber Security</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/cybersecurity" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Machine Learning</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/machine-learning" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Data Science</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/data-science" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Cloud Computing</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/cloud-coumputing" className="link" >
                            View full details
                        </Link>
                    </section>
                </section>
            </article>

            <article className="skill-category">
                <h3>Design & Media</h3>
                <section className="skills-section" >
                    <section className="card" >
                        <h4>Graphic Design</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/graphic-design" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>UX/UI Design</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/ux-ui" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Video Editing</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/video-editing" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Photoghraphy</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/photography" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>3D & Animation</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/threeD"className="link" >
                            View full details
                        </Link>
                    </section>
                </section>
            </article>

            <article className="skill-category">
                <h3>Marketing & Sales</h3>
                <section className="skills-section" >
                    <section className="card" >
                        <h4>Digital Marketing</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/digital-marketing" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Content Marketing</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/content-marketing" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Social Media Marketing</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/social-media" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Sales</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/sales" className="link" >
                            View full details
                        </Link>
                    </section>
                </section>
            </article>

            <article className="skill-category">
                <h3>Lifestyle</h3>
                <section className="skills-section" >
                    <section className="card" >
                        <h4>Health & Fitness</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/health-health-fitness" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Personal Development</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/personal-development" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Languages</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/languages" className="link" >
                            View full details
                        </Link>
                    </section>
                    <section className="card" >
                        <h4>Music</h4>
                        <p>A brief introduction about the skill...</p>

                        <Link to="/skills/music" className="link" >
                            View full details
                        </Link>
                    </section>
                </section>
            </article>

        </div>
    )
}

export default Skills;