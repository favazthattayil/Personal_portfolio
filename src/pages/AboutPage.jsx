import React from 'react';
import { Link } from 'react-router-dom';
import { EDUCATION } from '../data/experience';
import { Mail, FileText, ArrowRight, CheckCircle2, Terminal, Code, Cpu, ShieldCheck, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function AboutPage({ onOpenResume }) {
  const principles = [
    {
      number: '01',
      title: 'Reliability over Cleverness',
      desc: 'Production systems must be predictable and maintainable. I write clear, well-structured PHP and Laravel code that teammates can read, audit, and debug under operational pressure.',
    },
    {
      number: '02',
      title: 'Practical Automation for Real Operations',
      desc: 'Automation should solve measurable friction points for actual users—whether field technicians on roofs or dispatchers managing schedules—not just demo well in slides.',
    },
    {
      number: '03',
      title: 'Respect Database Performance Early',
      desc: 'Queries that perform fine on a few thousand test rows degrade rapidly at millions of records. Indexing, query inspection, and thoughtful relational schemas are foundational.',
    },
    {
      number: '04',
      title: 'Robust Integration Boundaries',
      desc: 'External APIs, webhook receivers, and third-party AI services can fail or delay. Systems must be designed with idempotency, signature validation, retry guards, and thorough error logging.',
    },
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow font-mono">[ABOUT // ENGINEERING PROFILE]</span>
          <h1 className="page-title">
            Engineering Systems for <br />
            <span className="text-accent">Practical Business Reality</span>
          </h1>
          <p className="page-subtitle">
            A software engineer focused on reliable Laravel backend APIs, intelligent workflow automation, and database scaling.
          </p>
        </div>
      </section>

      {/* Main Narrative & Background */}
      <section className="section-sm about-narrative-section">
        <div className="container">
          <div className="about-split-layout">
            {/* Left Narrative Column */}
            <div className="about-narrative-col">
              <div className="narrative-block">
                <h2 className="narrative-heading">Professional Introduction</h2>
                <p>
                  I am Favas T, a Software Engineer based in Malappuram, Kerala, India, with 3+ years of production engineering experience. My daily work revolves around building and maintaining business-critical web software, backend APIs, AI-enabled workflows, and technician-facing tools.
                </p>
                <p>
                  At <strong>Axel Technologies Pvt. Ltd.</strong>, I serve as a core backend contributor to the P3 production HVAC platform for a U.S.-based client. In this role, I have engineered scalable Laravel APIs, integrated speech and vision AI tools, and modernized infrastructure workflows. During a dedicated client assignment at <strong>Workpex</strong>, I addressed critical search bottlenecks across datasets containing millions of CRM records.
                </p>
              </div>

              <div className="narrative-block">
                <h2 className="narrative-heading">Engineering Philosophy</h2>
                <div className="principles-grid">
                  {principles.map((p) => (
                    <div key={p.number} className="principle-card wb-card">
                      <div className="principle-num font-mono text-accent">{p.number}</div>
                      <h3 className="principle-title">{p.title}</h3>
                      <p className="principle-desc">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="narrative-block">
                <h2 className="narrative-heading">How I Approach Business Problems</h2>
                <p>
                  When tasked with a business requirement, my focus begins at the operational workflow: what is the human action, where does data enter the system, and what failure modes could occur?
                </p>
                <p>
                  Rather than jumping immediately into complex abstractions, I map out clear state machines, ensure relational database normalization and indexing strategies are sound, and design REST endpoints that provide unambiguous responses. When incorporating third-party integrations—such as Vapi for automated calling or OpenAI API for equipment analysis—I build strict payload validations and webhook reconciliation to safeguard production stability.
                </p>
              </div>
            </div>

            {/* Right Meta Column */}
            <aside className="about-sidebar-col" aria-label="Quick Technical Profile">
              <div className="wb-card about-profile-card">
                <div className="card-top font-mono">
                  <span className="status-dot"></span>
                  <span>ENGINEER METADATA</span>
                </div>

                <div className="profile-rows font-mono">
                  <div className="profile-row">
                    <span className="text-muted">NAME:</span>
                    <span>Favas T</span>
                  </div>
                  <div className="profile-row">
                    <span className="text-muted">TITLE:</span>
                    <span>Software Engineer</span>
                  </div>
                  <div className="profile-row">
                    <span className="text-muted">SPECIALIZATION:</span>
                    <span>Backend & AI Integrations</span>
                  </div>
                  <div className="profile-row">
                    <span className="text-muted">LOCATION:</span>
                    <span>Malappuram, Kerala, India</span>
                  </div>
                  <div className="profile-row">
                    <span className="text-muted">CURRENT ROLE:</span>
                    <span>Axel Technologies (P3 Platform)</span>
                  </div>
                  <div className="profile-row">
                    <span className="text-muted">RECOGNITION:</span>
                    <span className="text-accent">Best Performance Award</span>
                  </div>
                </div>

                <div className="profile-actions">
                  <button onClick={onOpenResume} className="btn btn-primary w-full">
                    <FileText size={15} />
                    <span>View / Download Resume</span>
                  </button>

                  <a
                    href="mailto:favast2000@gmail.com"
                    className="btn btn-secondary w-full"
                  >
                    <Mail size={15} />
                    <span>favast2000@gmail.com</span>
                  </a>

                  <div className="social-links-row">
                    <a
                      href="https://github.com/favazthattayil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost social-btn flex-1"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/favas-t-963751255"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost social-btn flex-1"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section education-section" aria-label="Education Timeline">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow font-mono">[EDUCATION // ACADEMIC FOUNDATION]</span>
            <h2 className="section-title">Education & Technical Foundations</h2>
            <p className="section-subtitle">
              Formal engineering foundations spanning electronics, communications, and computer application science.
            </p>
          </div>

          <div className="education-timeline-grid">
            {EDUCATION.map((edu, idx) => (
              <div key={edu.id} className="education-card wb-card">
                <div className="edu-top">
                  <span className="edu-index font-mono text-accent">0{idx + 1}</span>
                  <span className="badge badge-accent font-mono">{edu.period}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-inst font-mono text-muted">
                  {edu.institution} · {edu.location}
                </div>
                <p className="edu-desc">{edu.description}</p>
                <div className="edu-status font-mono">
                  <span className="text-muted">STATUS:</span> {edu.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm about-cta-section">
        <div className="container">
          <div className="about-footer-cta wb-card">
            <div className="footer-cta-text">
              <h3>Interested in working together or exploring my projects?</h3>
              <p>Check out detailed architecture breakdowns or reach out directly.</p>
            </div>
            <div className="footer-cta-buttons">
              <Link to="/work" className="btn btn-secondary">
                <span>View Portfolio</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn btn-primary">
                <span>Contact Me</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
