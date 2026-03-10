import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Zap } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const experiences = [
    {
      year: 'Aug 2025 - Jan 2026',
      title: 'ROS Developer (Intern)',
      company: 'Eric Robotics',
      desc: 'Developed advanced robotic software stacks in ROS over a six month period, driving real-world autonomy and control systems.',
      icon: <Briefcase size={20} />,
      certificates: [
        { name: 'Certificate', url: `${baseUrl}certificates/eric_robotics_cert.pdf` },
        { name: 'LOR', url: `${baseUrl}certificates/eric_robotics_lor.pdf` }
      ]
    },
    {
      year: 'Oct 2024 - Mar 2025',
      title: 'Production Engineer (Intern)',
      company: '3D Wizard',
      desc: 'Managed rapid prototyping via SLA/FDM 3D printing and vacuum casting. Notable projects include Adani Defence replicas and large-format structural prototypes.',
      icon: <Zap size={20} />,
      certificates: [
        { name: 'Internship Certificate', url: `${baseUrl}certificates/3d_wizard.pdf` }
      ]
    },
    {
      year: 'Apr 2024',
      title: 'Robotics Volunteering Lead (BITS)',
      company: 'Bot Makers @ BITS Pilani',
      desc: 'Led and organized Robo Soccer & Race events at Apogee BITS Pilani (Rajasthan). Recognized for exceptional leadership and coordination.',
      icon: <Award size={20} />,
      certificates: [
        { name: 'Volunteer Certificate', url: `${baseUrl}certificates/bits_pilani.pdf` }
      ]
    },
    {
      year: 'Mar 2024',
      title: 'Robotics Volunteering Lead (IIT)',
      company: 'Bot Makers @ IIT Indore',
      desc: 'Organized competitive robotics events at Fluxus IIT Indore, managing technical logistics and team coordination.',
      icon: <Award size={20} />,
      certificates: [
        { name: 'Volunteer Certificate', url: `${baseUrl}certificates/iit_indore.pdf` }
      ]
    },
    {
      year: 'Nov 2023 - Present',
      title: 'Mechanical Head / Robotics Club Member',
      company: 'DRAIC - College Robotics Club',
      desc: 'Progressed from a dedicated club member to the Mechanical Head in August 2025. Spearheading mechanical designs and mentoring junior members.',
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title text-glow">Journey & Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="timeline-dot box-glow">
                {exp.icon}
              </div>
              <div className="timeline-content glass-panel">
                <span className="timeline-year font-mono text-glow">{exp.year}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.desc}</p>
                {exp.certificates && (
                  <div className="experience-certificates">
                    {exp.certificates.map((cert, cIdx) => (
                      <a 
                        key={cIdx} 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cert-link box-glow"
                      >
                        <Award size={14} /> {cert.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
