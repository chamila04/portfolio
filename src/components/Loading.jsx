import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Loading = ({ onLoadingComplete }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50, 
      mountRef.current.clientWidth / mountRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x0a192f, 1); // Dark blue background
    mountRef.current.appendChild(renderer.domElement);

    // Create center sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x64ffda });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create orbiting dots
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    // First orbit
    const createOrbit = (radius, dotsCount, color) => {
      const orbitDots = [];
      
      for (let i = 0; i < dotsCount; i++) {
        const angle = (i / dotsCount) * Math.PI * 2;
        
        const dotGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const dotMaterial = new THREE.MeshBasicMaterial({ color: color });
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        
        dot.position.x = Math.cos(angle) * radius;
        dot.position.z = Math.sin(angle) * radius;
        
        orbitGroup.add(dot);
        orbitDots.push(dot);
      }
      
      return orbitDots;
    };

    // Create two orbits with different colors
    const innerOrbitDots = createOrbit(3, 8, 0x64ffda);
    const outerOrbitDots = createOrbit(5, 12, 0xffffff);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Pulse the center sphere
      sphere.scale.set(
        1 + Math.sin(elapsedTime * 2) * 0.1,
        1 + Math.sin(elapsedTime * 2) * 0.1,
        1 + Math.sin(elapsedTime * 2) * 0.1
      );
      
      // Rotate the orbits in opposite directions
      orbitGroup.rotation.y = elapsedTime * 0.5;
      
      // Make inner orbit move up and down slightly
      innerOrbitDots.forEach((dot, i) => {
        const angle = (i / innerOrbitDots.length) * Math.PI * 2;
        dot.position.y = Math.sin(elapsedTime * 2 + angle) * 0.5;
      });
      
      // Render
      renderer.render(scene, camera);
      return requestAnimationFrame(animate);
    };
    
    const animationId = animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Trigger loading complete callback
    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3500);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      
      // Clean up orbit dots
      [...innerOrbitDots, ...outerOrbitDots].forEach(dot => {
        dot.geometry.dispose();
        dot.material.dispose();
      });
      
      // Dispose renderer
      renderer.dispose();
      
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);
  
  return (
    <div 
      ref={mountRef}
      className="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center"
    />
  );
};

export default Loading;