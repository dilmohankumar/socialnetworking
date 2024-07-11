import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the range of services we offer to boost your social network presence.</p>
      </header>
      
      <section className="services-section">
        <div className="service">
          <h2>Web Development</h2>
          <p>We create stunning, responsive websites tailored to your business needs, ensuring an engaging user experience.</p>
        </div>
        <div className="service">
          <h2>SEO Optimization</h2>
          <p>Improve your website's visibility on search engines with our expert SEO services, driving more traffic to your site.</p>
        </div>
        <div className="service">
          <h2>Social Media Management</h2>
          <p>We manage your social media profiles, create content, and engage with your audience to build your online presence.</p>
        </div>
        <div className="service">
          <h2>Content Creation</h2>
          <p>Our team creates high-quality content, including blogs, videos, and graphics, to attract and retain your target audience.</p>
        </div>
        <div className="service">
          <h2>Analytics & Reporting</h2>
          <p>Get detailed reports and insights on your social media performance, helping you make informed decisions.</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
