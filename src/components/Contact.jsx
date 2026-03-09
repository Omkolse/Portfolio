import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title text-glow">Initiate Contact</h2>
        
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>System Terminal Ready</h3>
            <p>I am always open to discussing robotics development, engineering roles, and innovative projects. Send a transmission.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon box-glow"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:omkolse25@gmail.com">omkolse25@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon box-glow"><MapPin size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8767910096</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Name / Identification" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Message Payload..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Transmit Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
