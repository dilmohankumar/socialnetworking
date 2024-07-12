import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company and team</p>
      </header>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>We aim to provide the best web development and digital marketing services to help businesses thrive in the digital world.</p>
      </section>
      
      <section className="about-section">
        <h2>Our Team</h2>
        <div className="about-team">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <h2>Our History</h2>
        <p>Since our founding in 2010, we have been committed to delivering high-quality web solutions and digital marketing strategies. Our journey has been marked by innovation, growth, and a dedication to customer success.</p>
      </section>
    </div>
  );
}

export default About;
