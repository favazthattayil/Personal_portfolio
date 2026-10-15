import React, { useState } from 'react';
import {
  Mail, Copy, Check, MapPin, Send, ExternalLink,
  AlertCircle, CheckCircle2, FileText
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import ResumeLink from '../components/ResumeLink';

export default function ContactPage() {
  const emailAddress = 'favast2000@gmail.com';
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', _gotcha: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = async () => {
    try { await navigator.clipboard.writeText(emailAddress); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or organization.';
    if (!formData.email.trim()) errs.email = 'Please provide your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email.';
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please write a brief description.';
    else if (formData.message.trim().length < 15) errs.message = 'Please provide at least 15 characters.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._gotcha) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus('submitting');
    await new Promise((res) => setTimeout(res, 800));
    setStatus('success');
    setStatusMessage('Message prepared! Launch your mail client below to send.');
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || 'Engineering Inquiry from Portfolio');
    const body = encodeURIComponent(`Hello Favas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`);
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
    setErrors({}); setStatus('idle'); setStatusMessage('');
  };

  const infoItems = [
    { icon: Mail, label: 'Email', value: emailAddress, href: `mailto:${emailAddress}` },
    { icon: MapPin, label: 'Location', value: 'Malappuram, Kerala, India (UTC+5:30)', href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/favas-t-963751255', href: 'https://linkedin.com/in/favas-t-963751255' },
    { icon: Github, label: 'GitHub', value: 'github.com/favazthattayil', href: 'https://github.com/favazthattayil' },
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Direct Communication</span>
          <h1 className="page-title">
            Start a Conversation on{' '}
            <span className="text-gradient">Systems & Engineering</span>
          </h1>
          <p className="page-subtitle">
            Open for inquiries regarding backend architectures, Laravel APIs, AI integrations,
            database performance, and technical engineering roles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-sm">
        <div className="container">
          <div className="contact-split">
            {/* Left: Info */}
            <div>
              <div className="wb-card" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <span className="status-dot"></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>
                    Direct Contact
                  </span>
                </div>

                <div className="contact-info-rows">
                  {infoItems.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <>
                        <div className="info-icon-box">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="info-row-label">{item.label}</div>
                          <div className="info-row-value">{item.value}</div>
                        </div>
                        {item.href && item.href.startsWith('http') && <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />}
                      </>
                    );
                    return item.href ? (
                      <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="contact-info-row">
                        {inner}
                      </a>
                    ) : (
                      <div key={item.label} className="contact-info-row">{inner}</div>
                    );
                  })}
                </div>

                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '10px' }}>
                  <button onClick={handleCopyEmail} className="btn btn-secondary" style={{ flex: 1 }}>
                    {copied ? <><Check size={14} /><span style={{ color: 'var(--accent-2)' }}>Copied!</span></> : <><Copy size={14} /><span>Copy Email</span></>}
                  </button>
                  <ResumeLink className="btn btn-primary" style={{ flex: 1 }}>
                    <FileText size={14} />
                    <span>Resume</span>
                  </ResumeLink>
                </div>
              </div>

              <div className="wb-card" style={{ padding: '20px 24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Preferred Topics
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Laravel backend architecture · REST API design · AI calling & speech workflows ·
                  Large-scale MySQL optimization · Business workflow automation · Technical engineering roles
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-card wb-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <span className="status-dot"></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>
                  Send Message
                </span>
              </div>

              {status === 'success' ? (
                <div className="form-success-state">
                  <CheckCircle2 size={48} className="form-success-icon" />
                  <h3 className="form-success-title">Message Ready!</h3>
                  <p className="form-success-desc" style={{ marginBottom: '28px' }}>{statusMessage}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a href={generateMailtoUrl()} className="btn btn-primary w-full" target="_blank" rel="noopener noreferrer">
                      <Send size={15} />
                      <span>Open in Mail Client</span>
                    </a>
                    <button onClick={handleReset} className="btn btn-ghost">Reset Form</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name / Organization *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your name or company" className="form-input" disabled={status === 'submitting'} />
                    {errors.name && <div className="form-error"><AlertCircle size={13} /><span>{errors.name}</span></div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com" className="form-input" disabled={status === 'submitting'} />
                    {errors.email && <div className="form-error"><AlertCircle size={13} /><span>{errors.email}</span></div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                      placeholder="e.g. Backend API Consulting / Full-Stack Role" className="form-input" disabled={status === 'submitting'} />
                    {errors.subject && <div className="form-error"><AlertCircle size={13} /><span>{errors.subject}</span></div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                      placeholder="Describe your requirements, inquiry, or discussion topics..."
                      className="form-textarea" disabled={status === 'submitting'} />
                    {errors.message && <div className="form-error"><AlertCircle size={13} /><span>{errors.message}</span></div>}
                  </div>

                  <button type="submit" className="form-submit-btn w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <span>Processing...</span>
                    ) : (
                      <><Send size={16} /><span>Send Message</span></>
                    )}
                  </button>

                  <p style={{ marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    Direct email: <strong>favast2000@gmail.com</strong>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
