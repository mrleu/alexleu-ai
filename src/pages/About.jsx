import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Me</h1>

        <section className="about-section">
          <h2>Background</h2>
          <p>
            I'm a software engineer passionate about building great products and sharing knowledge
            through writing and speaking. I specialize in machine learning, recommendation systems,
            and AI-powered applications.
          </p>
        </section>

        <section className="about-section">
          <h2>What I Do</h2>
          <p>
            Currently, I work as a Principal Applied Scientist at Amazon, where I build recommendation
            systems and AI-powered experiences that serve millions of customers. I focus on creating
            scalable solutions that deliver real value to users.
          </p>
        </section>

        <section className="about-section">
          <h2>Writing & Speaking</h2>
          <p>
            I regularly write about machine learning, product development, and engineering best practices.
            I also speak at conferences and meetups, sharing insights from my experience building
            large-scale systems.
          </p>
        </section>

        <section className="about-section">
          <h2>Side Projects</h2>
          <p>
            In my free time, I prototype applications and tools that explore new ideas in AI and ML.
            I believe in learning by building, and I enjoy sharing what I create with the community.
          </p>
        </section>

        <section className="about-section">
          <h2>Get In Touch</h2>
          <p>
            Want to connect? You can reach me through my newsletter or find me on social media.
            I'm always interested in hearing from people working on interesting problems.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
