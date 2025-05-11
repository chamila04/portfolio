import React, { useState, useEffect } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const next = prevProgress + Math.random() * 8 + 2;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    // Trigger completion callback when progress reaches 100%
    if (progress >= 100 && onLoadingComplete) {
      const timeout = setTimeout(() => {
        onLoadingComplete();
      }, 600);
      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }

    return () => clearInterval(interval);
  }, [progress, onLoadingComplete]);

  // Calculate the clip path for progress circle
  const getClipPath = () => {
    if (progress <= 25) {
      return `polygon(50% 50%, 50% 0%, ${50 + progress * 2}% 0%)`;
    } else if (progress <= 50) {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% ${(progress - 25) * 4}%)`;
    } else if (progress <= 75) {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${100 - (progress - 50) * 4}% 100%)`;
    } else {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${100 - (progress - 75) * 4}%)`;
    }
  };

  const styles = {
    loadingOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    loaderContainer: {
      position: 'relative',
      width: '200px',
      height: '200px'
    },
    spinnerRing: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '8px solid transparent',
      borderTopColor: '#3b82f6',
      borderRightColor: '#8b5cf6',
      borderBottomColor: '#ec4899',
      borderLeftColor: '#6366f1',
      animation: 'spin 1.5s linear infinite'
    },
    pulseRing: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '4px solid #3b82f6',
      opacity: 0.3,
      animation: 'pulse 2s ease-out infinite'
    },
    innerCircle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '150px',
      height: '150px',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    progressText: {
      color: 'white',
      fontSize: '2.5rem',
      fontWeight: 700
    },
    progressCircle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '170px',
      height: '170px',
      borderRadius: '50%',
      overflow: 'hidden'
    },
    progressCircleFill: {
      width: '100%',
      height: '100%',
      border: '4px solid #06b6d4',
      borderRadius: '50%',
      opacity: 0.5
    },
    loadingText: {
      marginTop: '2rem',
      color: '#06b6d4',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: '0.875rem',
      animation: 'pulseText 1.5s infinite'
    },
    dotsContainer: {
      display: 'flex',
      marginTop: '0.75rem'
    },
    dot: (index) => ({
      width: '8px',
      height: '8px',
      margin: '0 4px',
      borderRadius: '50%',
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      animation: 'bounce 1.5s infinite',
      animationDelay: `${index * 0.15}s`,
      opacity: Math.min(1, progress / 20 + index * 0.1)
    }),
    keyframes: `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.05); opacity: 0.5; }
        100% { transform: scale(1); opacity: 0.3; }
      }
      
      @keyframes pulseText {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `
  };

  return (
    <div style={styles.loadingOverlay}>
      <style>
        {styles.keyframes}
      </style>

      <div style={styles.loaderContainer}>
        {/* Outer spinning circle */}
        <div style={styles.spinnerRing}></div>
        
        {/* Pulse ring effect */}
        <div style={styles.pulseRing}></div>
        
        {/* Inner circle with background */}
        <div style={styles.innerCircle}>
          <div style={styles.progressText}>
            {Math.round(progress)}%
          </div>
        </div>
        
        {/* Progress circle overlay */}
        <div style={styles.progressCircle}>
          <div 
            style={{
              ...styles.progressCircleFill,
              clipPath: getClipPath()
            }}
          ></div>
        </div>
      </div>
      
      {/* Loading text */}
      <div style={styles.loadingText}>Loading</div>
      
      {/* Animated dots */}
      <div style={styles.dotsContainer}>
        {[0, 1, 2, 3, 4].map((dot) => (
          <div key={dot} style={styles.dot(dot)}></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;