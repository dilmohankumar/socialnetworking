import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Discover our services and offerings</p>
      </header>
      
      <section className="home-section">
        <h2>About Us</h2>
        <p>We are a leading company in our industry. Our team is dedicated to providing the best service possible.</p>
      </section>
      
      <section className="home-section">
        <h2>Our Services</h2>
        <div className="home-services">
          <div className="home-service">
            <h3>Service 1</h3>
            <p>Details about Service 1</p>
          </div>
          <div className="home-service">
            <h3>Service 2</h3>
            <p>Details about Service 2</p>
          </div>
          <div className="home-service">
            <h3>Service 3</h3>
            <p>Details about Service 3</p>
          </div>
        </div>
      </section>
      
      <section className="home-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>
      </section>
    </div>
  );
}

export default Home;
