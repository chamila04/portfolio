import { useState, useEffect, useContext } from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Add staggered animation effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? "visible" : ""} ${theme}-hero`}>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Chamila Senaratne.</h1>
          <h2 className="hero-title">Software Engineering Undergraduate.</h2>
          <p className="hero-description">
            I aim to develop my programming skills and analytical thinking to
            effectively tackle issues in the software engineering industry.
          </p>

          <div className="skills-container">
            <h3>Technical Skills</h3>
            <div className="skills">
              <span className="skill">Java</span>
              <span className="skill">C#</span>
              <span className="skill">Kotlin</span>
              <span className="skill">MongoDB</span>
              <span className="skill">React</span>
              <span className="skill">Node.js</span>
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
              <span className="skill">JavaScript</span>
            </div>
          </div>

          <div className="cta-container">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>
            <div className="social-links">
              <a
                href="https://linkedin.com/in/chamila-senaratne/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/chamila04"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
        }

        .hero.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-greeting {
          color: var(--highlight-color);
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .hero-name {
          font-size: 60px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .hero-title {
          font-size: 50px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .hero-description {
          font-size: 18px;
          max-width: 540px;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }

        .skills-container {
          margin-bottom: 40px;
        }

        .skills-container h3 {
          font-size: 20px;
          margin-bottom: 15px;
          color: var(--text-primary);
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill {
          background-color: rgba(100, 255, 218, 0.1);
          color: var(--highlight-color);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
        }

        .cta-container {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .primary-btn {
          padding: 12px 24px;
          background-color: transparent;
          border: 1px solid var(--highlight-color);
          color: var(--highlight-color);
          font-weight: 500;
          border-radius: 4px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .primary-btn:hover {
          background-color: rgba(100, 255, 218, 0.1);
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          font-size: 24px;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: var(--highlight-color);
          transform: translateY(-3px);
        }

        @media screen and (max-width: 768px) {
          .hero-name {
            font-size: 40px;
          }

          .hero-title {
            font-size: 32px;
          }

          .cta-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
