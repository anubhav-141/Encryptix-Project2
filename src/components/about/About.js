import React from "react";
import "./About.css";
import profilePic from "../../assets/profilePic.jpg";
import { FaAward} from "react-icons/fa";
import { FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={profilePic} alt="Profile-Pic"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        
                        <article className="about__card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Problems Solved</h5>
                            <small>100+</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Open to Work</h5>
                            <small>As Part-Time Intern Now</small>
                        </article>
                    </div>
                    <p>
                        I am a Competitive Programmer, who loves to solve real life Problems using codes.I am pursuing Bachelor of Technology in Petroleum Engineering at Indian Institute of Technology, Dhanbad. I am interested in Software Development, Coding and Core Computer Science Engineering. 
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Connect</a>
                </div>
            </div>
        </section>
    )
}
export default About