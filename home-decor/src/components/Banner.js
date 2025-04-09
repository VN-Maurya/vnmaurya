import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="banner-container" style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      <div className="banner-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}></div>
      <Container className="position-relative">
        <Row>
          <Col md={7} className="text-white">
            <div className="animated fadeInUp" data-aos="fade-up">
              <h1 className="display-3 fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Elevate Your Living Space</h1>
              <p className="lead fs-4 my-4">Transform your home into a luxurious sanctuary with our exquisite decor collections</p>
              <div data-aos="fade-up" data-aos-delay="200">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3 rounded-pill px-4 py-3 fw-bold"
                  style={{ backgroundColor: '#d4af37', borderColor: '#d4af37' }}
                >
                  Explore Collections
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="rounded-pill px-4 py-3 fw-bold"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;