import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  // Featured products data
  const featuredProducts = [
    { id: 1, name: 'Velvet Accent Chair', price: '$299', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', category: 'Furniture' },
    { id: 2, name: 'Modern Coffee Table', price: '$249', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', category: 'Furniture' },
    { id: 3, name: 'Ceramic Vase Set', price: '$89', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', category: 'Accessories' },
    { id: 4, name: 'Pendant Light Fixture', price: '$179', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', category: 'Lighting' }
  ];

  // Services data
  const services = [
    { id: 1, title: 'Interior Design', description: 'Our expert designers create personalized spaces that reflect your style and meet your needs.', icon: 'bi bi-house-heart', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Custom Furniture', description: 'We design and craft bespoke furniture pieces tailored to your specifications.', icon: 'bi bi-lamp', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Space Planning', description: 'Optimize your living or working space with our professional planning services.', icon: 'bi bi-rulers', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
  ];

  // Testimonials data
  const testimonials = [
    { id: 1, text: "Home Decor transformed our living space beyond our expectations. Their attention to detail and understanding of our style was impressive.", name: "Sarah Johnson", position: "Homeowner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
    { id: 2, text: "Working with the Home Decor team was a pleasure from start to finish. They listened to our needs and delivered a beautiful, functional space.", name: "Michael Chen", position: "Business Owner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
    { id: 3, text: "The attention to detail and quality of work exceeded our expectations. Our home feels completely transformed and we couldn't be happier.", name: "Emily Rodriguez", position: "Client", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" }
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section position-relative" style={{ 
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
          background: 'linear-gradient(to right, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 100%)'
        }}></div>
        <Container className="h-100 d-flex align-items-center position-relative">
          <Row className="w-100">
            <Col lg={7} md={10} data-aos="fade-right">
              <h1 className="display-3 fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Transform Your Space Into A <span style={{ color: '#d4af37' }}>Masterpiece</span>
              </h1>
              <p className="lead fs-4 mb-4">Elevate your home with our exquisite decor collections and professional design services</p>
              <div className="d-flex flex-wrap">
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="primary" 
                  size="lg" 
                  className="me-3 mb-3 rounded-pill px-4 py-3"
                  style={{ backgroundColor: '#d4af37', borderColor: '#d4af37' }}
                  data-aos="fade-up" 
                  data-aos-delay="200"
                >
                  Our Services
                </Button>
                <Button 
                  as={Link} 
                  to="/gallery" 
                  variant="outline-light" 
                  size="lg" 
                  className="mb-3 rounded-pill px-4 py-3"
                  data-aos="fade-up" 
                  data-aos-delay="300"
                >
                  View Gallery
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="scroll-down position-absolute bottom-0 start-50 translate-middle-x mb-4 d-none d-md-block" style={{ cursor: 'pointer' }}>
          <div className="mouse" style={{
            width: '30px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '15px',
            position: 'relative',
            margin: '0 auto'
          }}>
            <div className="wheel" style={{
              width: '4px',
              height: '10px',
              backgroundColor: 'white',
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '2px',
              animation: 'scrollDown 1.5s infinite'
            }}></div>
          </div>
          <p className="small text-white text-center mt-2">Scroll Down</p>
        </div>
      </section>

      {/* About Section with Parallax Effect */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="position-absolute" style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          opacity: 0.1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}></div>
        <Container className="py-5 position-relative">
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Elegant Interior" 
                  className="img-fluid rounded-3 shadow-lg" 
                />
                <div className="position-absolute" style={{ 
                  bottom: -30, 
                  right: -30, 
                  width: '60%', 
                  height: '60%', 
                  border: '5px solid #d4af37',
                  borderRadius: '0.5rem',
                  zIndex: -1
                }}></div>
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5 mt-5 mt-lg-0" data-aos="fade-left">
              <h6 className="text-uppercase fw-bold" style={{ color: '#d4af37', letterSpacing: '2px' }}>About Us</h6>
              <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Crafting Beautiful Spaces Since 2005</h2>
              <p className="lead">Home Decor is a premier interior design studio dedicated to transforming living spaces into beautiful, functional homes.</p>
              <p>Our team of experienced designers works closely with each client to understand their vision and bring it to life with attention to detail and a commitment to quality.</p>
              <div className="d-flex mt-4">
                <div className="me-4 text-center">
                  <h3 className="fw-bold mb-0" style={{ color: '#d4af37' }}>15+</h3>
                  <p className="mb-0">Years Experience</p>
                </div>
                <div className="me-4 text-center">
                  <h3 className="fw-bold mb-0" style={{ color: '#d4af37' }}>500+</h3>
                  <p className="mb-0">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold mb-0" style={{ color: '#d4af37' }}>50+</h3>
                  <p className="mb-0">Design Awards</p>
                </div>
              </div>
              <Button 
                as={Link} 
                to="/about" 
                variant="outline-dark" 
                className="mt-4 rounded-pill px-4 py-2"
                style={{ borderWidth: '2px' }}
              >
                Discover Our Story
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h6 className="text-uppercase fw-bold" style={{ color: '#d4af37', letterSpacing: '2px' }} data-aos="fade-up">Our Services</h6>
              <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }} data-aos="fade-up" data-aos-delay="100">Exceptional Design Services</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="200">We offer a comprehensive range of interior design services to meet all your home decor needs</p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="service-card h-100 border-0 shadow-sm">
                  <div className="overflow-hidden" style={{ height: '250px' }}>
                    <Card.Img 
                      variant="top" 
                      src={service.image} 
                      className="img-zoom"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body className="text-center p-4">
                    <div className="service-icon mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: '#f8f9fa',
                      marginTop: '-60px',
                      position: 'relative',
                      zIndex: 1,
                      border: '5px solid white'
                    }}>
                      <i className={`${service.icon} fs-3`} style={{ color: '#d4af37' }}></i>
                    </div>
                    <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button 
                      variant="link" 
                      className="text-dark text-decoration-none mt-2 px-0"
                      style={{ fontWeight: '500' }}
                    >
                      Learn More <i className="bi bi-arrow-right ms-1"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4" data-aos="fade-up">
            <Button 
              as={Link} 
              to="/services" 
              variant="dark" 
              className="rounded-pill px-4 py-2"
            >
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Products Section with Elegant Cards */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h6 className="text-uppercase fw-bold" style={{ color: '#d4af37', letterSpacing: '2px' }} data-aos="fade-up">Shop</h6>
              <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }} data-aos="fade-up" data-aos-delay="100">Featured Products</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="200">Discover our curated collection of premium home decor items</p>
            </Col>
          </Row>
          <Row>
            {featuredProducts.map((product, index) => (
              <Col lg={3} md={6} className="mb-4" key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="product-card h-100 border-0 shadow-sm">
                  <div className="overflow-hidden" style={{ height: '250px' }}>
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      className="img-zoom"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body className="text-center p-4">
                    <p className="text-muted small mb-1">{product.category}</p>
                    <Card.Title className="fw-bold mb-2">{product.name}</Card.Title>
                    <p className="fw-bold" style={{ color: '#d4af37' }}>{product.price}</p>
                    <Button 
                      variant="outline-dark" 
                      size="sm" 
                      className="rounded-pill px-3 mt-2"
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4" data-aos="fade-up">
            <Button 
              variant="dark" 
              className="rounded-pill px-4 py-2"
            >
              Shop All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h6 className="text-uppercase fw-bold" style={{ color: '#d4af37', letterSpacing: '2px' }} data-aos="fade-up">Our Work</h6>
              <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }} data-aos="fade-up" data-aos-delay="100">Recent Projects</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="200">Explore our portfolio of stunning interior designs</p>
            </Col>
          </Row>
          <Row className="g-3">
            <Col lg={6} data-aos="fade-right">
              <div className="gallery-preview-item position-relative overflow-hidden rounded-3">
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Living Room" 
                  className="img-fluid w-100"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
                <div className="gallery-overlay d-flex align-items-center justify-content-center">
                  <div className="text-center text-white p-3">
                    <h4 className="mb-2">Modern Living Room</h4>
                    <Button 
                      as={Link} 
                      to="/gallery" 
                      variant="outline-light" 
                      className="rounded-pill px-4"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                <Col md={6} data-aos="fade-up">
                  <div className="gallery-preview-item position-relative overflow-hidden rounded-3">
                    <img 
                      src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Cozy Bedroom" 
                      className="img-fluid w-100"
                      style={{ height: '240px', objectFit: 'cover' }}
                    />
                    <div className="gallery-overlay d-flex align-items-center justify-content-center">
                      <div className="text-center text-white p-3">
                        <h5 className="mb-2">Cozy Bedroom</h5>
                        <Button 
                          as={Link} 
                          to="/gallery" 
                          variant="outline-light" 
                          size="sm" 
                          className="rounded-pill px-3"
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6} data-aos="fade-up" data-aos-delay="100">
                  <div className="gallery-preview-item position-relative overflow-hidden rounded-3">
                    <img 
                      src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Stylish Kitchen" 
                      className="img-fluid w-100"
                      style={{ height: '240px', objectFit: 'cover' }}
                    />
                    <div className="gallery-overlay d-flex align-items-center justify-content-center">
                      <div className="text-center text-white p-3">
                        <h5 className="mb-2">Stylish Kitchen</h5>
                        <Button 
                          as={Link} 
                          to="/gallery" 
                          variant="outline-light" 
                          size="sm" 
                          className="rounded-pill px-3"
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12} data-aos="fade-up" data-aos-delay="200">
                  <div className="gallery-preview-item position-relative overflow-hidden rounded-3">
                    <img 
                      src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Elegant Dining Area" 
                      className="img-fluid w-100"
                      style={{ height: '240px', objectFit: 'cover' }}
                    />
                    <div className="gallery-overlay d-flex align-items-center justify-content-center">
                      <div className="text-center text-white p-3">
                        <h5 className="mb-2">Elegant Dining Area</h5>
                        <Button 
                          as={Link} 
                          to="/gallery" 
                          variant="outline-light" 
                          size="sm" 
                          className="rounded-pill px-3"
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="text-center mt-4" data-aos="fade-up">
            <Button 
              as={Link} 
              to="/gallery" 
              variant="dark" 
              className="rounded-pill px-4 py-2"
            >
              View Full Gallery
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h6 className="text-uppercase fw-bold" style={{ color: '#d4af37', letterSpacing: '2px' }} data-aos="fade-up">Testimonials</h6>
              <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }} data-aos="fade-up" data-aos-delay="100">What Our Clients Say</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto" data-aos="fade-up">
              <Carousel 
                indicators={false} 
                controls={true}
                interval={5000}
                className="testimonial-carousel"
              >
                {testimonials.map(testimonial => (
                  <Carousel.Item key={testimonial.id}>
                    <div className="testimonial-item text-center p-5 bg-white rounded-3 shadow-sm">
                      <div className="testimonial-quote mb-4">
                        <i className="bi bi-quote fs-1" style={{ color: '#d4af37', opacity: 0.3 }}></i>
                      </div>
                      <p className="lead fst-italic mb-4">{testimonial.text}</p>
                      <div className="testimonial-author d-flex align-items-center justify-content-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="rounded-circle me-3"
                          width="60"
                          height="60"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="text-start">
                          <h5 className="mb-1">{testimonial.name}</h5>
                          <p className="text-muted mb-0">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 position-relative" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.7 }}></div>
        <Container className="py-5 position-relative">
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to Transform Your Space?</h2>
              <p className="lead mb-4">Contact us today for a free consultation and let us help you create the home of your dreams.</p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg" 
                className="rounded-pill px-5 py-3 fw-bold me-3 mb-3 mb-md-0"
                style={{ backgroundColor: '#d4af37', borderColor: '#d4af37' }}
              >
                Get Started
              </Button>
              <Button 
                as={Link} 
                to="/services" 
                variant="outline-light" 
                size="lg" 
                className="rounded-pill px-5 py-3 fw-bold"
              >
                Our Services
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CSS for animations and hover effects */}
      <style jsx>{`
        @keyframes scrollDown {
          0% { top: 10px; opacity: 1; }
          100% { top: 30px; opacity: 0; }
        }
        
        .service-card {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }
        
        .img-zoom {
          transition: transform 0.8s ease;
        }
        
        .service-card:hover .img-zoom,
        .product-card:hover .img-zoom {
          transform: scale(1.1);
        }
        
        .product-card {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }
        
        .gallery-preview-item {
          transition: all 0.5s ease;
          cursor: pointer;
        }
        
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: all 0.5s ease;
        }
        
        .gallery-preview-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .gallery-preview-item:hover {
          transform: scale(1.02);
        }
        
        .testimonial-carousel .carousel-control-prev,
        .testimonial-carousel .carousel-control-next {
          width: 40px;
          height: 40px;
          background-color: #d4af37;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.7;
        }
        
        .testimonial-carousel .carousel-control-prev {
          left: -20px;
        }
        
        .testimonial-carousel .carousel-control-next {
          right: -20px;
        }
        
        .testimonial-carousel .carousel-control-prev:hover,
        .testimonial-carousel .carousel-control-next:hover {
          opacity: 1;
        }
        
        .testimonial-item {
          transition: transform 0.3s ease;
        }
        
        .testimonial-carousel:hover .testimonial-item {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Home;