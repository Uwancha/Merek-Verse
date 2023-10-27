import React from "react";
import "../styles/home.css"

const Home: React.FC = () => {
    
    return (
        <div className="home">
            <article className="hero">
                <h2>Welcome!</h2>
                <h3>
                 A place where you find best curated resources for your first or next carrier!
                </h3>
            </article>

            <article className="article">
                <h3>About us</h3>
                <p>
                    This site provides the best curated resources for in-demand skills like web development, design, marketing and more.
                    Start your learning journey today!
                </p>
                <button className="button">Explore Skills</button>
            </article>

            <article className="article">
                <h3>Most Sought-After Talents</h3>
                
                <section className="skill-card" >
                    <h4>Software Engineering</h4>
                    <p>A brief introduction about the skill...</p>
                    <a href="">Link to the skill's detail page</a>
                </section>
                <section className="skill-card" >
                    <h4>Data Science</h4>
                    <p>A brief introduction about the skill...</p>
                    <a href="">Link to the skill's detail page</a>
                </section>
                <section className="skill-card" >
                    <h4>Cloud Computing</h4>
                    <p>A brief introduction about the skill...</p>
                    <a href="">Link to the skill's detail page</a>
                </section>
                <section className="skill-card" >
                    <h4>UI/UX Design</h4>
                    <p>A brief introduction about the skill...</p>
                    <a href="">Link to the skill's detail page</a>
                </section>
                <section className="skill-card" >
                    <h4>Video Editing</h4>
                    <p>A brief introduction about the skill...</p>
                    <a href="">Link to the skill's detail page</a>
                </section>
                <section className="skill-card" >
                    <h4>Digital Marketing</h4>
                    <p>A brief introduction about the skill...</p>
                    <a href="">Link to the skill's detail page</a>
                </section>

            </article>
        </div>
    )
}

export default Home;