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
        <h1>Hi, I'm Eugene Yan, an ML engineer.</h1>

        <p className="intro">
          I build recommendation systems and AI-powered experiences that serve customers at scale.
          Currently, I'm a Principal Applied Scientist at Amazon. Outside of work, I also...
        </p>

        <ul className="activities">
          <li>
            <a href="#write">Write</a> and <a href="#speak">speak</a> about recommendation systems, AI-powered product, and engineering.
          </li>
          <li>
            <a href="#prototype">Prototype</a> apps like <a href="#reading">AI Reading Club</a>, <a href="#aligneval">AlignEval</a>, <a href="#obsidian">Obsidian Copilot</a>, <a href="#coach">AI Coach</a>, and <a href="#more">more</a>.
          </li>
          <li>
            Teach how to apply ML/LLMs effectively at <a href="#applyingml">ApplyingML.com</a> & <a href="#appliedllms">Applied-LLMs.org</a>.
          </li>
          <li>
            <a href="#send">Send</a> a newsletter on RecSys, LLMs/AI, and what I'm learning to 11,800+ readers.
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
