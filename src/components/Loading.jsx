import { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + Math.random() * 10, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-overlay">
      {/* Name display with purple blinking dot */}
      <div className="loading-name">
        Chamila
        <span className="loading-dot">.</span>
      </div>

      <div className="spinner-container">
        <div className="spinner" />
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>

      <div className="wave-wrapper">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="wave" style={{ "--i": i }} />
        ))}
      </div>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: var(--primary-color);
          color: var(--text-primary);
          z-index: 50;
          overflow: hidden;
        }

        .loading-name {
          display: flex;
          align-items: center;
          font-size: 4rem;
          font-weight: 800;
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .loading-dot {
          color: var(--highlight-color);
          font-size: 1.2em;
          margin-left: 0.2em;
          animation: blink 1.5s infinite;
        }

        .spinner-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 6px solid var(--secondary-color);
          border-top-color: var(--highlight-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        .progress-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--highlight-color);
          text-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
        }

        .wave-wrapper {
          position: absolute;
          bottom: 20px;
          display: flex;
          gap: 4px;
        }

        .wave {
          width: 8px;
          height: 24px;
          background: var(--highlight-color);
          opacity: 0.6;
          border-radius: 4px;
          animation: wave 1s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.1s);
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.8);
          }
        }

        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;