import { useState } from 'react';
import './Hero.css';

function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Alex Leu.</h1>

        <p className="intro">
          Welcome to my personal site, created with AI tools.
        </p>

        <ul className="activities">
          <li>
            <a href="about">Learn more about me</a>
          </li>
          <li>
            <a href="projects">Check out my projects</a>
          </li>
        </ul>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="email-input-wrapper">
            <input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <span className="email-icon">📧</span>
          </div>
          <button type="submit" className="submit-btn">
            Get email updates
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
