import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button, Offcanvas, Form, InputGroup } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setTopBarVisible(false);
      } else {
        setScrolled(false);
        setTopBarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);
    if (showOffcanvas) {
      setShowOffcanvas(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`top-bar py-2 d-none d-lg-block ${topBarVisible ? '' : 'top-bar-hidden'}`} style={{ 
        backgroundColor: '#1a1a1a', 
        color: '#fff',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="me-4">
              <i className="bi bi-telephone-fill me-2" style={{ color: '#d4af37' }}></i>
              <span className="small">+1 (234) 567-8900</span>
            </div>
            <div>
              <i className="bi bi-envelope-fill me-2" style={{ color: '#d4af37' }}></i>
              <span className="small">contact@yourdomain.com</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-4">
              <i className="bi bi-clock-fill me-2" style={{ color: '#d4af37' }}></i>
              <span className="small">Mon-Sat: 9AM-7PM</span>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon me-3">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="#" className="social-icon me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <BootstrapNavbar 
        expand="lg" 
        fixed="top" 
        className={`py-3 transition-all ${scrolled ? 'scrolled' : ''}`}
        style={{ 
          top: scrolled ? '0' : (window.innerWidth >= 992 ? '40px' : '0'),
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 5px 30px rgba(0, 0, 0, 0.1)' : 'none'
        }}
        variant={scrolled ? 'light' : 'dark'}
      >
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="brand-logo me-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill={scrolled ? "#d4af37" : "white"}/>
                <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20Z" stroke={scrolled ? "#333" : "white"} strokeWidth="2"/>
                <path d="M20 15V25M15 20H25" stroke={scrolled ? "#333" : "white"} strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <span className="fw-bold fs-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>YOUR</span>
              <span className="fw-light fs-4" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#d4af37' }}>DOMAIN</span>
            </div>
          </BootstrapNavbar.Brand>
          
          <div className="d-flex align-items-center ms-auto d-lg-none">
            <button 
              className={`btn btn-link p-0 me-3 ${scrolled ? 'text-dark' : 'text-white'}`} 
              onClick={toggleSearch}
              aria-label="Search"
            >
              <i className="bi bi-search fs-5"></i>
            </button>
            <Button 
              variant="link" 
              className={`navbar-toggler border-0 p-0 ${scrolled ? 'text-dark' : 'text-white'}`} 
              onClick={handleShow}
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-1"></i>
            </Button>
          </div>
          
          <div className="d-none d-lg-flex align-items-center ms-auto">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" className={`mx-3 nav-link-fancy ${scrolled ? 'text-dark' : 'text-white'}`}>HOME</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={`mx-3 nav-link-fancy ${scrolled ? 'text-dark' : 'text-white'}`}>ABOUT</Nav.Link>
              <Nav.Link as={NavLink} to="/services" className={`mx-3 nav-link-fancy ${scrolled ? 'text-dark' : 'text-white'}`}>SERVICES</Nav.Link>
              <Nav.Link as={NavLink} to="/gallery" className={`mx-3 nav-link-fancy ${scrolled ? 'text-dark' : 'text-white'}`}>GALLERY</Nav.Link>
              <Nav.Link as={NavLink} to="/offers" className={`mx-3 nav-link-fancy ${scrolled ? 'text-dark' : 'text-white'}`}>OFFERS</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className={`mx-3 nav-link-fancy ${scrolled ? 'text-dark' : 'text-white'}`}>CONTACT</Nav.Link>
            </Nav>
            
            <div className="d-flex align-items-center ms-4">
              <div className={`search-container ${searchExpanded ? 'expanded' : ''}`}>
                <button 
                  className={`search-toggle btn btn-link p-0 ${scrolled ? 'text-dark' : 'text-white'}`} 
                  onClick={toggleSearch}
                  aria-label="Toggle search"
                >
                  <i className="bi bi-search"></i>
                </button>
                <InputGroup className="search-input">
                  <Form.Control
                    placeholder="Search..."
                    aria-label="Search"
                    className="border-0 shadow-none"
                  />
                  <Button variant="link" className="p-0" aria-label="Submit search">
                    <i className="bi bi-search"></i>
                  </Button>
                </InputGroup>
              </div>
              
              <Button 
                as={Link} 
                to="/contact" 
                variant={scrolled ? "outline-dark" : "outline-light"} 
                className="rounded-0 px-4 py-2 nav-cta ms-3"
                style={{ 
                  borderColor: '#d4af37', 
                  color: scrolled ? '#d4af37' : 'white',
                  letterSpacing: '1px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                GET QUOTE
              </Button>
            </div>
          </div>
        </Container>
      </BootstrapNavbar>
      
      {/* Search Overlay for Mobile */}
      <div 
        className={`search-overlay ${searchExpanded ? 'show' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            toggleSearch();
          }
        }}
      >
        <Container className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-overlay-content w-100" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="m-0" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Search</h4>
              <button className="btn btn-link p-0 text-white" onClick={toggleSearch} aria-label="Close search">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <InputGroup>
              <Form.Control
                placeholder="Type to search..."
                aria-label="Search"
                className="py-3 border-0 shadow-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              />
              <Button 
                variant="link" 
                className="text-white"
                style={{ backgroundColor: '#d4af37', borderColor: '#d4af37' }}
                aria-label="Submit search"
              >
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </div>
        </Container>
      </div>
      
      {/* Mobile Menu Offcanvas */}
      <Offcanvas 
        show={showOffcanvas} 
        onHide={handleClose} 
        placement="end" 
        className="mobile-menu"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel" className="d-flex align-items-center">
            <div className="brand-logo me-2">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="#d4af37"/>
                <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20Z" stroke="#333" strokeWidth="2"/>
                <path d="M20 15V25M15 20H25" stroke="#333" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <span className="fw-bold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>YOUR</span>
              <span className="fw-light" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#d4af37' }}>DOMAIN</span>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/" className="py-3 border-bottom mobile-nav-link" onClick={handleClose}>HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="py-3 border-bottom mobile-nav-link" onClick={handleClose}>ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="py-3 border-bottom mobile-nav-link" onClick={handleClose}>SERVICES</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" className="py-3 border-bottom mobile-nav-link" onClick={handleClose}>GALLERY</Nav.Link>
            <Nav.Link as={NavLink} to="/offers" className="py-3 border-bottom mobile-nav-link" onClick={handleClose}>OFFERS</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="py-3 border-bottom mobile-nav-link" onClick={handleClose}>CONTACT</Nav.Link>
          </Nav>
          
          <div className="mt-5">
            <div className="mb-4">
              <h6 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Contact Us</h6>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill me-3" style={{ color: '#d4af37' }}></i>
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope-fill me-3" style={{ color: '#d4af37' }}></i>
                <span>contact@yourdoamin.com</span>
              </div>
            </div>
            
            <Button 
              as={Link} 
              to="/contact" 
              variant="dark" 
              className="w-100 rounded-0 py-3"
              style={{ 
                backgroundColor: '#d4af37', 
                borderColor: '#d4af37',
                letterSpacing: '1px',
                fontSize: '0.9rem'
              }}
              onClick={handleClose}
            >
              GET QUOTE
            </Button>
            
            <div className="d-flex justify-content-center mt-4 social-icons">
              <a href="#" className="social-icon mx-2 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon mx-2 fs-4">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="#" className="social-icon mx-2 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon mx-2 fs-4">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx>{`
        .top-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1030;
          transition: transform 0.4s ease;
        }
        
        .top-bar-hidden {
          transform: translateY(-100%);
        }
        
        .navbar {
          z-index: 1020;
          transition: all 0.4s ease;
        }
        
        .navbar.scrolled {
          padding-top: 15px;
          padding-bottom: 15px;
        }
        
        .social-icon {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          color: #d4af37;
          transform: translateY(-3px);
        }
        
        .nav-link-fancy {
          position: relative;
          font-size: 0.85rem;
          letter-spacing: 2px;
          font-weight: 500;
          font-family: 'Montserrat', sans-serif;
          padding: 0.5rem 0 !important;
          margin: 0 1rem;
          transition: color 0.3s ease;
        }
        
        .nav-link-fancy:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #d4af37;
          transition: width 0.3s ease;
        }
        
        .nav-link-fancy:hover:after,
        .nav-link-fancy.active:after {
          width: 100%;
        }
        
        .nav-link-fancy:hover,
        .nav-link-fancy.active {
          color: #d4af37 !important;
        }
        
        .nav-cta {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          z-index: 1;
          font-family: 'Montserrat', sans-serif;
        }
        
        .nav-cta:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background-color: #d4af37;
          transition: all 0.3s ease;
          z-index: -1;
        }
        
        .nav-cta:hover {
          color: white !important;
          border-color: #d4af37 !important;
        }
        
        .nav-cta:hover:before {
          left: 0;
        }
        
        .search-container {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-input {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
        }
        
        .search-container.expanded .search-input {
          width: 200px;
          opacity: 1;
          visibility: visible;
        }
        
        .search-container.expanded .search-toggle {
          opacity: 0;
          visibility: hidden;
        }
        
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .search-overlay.show {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-nav-link {
          font-size: 1.1rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border-color: rgba(0,0,0,0.1) !important;
          font-family: 'Montserrat', sans-serif;
        }
        
        .mobile-nav-link:hover {
          color: #d4af37 !important;
          padding-left: 1.5rem !important;
        }
        
        .mobile-menu {
          z-index: 2010;
        }
        
        .mobile-menu .offcanvas-header {
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .mobile-menu .offcanvas-body {
          padding-top: 2rem;
        }
        
        @media (max-width: 991px) {
          .navbar {
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
          }
          
          .navbar-brand {
            color: #333 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;