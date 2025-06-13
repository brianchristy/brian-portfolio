import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';
import menuOpen from '../assets/menu_open.svg';
import menuClose from '../assets/menu_close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle header scroll effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Handle active section
      const sections = ['home', 'about', 'projects', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Prevent default anchor behavior
      const yOffset = -80; // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      <style jsx>{`
        .header {
          background: var(--background);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .header-scrolled {
          background: var(--background);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .dark .header-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .nav-links {
          background: var(--background);
        }
        @media (max-width: 768px) {
          .menu-toggle {
            display: block; /* Show menu toggle on mobile */
          }
          
          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            padding: 100px 20px 40px;
            background: var(--background);
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease-in-out;
            z-index: 1000;
            overflow-y: auto;
          }
          
          .nav.nav-open {
            right: 0;
          }
          
          .nav-links {
            flex-direction: column;
            gap: 20px;
          }
          
          .nav-item {
            margin: 0;
          }
          
          .nav-link {
            padding: 10px 0;
            font-size: 1.1rem;
          }
          
          .header-actions {
            margin-left: auto;
          }
        }
      `}</style>
      <div className="container flex-between">
        <button 
          className="logo" 
          onClick={() => scrollToSection('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <img src={logo} alt="Brian's Portfolio" />
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <button 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    cursor: 'pointer',
                    padding: '8px 12px',
                    textAlign: 'left',
                    width: '100%',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img 
              src={isMenuOpen ? menuClose : menuOpen} 
              alt="Menu" 
              className={`menu-icon ${isDarkMode ? 'dark' : ''}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
