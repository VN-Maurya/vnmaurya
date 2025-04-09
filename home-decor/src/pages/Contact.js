import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero d-flex align-items-center">
        <div className="overlay"></div>
        <Container className="position-relative z-index-1">
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h1 className="display-3 fw-bold text-white mb-3">Contact <span className="text-gold">Us</span></h1>
              <div className="separator mx-auto" data-aos="fade-up" data-aos-delay="100"></div>
              <p className="lead text-white mt-4" data-aos="fade-up" data-aos-delay="200">
                We'd love to hear from you! Let's create something extraordinary together.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Contact Content */}
      <section className="py-5 py-lg-7">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">Get In Touch</h6>
              <h2 className="display-5 fw-bold mb-4">We're Here To Help</h2>
              <p className="lead">Whether you have a question about our services, need a quote, or want to schedule a consultation, our team is ready to assist you in creating your dream space.</p>
              <div className="separator mx-auto"></div>
            </Col>
          </Row>
          
          <Row className="mt-5 gx-5">
            <Col lg={5} data-aos="fade-right">
              <div className="contact-info-wrapper p-4 p-lg-5">
                <h3 className="mb-4 fw-bold">Contact Information</h3>
                
                <div className="contact-info-item d-flex align-items-center mb-4">
                  <div className="icon-box me-4">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Our Location</h5>
                    <p className="mb-0">123 Decor Street<br />Beautiful City, BC 12345</p>
                  </div>
                </div>
                
                <div className="contact-info-item d-flex align-items-center mb-4">
                  <div className="icon-box me-4">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Call Us</h5>
                    <p className="mb-0">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="contact-info-item d-flex align-items-center mb-4">
                  <div className="icon-box me-4">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Email Us</h5>
                    <p className="mb-0">info@homedecor.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item d-flex align-items-center mb-4">
                  <div className="icon-box me-4">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Business Hours</h5>
                    <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="mt-5">
                  <h5 className="mb-3">Follow Us</h5>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-pinterest"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={7} data-aos="fade-left">
              <Card className="contact-form-card border-0 shadow-lg">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="mb-4 fw-bold">Send Us a Message</h3>
                  <Form className="contact-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="form-group mb-4">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" className="form-control-custom" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="form-group mb-4">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email" className="form-control-custom" />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="form-group mb-4">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="tel" placeholder="Enter your phone number" className="form-control-custom" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="form-group mb-4">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" placeholder="What is this regarding?" className="form-control-custom" />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="form-group mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="How can we help you?" className="form-control-custom" />
                    </Form.Group>
                    
                    <div className="text-end">
                      <Button variant="dark" type="submit" className="btn-custom px-5 py-3">
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Map Section */}
      <section className="py-5 py-lg-7 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">Our Location</h6>
              <h2 className="display-5 fw-bold mb-4">Find Us</h2>
              <p className="lead">Visit our showroom to experience our designs in person and meet with our expert team.</p>
              <div className="separator mx-auto"></div>
            </Col>
          </Row>
          
          <Row>
            <Col md={12} data-aos="zoom-in">
              <div className="map-container shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615201654!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1621543081246!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-5 py-lg-7 bg-dark text-white">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={7} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">Ready to transform your space?</h2>
              <p className="lead mb-0">Schedule a consultation with one of our design experts today.</p>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0" data-aos="fade-left">
              <Button 
                variant="outline-light" 
                size="lg"
                className="btn-custom px-4 py-3"
              >
                Book Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      
      <style jsx>{`
        .contact-page {
          font-family: 'Montserrat', sans-serif;
        }
        
        /* Hero Section */
        .contact-hero {
          background: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') no-repeat center center;
          background-size: cover;
          height: 60vh;
          min-height: 400px;
          position: relative;
          color: white;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
        }
        
        .z-index-1 {
          z-index: 1;
        }
        
        .text-gold {
          color: #d4af37 !important;
        }
        
        .separator {
          width: 80px;
          height: 3px;
          background-color: #d4af37;
          margin: 0 auto;
        }
        
        .letter-spacing-2 {
          letter-spacing: 2px;
        }
        
        .py-lg-7 {
          padding-top: 7rem;
          padding-bottom: 7rem;
        }
        
        /* Contact Info */
        .contact-info-wrapper {
          background-color: #f9f9f9;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        
        .icon-box {
          width: 50px;
          height: 50px;
          background-color: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #d4af37;
          transition: all 0.3s ease;
        }
        
        .contact-info-item:hover .icon-box {
          background-color: #d4af37;
          color: white;
          transform: translateY(-5px);
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          background-color: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4af37;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: #d4af37;
          color: white;
          transform: translateY(-5px);
        }
        
        /* Contact Form */
        .contact-form-card {
          border-radius: 0;
          overflow: hidden;
        }
        
        .form-control-custom {
          border: none;
          border-bottom: 1px solid #ddd;
          border-radius: 0;
          padding: 0.75rem 0;
          font-size: 0.9rem;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        
        .form-control-custom:focus {
          box-shadow: none;
          border-color: #d4af37;
        }
        
        .form-control-custom::placeholder {
          color: #aaa;
          font-size: 0.85rem;
        }
        
        .btn-custom {
          border-radius: 0;
          border-color: #d4af37;
          color: #d4af37;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
          background-color: transparent;
        }
        
        .btn-custom:hover {
          background-color: #d4af37;
          border-color: #d4af37;
          color: white;
        }
        
        /* Map */
        .map-container {
          overflow: hidden;
          border-radius: 0;
        }
        
        @media (max-width: 991px) {
          .contact-info-wrapper {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;