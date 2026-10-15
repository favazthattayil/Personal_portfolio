import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, FileText, Zap, ArrowUpRight } from 'lucide-react';
import ResumeLink from './ResumeLink';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`main-header ${scrolled ? 'header-scrolled' : ''}`} role="banner">
        <div className="container header-container">
          <Link to="/" className="brand-logo" aria-label="Favas T Portfolio Home">
            <div className="brand-icon">
              <Zap size={16} strokeWidth={2.5} />
            </div>
            <div className="brand-text">
              <span className="brand-name">Favas T</span>
              <span className="brand-spec">Backend & AI Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <ResumeLink
              className="btn btn-primary btn-sm resume-btn"
              aria-label="View and Download Resume"
            >
              <FileText size={14} />
              <span>Resume</span>
            </ResumeLink>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-trigger"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'drawer-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="drawer-header">
            <div className="drawer-title">
              <span className="status-dot"></span>
              <span>Navigation</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-close-btn"
              aria-label="Close navigation drawer"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-list">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'mobile-nav-active' : ''}`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={15} className="mobile-nav-arrow" />
              </NavLink>
            ))}
          </nav>

          <div className="drawer-footer">
            <ResumeLink
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-sm w-full"
            >
              <FileText size={15} />
              <span>View / Download Resume</span>
            </ResumeLink>
            <div className="drawer-meta">Favas T · Malappuram, Kerala · Backend & AI Engineer</div>
          </div>
        </div>
      </div>
    </>
  );
}
