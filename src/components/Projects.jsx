import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

// We import mock projects data, ideally this will be fetched from a dynamic context
import projectsData from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'ROS', 'CAD & Mechanical', 'Programming', 'Combined'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title text-glow">Project Showcase</h2>
        
        <div className="project-filters">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <motion.div 
              layout
              key={project.id}
              className="project-card glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <Link to={`/project/${project.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
                  </div>
                </div>
                <p>{project.shortDesc}</p>
                <div className="project-tech">
                  <span className="tech-badge category-badge">{project.category}</span>
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && <span className="tech-badge">+{project.technologies.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
