import React from 'react';
import profileImg from '../assets/profile_pic.JPEG';
import themePattern from '../assets/theme_pattern.svg';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Brian</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing">A Computer Science Undergrad</span>
            </h2>
            <p className="hero-description">
              Passionate computer science student with expertise in web development, open source contributions, and AI/ML projects.
              I blend technical skills with creative problem-solving to build innovative digital solutions that deliver real value.
            </p>
            <div className="hero-btns">
              <a href="#portfolio" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={profileImg} alt="Brian's Profile" className="profile-img" />
              <img src={themePattern} alt="" className="pattern" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
