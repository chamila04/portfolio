import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlider = () => {
  const swiperRef = useRef(null);
  // State to control slide height
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
        calculateSlideHeight();
      }
    };

    // Calculate the maximum height of all slides
    const calculateSlideHeight = () => {
      if (!swiperRef.current) return;
      
      // Reset heights to natural size first
      const slideElements = document.querySelectorAll('.project-card');
      slideElements.forEach(el => {
        el.style.height = 'auto';
      });
      
      // Get the tallest height
      let maxHeight = 0;
      slideElements.forEach(el => {
        const height = el.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
      });
      
      // Set all slides to the tallest height
      if (maxHeight > 0) {
        setSlideHeight(maxHeight);
        slideElements.forEach(el => {
          el.style.height = `${maxHeight}px`;
        });
      }
    };

    // Initial calculation after components are mounted and rendered
    setTimeout(calculateSlideHeight, 100);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect to update heights when swiper initializes
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      
      // After swiper initialization
      swiper.on('imagesReady', () => {
        setTimeout(() => {
          // Reset heights to natural size first
          const slideElements = document.querySelectorAll('.project-card');
          slideElements.forEach(el => {
            el.style.height = 'auto';
          });
          
          // Get the tallest height
          let maxHeight = 0;
          slideElements.forEach(el => {
            const height = el.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
          });
          
          // Set all slides to the tallest height
          if (maxHeight > 0) {
            setSlideHeight(maxHeight);
            slideElements.forEach(el => {
              el.style.height = `${maxHeight}px`;
            });
          }
        }, 100);
      });
    }
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Each project showcases different skills and technologies.
        </p>

        <div className="project-slider-container">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.update();
              }, 200);
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="slider-item">
                  <ProjectCard 
                    project={project} 
                    height={slideHeight > 0 ? slideHeight : undefined}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background-color: var(--primary-color);
          padding: 100px 0;
        }

        .section-subtitle {
          color: var(--text-secondary);
          max-width: 700px;
          margin-bottom: 40px;
        }

        .project-slider-container {
          position: relative;
          padding: 20px 0;
        }

        .slider-item {
          height: 100%;
          padding: 10px 0;
        }

        /* Custom Swiper Styles */
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: var(--highlight-color);
          background-color: rgba(17, 34, 64, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 20px;
        }

        :global(.swiper-pagination-bullet) {
          background-color: var(--text-secondary);
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: var(--highlight-color);
        }
      `}</style>
    </section>
  );
};

export default ProjectSlider;