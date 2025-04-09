import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offers = () => {
  const currentOffers = [
    {
      id: 1,
      title: 'Design Consultation',
      description: 'Get 20% off your first design consultation with our expert designers.',
      validUntil: 'December 31, 2023',
      code: 'DESIGN20',
      featured: true,
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.1&auto=format&fit=crop&w=1800&q=80'
    },
    {
      id: 2,
      title: 'Free Delivery',
      description: 'Free delivery on all orders over $500.',
      validUntil: 'Limited time offer',
      code: 'FREESHIP',
      featured: true,
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.1&auto=format&fit=crop&w=1800&q=80'
    },
    {
      id: 3,
      title: 'Bundle & Save',
      description: 'Save 15% when you book multiple services together.',
      validUntil: 'Ongoing offer',
      code: 'BUNDLE15',
      featured: false,
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.1&auto=format&fit=crop&w=1800&q=80'
    },
    {
      id: 4,
      title: 'Seasonal Package',
      description: 'Special seasonal decor package including consultation and styling.',
      validUntil: 'September 30, 2023',
      code: 'SEASON23',
      featured: false,
      image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-4.0.1&auto=format&fit=crop&w=1800&q=80'
    }
  ];

  return (
    <div className="offers-page">
      <div 
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Container className="text-center text-white display-3 fw-bold  mb-3">
        <div className="contact-hero d-flex align-items-center">
        <div className="overlay"></div>
        <Container className="position-relative z-index-1">
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h1 className="display-3 fw-bold text-white mb-3">Offers</h1>
              <div className="separator mx-auto" data-aos="fade-up" data-aos-delay="100"></div>
              <p className="lead text-white mt-4" data-aos="fade-up" data-aos-delay="200">
              Transform your space with our special promotions and exclusive deals
              </p>
            </Col>
          </Row>
        </Container>
      </div>
        </Container>
      </div>

      <div className="what-we-offer text-center py-5">
        <Container>
          <h2 style={{ 
            color: '#d4af37',
            fontSize: '1.2rem',
            fontWeight: 'normal',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>WHAT WE OFFER</h2>
          
          <h3 style={{ 
            fontSize: '2.5rem',
            marginBottom: '2rem',
            fontFamily: 'Cormorant Garamond, serif'
          }}>Comprehensive Design Solutions</h3>
          
          <p style={{ 
            color: '#666',
            maxWidth: '900px',
            margin: '0 auto 4rem',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}>
            At LUXEDECOR, we offer exclusive deals and promotions to help you create 
            your dream space. Our special offers are designed to make luxury design 
            more accessible while maintaining our premium quality standards.
          </p>

          <Row>
            {currentOffers.filter(offer => offer.featured).map(offer => (
              <Col lg={6} key={offer.id} className="mb-5">
                <Card style={{
                  border: 'none',
                  borderRadius: '0',
                  backgroundColor: 'transparent'
                }}>
                  <div style={{ 
                    height: '300px', 
                    overflow: 'hidden',
                    marginBottom: '2rem'
                  }}>
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <div className="offer-code mb-4" style={{ 
                      color: '#d4af37',
                      fontSize: '1.1rem',
                      letterSpacing: '1px'
                    }}>
                      {offer.code}
                    </div>
                    <h4 style={{ 
                      fontSize: '1.8rem',
                      marginBottom: '1rem',
                      fontFamily: 'Cormorant Garamond, serif'
                    }}>{offer.title}</h4>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>
                      {offer.description}
                    </p>
                    <p className="text-muted mb-4">
                      Valid until: {offer.validUntil}
                    </p>
                    <Button 
                      variant="outline-dark"
                      style={{ 
                        borderColor: '#d4af37',
                        color: '#d4af37',
                        padding: '10px 25px',
                        borderRadius: '0',
                        letterSpacing: '1px'
                      }}
                    >
                      LEARN MORE
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: '#f8f9fa' }} className="py-5">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-5">
              <h2 style={{ 
                color: '#d4af37',
                fontSize: '1.2rem',
                fontWeight: 'normal',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>ADDITIONAL SAVINGS</h2>
              <h3 style={{ 
                fontSize: '2.5rem',
                fontFamily: 'Cormorant Garamond, serif'
              }}>More Ways to Save</h3>
            </Col>
            {currentOffers.filter(offer => !offer.featured).map(offer => (
              <Col lg={6} key={offer.id} className="mb-4">
                <Card style={{
                  border: 'none',
                  borderRadius: '0',
                  height: '100%',
                  backgroundColor: 'white'
                }}>
                  <div style={{ 
                    height: '250px', 
                    overflow: 'hidden',
                    marginBottom: '2rem'
                  }}>
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <div className="offer-code mb-4" style={{ 
                      color: '#d4af37',
                      fontSize: '1.1rem',
                      letterSpacing: '1px'
                    }}>
                      {offer.code}
                    </div>
                    <h4 style={{ 
                      fontSize: '1.8rem',
                      marginBottom: '1rem',
                      fontFamily: 'Cormorant Garamond, serif'
                    }}>{offer.title}</h4>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>
                      {offer.description}
                    </p>
                    <p className="text-muted mb-4">
                      Valid until: {offer.validUntil}
                    </p>
                    <Button 
                      variant="outline-dark"
                      style={{ 
                        borderColor: '#d4af37',
                        color: '#d4af37',
                        padding: '10px 25px',
                        borderRadius: '0',
                        letterSpacing: '1px'
                      }}
                    >
                      LEARN MORE
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="text-center py-5">
        <Container>
          <h3 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem',
            fontFamily: 'Cormorant Garamond, serif'
          }}>
            Looking for Custom Solutions?
          </h3>
          <p style={{ 
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Contact our design consultants for personalized offers
          </p>
          <Button 
            as={Link} 
            to="/contact"
            variant="outline-dark"
            style={{
              borderColor: '#d4af37',
              color: '#d4af37',
              padding: '12px 30px',
              borderRadius: '0',
              letterSpacing: '1px'
            }}
          >
            GET QUOTE
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Offers;