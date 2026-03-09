import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const photos = [
    { src: '/images/projects/ros-scout.png', alt: 'ROS-Scout Rover Build', span: 'col-span-2 row-span-2' },
    { src: '/images/gallery/humanoid-2.png', alt: 'Humanoid Joint Assembly', span: '' },
    { src: '/images/gallery/diff-gear-2.png', alt: 'Differential Gear CAD', span: '' },
    { src: '/images/gallery/humanoid-3.png', alt: 'Humanoid 1.0 Render', span: 'col-span-2' },
    { src: '/images/gallery/draic-2.png', alt: 'DRAIC Mascot Design', span: '' },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title text-glow">Workshop Gallery</h2>
        
        <div className="gallery-grid">
          {photos.map((photo, idx) => (
            <motion.div 
              key={idx} 
              className={`gallery-item ${photo.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-overlay glass-panel">
                <span>{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
