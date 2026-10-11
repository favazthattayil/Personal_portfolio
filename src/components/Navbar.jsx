import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, FileText, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
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
      <header
        className={`main-header ${scrolled ? 'header-scrolled' : ''}`}
        role="banner"
      >
        <div className="container header-container">
          <Link to="/" className="brand-logo" aria-label="Favas T Portfolio Home">
            <div className="brand-icon">
              <Terminal size={18} className="brand-terminal-icon" />
            </div>
            <div className="brand-text">
              <span className="brand-name">FAVAS T</span>
              <span className="brand-spec">/ BACKEND & AI</span>
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
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'nav-link-active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <button
              onClick={onOpenResume}
              className="btn btn-secondary btn-sm resume-btn"
              aria-label="View and Download Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-trigger"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            <div className="drawer-title font-mono">
              <span className="status-dot"></span>
              <span>NAVIGATION MENU</span>
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
                className={({ isActive }) =>
                  `mobile-nav-item ${isActive ? 'mobile-nav-active' : ''}`
                }
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} className="mobile-nav-arrow" />
              </NavLink>
            ))}
          </nav>

          <div className="drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary btn-sm w-full"
            >
              <FileText size={16} />
              <span>Download / View Resume</span>
            </button>
            <div className="drawer-meta font-mono">
              <span>FAVAS T · MALAPPURAM, KERALA</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
