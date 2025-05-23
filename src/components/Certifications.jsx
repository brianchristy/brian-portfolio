import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "The Joy Of Computing Using Python",
      issuer: "NPTEL",
      date: "2023",
      description: "Comprehensive course on Python programming with practical applications and problem-solving",
      link: "https://drive.google.com/file/d/1i68nvRRb6gPfwdsitAWa2zP5fmC_0li1/view"
    },
    {
      id: 2,
      title: "Python Foundation Certification",
      issuer: "Infosys",
      date: "2024",
      description: "Industry-recognized certification validating proficiency in Python programming fundamentals",
      link: "https://drive.google.com/file/d/1ZOPY_T8-J4FEWNPuVBkVPKTIygp1HkEO/view"
    },
    {
      id: 3,
      title: "Creators of Metaverse",
      issuer: "AICTE",
      date: "2023",
      description: "Training on virtual reality, augmented reality, and metaverse development technologies",
      link: "https://drive.google.com/file/d/1hGNoQuJb8ehDg_FHisReUh0S-FJBzMqj/view"
    },
    {
      id: 4,
      title: "ML using Python",
      issuer: "ACM Kollam Professional Chapter",
      date: "2022",
      description: "Hands-on training in machine learning algorithms and implementation using Python",
      link: "https://drive.google.com/file/d/1p3CYKj7a0hxm0F-b9vISl_qwL9ZW7BAq/view"
    },
    {
      id: 5,
      title: "Prompt Engineering Internship",
      issuer: "VaultofCodes",
      date: "2024",
      description: "Practical experience in designing and optimizing prompts for AI language models",
      link: "https://drive.google.com/file/d/1CSJGyiGWvy5XY9RrxBhAPE9AElywb_0g/view"
    },
    {
      id: 6,
      title: "AI: Transformative Learning with TechSaksham Internship",
      issuer: "AICTE",
      date: "2024",
      description: "Internship focused on artificial intelligence applications and transformative technologies",
      link: "https://drive.google.com/file/d/1EWTZSPxYc7P1RhhmVVFxphjTPrDk2wHn/view"
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">My Certifications</h2>
        
        <div className="certifications-grid grid">
          {certifications.map((cert) => (
            <div className="certification-item card" key={cert.id}>
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-info">
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-date">{cert.date}</p>
                </div>
                <p className="certification-description">{cert.description}</p>
                <a 
                  href={cert.link} 
                  className="certification-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
