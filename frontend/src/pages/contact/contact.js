import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us through any of the following ways.</p>
      </header>
      
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <form className="contact-form" action="/submit" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
      <section className="contact-section">
        <h2>Contact Details</h2>
        <div className="contact-details">
          <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> contact@yourdomain.com</p>
        </div>
      </section>
      
      <section className="contact-section">
        <h2>Find Us</h2>
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.374731832289!2d-122.08385168468162!3d37.38605197983289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb6c0e3c7a1b%3A0x8c36b3c59c41d4b2!2sGoogleplex!5e0!3m2!1sen!2sus!4v1613989038952!5m2!1sen!2sus" 
            title="Google Map"
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
