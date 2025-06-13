import React from 'react';
import footerLogo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
              <img src={footerLogo} alt="Brian's Portfolio" />
            </a>
          </div>
          
          <div className="footer-links">
            <ul className="footer-nav">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/brianchristy" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/brianchris1708" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/_brian_chris10" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Brian Christopher. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
