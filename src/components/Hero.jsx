import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile_pic.JPEG';
import themePattern from '../assets/theme_pattern.svg'
import Resume from './Resume';


const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
    // Toggle body scroll when modal is open/closed
    document.body.style.overflow = showResume ? 'auto' : 'hidden';
  };
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
              <a href="#projects" className="btn">View My Projects</a>
              <button onClick={toggleResume} className="btn btn-outline">View My Resume</button>
            </div>
            
            <AnimatePresence>
              {showResume && (
                <div className="resume-modal">
                  <div className="resume-modal-overlay" onClick={toggleResume}></div>
                  <motion.div 
                    className="resume-modal-content"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="resume-close-btn" onClick={toggleResume}>
                      &times;
                    </button>
                    <Resume onClose={toggleResume} />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
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
