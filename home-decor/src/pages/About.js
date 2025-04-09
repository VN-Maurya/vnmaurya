import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero position-relative d-flex align-items-center">
        <div className="overlay"></div>
        <Container className="position-relative z-index-1">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold text-white mb-3" data-aos="fade-up">About <span className="text-gold">LUXE</span>DECOR</h1>
              <div className="separator" data-aos="fade-up" data-aos-delay="100"></div>
              <p className="lead text-white mt-4" data-aos="fade-up" data-aos-delay="200">
                Crafting exquisite spaces that reflect your unique style and personality
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Our Story Section */}
      <section className="py-5 py-lg-8 bg-light section-spacing">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div className="position-relative mb-5 mb-lg-0">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Our Story" 
                  className="img-fluid rounded-0 shadow-lg" 
                />
                <div className="floating-box bg-white p-4 shadow-lg position-absolute">
                  <h6 className="text-uppercase text-gold mb-2">Since 2005</h6>
                  <p className="mb-0 small">Transforming spaces into extraordinary experiences</p>
                </div>
              </div>
            </Col>
            <Col lg={5} className="offset-lg-1" data-aos="fade-left">
              <div className="ps-lg-4">
                <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">Our Legacy</h6>
                <h2 className="display-5 fw-bold mb-4">The Story Behind Our Passion</h2>
                <p className="lead mb-4">Founded in 2005, LUXEDECOR has been transforming living spaces into beautiful, functional homes for over 15 years.</p>
                <p className="mb-4">What started as a small family business has grown into a trusted name in luxury interior design and home decoration. Our journey has been defined by an unwavering commitment to excellence and a deep appreciation for artisanal craftsmanship.</p>
                <p>Our passion for design and commitment to quality has allowed us to build lasting relationships with our clients, many of whom return to us for multiple projects over the years.</p>
                <div className="signature mt-5">
                  <img 
                    src="https://i.ibb.co/Qp1SXBz/signature.png" 
                    alt="Founder's Signature" 
                    height="60" 
                  />
                  <p className="text-muted mt-2 mb-0">Jane Doe, Founder</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-5 py-lg-8 section-spacing">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} data-aos="fade-right">
              <div className="pe-lg-4">
                <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">Our Vision</h6>
                <h2 className="display-5 fw-bold mb-4">Crafting Spaces That Inspire</h2>
                <p className="lead mb-4">At LUXEDECOR, our mission is to create beautiful, functional spaces that reflect the unique personality and lifestyle of each client.</p>
                <p className="mb-4">We believe that your home should be a sanctuary that brings you joy and comfort. Every detail matters, from the architectural elements to the smallest decorative accents.</p>
                <p>We are committed to sustainable design practices and work with suppliers who share our values of quality, craftsmanship, and environmental responsibility.</p>
                <Button 
                  variant="outline-dark" 
                  className="btn-custom mt-4 px-4 py-3"
                >
                  Our Design Process
                </Button>
              </div>
            </Col>
            <Col lg={6} className="offset-lg-1 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="position-relative">
                <div className="image-grid">
                  <div className="grid-item grid-item-1">
                    <img 
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Our Mission" 
                      className="img-fluid shadow-lg" 
                    />
                  </div>
                  <div className="grid-item grid-item-2">
                    <img 
                      src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Interior Detail" 
                      className="img-fluid shadow-lg" 
                    />
                  </div>
                  <div className="grid-item grid-item-3">
                    <div className="bg-gold p-4 h-100 d-flex flex-column justify-content-center">
                      <h4 className="text-white mb-3">15+</h4>
                      <p className="text-white mb-0">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Team Section */}
      <section className="py-5 py-lg-8 bg-light section-spacing">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={6} data-aos="fade-up">
              <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">The Experts</h6>
              <h2 className="display-5 fw-bold mb-4">Meet Our Team</h2>
              <p className="lead">Our talented professionals bring your vision to life with expertise and passion.</p>
              <div className="separator mx-auto"></div>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col lg={4} className="mb-5 mb-lg-0" data-aos="fade-up">
              <div className="team-member">
                <div className="position-relative team-img-wrapper mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Jane Doe" 
                    className="img-fluid team-img" 
                  />
                  <div className="team-social">
                    <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-pinterest"></i></a>
                  </div>
                </div>
                <h4 className="mb-1">Jane Doe</h4>
                <p className="text-gold mb-3">Founder & Lead Designer</p>
                <p className="mb-0">With over 20 years of experience in interior design, Jane leads our team with creativity and vision.</p>
              </div>
            </Col>
            
            <Col lg={4} className="mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="position-relative team-img-wrapper mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="John Smith" 
                    className="img-fluid team-img" 
                  />
                  <div className="team-social">
                    <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-pinterest"></i></a>
                  </div>
                </div>
                <h4 className="mb-1">John Smith</h4>
                <p className="text-gold mb-3">Senior Designer</p>
                <p className="mb-0">John specializes in modern and minimalist design, creating clean and functional spaces.</p>
              </div>
            </Col>
            
            <Col lg={4} data-aos="fade-up" data-aos-delay="200">
              <div className="team-member">
                <div className="position-relative team-img-wrapper mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Emily Johnson" 
                    className="img-fluid team-img" 
                  />
                  <div className="team-social">
                    <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="social-link"><i className="bi bi-pinterest"></i></a>
                  </div>
                </div>
                <h4 className="mb-1">Emily Johnson</h4>
                <p className="text-gold mb-3">Design Consultant</p>
                <p className="mb-0">Emily has a keen eye for color and texture, helping clients find their perfect style.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-5 py-lg-8 testimonial-section section-spacing">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <div className="testimonial-quote">
                <i className="bi bi-quote display-1 text-gold opacity-25"></i>
                <p className="lead fw-light mb-4 mt-3 fs-3">Working with LUXEDECOR transformed our house into a home that truly reflects our personality. Their attention to detail and commitment to excellence exceeded our expectations.</p>
                <div className="separator mx-auto"></div>
                <p className="text-gold mt-4 mb-0">Sarah & Michael Thompson</p>
                <p className="small text-muted">Residential Project, 2022</p>
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
              <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="lead mb-0">Let's create something extraordinary together.</p>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0" data-aos="fade-left">
              <Button 
                variant="outline-light" 
                size="lg"
                className="btn-custom px-4 py-3"
              >
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      
      <style jsx>{`
        .about-page {
          font-family: 'Montserrat', sans-serif;
        }
        
        .about-hero {
          background: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80') no-repeat center center;
          background-size: cover;
          height: 70vh;
          min-height: 500px;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
        }
        
        .z-index-1 {
          z-index: 1;
        }
        
        .text-gold {
          color: #d4af37 !important;
        }
        
        .bg-gold {
          background-color: #d4af37 !important;
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
        
        .py-lg-8 {
          padding-top: 8rem;
          padding-bottom: 8rem;
        }
        
        .section-spacing {
          position: relative;
          margin-bottom: 0;
        }
        
        .floating-box {
          bottom: -30px;
          right: -30px;
          width: 200px;
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
        }
        
        .btn-custom:hover {
          background-color: #d4af37;
          border-color: #d4af37;
          color: white;
        }
        
        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 20px;
          height: 500px;
        }
        
        .grid-item-1 {
          grid-column: 1 / 3;
          grid-row: 1 / 2;
        }
        
        .grid-item-2 {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
        }
        
        .grid-item-3 {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }
        
        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .team-img-wrapper {
          overflow: hidden;
          height: 400px;
        }
        
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .team-img-wrapper img {
          transition: all 0.5s ease;
        }
        
        .team-member:hover .team-img-wrapper img {
          transform: scale(1.05);
        }
        
        .team-social {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 15px;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          display: flex;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .team-member:hover .team-social {
          opacity: 1;
        }
        
        .social-link {
          color: white;
          margin: 0 10px;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: #d4af37;
          transform: translateY(-3px);
        }
        
        .testimonial-section {
          background-color: #f9f9f9;
        }
        
        @media (max-width: 991px) {
          .image-grid {
            height: auto;
          }
          
          .grid-item-1, .grid-item-2, .grid-item-3 {
            grid-column: 1 / 3;
          }
          
          .grid-item-1 {
            grid-row: 1 / 2;
          }
          
          .grid-item-2 {
            grid-row: 2 / 3;
          }
          
          .grid-item-3 {
            grid-row: 3 / 4;
          }
          
          .py-lg-8 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .team-img-wrapper {
            height: 350px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;