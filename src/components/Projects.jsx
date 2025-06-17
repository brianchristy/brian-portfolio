import React, { useState } from 'react';
import myworkData from '../assets/mywork_data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState(myworkData);

  const filters = ['all', 'Web design', 'Open source contribution', 'AI-ML', 'Blockchain', 'Others'];

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
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-filters">
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
        
        <div className="projects-grid grid">
          {projects.map((project, index) => (
            <a href={project.repo_link} className="projects-item-link" target="_blank" rel="noopener noreferrer" key={index}>
              <div className="projects-item card">
                <div className="projects-img">
                  <img src={project.w_img} alt={`Project ${project.w_no}`} />
                </div>
                <div className="projects-content">
                  <h3 className="projects-title">{project.w_title}</h3>
                  <p className="projects-category">{project.w_name}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
