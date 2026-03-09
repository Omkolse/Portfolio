import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Download, FileCode, CheckCircle, Database, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects';
import ModelViewer from '../components/ModelViewer';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const [activeMedia, setActiveMedia] = React.useState(project?.stlModel ? 'stl' : 'image');
  const [activeImgIdx, setActiveImgIdx] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found container">
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="project-hero">
        <div className="project-hero-bg" style={{ backgroundImage: `url(${project.image})` }}></div>
        <div className="project-hero-overlay"></div>
        <div className="container project-hero-content">
          <Link to="/" className="back-link btn btn-secondary"><ArrowLeft size={18} /> Back to Hub</Link>
          <motion.h1 
            className="text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >{project.title}</motion.h1>
          <motion.p 
            className="project-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >{project.shortDesc}</motion.p>
        </div>
      </div>

      <div className="container project-body">
        <div className="project-main-content">
          <section className="detail-section glass-panel">
            <h3><FileCode className="inline-icon" /> System Overview</h3>
            <p>{project.description}</p>
          </section>

          <section className="detail-section glass-panel">
            <h3><Database className="inline-icon" /> Documentation</h3>
            <p className="engineering-text">{project.documentation}</p>
          </section>

          {(project.stlModel || (project.gallery && project.gallery.length > 0)) && (
            <section className="detail-section media-section glass-panel">
              <div className="section-header-with-toggle">
                <h3><CheckCircle className="inline-icon" /> Visual Assets</h3>
                {project.stlModel && project.gallery && project.gallery.length > 0 && (
                  <div className="media-toggle box-glow">
                    <button 
                      className={activeMedia === 'stl' ? 'active' : ''} 
                      onClick={() => setActiveMedia('stl')}
                    >
                      3D Model
                    </button>
                    <button 
                      className={activeMedia === 'image' ? 'active' : ''} 
                      onClick={() => setActiveMedia('image')}
                    >
                      Images
                    </button>
                  </div>
                )}
              </div>

              <div className="media-display-area">
                {activeMedia === 'stl' && project.stlModel ? (
                  <ModelViewer modelUrl={project.stlModel} title={project.title} />
                ) : (
                  <div className="image-gallery-viewer">
                    <div className="main-image-container">
                      <img src={project.gallery[activeImgIdx]} alt={`${project.title} view ${activeImgIdx + 1}`} />
                    </div>
                    {project.gallery.length > 1 && (
                      <div className="gallery-thumbnails">
                        {project.gallery.map((img, idx) => (
                          <div 
                            key={idx} 
                            className={`thumb-item ${activeImgIdx === idx ? 'active' : ''}`}
                            onClick={() => setActiveImgIdx(idx)}
                          >
                            <img src={img} alt="thumbnail" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          <section className="detail-section glass-panel">
            <h3><CheckCircle className="inline-icon" /> Project Goals</h3>
            <ul className="goals-list">
              {project.goals.map((goal, idx) => (
                <li key={idx}>
                  <div className="goal-bullet box-glow"></div>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="project-sidebar">
          <div className="sidebar-widget glass-panel">
            <h4>Technology Stack</h4>
            <div className="tech-tags">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-widget glass-panel">
            <h4>Resources & Source Files</h4>
            <div className="resource-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full">
                  <Github size={18} /> Source Code
                </a>
              )}
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full">
                  <ExternalLink size={18} /> {project.externalLink.includes('grabcad') ? 'View on GrabCAD' : 'View on Cults3D'}
                </a>
              )}
              {project.downloadLink && (
                <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full box-glow">
                  <Download size={18} /> Project Files
                </a>
              )}
            </div>
            
            <div className="folder-structure mt-4">
              <h5>Project Architecture</h5>
              <pre className="folder-tree">
{`${project.id}/
├── description.md
├── images/
├── solidworks/
├── ros2_packages/
├── electronics/
├── code/
└── documentation/`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
