import React, { useState } from 'react';
import userIcon from '../assets/user_icon.svg';
import mailIcon from '../assets/mail_icon.svg';
import callIcon from '../assets/call_icon.svg';
import locationIcon from '../assets/location_icon.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true,
        isSubmitted: false
      });
      return;
    }
    
    // Get the form element
    const form = e.target;
    const formDataForSubmit = new FormData(form);
    
    // Set loading state
    setFormStatus({
      message: 'Sending...',
      isError: false,
      isSubmitted: false
    });
    
    // Submit the form directly to Formspree
    fetch('https://formspree.io/f/xgvkyaql', {
      method: 'POST',
      body: formDataForSubmit,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Success
      setFormStatus({
        message: 'Your message has been sent successfully!',
        isError: false,
        isSubmitted: true
      });
      
      // Reset form
      form.reset();
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch(error => {
      // Error
      setFormStatus({
        message: 'There was an error sending your message. Please try again.',
        isError: true,
        isSubmitted: false
      });
      console.error('Error:', error);
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an email or give me a call. I'd love to hear from you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <img src={userIcon} alt="Name" />
                </div>
                <div className="contact-text">
                  <h4>Name</h4>
                  <p>Brian Christopher</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <img src={locationIcon} alt="Location" />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Kollam, Kerala, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <img src={callIcon} alt="Call" />
                </div>
                <div className="contact-text">
                  <h4>Call Me</h4>
                  <p>+91 9048324296</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <img src={mailIcon} alt="Email" />
                </div>
                <div className="contact-text">
                  <h4>Email Me</h4>
                  <p>brianchristopher170804@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
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
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xgvkyaql" method="POST">
              {formStatus.message && (
                <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows="5"
                ></textarea>
              </div>
              
              {/* Hidden honeypot field to prevent spam */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              
              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
