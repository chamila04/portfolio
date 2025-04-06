import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const Loading = ({ onLoadingComplete }) => {
  const containerRef = useRef();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    
    const colorPalette = [
      new THREE.Color(0x3498db), // blue
      new THREE.Color(0x9b59b6), // purple
      new THREE.Color(0x2ecc71), // green
      new THREE.Color(0xff6b6b)  // coral
    ];
    
    for (let i = 0; i < particleCount; i++) {
      // Initial sphere positions
      const radius = 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions.push(x, y, z);
      
      // Assign random colors from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors.push(color.r, color.g, color.b);
    }
    
    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Animation parameters
    const loadingDuration = 4000; // 4 seconds loading time
    let startTime = Date.now();
    
    // Animation function
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const animationProgress = Math.min(elapsedTime / loadingDuration, 1);
      const time = Date.now() * 0.0005;
      
      // Update particle positions for morphing effect
      const positions = particles.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // Calculate radius and apply pulsating effect
        const radius = 10 + Math.sin(time * 2) * 2;
        
        // Apply noise to particle positions
        const noise = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * 0.5;
        const distance = Math.sqrt(x * x + y * y + z * z);
        const normFactor = radius / distance;
        
        positions[i3] = x * normFactor + noise;
        positions[i3 + 1] = y * normFactor + noise;
        positions[i3 + 2] = z * normFactor + noise;
      }
      
      particles.attributes.position.needsUpdate = true;
      
      // Rotate the entire particle system
      particleSystem.rotation.x = time * 0.2;
      particleSystem.rotation.y = time * 0.4;
      
      // Update loading progress
      setProgress(Math.floor(animationProgress * 100));
      
      // Complete loading when animation is done
      if (animationProgress >= 1 && onLoadingComplete) {
        setTimeout(() => {
          onLoadingComplete();
        }, 300);
      } else {
        requestAnimationFrame(animate);
      }
      
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onLoadingComplete]);
  
  // Inline CSS styles
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    zIndex: 9999
  };
  
  const threeContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };
  
  const loadingTextStyle = {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    zIndex: 10000,
    fontFamily: '"Poppins", sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textShadow: '0 2px 10px rgba(0,0,0,0.2)'
  };
  
  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    fontWeight: 300,
    letterSpacing: '3px'
  };
  
  const percentStyle = {
    fontSize: '1.2rem',
    marginTop: '0.8rem',
    fontWeight: 300
  };
  
  const progressBarContainerStyle = {
    width: '280px',
    height: '4px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '10px',
    overflow: 'hidden'
  };
  
  const progressBarStyle = {
    height: '100%',
    background: 'linear-gradient(90deg, #00dbde, #fc00ff)',
    width: `${progress}%`,
    transition: 'width 0.3s ease-out',
    boxShadow: '0 0 10px rgba(252, 0, 255, 0.7)'
  };
  
  return (
    <div style={containerStyle}>
      <div style={threeContainerStyle} ref={containerRef}></div>
      <div style={loadingTextStyle}>
        <h2 style={headingStyle}>PORTFOLIO</h2>
        <div style={progressBarContainerStyle}>
          <div style={progressBarStyle}></div>
        </div>
        <p style={percentStyle}>{progress}%</p>
      </div>
    </div>
  );
};

export default Loading;