import React from "react";
import Nav from "../components/Header";

import "../styles/blog.css";

import authorImage from "../assets/myPhoto.jpeg"
import { SideBar } from "./SideBar";


export const Blog: React.FC = () => {
    return (
        <div style={{backgroundColor: "whitesmoke"}}>
        <Nav />
        <div className="blog-home">
            <SideBar />
            <article className="blog">
                <div className="posts">
                    <section className="blogCard" >
                        <div className="blogCard-title" >
                            <img src={authorImage} className="authorImage" alt="Author's image" />
                            <div className="author-date" >
                                <p>Sitota Alemu</p>
                                <p>Nov, 2023</p>
                            </div>
                        </div>
                        <h2>What is a rabbit hole and how to escape it</h2>
                        <div className="cta" >
                            <p>5 min read</p>
                            <a href="">Continue Reading</a>
                        </div>
                    </section>
                    <section className="blogCard" >
                        <div className="blogCard-title" >
                            <img src={authorImage} className="authorImage" alt="Author's image" />
                            <div className="author-date" >
                                <p>Sitota Alemu</p>
                                <p>Nov, 2023</p>
                            </div>
                        </div>
                        <h2>What is a tutorial hell</h2>
                        <div className="cta" >
                            <p>5 min read</p>
                            <a href="">Continue Reading</a>
                        </div>
                    </section>
                    <section className="blogCard" >
                        <div className="blogCard-title" >
                            <img src={authorImage} className="authorImage" alt="Author's image" />
                            <div className="author-date" >
                                <p>Sitota Alemu</p>
                                <p>Nov, 2023</p>
                            </div>
                        </div>
                        <h2>Which skill Should I pick?</h2>
                        <div className="cta" >
                            <p>5 min read</p>
                            <a href="">Continue Reading</a>
                        </div>
                    </section>
                    <section className="blogCard" >
                        <div className="blogCard-title" >
                            <img src={authorImage} className="authorImage" alt="Author's image" />
                            <div className="author-date" >
                                <p>Sitota Alemu</p>
                                <p>Nov, 2023</p>
                            </div>
                        </div>
                        <h2>How to use AI as an aspiring Developer</h2>
                        <div className="cta" >
                            <p>5 min read</p>
                            <a href="">Continue Reading</a>
                        </div>
                    </section>
                    <section className="blogCard" >
                        <div className="blogCard-title" >
                            <img src={authorImage} className="authorImage" alt="Author's image" />
                            <div className="author-date" >
                                <p>Sitota Alemu</p>
                                <p>Nov, 2023</p>
                            </div>
                        </div>
                        <h2>Will AI replace programmers?</h2>
                        <div className="cta" >
                            <p>5 min read</p>
                            <a href="">Continue Reading</a>
                        </div>
                    </section>
                    <section className="blogCard" >
                        <div className="blogCard-title" >
                            <img src={authorImage} className="authorImage" alt="Author's image" />
                            <div className="author-date" >
                                <p>Sitota Alemu</p>
                                <p>Nov, 2023</p>
                            </div>
                        </div>
                        <h2>5 best Project ideas for front-end developer</h2>
                        <div className="cta" >
                            <p>5 min read</p>
                            <a href="">Continue Reading</a>
                        </div>
                    </section>
                </div>
            </article>
        </div>
        </div>
    )
}