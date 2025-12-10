import React, { useState, useEffect } from 'react';
import { getProjects, getClients, createContact, subscribeNewsletter } from '../services/api';
import { getBaseUrl } from '../config/api';
import './LandingPage.css';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    howMayWeHelp: '',
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsRes, clientsRes] = await Promise.all([
        getProjects(),
        getClients(),
      ]);
      setProjects(projectsRes.data);
      setClients(clientsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact({
        fullName: contactForm.fullName,
        email: contactForm.email,
        mobileNumber: contactForm.mobileNumber,
        city: contactForm.howMayWeHelp || 'Not specified',
      });
      setMessage({ type: 'success', text: 'Thank you for contacting us! We will get back to you soon.' });
      setContactForm({
        fullName: '',
        email: '',
        mobileNumber: '',
        howMayWeHelp: '',
      });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit form. Please try again.' });
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribeNewsletter(newsletterEmail);
      setMessage({ type: 'success', text: 'Successfully subscribed to newsletter!' });
      setNewsletterEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'Failed to subscribe. Please try again.' });
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <div className="logo-icon">🏠</div>
            <h1 className="logo">RealTrust</h1>
          </div>
          <nav>
            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#projects">ABOUT PROJECTS</a>
            <a href="#clients">TESTIMONIALS</a>
            <a href="#contact" className="contact-nav-btn">CONTACT</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <h2 className="hero-title">Consultation, Design, & Marketing</h2>
          </div>
          <div className="consultation-form-container">
            <h3>Get a Free Consultation</h3>
            {message.text && (
              <div className={`message ${message.type}`}>{message.text}</div>
            )}
            <form className="consultation-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={contactForm.fullName}
                  onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={contactForm.mobileNumber}
                  onChange={(e) => setContactForm({ ...contactForm, mobileNumber: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="How May We Help?"
                  value={contactForm.howMayWeHelp}
                  onChange={(e) => setContactForm({ ...contactForm, howMayWeHelp: e.target.value })}
                  rows="3"
                  required
                />
              </div>
              <button type="submit" className="quote-btn">Get Quick Quote</button>
            </form>
          </div>
        </div>
      </section>

      <section id="services" className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏘️</div>
              <h3>Potential ROI</h3>
              <p>We help you maximize your return on investment by identifying properties and projects that offer the best potential for growth and profitability. Our expert analysis ensures you make informed decisions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📐</div>
              <h3>Design</h3>
              <p>Our design team creates stunning, functional spaces that appeal to modern buyers. From home staging to complete renovations, we transform properties to maximize their market value and appeal.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📢</div>
              <h3>Marketing</h3>
              <p>We develop comprehensive marketing strategies that reach your target audience effectively. Our proven marketing plans ensure your properties get maximum visibility and attract qualified buyers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-images-section">
        <div className="container">
          <div className="about-images-grid">
            <div className="about-image-card">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop" alt="Business meeting" />
            </div>
            <div className="about-image-card">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Team presentation" />
            </div>
            <div className="about-image-card">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop" alt="Consultation" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            Fifteen years of experience in real estate, excellent customer service, and a commitment to work hard, listen and follow through. We provide quality service to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
          </p>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-description">We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.</p>
          <div className="projects-grid">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div key={project._id} className="project-card">
                  <div className="project-image">
                    <img
                      src={`${getBaseUrl()}${project.image}`}
                      alt={project.name}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=450&h=350&fit=crop';
                      }}
                    />
                  </div>
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <button className="read-more-btn">READ MORE</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data-message">
                <p>No projects available yet. Add projects from the admin panel.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="clients" className="clients-section">
        <div className="container">
          <h2 className="section-title">Happy Clients</h2>
          <div className="clients-grid">
            {clients.length > 0 ? (
              clients.map((client) => (
                <div key={client._id} className="client-card">
                  <div className="client-image">
                    <img
                      src={`${getBaseUrl()}${client.image}`}
                      alt={client.name}
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(client.name) + '&size=200&background=007bff&color=fff';
                      }}
                    />
                  </div>
                  <div className="client-content">
                    <p className="client-description">"{client.description}"</p>
                    <h4 className="client-name">{client.name}</h4>
                    <p className="client-designation">{client.designation}</p>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data-message">
                <p>No client testimonials available yet. Add clients from the admin panel.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-background">
          <div className="newsletter-overlay"></div>
        </div>
        <div className="container newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Learn more about our listing process</h2>
            <p className="newsletter-description">
              Discover how we help clients maximize their property value through our proven listing process, staging techniques, and design expertise. Get insights into our comprehensive approach to real estate success.
            </p>
            <button className="learn-more-btn-white">LEARN MORE</button>
          </div>
          <div className="newsletter-form-wrapper">
            <h3>Subscribe to Our Newsletter</h3>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-left">
            <p>All Rights Reserved 2023</p>
          </div>
          <div className="footer-center">
            <h2 className="footer-logo">RealTrust</h2>
          </div>
          <div className="footer-right">
            <div className="footer-subscribe">
              <p>Subscribe to</p>
              <div className="footer-social">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
