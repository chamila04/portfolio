import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Chamila<span className="highlight">.</span></h3>
            <p>Software Engineering Undergraduate</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Connect</h4>
              <div className="footer-social-links">
                <a href="https://linkedin.com/in/chamila-senaratne/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </a>
                <a href="https://github.com/chamila04" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href="mailto:chamilasenaratne04@gmail.com">
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Chamila Senaratne. All rights reserved.</p>
          <p className="footer-credit">Designed & Built with ❤️</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--secondary-color);
          padding: 60px 0 20px;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-logo h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .footer-logo p {
          color: var(--text-secondary);
        }

        .footer-links {
          display: flex;
          gap: 40px;
        }

        .footer-links-column h4 {
          font-size: 18px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .footer-links-column ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-column ul li a {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }

        .footer-links-column ul li a:hover {
          color: var(--highlight-color);
        }

        .footer-social-links {
          display: flex;
          gap: 15px;
        }

        .footer-social-links a {
          font-size: 20px;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .footer-social-links a:hover {
          color: var(--highlight-color);
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(136, 146, 176, 0.2);
          color: var(--text-secondary);
          font-size: 14px;
        }

        @media screen and (max-width: 768px) {
          .footer-content,
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            align-items: center;
            text-align: center;
          }

          .footer-links {
            margin-top: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;