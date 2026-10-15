import React from 'react';
import { Link } from 'react-router-dom';
import { TIMELINE_EXPERIENCE, EDUCATION, CAREER_STATS } from '../data/experience';
import { CheckCircle2, ArrowRight, FileText, Award } from 'lucide-react';
import ResumeLink from '../components/ResumeLink';

export default function ExperiencePage() {
  return (
    <div className="experience-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Career Timeline</span>
          <h1 className="page-title">
            Professional Experience &{' '}
            <span className="text-gradient">Career Progression</span>
          </h1>
          <p className="page-subtitle">
            A chronological record of backend software development, production releases, client
            assignments, and technical recognition.
          </p>
        </div>
      </section>

      {/* Career Stats */}
      <section className="section-sm">
        <div className="container">
          <div className="stats-grid">
            {CAREER_STATS.map((stat, i) => (
              <div key={i} className="stat-card wb-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow eyebrow-2">Work History</span>
            <h2 className="section-title">Engineering Timeline</h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-track"></div>

            {TIMELINE_EXPERIENCE.map((exp, idx) => (
              <div key={exp.id} className="timeline-entry">
                <div className="timeline-dot"></div>
                <div className="exp-card wb-card">
                  <div className="exp-card-header">
                    <div className="exp-top-row">
                      <h2 className="exp-role">{exp.role}</h2>
                      <div className="exp-badge-wrap">
                        <span className="badge badge-accent">{exp.badge}</span>
                        {exp.highlight && (
                          <span className="badge badge-green">
                            <Award size={11} />
                            {exp.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="exp-company">{exp.company} · {exp.location}</div>
                    <div className="exp-period">{exp.period} · {exp.duration}</div>
                  </div>

                  <p className="exp-desc">{exp.description}</p>

                  <div className="exp-responsibilities-title">Key Responsibilities</div>
                  <ul className="exp-responsibilities-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="exp-resp-item">
                        <CheckCircle2 size={15} className="resp-marker" />
                        <span dangerouslySetInnerHTML={{ __html: resp }} />
                      </li>
                    ))}
                  </ul>

                  <div className="exp-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-sm">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow">Academic Background</span>
            <h2 className="section-title">Education & Degrees</h2>
            <p className="section-subtitle">
              Formal studies in computer applications, electronics, and computational science.
            </p>
          </div>

          <div className="grid-3">
            {EDUCATION.map((edu, idx) => (
              <div key={edu.id} className="wb-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="number-chip">0{idx + 1}</span>
                  <span className="badge badge-outline">{edu.period}</span>
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>{edu.degree}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {edu.institution} · {edu.location}
                </div>
                <p style={{ fontSize: '0.8125rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>{edu.description}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
                  STATUS: {edu.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner wb-card">
            <h2 className="cta-heading">
              Interested in full employment{' '}
              <span className="text-gradient">credentials?</span>
            </h2>
            <p className="cta-text">View the verified resume or get in touch directly.</p>
            <div className="cta-buttons">
              <ResumeLink className="btn btn-primary btn-lg">
                <FileText size={16} />
                <span>View / Download Resume</span>
              </ResumeLink>
              <Link to="/contact" className="btn btn-secondary btn-lg">
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
