import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Send,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  FileText
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function ContactPage({ onOpenResume }) {
  const emailAddress = 'favast2000@gmail.com';
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot field for bot spam prevention
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a conversation subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief description of your inquiry.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your project or inquiry.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot spam guard
    if (formData._gotcha) {
      console.warn('Spam submission detected via honeypot.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setStatusMessage('Validating message data and preparing transmission...');

    try {
      // Check if custom backend endpoint is configured via environment
      const endpoint = import.meta.env?.VITE_CONTACT_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Server returned an error status.');
        }

        setStatus('success');
        setStatusMessage('Your message was successfully transmitted via backend endpoint.');
      } else {
        // Fallback transparent handling:
        // Rather than falsely pretending a remote SMTP delivered the mail without credentials,
        // we prepare direct email link and clipboard confirmation.
        await new Promise((res) => setTimeout(res, 800));
        setStatus('success');
        setStatusMessage(
          'Message payload prepared. Since no external SMTP credentials are set on this client build, you can instantly dispatch this inquiry via your email client or copy the formatted text.'
        );
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Transmission error occurred. Please use direct email to favast2000@gmail.com.');
    }
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || 'Engineering Inquiry from Portfolio');
    const body = encodeURIComponent(
      `Hello Favas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleCopyMessagePayload = () => {
    const fullText = `To: ${emailAddress}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    alert('Message text copied to clipboard!');
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      _gotcha: '',
    });
    setErrors({});
    setStatus('idle');
    setStatusMessage('');
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow font-mono">[CONTACT // DIRECT COMMUNICATION]</span>
          <h1 className="page-title">
            Start a Conversation on <br />
            <span className="text-accent">Systems & Engineering</span>
          </h1>
          <p className="page-subtitle">
            Open for inquiries regarding backend architectures, Laravel APIs, AI integrations, database performance, and technical engineering roles.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-sm contact-content-section">
        <div className="container">
          <div className="contact-split-layout">
            {/* Left Column: Direct Channels & Information */}
            <div className="contact-info-col">
              <div className="wb-card contact-channel-card">
                <div className="card-top font-mono">
                  <span className="status-dot"></span>
                  <span>PRIMARY DIRECT CHANNEL</span>
                </div>

                <div className="email-display-box">
                  <span className="font-mono text-muted text-xs">EMAIL ADDRESS</span>
                  <a href={`mailto:${emailAddress}`} className="direct-email-address font-mono">
                    {emailAddress}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary w-full copy-action-btn font-mono"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="text-accent" />
                      <span className="text-accent">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Profiles & Location */}
              <div className="wb-card contact-meta-card">
                <div className="card-top font-mono">
                  <span className="text-muted">LOCATION & PROFESSIONAL PROFILES</span>
                </div>

                <div className="contact-detail-items">
                  <div className="detail-item">
                    <MapPin size={18} className="text-accent flex-shrink-0" />
                    <div>
                      <div className="font-mono text-xs text-muted">LOCATION</div>
                      <div className="detail-val">Malappuram, Kerala, India (UTC+5:30)</div>
                    </div>
                  </div>

                  <a
                    href="https://linkedin.com/in/favas-t-963751255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-item detail-link"
                  >
                    <Linkedin size={18} className="text-accent flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-mono text-xs text-muted">LINKEDIN</div>
                      <div className="detail-val">linkedin.com/in/favas-t-963751255</div>
                    </div>
                    <ExternalLink size={14} className="text-muted" />
                  </a>

                  <a
                    href="https://github.com/favazthattayil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-item detail-link"
                  >
                    <Github size={18} className="text-accent flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-mono text-xs text-muted">GITHUB</div>
                      <div className="detail-val">github.com/favazthattayil</div>
                    </div>
                    <ExternalLink size={14} className="text-muted" />
                  </a>
                </div>

                <div className="resume-download-box pt-4 mt-4 border-t">
                  <button onClick={onOpenResume} className="btn btn-primary w-full">
                    <FileText size={16} />
                    <span>View / Download Resume</span>
                  </button>
                </div>
              </div>

              {/* Engineering Scope Note */}
              <div className="wb-card scope-note-card font-mono text-xs">
                <div className="font-semibold text-accent mb-1">[PREFERRED TOPICS]</div>
                <p className="text-secondary leading-relaxed">
                  Laravel backend architecture · REST API design · AI calling & speech workflows · Large-scale MySQL indexing · Business workflow automation engines · Technical roles in production software engineering.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-col">
              <div className="wb-card form-wrapper-card">
                <div className="form-top-bar font-mono">
                  <div className="form-label-tag">
                    <span className="status-dot"></span>
                    <span>TRANSMIT INQUIRY</span>
                  </div>
                  <span className="text-muted text-xs">STATUS: READY</span>
                </div>

                {status === 'success' ? (
                  <div className="form-success-state">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={36} className="text-accent" />
                    </div>
                    <h3 className="success-title">Message Prepared Successfully</h3>
                    <p className="success-desc">{statusMessage}</p>

                    <div className="success-action-buttons">
                      <a
                        href={generateMailtoUrl()}
                        className="btn btn-primary w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Send size={15} />
                        <span>Launch in Default Mail Client</span>
                      </a>

                      <button
                        onClick={handleCopyMessagePayload}
                        className="btn btn-secondary w-full"
                      >
                        <Copy size={15} />
                        <span>Copy Message Text to Clipboard</span>
                      </button>

                      <button
                        onClick={handleResetForm}
                        className="btn btn-ghost btn-sm font-mono mt-2"
                      >
                        Reset Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Honeypot field (hidden from real users) */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <label htmlFor="_gotcha">Leave this empty</label>
                      <input
                        type="text"
                        name="_gotcha"
                        id="_gotcha"
                        value={formData._gotcha}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Name Field */}
                    <div className="form-group">
                      <label htmlFor="name" className="form-label font-mono">
                        NAME / ORGANIZATION *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name or company"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        disabled={status === 'submitting'}
                      />
                      {errors.name && (
                        <div className="form-error font-mono">
                          <AlertCircle size={13} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                      <label htmlFor="email" className="form-label font-mono">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@domain.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        disabled={status === 'submitting'}
                      />
                      {errors.email && (
                        <div className="form-error font-mono">
                          <AlertCircle size={13} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label font-mono">
                        SUBJECT *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Backend API Consulting / Full-Stack Role"
                        className={`form-input ${errors.subject ? 'input-error' : ''}`}
                        disabled={status === 'submitting'}
                      />
                      {errors.subject && (
                        <div className="form-error font-mono">
                          <AlertCircle size={13} />
                          <span>{errors.subject}</span>
                        </div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label font-mono">
                        MESSAGE & CONTEXT *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your system requirements, inquiry, or discussion topics..."
                        className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                        disabled={status === 'submitting'}
                      />
                      {errors.message && (
                        <div className="form-error font-mono">
                          <AlertCircle size={13} />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Form Controls */}
                    <div className="form-footer-action">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-full"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Submit Message</span>
                          </>
                        )}
                      </button>

                      <p className="form-footer-note font-mono text-xs text-muted text-center mt-3">
                        Direct email fallback is always available: <strong>favast2000@gmail.com</strong>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
