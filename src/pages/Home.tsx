import React from "react";
import "../styles/home.css"

import sweImage from "../assets/software-developer-6521720_1280.jpg";
import dataScience from "../assets/big-data-analytic-7050938_1280.jpg";
import cloudComputing from "../assets/cloud-computing-2001090_1280.jpg";
import uxuiIcon from "../assets/ux-787980_1280.jpg";
import videoEditing from "../assets/video-editing-services-6373804_1280.jpg"
import digitalMarketing from "../assets/digital-4368784_1280.jpg";

const Home: React.FC = () => {
    
    return (
        <div className="home">
            <article className="hero">
                <h1>
                 Home of curated resources for your first or next carrier!
                </h1>
            </article>

            <article className="article-about">
                <h2>We're Here For You</h2>
                <p>
                    We make the process of learning in-demand skills easy, providing the best curated resources and tips so that you don't have to waste time searching for resources!
                    Start your learning journey today!
                </p>
               
            </article>

            <article className="article-talents">
                <h3>Most Sought-After Talents</h3>
                
                <div className="talents">
                    <section className="skill-card" >
                        <img src={sweImage} className="skill-image" alt="" />
                        <h4>Software Engineering</h4>
                        <p>A brief introduction about the skill...</p>
                        <a href="">Learn More</a>
                    </section>
                    <section className="skill-card" >
                        <img src={dataScience} className="skill-image" alt="" />
                        <h4>Data Science</h4>
                        <p>A brief introduction about the skill...</p>
                        <a href="">Learn More</a>
                    </section>
                    <section className="skill-card" >
                        <img src={cloudComputing} className="skill-image" alt="" />
                        <h4>Cloud Computing</h4>
                        <p>A brief introduction about the skill...</p>
                        <a href="">Learn More</a>
                    </section>
                    <section className="skill-card" >
                        <img src={uxuiIcon} className="skill-image" alt="" />
                        <h4>UI/UX Design</h4>
                        <p>A brief introduction about the skill...</p>
                        <a href="">Learn More</a>
                    </section>
                    <section className="skill-card" >
                        <img src={videoEditing} className="skill-image" alt="" />
                        <h4>Video Editing</h4>
                        <p>A brief introduction about the skill...</p>
                        <a href="">Learn More</a>
                    </section>
                    <section className="skill-card" >
                        <img src={digitalMarketing} className="skill-image" alt="" />
                        <h4>Digital Marketing</h4>
                        <p>A brief introduction about the skill...</p>
                        <a href="">Learn More</a>
                    </section>
                </div>

            </article>

            <article className="article-blog">
                <h3>Some of the Best Tips for Your Journey</h3>
                
                <div className="featured-blogs">
                    <section className="blog-card" >
                        <h4>How to escape the rabbit hole</h4>
                        <p>A brief introduction about the topic...</p>
                        <a href="">Read the Article</a>
                    </section>
                    <section className="blog-card" >
                        <h4>What is a tutorial hell</h4>
                        <p>A brief introduction about the topic...</p>
                        <a href="">Read the Article</a>
                    </section>
                    <section className="blog-card" >
                        <h4>Which skill Should I pick?</h4>
                        <p>A brief introduction about the topic...</p>
                        <a href="">Read the Article</a>
                    </section>
                    <section className="blog-card" >
                        <h4>How to use AI as an aspiring Developer</h4>
                        <p>A brief introduction about the topic...</p>
                        <a href="">Read the Article</a>
                    </section>
                    <section className="blog-card" >
                        <h4>Will AI replace programmers?</h4>
                        <p>A brief introduction about the topic...</p>
                        <a href="">Read the Article</a>
                    </section>
                    <section className="blog-card" >
                        <h4>5 best Project ideas for front-end developer</h4>
                        <p>A brief introduction about the topic...</p>
                        <a href="">Read the Article</a>
                    </section>
                </div>

            </article>
        </div>
    )
}

export default Home;