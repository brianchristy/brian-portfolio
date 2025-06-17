import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "GATE CSE Qualification",
      year: "2024",
      description: "Successfully qualified the Graduate Aptitude Test in Engineering (GATE) in Computer Science & Engineering, a highly competitive national-level examination that tests comprehensive understanding of various undergraduate subjects in engineering and science.",
      icon: "🏆",
      certificateLink: "https://drive.google.com/file/d/1L3nAp72VKvHKEuFOJTBhdy7cI2fT388Q/view"
    }
  ];

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-container">
          {achievements.map((achievement) => (
            <div className="achievement-item" key={achievement.id}>
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-year">{achievement.year}</p>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.certificateLink && (
                  <a 
                    href={achievement.certificateLink} 
                    className="achievement-certificate-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
