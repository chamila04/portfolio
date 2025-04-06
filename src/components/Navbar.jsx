import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h3>Chamila<span className="highlight">.</span></h3>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          {/*
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
           */}
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li className="nav-item nav-button">
            <a 
              href="/src/assets/chamila.pdf" 
              className="resume-button" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background-color: transparent;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background-color: rgba(10, 25, 47, 0.9);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          max-width: var(--max-width);
          padding: 0 20px;
          margin: 0 auto;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .nav-menu {
          display: flex;
          list-style: none;
          align-items: center;
        }

        .nav-item {
          margin-left: 32px;
        }

        .nav-link {
          color: var(--text-primary);
          font-size: 16px;
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--highlight-color);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .resume-button {
          padding: 8px 16px;
          border: 1px solid var(--highlight-color);
          border-radius: 4px;
          color: var(--highlight-color);
          transition: all 0.3s ease;
        }

        .resume-button:hover {
          background-color: rgba(100, 255, 218, 0.1);
        }

        .menu-icon {
          display: none;
          font-size: 24px;
          cursor: pointer;
        }

        @media screen and (max-width: 768px) {
          .menu-icon {
            display: block;
          }

          .nav-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background-color: var(--secondary-color);
            transition: all 0.5s ease;
            padding-top: 40px;
          }

          .nav-menu.active {
            left: 0;
          }

          .nav-item {
            margin: 20px 0;
          }

          .nav-button {
            margin-top: 20px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;