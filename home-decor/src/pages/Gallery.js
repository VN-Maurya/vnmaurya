import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living Room',
      description: 'A contemporary living room with clean lines, neutral colors, and statement lighting fixtures.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Living Room'
    },
    {
      id: 2,
      title: 'Minimalist Bedroom',
      description: 'A serene bedroom featuring a minimalist design with natural textures and soft lighting.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Bedroom'
    },
    {
      id: 3,
      title: 'Elegant Dining Space',
      description: 'A sophisticated dining area with a statement chandelier and custom cabinetry.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Dining Room'
    },
    {
      id: 4,
      title: 'Luxury Kitchen',
      description: 'A high-end kitchen featuring marble countertops, custom cabinetry, and professional-grade appliances.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Kitchen'
    },
    {
      id: 5,
      title: 'Spa-Like Bathroom',
      description: 'A tranquil bathroom retreat with freestanding tub, walk-in shower, and natural stone elements.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Bathroom'
    },
    {
      id: 6,
      title: 'Home Office',
      description: 'A functional yet stylish home office with custom built-ins and ergonomic furniture.',
      image: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Office'
    },
    {
      id: 7,
      title: 'Scandinavian Living',
      description: 'A bright living space inspired by Scandinavian design principles with light woods and minimal decor.',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Living Room'
    },
    {
      id: 8,
      title: 'Master Bedroom Suite',
      description: 'A luxurious master bedroom with sitting area, custom headboard, and premium textiles.',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Bedroom'
    },
    {
      id: 9,
      title: 'Formal Dining Room',
      description: 'An elegant dining room designed for entertaining with custom table and statement lighting.',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Dining Room'
    },
    {
      id: 10,
      title: 'Gourmet Kitchen',
      description: 'A chef-inspired kitchen with island, custom cabinetry, and high-end finishes.',
      image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Kitchen'
    },
    {
      id: 11,
      title: 'Luxury Bathroom',
      description: 'A sophisticated bathroom featuring marble surfaces, custom vanity, and designer fixtures.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Bathroom'
    },
    {
      id: 12,
      title: 'Creative Workspace',
      description: 'A modern home office designed to inspire creativity with custom storage and ergonomic furniture.',
      image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Office'
    }
  ];
  
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Kitchen', 'Bathroom', 'Office'];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
  
  const openModal = (item) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="gallery-page">
      {/* Loading Overlay */}
      <div className={`loading-overlay ${isLoading ? 'active' : ''}`}>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="gallery-hero d-flex align-items-center">
        <div className="overlay"></div>
        <Container className="position-relative z-index-1">
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h1 className="display-3 fw-bold text-white mb-3">Our <span className="text-gold">Gallery</span></h1>
              <div className="separator mx-auto" data-aos="fade-up" data-aos-delay="100"></div>
              <p className="lead text-white mt-4" data-aos="fade-up" data-aos-delay="200">
                Explore our portfolio of stunning interior designs and get inspired for your next home transformation
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Gallery Content */}
      <section className="py-5 py-lg-7">
        <Container>
          <Row className="mb-5">
            <Col md={12} className="text-center">
              <div className="filter-container" data-aos="fade-up">
                <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">Browse By Category</h6>
                <div className="filter-buttons">
                  {categories.map(category => (
                    <Button 
                      key={category} 
                      variant={filter === category ? 'dark' : 'outline-dark'} 
                      className={`filter-btn me-2 mb-2 px-4 py-2 ${filter === category ? 'active' : ''}`}
                      onClick={() => setFilter(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          
          <Row className="g-4">
            {filteredItems.map((item, index) => (
              <Col lg={4} md={6} key={item.id} data-aos="fade-up" data-aos-delay={index * 50}>
                <Card 
                  className="gallery-item border-0 h-100" 
                  onClick={() => openModal(item)}
                >
                  <div className="gallery-img-wrapper">
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      alt={item.title} 
                      className="gallery-img"
                    />
                    <Badge bg="dark" className="category-badge">{item.category}</Badge>
                    <div className="gallery-overlay">
                      <div className="overlay-content">
                        <h5 className="text-white mb-2">{item.title}</h5>
                        <p className="text-white-50 small mb-3">{item.description.substring(0, 60)}...</p>
                        <Button variant="outline-light" size="sm" className="view-btn">
                          <i className="bi bi-eye me-2"></i>View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-5 py-lg-7 bg-dark text-white">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={7} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">Inspired by our designs?</h2>
              <p className="lead mb-0">Let's create your dream space together. Contact us for a personalized consultation.</p>
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
      
      {/* Enhanced Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" 
        centered
        contentClassName="modal-content-custom"
      >
        {selectedImage && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="text-gold">{selectedImage.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
              <Row className="g-0">
                <Col md={8} className="modal-img-container">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="modal-img" 
                  />
                  <div className="img-controls">
                    <Button variant="light" className="control-btn me-2">
                      <i className="bi bi-arrow-left"></i>
                    </Button>
                    <Button variant="light" className="control-btn">
                      <i className="bi bi-arrow-right"></i>
                    </Button>
                  </div>
                </Col>
                <Col md={4} className="p-4 modal-details">
                  <Badge bg="dark" className="mb-3">{selectedImage.category}</Badge>
                  <h4 className="mb-3">{selectedImage.title}</h4>
                  <p className="mb-4">{selectedImage.description}</p>
                  
                  <h6 className="text-uppercase text-gold letter-spacing-2 mb-3">Project Details</h6>
                  <ul className="project-details">
                    <li><span>Style:</span> Contemporary</li>
                    <li><span>Size:</span> 450 sq. ft.</li>
                    <li><span>Location:</span> New York</li>
                    <li><span>Year:</span> 2023</li>
                  </ul>
                  
                  <div className="d-flex mt-4">
                    <Button variant="dark" className="me-2">
                      <i className="bi bi-bookmark me-2"></i>Save
                    </Button>
                    <Button variant="outline-dark">
                      <i className="bi bi-share me-2"></i>Share
                    </Button>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </>
        )}
      </Modal>

      <style jsx>{`
        .gallery-page {
          font-family: 'Montserrat', sans-serif;
        }
        
        /* Loading Animation */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s ease;
        }
        
        .loading-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .spinner {
          width: 60px;
          height: 60px;
          position: relative;
        }
        
        .double-bounce1, .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #d4af37;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          animation: bounce 2s infinite ease-in-out;
        }
        
        .double-bounce2 {
          animation-delay: -1.0s;
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(0); }
          50% { transform: scale(1); }
        }
        
        /* Hero Section */
        .gallery-hero {
          background: url('https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') no-repeat center center;
          background-size: cover;
          background-attachment: fixed;
          height: 70vh;
          min-height: 500px;
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
        
        /* Filter Buttons */
        .filter-container {
          margin-bottom: 2rem;
        }
        
        .filter-btn {
          border-radius: 0;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          border: 1px solid #212529;
        }
        
        .filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #212529;
          transition: all 0.3s ease;
          z-index: -1;
        }
        
        .filter-btn:hover::before {
          width: 100%;
        }
        
        .filter-btn:hover {
          color: white;
        }
        
        .filter-btn.active {
          background-color: #212529;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        /* Gallery Items */
        .gallery-item {
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          border-radius: 0;
          overflow: hidden;
        }
        
        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .gallery-img-wrapper {
          position: relative;
          height: 350px;
          overflow: hidden;
        }
        
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        
        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }
        
        .category-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 2;
          border-radius: 0;
          padding: 8px 15px;
          font-size: 0.75rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%);
          display: flex;
          align-items: flex-end;
          padding: 25px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .overlay-content {
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }
        
        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }
        
        .view-btn {
          border-radius: 0;
          border-color: white;
          color: white;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }
        
        .view-btn:hover {
          background-color: white;
          color: #212529;
        }
        
        /* Custom Button */
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
        
        /* Modal Styling */
        .modal-content-custom {
          border: none;
          border-radius: 0;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .modal-header {
          border-bottom: none;
          padding: 1.5rem;
          background-color: white;
        }
        
        .modal-img-container {
          position: relative;
          height: 500px;
        }
        
        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .img-controls {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }
        
        .control-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255,255,255,0.8);
          border: none;
          transition: all 0.3s ease;
        }
        
        .control-btn:hover {
          background-color: white;
          transform: scale(1.1);
        }
        
        .modal-details {
          background-color: #f9f9f9;
          height: 500px;
          overflow-y: auto;
        }
        
        .project-details {
          list-style: none;
          padding-left: 0;
          margin-bottom: 2rem;
        }
        
        .project-details li {
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
        }
        
        .project-details li span:first-child {
          font-weight: 600;
          color: #212529;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content {
          animation: fadeIn 0.3s ease;
        }
        
        @media (max-width: 991px) {
          .gallery-img-wrapper {
            height: 300px;
          }
          
          .modal-img-container, .modal-details {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;