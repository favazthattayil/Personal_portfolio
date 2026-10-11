import React from 'react';
import { Link } from 'react-router-dom';
import { TIMELINE_EXPERIENCE, EDUCATION, CAREER_STATS } from '../data/experience';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ArrowRight, FileText, GitBranch, ArrowUpRight } from 'lucide-react';

export default function ExperiencePage({ onOpenResume }) {
  return (
    <div className="experience-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow font-mono">[CAREER TIMELINE // PRODUCTION IMPACT]</span>
          <h1 className="page-title">
            Professional Experience & <br />
            <span className="text-accent">Career Progression</span>
          </h1>
          <p className="page-subtitle">
            A chronological track record of backend software development, production releases, client assignments, and technical recognition.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-sm exp-stats-section">
        <div className="container">
          <div className="stats-workbench-grid">
            {CAREER_STATS.map((stat, i) => (
              <div key={i} className="stat-card wb-card">
                <span className="stat-val font-mono text-accent">{stat.value}</span>
                <span className="stat-label font-mono text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="section exp-timeline-section">
        <div className="container">
          <div className="timeline-container">
            {/* Timeline Item 1: Axel Technologies */}
            <div className="timeline-item">
              <div className="timeline-spine">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="timeline-content wb-card">
                <div className="timeline-top">
                  <div className="timeline-badges">
                    <span className="badge badge-accent font-mono">CURRENT ROLE</span>
                    <span className="badge badge-outline font-mono">PROMOTED FROM ASSOCIATE</span>
                    <span className="badge badge-award font-mono">
                      <Award size={13} className="text-accent inline mr-1" />
                      BEST PERFORMANCE AWARD
                    </span>
                  </div>
                  <div className="timeline-date font-mono">
                    <Calendar size={14} className="inline mr-1 text-muted" />
                    <span>August 2023 – Present</span>
                  </div>
                </div>

                <h2 className="timeline-role">Software Engineer</h2>
                <div className="timeline-company-row font-mono">
                  <span className="text-accent font-semibold">Axel Technologies Pvt. Ltd.</span>
                  <span className="text-muted">·</span>
                  <span className="text-muted">Calicut Cyberpark, Kerala, India</span>
                </div>

                <p className="timeline-summary">
                  Promoted from Associate Software Engineer to Software Engineer. Core backend engineering contributor to the P3 production HVAC platform for a U.S.-based client company. Focuses on mission-critical Laravel REST APIs, AI-powered automation workflows, technician-facing tools, and modernizing release infrastructure.
                </p>

                <div className="timeline-responsibilities">
                  <h3 className="section-sub-label font-mono text-muted">
                    KEY PRODUCTION RESPONSIBILITIES & CONTRIBUTIONS
                  </h3>
                  <ul className="timeline-bullets">
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>P3 HVAC Service Platform:</strong> Engineered and maintained core Laravel REST APIs powering customer appointments, equipment logs, and technician field workflows.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Athena Voice Assistant:</strong> Designed, implemented, and shipped an AI-powered voice calling workflow integrating Vapi for automated customer follow-ups and recording ingestion.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Communication Rule Engine:</strong> Architected a Laravel automation engine supporting <strong>100+ business workflow conditions</strong> for automated Email & SMS notifications.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Deployment Modernization:</strong> Led the migration away from manual FTP file uploads to modern, version-controlled, Git-based production releases.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>P3 Toolbox & ID Pro:</strong> Built technician decision support tools and integrated OpenAI API for AI-assisted HVAC equipment nameplate identification.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Mobile Synchronization (Ongoing):</strong> Developing supporting REST APIs and sync logic for an offline-capable Flutter field application with Firebase.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="timeline-tech-tags">
                  <span className="font-mono text-muted text-xs mr-2">ENVIRONMENT:</span>
                  {['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Vapi', 'OpenAI API', 'Git', 'Linux / Ubuntu', 'Supabase', 'React.js'].map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 2: Workpex Assignment */}
            <div className="timeline-item">
              <div className="timeline-spine">
                <div className="timeline-dot dot-assignment"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="timeline-content wb-card">
                <div className="timeline-top">
                  <div className="timeline-badges">
                    <span className="badge badge-outline font-mono">CLIENT ASSIGNMENT</span>
                    <span className="badge badge-accent font-mono">
                      RETURNED TO AXEL ON CLIENT REQUEST
                    </span>
                  </div>
                  <div className="timeline-date font-mono">
                    <Calendar size={14} className="inline mr-1 text-muted" />
                    <span>May 2025 – November 2025</span>
                  </div>
                </div>

                <h2 className="timeline-role">Software Engineer (Client Assignment)</h2>
                <div className="timeline-company-row font-mono">
                  <span className="text-accent font-semibold">Workpex (Subsidiary of Axel Technologies)</span>
                  <span className="text-muted">·</span>
                  <span className="text-muted">Calicut, Kerala, India</span>
                </div>

                <p className="timeline-summary">
                  Assigned directly to Workpex to address critical backend scalability, query execution delays, and lead management bottlenecks in their CRM application. Successfully resolved multi-million-row search latency and returned to Axel Technologies on client request upon project completion.
                </p>

                <div className="timeline-responsibilities">
                  <h3 className="section-sub-label font-mono text-muted">
                    TECHNICAL CONTRIBUTIONS & DELIVERABLES
                  </h3>
                  <ul className="timeline-bullets">
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Million-Row Search Optimization:</strong> Investigated slow queries, eliminated full table scans, and implemented composite indexing across millions of lead rows.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Dynamic Backend Filtering:</strong> Created modular Laravel query scopes supporting multi-criteria search without database performance degradation.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Automated Lead-Status Updates:</strong> Developed lifecycle transition logic that automatically advances lead stages based on activity thresholds.
                      </span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                      <span>
                        <strong>Lead-Value Aggregations:</strong> Built reporting endpoints that calculate revenue and deal valuations for sales leadership dashboards.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="timeline-tech-tags">
                  <span className="font-mono text-muted text-xs mr-2">ENVIRONMENT:</span>
                  {['Laravel', 'PHP', 'MySQL', 'Database Indexing', 'EXPLAIN Tuning', 'REST APIs'].map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-sm exp-education-section">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow font-mono">[ACADEMIC BACKGROUND]</span>
            <h2 className="section-title">Education & Degrees</h2>
            <p className="section-subtitle">
              Formal studies in computer applications, electronics, communications, and computational science.
            </p>
          </div>

          <div className="grid-3">
            {EDUCATION.map((edu, idx) => (
              <div key={edu.id} className="wb-card edu-card">
                <span className="font-mono text-accent text-xs">ACADEMIC // 0{idx + 1}</span>
                <h3 className="edu-card-title mt-2">{edu.degree}</h3>
                <div className="edu-card-inst font-mono text-muted text-sm mb-3">
                  {edu.institution} · {edu.location}
                </div>
                <p className="edu-card-desc text-sm">{edu.description}</p>
                <div className="edu-card-status font-mono text-xs mt-3">
                  <span className="badge badge-outline">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner wb-card">
            <h2 className="cta-heading">Interested in full employment credentials?</h2>
            <p className="cta-text">
              View the verified resume document or get in touch directly.
            </p>
            <div className="cta-buttons">
              <button onClick={onOpenResume} className="btn btn-primary">
                <FileText size={16} />
                <span>View / Download Resume</span>
              </button>
              <Link to="/contact" className="btn btn-secondary">
                <span>Contact Favas</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
