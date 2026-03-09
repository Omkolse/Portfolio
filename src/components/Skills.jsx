import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Robotics',
      skills: ['ROS2', 'SLAM Algorithms', 'Navigation Systems', 'Robot Kinematics', 'URDF Robot Modeling', 'Robot Simulation']
    },
    {
      title: 'Embedded Systems',
      skills: ['Raspberry Pi', 'Arduino', 'Hardware Driver Development', 'Sensor Integration (IMU, LiDAR)', 'Motor Control Systems']
    },
    {
      title: 'Programming',
      skills: ['Python', 'C++', 'Linux / Bash']
    },
    {
      title: 'Hardware & Design',
      skills: ['SolidWorks (Mechanical CAD)', 'Circuit Design (PCB Development)', '3D Printing & Rapid Prototyping', 'Hardware Testing & Debugging']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title text-glow">Technical Arsenal</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="gradient-text">{category.title}</h3>
              <div className="skills-tag-cloud">
                {category.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx} 
                    className="skill-tag box-glow"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (sIdx * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
