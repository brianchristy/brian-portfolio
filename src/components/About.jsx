import React from 'react';
import aboutProfile from '../assets/about_pic.JPEG';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 75 },
    { name: 'Python', percentage: 90 },
    { name: 'C', percentage: 85 },
    { name: 'SQL', percentage: 90 },
    { name: 'Git/GitHub', percentage: 85 },
    { name: 'Machine Learning', percentage: 70 }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src={aboutProfile} alt="Brian's Profile" />
          </div>
          
          <div className="about-text">
            <h3>I'm Brian, a Computer Science Student & Developer</h3>
            <p>
              As a computer science undergraduate, I'm passionate about exploring various domains of technology. 
              I've developed strong skills in web development, contributed to open source projects, and 
              delved into AI and machine learning applications. My academic journey has equipped me with 
              a solid foundation in algorithms, data structures, and software engineering principles.
            </p>
            <p>
              I thrive on solving complex problems and building practical applications that make a difference. 
              I approach each project with enthusiasm and attention to detail. 
              I'm committed to continuous learning.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Brian Christopher</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">brianchristopher170804@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Kollam, Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h3 className="skills-title">My Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
