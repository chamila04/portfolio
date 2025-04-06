import Hero from '../components/Hero';
import ProjectSlider from '../components/ProjectSlider';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ProjectSlider />
      <Contact />
    </div>
  );
};

export default Home;