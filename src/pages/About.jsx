import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Me</h1>

        <section className="about-section">
          <h2>Background</h2>
          <p>
            Hello! So I've been doing a lot of different things in AI and data space. Started as a data scientist, then moved into ML engineering, and now I'm doing AI stuff. Basically, I like building things that actually work and solve real problems.
          </p>
        </section>

        <section className="about-section">
          <h2>What I Do</h2>
          <ul className="experience-list">
            <li>
              <strong>AI Engineer:</strong> At Amazon, I worked on recommendation models for Alexa using LLMs to make it smarter and more helpful.
            </li>
            <li>
              <strong>ML Engineer:</strong> Shipped real-time prediction engines that handle actual production workloads.
            </li>
            <li>
              <strong>Data Scientist:</strong> I built predictive models and NLP stuff to find patterns in data and make sense of it all.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default About;
