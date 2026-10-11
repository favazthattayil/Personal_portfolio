import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Copy, Check, Terminal, ExternalLink, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'favast2000@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer" role="contentinfo">
      {/* Engineering Workbench Status Bar */}
      <div className="footer-status-bar">
        <div className="container status-container">
          <div className="status-item">
            <span className="status-dot"></span>
            <span className="font-mono">SYS.STATUS: OPERATIONAL</span>
          </div>
          <div className="status-item">
            <span className="font-mono text-muted">LOCATION: MALAPPURAM, KERALA (UTC+5:30)</span>
          </div>
          <div className="status-item">
            <span className="font-mono text-muted">STACK: LARAVEL / REST / AI / MYSQL</span>
          </div>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn font-mono"
            aria-label="Scroll back to top of page"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="container footer-content-container">
        <div className="footer-grid">
          {/* Col 1: Identity & Positioning */}
          <div className="footer-col footer-col-brand">
            <div className="brand-logo footer-brand">
              <div className="brand-icon">
                <Terminal size={18} />
              </div>
              <span className="brand-name">FAVAS T</span>
            </div>
            <p className="footer-bio">
              Software Engineer with 3+ years of production experience building business-critical backend APIs, AI-enabled workflows, technician tools, and optimized database systems.
            </p>
            <div className="footer-quote font-mono">
              "I build reliable backend systems, automate complex workflows, and turn practical business problems into production-ready software."
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About & Philosophy</Link></li>
              <li><Link to="/work">Work & Case Studies</Link></li>
              <li><Link to="/experience">Career Experience</Link></li>
              <li><Link to="/skills">Skills & Capabilities</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
              <li>
                <button onClick={onOpenResume} className="footer-link-btn">
                  Download Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Case Studies */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">CASE STUDIES</h4>
            <ul className="footer-links">
              <li><Link to="/work/athena">Athena AI Caller</Link></li>
              <li><Link to="/work/p3-toolbox">P3 Toolbox & ID Pro</Link></li>
              <li><Link to="/work/workflow-automation">Workflow Automation</Link></li>
              <li><Link to="/work/workpex-crm">Workpex CRM Optimization</Link></li>
              <li><Link to="/work/office-management">Office Management</Link></li>
            </ul>
          </div>

          {/* Col 4: Connect & Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">CONNECT</h4>
            <div className="footer-contact-actions">
              <a
                href={`mailto:${emailAddress}`}
                className="footer-email-link"
                title="Send email to Favas T"
              >
                <Mail size={16} />
                <span>{emailAddress}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm copy-email-btn"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-accent" />
                    <span className="text-accent">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="footer-social-links">
                <a
                  href="https://github.com/favazthattayil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Favas T GitHub Profile"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="social-ext" />
                </a>

                <a
                  href="https://linkedin.com/in/favas-t-963751255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Favas T LinkedIn Profile"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="social-ext" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright font-mono text-muted">
            © {new Date().getFullYear()} Favas T. All engineering contributions verified from production records.
          </div>
          <div className="footer-spec-tag font-mono">
            <span>ENGINEERING IN MOTION · BENCHMARK v3.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
