import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Settings, Wrench, Layers } from 'lucide-react';
import './About.css';

const About = () => {
  const expertise = [
    { icon: <Cpu size={24} />, title: 'ROS2 Development', desc: 'Designing modular ROS2 nodes for robot control, sensor integration, and navigation systems.' },
    { icon: <Settings size={24} />, title: 'Embedded Systems', desc: 'Developing embedded robotics platforms using Raspberry Pi, Arduino, and integrated sensor systems.' },
    { icon: <Layers size={24} />, title: 'Autonomous Robotics', desc: 'Working on SLAM, path planning, and navigation algorithms for mobile robots.' },
    { icon: <Wrench size={24} />, title: 'Mechanical Design', desc: 'Designing robotic mechanisms and chassis using SolidWorks with rapid prototyping through 3D printing.' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title text-glow">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Engineering Intelligent Robotic Systems</h3>
            <p>
              I am a Robotics Developer focused on building intelligent robotic systems by combining mechanical design, embedded electronics, and autonomous software. My work revolves around creating complete robotics platforms—from concept and CAD design to embedded control and high-level ROS2 software.
            </p>
            <p>
              I design custom robot structures in SolidWorks, develop embedded systems using Raspberry Pi and Arduino, and implement ROS2-based navigation, perception, and control systems. I enjoy solving complex engineering problems and turning ideas into functional robotic prototypes.
            </p>
            <div className="stats-container">
              <div className="stat">
                <span className="stat-number gradient-text">1.5+</span>
                <span className="stat-label">Years of<br/>Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">8+</span>
                <span className="stat-label">Robots<br/>Built</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">10k+</span>
                <span className="stat-label">Lines of<br/>Code</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="expertise-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card box-glow">
                <div className="expertise-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
