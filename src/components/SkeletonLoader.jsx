import React from "react";

const SkeletonLoader = ({ type = "default" }) => {
  // Different skeleton types for different page components
  const renderSkeleton = () => {
    switch (type) {
      case "home":
        return (
          <div className="skeleton-home">
            {/* Hero section skeleton */}
            <div className="skeleton-hero">
              <div className="skeleton-text-block">
                <div className="skeleton-line w-50"></div>
                <div className="skeleton-line w-80"></div>
                <div className="skeleton-line w-70"></div>
                <div className="skeleton-line w-40"></div>
              </div>
              <div className="skeleton-image"></div>
            </div>

            {/* Projects section skeleton */}
            <div className="skeleton-section">
              <div className="skeleton-heading w-30"></div>
              <div className="skeleton-cards">
                {[1, 2, 3].map((item) => (
                  <div className="skeleton-card" key={item}></div>
                ))}
              </div>
            </div>

            {/* Contact section skeleton */}
            <div className="skeleton-section">
              <div className="skeleton-heading w-30"></div>
              <div className="skeleton-form">
                <div className="skeleton-input"></div>
                <div className="skeleton-input"></div>
                <div className="skeleton-textarea"></div>
                <div className="skeleton-button w-30"></div>
              </div>
            </div>
          </div>
        );

      case "project-detail":
        return (
          <div className="skeleton-project-detail">
            <div className="skeleton-heading w-50"></div>
            <div className="skeleton-tags">
              {[1, 2, 3].map((item) => (
                <div className="skeleton-tag" key={item}></div>
              ))}
            </div>
            <div className="skeleton-image-large"></div>
            <div className="skeleton-text-block">
              <div className="skeleton-line w-100"></div>
              <div className="skeleton-line w-90"></div>
              <div className="skeleton-line w-95"></div>
              <div className="skeleton-line w-80"></div>
              <div className="skeleton-line w-85"></div>
            </div>
          </div>
        );

      default:
        return (
          <div className="skeleton-default">
            <div className="skeleton-text-block">
              <div className="skeleton-line w-80"></div>
              <div className="skeleton-line w-60"></div>
              <div className="skeleton-line w-70"></div>
              <div className="skeleton-line w-50"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="skeleton-container">
      {renderSkeleton()}

      <style jsx>{`
        .skeleton-container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 80px 20px;
        }

        .skeleton-line,
        .skeleton-heading,
        .skeleton-image,
        .skeleton-card,
        .skeleton-input,
        .skeleton-textarea,
        .skeleton-button,
        .skeleton-tag,
        .skeleton-image-large {
          background: linear-gradient(
            90deg,
            var(--skeleton-base) 0%,
            var(--skeleton-highlight) 50%,
            var(--skeleton-base) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        .skeleton-line {
          height: 20px;
          margin-bottom: 12px;
        }

        .skeleton-heading {
          height: 32px;
          margin-bottom: 24px;
        }

        .w-30 {
          width: 30%;
        }
        .w-40 {
          width: 40%;
        }
        .w-50 {
          width: 50%;
        }
        .w-60 {
          width: 60%;
        }
        .w-70 {
          width: 70%;
        }
        .w-80 {
          width: 80%;
        }
        .w-85 {
          width: 85%;
        }
        .w-90 {
          width: 90%;
        }
        .w-95 {
          width: 95%;
        }
        .w-100 {
          width: 100%;
        }

        .skeleton-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }

        .skeleton-text-block {
          width: 100%;
          max-width: 600px;
        }

        .skeleton-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
        }

        .skeleton-image-large {
          width: 100%;
          height: 400px;
          margin: 20px 0 30px;
        }

        .skeleton-section {
          margin-bottom: 60px;
        }

        .skeleton-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .skeleton-card {
          height: 300px;
        }

        .skeleton-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .skeleton-input {
          height: 50px;
        }

        .skeleton-textarea {
          height: 150px;
        }

        .skeleton-button {
          height: 50px;
          margin-top: 10px;
        }

        .skeleton-tags {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .skeleton-tag {
          width: 80px;
          height: 30px;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media screen and (max-width: 768px) {
          .skeleton-hero {
            flex-direction: column-reverse;
            text-align: center;
          }

          .skeleton-image {
            margin-bottom: 30px;
          }

          .skeleton-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default SkeletonLoader;
