import Hero from '../components/Hero';
import ProjectSlider from '../components/ProjectSlider';
import Contact from '../components/Contact';
import { useEffect } from "react";

const Home = ({ onLoadComplete }) => {

  useEffect(() => {
    onLoadComplete();
  }, [onLoadComplete]);

  return (
    <div className="home-page">
      <Hero />
      <ProjectSlider />
      <Contact />
    </div>
  );
};

export default Home;