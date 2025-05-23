import React, { useState } from 'react';
import myworkData from '../assets/mywork_data';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState(myworkData);

  const filters = ['all', 'Web design', 'Open source contribution', 'AI-ML', 'Others'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setProjects(myworkData);
      return;
    }
    
    const filteredProjects = myworkData.filter(
      project => project.w_name.toLowerCase() === filter.toLowerCase()
    );
    
    setProjects(filteredProjects);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="portfolio-filters">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid grid">
          {projects.map((project, index) => (
            <a href={project.repo_link} className="portfolio-item-link" target="_blank" rel="noopener noreferrer" key={index}>
              <div className="portfolio-item card">
                <div className="portfolio-img">
                  <img src={project.w_img} alt={`Project ${project.w_no}`} />
                  <div className="portfolio-overlay flex-center">
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.w_title}</h3>
                  <p className="portfolio-category">{project.w_name}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
