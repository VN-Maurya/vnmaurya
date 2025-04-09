import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const services = [
    {
      id: 1,
      title: 'Interior Design',
      description: 'Our comprehensive interior design service covers everything from concept development to final styling. We work closely with you to understand your needs, preferences, and lifestyle to create a space that is both beautiful and functional.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      features: ['Initial consultation', 'Concept development', 'Space planning', 'Material and color selection', 'Furniture and accessory sourcing', 'Project management'],
      icon: 'bi-house-heart'
    },
    {
      id: 2,
      title: 'Furniture Selection',
      description: 'Finding the perfect furniture pieces that combine style, comfort, and functionality can be challenging. Our experts will help you select furniture that fits your space, complements your design aesthetic, and meets your practical needs.',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      features: ['Style consultation', 'Space measurement', 'Custom furniture design', 'Vendor sourcing', 'Delivery coordination', 'Installation supervision'],
      icon: 'bi-lamp'
    },
    {
      id: 3,
      title: 'Lighting Solutions',
      description: 'Proper lighting can transform a space, highlighting architectural features, creating ambiance, and improving functionality. Our lighting design services ensure your home is beautifully and effectively illuminated.',
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      features: ['Lighting plan development', 'Fixture selection', 'Natural light optimization', 'Energy-efficient solutions', 'Smart lighting integration', 'Installation coordination'],
      icon: 'bi-lightbulb'
    },
    {
      id: 4,
      title: 'Color Consultation',
      description: 'Color has a profound impact on mood and perception of space. Our color consultation service helps you select the perfect palette for your home, considering factors like natural light, architecture, and your personal preferences.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      features: ['Color psychology education', 'Paint selection', 'Fabric and material coordination', 'Accent color recommendations', 'Color flow between rooms', 'Sample testing'],
      icon: 'bi-palette'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero position-relative d-flex align-items-center">
        <div className="overlay"></div>
        <Container className="position-relative z-index-1">
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h1 className="display-3 fw-bold text-white mb-3">Our <span className="text-gold">Services</span></h1>
              <div className="separator mx-auto" data-aos="fade-up" data-aos-delay="100"></div>
              <p className="lead text-white mt-4" data-aos="fade-up" data-aos-delay="200">
                Transforming spaces into extraordinary experiences with our premium design services
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Services Introduction */}
      <section className="py-5 py-lg-7 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8} data-aos="fade-up">
              <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">What We Offer</h6>
              <h2 className="display-5 fw-bold mb-4">Comprehensive Design Solutions</h2>
              <p className="lead">At LUXEDECOR, we offer a comprehensive range of interior design and decoration services to transform your space into a beautiful, functional home that reflects your personal style and enhances your lifestyle.</p>
              <div className="separator mx-auto"></div>
            </Col>
          </Row>
          
          <Row className="mt-5">
            {services.map((service, index) => (
              <Col lg={3} md={6} className="mb-4 mb-lg-0" key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card text-center p-4">
                  <div className="service-icon mb-4">
                    <i className={`bi ${service.icon} display-4 text-gold`}></i>
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="mb-0 small">{service.description.substring(0, 100)}...</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Detailed Services */}
      <section className="py-5 py-lg-7">
        <Container>
          {services.map((service, index) => (
            <Row 
              key={service.id} 
              className={`align-items-center service-detail mb-5 ${index !== services.length - 1 ? 'pb-5 border-bottom' : ''}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <Col lg={6} className={index % 2 !== 0 ? 'order-lg-2' : ''}>
                <div className="position-relative service-img-wrapper mb-4 mb-lg-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="img-fluid rounded-0 shadow-lg" 
                  />
                  <div className="service-overlay">
                    <i className={`bi ${service.icon} display-1 text-white opacity-50`}></i>
                  </div>
                </div>
              </Col>
              <Col lg={5} className={`${index % 2 !== 0 ? 'order-lg-1 me-auto' : 'ms-auto'}`}>
                <div className={`ps-lg-4 ${index % 2 !== 0 ? 'text-lg-end' : ''}`}>
                  <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">Our Expertise</h6>
                  <h2 className="display-6 fw-bold mb-4">{service.title}</h2>
                  <p className="mb-4">{service.description}</p>
                  <div className="service-features mb-4">
                    <h6 className="fw-bold mb-3">What's Included:</h6>
                    <ul className={`list-unstyled ${index % 2 !== 0 ? 'text-lg-end' : ''}`}>
                      {service.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <span className="feature-item">
                            <i className="bi bi-check-circle-fill text-gold me-2"></i>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="outline-dark" 
                    className="btn-custom px-4 py-2"
                  >
                    Learn More
                  </Button>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
      
      {/* Process Section */}
      <section className="py-5 py-lg-7 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8} data-aos="fade-up">
              <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">How We Work</h6>
              <h2 className="display-5 fw-bold mb-4">Our Design Process</h2>
              <p className="lead">We follow a structured approach to ensure your project is completed efficiently and exceeds your expectations.</p>
              <div className="separator mx-auto"></div>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col lg={3} md={6} className="mb-4 mb-lg-0" data-aos="fade-up">
              <div className="process-step text-center">
                <div className="process-number">01</div>
                <h4 className="mt-4 mb-3">Consultation</h4>
                <p className="mb-0">We begin with an in-depth consultation to understand your vision, needs, and budget.</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
              <div className="process-step text-center">
                <div className="process-number">02</div>
                <h4 className="mt-4 mb-3">Concept Design</h4>
                <p className="mb-0">Our team creates detailed design concepts based on your requirements and preferences.</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
              <div className="process-step text-center">
                <div className="process-number">03</div>
                <h4 className="mt-4 mb-3">Implementation</h4>
                <p className="mb-0">We manage the entire implementation process, from sourcing to installation.</p>
              </div>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="process-step text-center">
                <div className="process-number">04</div>
                <h4 className="mt-4 mb-3">Final Reveal</h4>
                <p className="mb-0">We present your transformed space and ensure every detail meets your expectations.</p>
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
              <p className="lead mb-0">Contact us today to schedule a consultation with one of our design experts.</p>
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
        .services-page {
          font-family: 'Montserrat', sans-serif;
        }
        
        .services-hero {
          background: url('https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80') no-repeat center center;
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
        
        .service-card {
          background-color: white;
          border: none;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .service-icon {
          height: 80px;
          width: 80px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: rgba(212, 175, 55, 0.1);
        }
        
        .service-img-wrapper {
          overflow: hidden;
          height: 400px;
        }
        
        .service-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        
        .service-detail:hover .service-img-wrapper img {
          transform: scale(1.05);
        }
        
        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .service-detail:hover .service-overlay {
          opacity: 1;
        }
        
        .feature-item {
          display: inline-flex;
          align-items: center;
        }
        
        .process-step {
          padding: 2rem;
          background-color: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .process-step:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .process-number {
          font-size: 3rem;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.2);
          line-height: 1;
        }
        
        @media (max-width: 991px) {
          .service-img-wrapper {
            height: 300px;
          }
          
          .service-detail {
            text-align: center;
          }
          
          .service-features ul {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;