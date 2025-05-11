import { useState, useEffect } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8 + 4;
        return next >= 100 ? 100 : next;
      });
    }, 120);

    if (progress >= 100 && onLoadingComplete) {
      const timeout = setTimeout(() => {
        onLoadingComplete();
      }, 1000);
      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }

    return () => clearInterval(interval);
  }, [progress, onLoadingComplete]);

  // Calculate the stroke dash offset for the progress arc
  const circumference = 2 * Math.PI * 90; // Radius of 90px
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, #1e1e2e 0%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '300px',
          height: '300px',
        }}
      >
        {/* Pulsing orbital ring */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #3b82f6, #ec4899, #8b5cf6)',
            opacity: 0.3,
            animation: 'pulseRing 2s ease-in-out infinite, rotateGradient 6s linear infinite',
          }}
        ></div>

        {/* Progress arc */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '300px',
            height: '300px',
            transform: 'rotate(-90deg)',
          }}
        >
          <circle
            cx="150"
            cy="150"
            r="90"
            stroke="#06b6d4"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 0.3s ease',
              strokeLinecap: 'round',
            }}
          />
        </svg>

        {/* Central glowing orb */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '60px',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(236, 72, 153, 0.2) 70%)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'glowOrb 1.5s ease-in-out infinite',
          }}
        >
          <div
            style={{
              color: '#ffffff',
              fontSize: '3rem',
              fontWeight: 800,
              textShadow: '0 0 15px rgba(255, 255, 255, 0.7)',
            }}
          >
            {Math.round(progress)}%
          </div>
        </div>

        {/* Dynamic particle trails */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const radius = 120 + (i % 2) * 20;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  background: `linear-gradient(to right, #3b82f6, #ec4899)`,
                  borderRadius: '50%',
                  left: `${150 + Math.cos(angle) * radius}px`,
                  top: `${150 + Math.sin(angle) * radius}px`,
                  animation: `orbit${i % 2}  ${2 + i * 0.2}s linear infinite`,
                  opacity: 0.7 - i * 0.05,
                  transform: 'scale(0.8)',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Flickering loading text */}
      <div
        style={{
          marginTop: '2.5rem',
          color: '#3b82f6',
          fontSize: '1.25rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          animation: 'flicker 3s ease-in-out infinite',
        }}
      >
        Loading
      </div>

      <style jsx>{`
        @keyframes pulseRing {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
        }

        @keyframes rotateGradient {
          0% {
            background: linear-gradient(45deg, #3b82f6, #ec4899, #8b5cf6);
          }
          50% {
            background: linear-gradient(45deg, #8b5cf6, #3b82f6, #ec4899);
          }
          100% {
            background: linear-gradient(45deg, #3b82f6, #ec4899, #8b5cf6);
          }
        }

        @keyframes glowOrb {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 50px rgba(59, 130, 246, 0.7);
          }
        }

        @keyframes orbit0 {
          0% {
            transform: translate(0, 0) rotate(0deg) translate(-120px) rotate(0deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg) translate(-120px) rotate(-360deg);
          }
        }

        @keyframes orbit1 {
          0% {
            transform: translate(0, 0) rotate(0deg) translate(-140px) rotate(0deg);
          }
          100% {
            transform: translate(0, 0) rotate(-360deg) translate(-140px) rotate(360deg);
          }
        }

        @keyframes flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
            opacity: 1;
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
          20%, 24%, 55% {
            opacity: 0.4;
            text-shadow: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;