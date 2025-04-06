import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, height }) => {
  const { id, title, description, image, technologies, liveUrl, githubUrl } = project;

  return (
    <div className="project-card" style={height ? { height: `${height}px` } : {}}>
      <Link to={`/project/${id}`} className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay">
          <span>View Details</span>
        </div>
      </Link>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-footer">
          <div className="card-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="card-tech">{tech}</span>
            ))}
          </div>
          
          <div className="card-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                <FiGithub />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background-color: var(--secondary-color);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .card-image-container {
          position: relative;
          overflow: hidden;
          height: 200px;
          flex-shrink: 0;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(10, 25, 47, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-overlay span {
          color: var(--highlight-color);
          font-weight: 500;
          padding: 8px 16px;
          border: 1px solid var(--highlight-color);
          border-radius: 4px;
        }

        .card-image-container:hover .card-overlay {
          opacity: 1;
        }

        .card-image-container:hover .card-image {
          transform: scale(1.05);
        }

        .card-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 22px;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .card-description {
          color: var(--text-secondary);
          margin-bottom: 15px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-footer {
          margin-top: auto;
        }

        .card-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .card-tech {
          font-size: 12px;
          color: var(--highlight-color);
          background-color: rgba(100, 255, 218, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .card-links {
          display: flex;
          gap: 15px;
        }

        .card-link {
          font-size: 20px;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .card-link:hover {
          color: var(--highlight-color);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;