import React from "react";

import rabbitHoleImage from "../assets/man-1204925_640.jpg";
import tutorailHellImage from "../assets/man-7412527_640.png"
import willAIImage from "../assets/artificial-intelligence-3382507_640.jpg";
import aiImage from "../assets/artificial-intelligence-6767502_640.jpg";
import pickSkillsImage from "../assets/cartoon-3082809_640.png";
import projectIdeasImage from "../assets/website-3374825_640.jpg"
import Nav from "../components/Header";


export const Blog: React.FC = () => {
    return (
        <>
        <Nav />
        <article className="blog">
            <h3>Some of the Best Tips for Your Journey</h3>
                
            <div className="featured-blogs">
                <section className="blog-card" >
                    <h4>What is a rabbit hole and how to escape it</h4>
                    <img src={rabbitHoleImage} className="blog-image" alt="" />
                    <p>A brief introduction about the topic...</p>
                    <a href="">Read the Article</a>
                </section>
                <section className="blog-card" >
                    <h4>What is a tutorial hell</h4>
                    <img src={tutorailHellImage} className="blog-image" alt="" />
                    <p>A brief introduction about the topic...</p>
                    <a href="">Read the Article</a>
                </section>
                <section className="blog-card" >
                    <h4>Which skill Should I pick?</h4>
                    <img src={pickSkillsImage} className="blog-image" alt="" />
                    <p>A brief introduction about the topic...</p>
                    <a href="">Read the Article</a>
                </section>
                <section className="blog-card" >
                    <h4>How to use AI as an aspiring Developer</h4>
                    <img src={aiImage} className="blog-image" alt="" />
                    <p>A brief introduction about the topic...</p>
                    <a href="">Read the Article</a>
                </section>
                <section className="blog-card" >
                    <h4>Will AI replace programmers?</h4>
                    <img src={willAIImage} className="blog-image" alt="" />
                    <p>A brief introduction about the topic...</p>
                    <a href="">Read the Article</a>
                </section>
                <section className="blog-card" >
                    <h4>5 best Project ideas for front-end developer</h4>
                    <img src={projectIdeasImage} className="blog-image" alt="" />
                    <p>A brief introduction about the topic...</p>
                    <a href="">Read the Article</a>
                </section>
                </div>

        </article>
        </>
    )
}