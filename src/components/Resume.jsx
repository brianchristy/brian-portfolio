import React, { useEffect, useRef } from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = ({ onClose }) => {
  const resumeUrl = '/resume.pdf';
  const iframeRef = useRef(null);

  // Handle download button click
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Brian_Christopher_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Prevent background scrolling and update body class when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('resume-modal-open');
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('resume-modal-open');
    };
  }, []);

  // Prevent wheel event from propagating to parent when at the top/bottom of iframe
  useEffect(() => {
    const handleWheel = (e) => {
      if (!iframeRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = iframeRef.current.contentDocument.documentElement;
      const isAtTop = scrollTop === 0 && e.deltaY < 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight && e.deltaY > 0;
      
      if (isAtTop || isAtBottom) {
        e.stopPropagation();
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', () => {
        iframe.contentDocument.addEventListener('wheel', handleWheel, { passive: false });
      });
    }

    return () => {
      if (iframe) {
        iframe.contentDocument?.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="resume-content">
      <div className="resume-actions">
        <h2 className="resume-title">My Resume</h2>
        <div className="resume-actions-group">
          <button onClick={handleDownload} className="resume-download-btn">
            <FaDownload className="download-icon" /> Download PDF
          </button>
        </div>
      </div>
      <div className="resume__pdf-container">
        <iframe 
          ref={iframeRef}
          src={`${resumeUrl}#toolbar=0&navpanes=0`} 
          title="Resume PDF"
          className="resume__pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
