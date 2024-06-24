import React from "react";
import "./Portfolio.css";
import project2 from "../../assets/project2.png";


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ project2 } alt="Image"/>
                    </div>
                    <div className="portfolio__item-cta">
                        <h3> <b>Code Sync</b>: A Realtime Code Editor</h3>
                        <h5>
                        <ul>
                            ◦ Developed and implemented a collaborative Real-Time Code-Editor, enabling simultaneous code editing by multiple users.
                        </ul>
                        <ul>
                            ◦ Spearheaded the development and integration of a code-compilation and room sharing feature using Room IDs.
                        </ul>
                        <ul>
                            ◦ Incorporated the functionality of a real-time messaging application.
                        </ul>
                        <ul>
                            ◦ Tech Stack: React JS, NodeJS, Express JS, Socket IO.
                        </ul>
                        </h5>
                        <br></br>
                        <a href="" className="btn btn-primary" target="_blank">GitHub</a>
                    </div>
                </article>


               
            </div>
        </section>
    )
}
export default Portfolio;