import React, { useEffect, useRef } from 'react';

const Resume = ({ onClose }) => {
  const resumeUrl = '/resume.pdf';
  const iframeRef = useRef(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
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
