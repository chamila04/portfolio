import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projects.find(p => p.id === parseInt(id) || p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      // Document title
      document.title = `${foundProject.title} | Chamila Senaratne`;
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="not-found container">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  // Split the fullDescription into paragraphs
  const descriptionParagraphs = project.fullDescription ? 
    project.fullDescription.split('\n\n').filter(p => p.trim() !== '') : 
    [project.description];

  return (
    <section className="project-detail">
      <div className="container">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back to Projects
        </Link>
        
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiGithub /> Source Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
        
        <div className="project-banner">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="project-content">
          <div className="project-info">
            <div className="project-description">
              <h2>Project Overview</h2>
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="project-meta">
              <div className="meta-item">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              {project.duration && (
                <div className="meta-item">
                  <h3>Duration</h3>
                  <p>{project.duration}</p>
                </div>
              )}
              
              {project.role && (
                <div className="meta-item">
                  <h3>Role</h3>
                  <p>{project.role}</p>
                </div>
              )}
            </div>
          </div>
          
          {project.features && (
            <div className="project-features">
              <h2>Key Features</h2>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {project.challenges && (
            <div className="project-challenges">
              <h2>Challenges & Solutions</h2>
              {project.challenges.split('\n\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-detail {
          padding: 120px 0 80px;
        }

        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(100, 255, 218, 0.1);
          border-radius: 50%;
          border-top-color: var(--highlight-color);
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .not-found {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 30px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: var(--highlight-color);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .project-title {
          font-size: 36px;
          color: var(--text-primary);
        }

        .project-links {
          display: flex;
          gap: 15px;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 1px solid var(--highlight-color);
          border-radius: 4px;
          color: var(--highlight-color);
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background-color: rgba(100, 255, 218, 0.1);
        }

        .project-banner {
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 40px;
        }

        .project-banner img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .project-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .project-info {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .project-description p {
          margin-bottom: 1rem;
        }

        .project-description p:last-child {
          margin-bottom: 0;
        }

        .meta-item {
          margin-bottom: 20px;
        }

        .meta-item h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 14px;
          color: var(--highlight-color);
          background-color: rgba(100, 255, 218, 0.1);
          padding: 6px 12px;
          border-radius: 4px;
        }

        .project-features ul {
          list-style-type: none;
          padding-left: 0;
        }

        .project-features ul li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
        }

        .project-features ul li:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--highlight-color);
        }

        .project-challenges p {
          margin-bottom: 1rem;
        }

        .project-challenges p:last-child {
          margin-bottom: 0;
        }

        @media screen and (max-width: 768px) {
          .project-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .project-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectDetail;