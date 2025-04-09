import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/* Pre-Footer Section */}
      <div className="pre-footer py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h3 className="mb-4 fw-bold" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem' }}>
                Elevate Your Space with <span style={{ color: '#d4af37' }}>LUXE DECOR</span>
              </h3>
              <p className="lead mb-5">Join our exclusive list to receive design inspiration, special offers, and updates</p>
              <Form className="newsletter-form">
                <Row className="justify-content-center">
                  <Col lg={8}>
                    <InputGroup className="newsletter-input mx-auto">
                      <Form.Control
                        placeholder="Your Email Address"
                        aria-label="Email address"
                        className="py-3 px-4 border-end-0 shadow-none"
                        style={{ borderColor: '#d4af37', borderWidth: '1px' }}
                      />
                      <Button 
                        variant="dark" 
                        className="px-4 text-uppercase"
                        style={{ 
                          backgroundColor: '#d4af37', 
                          borderColor: '#d4af37',
                          letterSpacing: '1px',
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}
                      >
                        Subscribe
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Main Footer */}
      <div className="footer-main py-5" style={{ backgroundColor: '#1a1a1a', color: '#e0e0e0' }}>
        <Container>
          <Row className="g-5">
            <Col lg={4} md={6}>
              <div className="footer-brand mb-4 d-flex align-items-center">
                <div className="brand-logo me-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#d4af37" />
                    <path d="M20 5L32.3205 12V26L20 33L7.67949 26V12L20 5Z" fill="transparent" stroke="white" strokeWidth="1.5" />
                    <path d="M20 10L27.3205 14V22L20 26L12.6795 22V14L20 10Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <span className="fw-bold fs-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>YOUR</span>
                  <span className="fw-light fs-4" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#d4af37' }}>DOMAIN</span>
                </div>
              </div>
              <p className="mb-4 pe-lg-5" style={{ lineHeight: '1.8' }}>We create sophisticated, timeless interiors that balance elegance with functionality. Our expert designers transform spaces into personalized sanctuaries that reflect your unique style and elevate your everyday living.</p>
              <div className="footer-social d-flex mb-4">
                <a href="https://instagram.com" className="social-icon-footer me-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://pinterest.com" className="social-icon-footer me-3">
                  <i className="bi bi-pinterest"></i>
                </a>
                <a href="https://facebook.com" className="social-icon-footer me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com" className="social-icon-footer me-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://linkedin.com" className="social-icon-footer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </Col>
            
            <Col lg={2} md={6}>
              <h5 className="footer-heading mb-4 position-relative">Navigation</h5>
              <ul className="footer-links list-unstyled">
                <li className="mb-3"><Link to="/" className="footer-link">Home</Link></li>
                <li className="mb-3"><Link to="/about" className="footer-link">About Us</Link></li>
                <li className="mb-3"><Link to="/services" className="footer-link">Services</Link></li>
                <li className="mb-3"><Link to="/gallery" className="footer-link">Gallery</Link></li>
                <li className="mb-3"><Link to="/shop" className="footer-link">Shop</Link></li>
                <li className="mb-3"><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </Col>
            
            <Col lg={3} md={6}>
              <h5 className="footer-heading mb-4 position-relative">Our Services</h5>
              <ul className="footer-links list-unstyled">
                <li className="mb-3"><Link to="/services" className="footer-link">Interior Design</Link></li>
                <li className="mb-3"><Link to="/services" className="footer-link">Custom Furniture</Link></li>
                <li className="mb-3"><Link to="/services" className="footer-link">Space Planning</Link></li>
                <li className="mb-3"><Link to="/services" className="footer-link">Color Consultation</Link></li>
                <li className="mb-3"><Link to="/services" className="footer-link">Lighting Design</Link></li>
                <li className="mb-3"><Link to="/services" className="footer-link">Home Staging</Link></li>
              </ul>
            </Col>
            
            <Col lg={3} md={6}>
              <h5 className="footer-heading mb-4 position-relative">Contact Us</h5>
              <ul className="footer-contact list-unstyled">
                <li className="d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <p className="mb-0">123 Your Address</p>
                    <p className="mb-0">Elegance District, CA 90210</p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <p className="mb-0">+1 (555) 123-4567</p>
                    <p className="mb-0">+1 (555) 987-6543</p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <p className="mb-0">info@yourdomain.com</p>
                    <p className="mb-0">support@yourdoamin.com</p>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="contact-icon me-3">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <p className="mb-0">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="mb-0">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom py-4" style={{ backgroundColor: '#111111', color: '#999' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0 small">© {new Date().getFullYear()} YOUR DOMAIN. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
              <ul className="list-inline mb-0 footer-bottom-links">
                <li className="list-inline-item"><a href="#" className="text-muted text-decoration-none small">Privacy Policy</a></li>
                <li className="list-inline-item ms-3"><a href="#" className="text-muted text-decoration-none small">Terms of Service</a></li>
                <li className="list-inline-item ms-3"><a href="#" className="text-muted text-decoration-none small">Sitemap</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      
      <style jsx>{`
        .footer-heading {
          font-family: 'Cormorant Garamond, serif';
          font-size: 1.3rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        
        .footer-heading:after {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          background-color: #d4af37;
          margin-top: 10px;
        }
        
        .footer-link {
          color: #b0b0b0;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
          padding-left: 0;
        }
        
        .footer-link:before {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #d4af37;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          color: #d4af37;
          padding-left: 10px;
        }
        
        .footer-link:hover:before {
          width: 20px;
        }
        
        .social-icon-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: #b0b0b0;
          transition: all 0.3s ease;
        }
        
        .social-icon-footer:hover {
          background-color: #d4af37;
          color: white;
          transform: translateY(-3px);
        }
        
        .contact-icon {
          display: flex;
          align-items: center;
                    justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(212, 175, 55, 0.2);
          color: #d4af37;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .newsletter-input .form-control {
          border-radius: 0;
          height: 54px;
          font-family: 'Montserrat', sans-serif;
        }
        
        .newsletter-input .form-control:focus {
          box-shadow: none;
          border-color: #d4af37;
        }
        
        .newsletter-input .btn {
          height: 54px;
          border-radius: 0;
        }
        
        .footer-bottom-links a {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .footer-bottom-links a:hover {
          color: #d4af37 !important;
        }
        
        .footer-bottom-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #d4af37;
          transition: all 0.3s ease;
        }
        
        .footer-bottom-links a:hover:after {
          width: 100%;
        }
        
        .pre-footer {
          position: relative;
          overflow: hidden;
        }
        
        .pre-footer:before {
          content: '';
          position: absolute;
          top: -50px;
          left: -50px;
          width: 100px;
          height: 100px;
          border: 20px solid rgba(212, 175, 55, 0.1);
          border-radius: 50%;
        }
        
        .pre-footer:after {
          content: '';
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 100px;
          height: 100px;
          border: 20px solid rgba(212, 175, 55, 0.1);
          border-radius: 50%;
        }
        
        @media (max-width: 767px) {
          .footer-heading {
            margin-bottom: 1rem;
          }
          
          .footer-social {
            justify-content: center;
          }
          
          .footer-brand {
            justify-content: center;
          }
          
          p {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;