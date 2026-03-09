import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Send } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Abstract Background Elements */}
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="glow-orb primary"></div>
        <div className="glow-orb secondary"></div>
      </div>

      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-container"
        >
          <motion.h4 
            className="greeting gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            HELLO, I'M
          </motion.h4>
          
          <motion.h1 
            className="name"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Om Kolse
          </motion.h1>
          
          <motion.h2 
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Robotics Engineer
          </motion.h2>

          <motion.p 
            className="bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Robotics developer focused on ROS2, embedded systems, and robot design. 
            Building integrated hardware–software robotics systems.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <ChevronRight size={18} />
            </a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Resume <FileText size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact <Send size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D abstract visual element on the right (placeholder for 3d canvas/CSS art) */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="cube-container">
            <div className="cube">
              <div className="face front">ROS2</div>
              <div className="face back">C++</div>
              <div className="face right">CAD</div>
              <div className="face left">PCB</div>
              <div className="face top">SLAM</div>
              <div className="face bottom">AI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
