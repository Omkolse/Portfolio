import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="logo-text">OmNexus</h3>
            <p className="footer-desc">
              Building intelligent, autonomous, and robust robotic systems.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href={`${import.meta.env.BASE_URL}#about`}>About</a></li>
                <li><a href={`${import.meta.env.BASE_URL}#projects`}>Projects</a></li>
                <li><a href={`${import.meta.env.BASE_URL}#skills`}>Skills</a></li>
                <li><a href={`${import.meta.env.BASE_URL}#contact`}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://github.com/Omkolse" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/omkolse" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                <a href="https://grabcad.com/om.kolse-2" target="_blank" rel="noopener noreferrer">GrabCAD</a>
                <a href="https://cults3d.com/en/users/omkolse/3d-models" target="_blank" rel="noopener noreferrer">Cults3D</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Om Kolse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
