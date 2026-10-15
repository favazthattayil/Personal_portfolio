import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { TIMELINE_EXPERIENCE, CAREER_STATS } from '../data/experience';
import ProjectCard from '../components/ProjectCard';
import SystemVisual from '../components/SystemVisual';
import ResumeLink from '../components/ResumeLink';
import { ArrowRight, ArrowUpRight, Cpu, Database, Zap, GitBranch, FileText, Star, Award } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  const capabilities = [
    {
      id: 'backend',
      icon: Cpu,
      title: 'Backend Systems & API Engineering',
      tag: 'CORE DISCIPLINE',
      desc: 'Robust Laravel and PHP service architectures, RESTful contract design, token-based authentication, and business workflow engines built for continuous operation.',
      projectLink: '/work/workflow-automation',
      projectLabel: 'View Automation Case Study',
    },
    {
      id: 'ai-integrations',
      icon: Zap,
      title: 'AI Integrations & Intelligent Automation',
      tag: 'PRACTICAL AI',
      desc: 'Integrating conversational voice systems (Vapi) and computer vision models (OpenAI API) directly into business workflows to automate outbound calls and field tasks.',
      projectLink: '/work/athena',
      projectLabel: 'View Athena AI Case Study',
    },
    {
      id: 'database',
      icon: Database,
      title: 'Database Performance & Data Workflows',
      tag: 'HIGH SCALE',
      desc: 'MySQL schema optimization, composite indexing strategies, and dynamic filtering algorithms capable of searching across multi-million-row CRM datasets with minimal latency.',
      projectLink: '/work/workpex-crm',
      projectLabel: 'View Workpex Case Study',
    },
    {
      id: 'devops',
      icon: GitBranch,
      title: 'Deployment, Reliability & Infrastructure',
      tag: 'PRODUCTION OPS',
      desc: 'Modernizing release pipelines from legacy manual FTP uploads to version-controlled Git workflows, configuring Linux/Ubuntu web servers, and resolving production bottlenecks.',
      projectLink: '/experience',
      projectLabel: 'View Experience Timeline',
    },
  ];

  const outcomes = [
    { metric: '100+', label: 'Workflow Conditions', desc: 'Engineered a Laravel rule engine evaluating 100+ business conditions for automated Email & SMS notifications.', tag: 'CLIENT COMM ENGINE' },
    { metric: 'M+', label: 'Rows Optimized', desc: 'Restructured slow queries and composite indexing across multi-million-row CRM lead tables at Workpex.', tag: 'WORKPEX CRM' },
    { metric: 'Git', label: 'Deployment Migration', desc: 'Transitioned production releases from brittle manual FTP to modern, version-controlled Git workflows.', tag: 'INFRA MODERNIZATION' },
    { metric: '⭐', label: 'Best Performance', desc: 'Honored with Best Performance Award at Axel Technologies for technical leadership and reliable delivery.', tag: 'AXEL TECHNOLOGIES' },
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="container hero-container">
          <div className="hero-split-layout">
            {/* Left Editorial Content */}
            <div className="hero-editorial animate-fade-in-up">
              <div className="hero-meta-badges">
                <span className="badge badge-accent">
                  <span className="status-dot"></span>
                  Software Engineer
                </span>
                <span className="badge badge-outline">3+ Years Prod</span>
                <span className="badge badge-outline">Kerala, India</span>
              </div>

              <h1 className="hero-heading">
                Engineering{' '}
                <span className="text-gradient">reliable</span>{' '}
                systems.<br />
                <span style={{ color: 'var(--text-secondary)' }}>Automating what matters.</span>
              </h1>

              <p className="hero-subheading">
                I'm Favas, a Software Engineer building Laravel APIs, AI-powered workflows,
                and production systems that solve real business problems.
              </p>

              <div className="hero-cta-group">
                <Link to="/work" className="btn btn-primary btn-lg">
                  <span>Explore My Work</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  <span>Get in Touch</span>
                </Link>
                <ResumeLink className="btn btn-ghost btn-lg">
                  <FileText size={16} />
                  <span>Resume</span>
                </ResumeLink>
              </div>

              <div className="hero-telemetry">
                <div className="telemetry-item">
                  <span className="text-muted">FOCUS:</span>
                  <span>Laravel · REST APIs · AI Integrations · MySQL</span>
                </div>
                <div className="telemetry-item">
                  <span className="text-muted">LOCATION:</span>
                  <span>Malappuram, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Right System Visualization */}
            <div className="hero-visual-col">
              <SystemVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENGINEERING OUTCOMES */}
      <section className="section outcomes-section" aria-label="Key Engineering Outcomes">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow">Evidence-Based Outcomes</span>
            <h2 className="section-title">Measurable Production Contributions</h2>
            <p className="section-subtitle">
              Verified outcomes from 3+ years building and scaling mission-critical systems.
            </p>
          </div>

          <div className="outcomes-grid">
            {outcomes.map((o, i) => (
              <div key={i} className="outcome-card wb-card">
                <div className="outcome-metric">{o.metric}</div>
                <div className="outcome-label">{o.label}</div>
                <p className="outcome-desc">{o.desc}</p>
                <div className="outcome-badge">{o.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK */}
      <section className="section selected-work-section" aria-label="Selected Engineering Projects">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="section-title">Featured Production Case Studies</h2>
              <p className="section-subtitle">
                Deep dives into real backend systems, AI voice agents, technician tools, and database scaling.
              </p>
            </div>
            <div className="section-action-desktop">
              <Link to="/work" className="btn btn-secondary">
                <span>View All Projects</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="projects-editorial-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="section-action-mobile">
            <Link to="/work" className="btn btn-secondary w-full">
              <span>View All Projects ({PROJECTS.length})</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING CAPABILITIES */}
      <section className="section capabilities-section" aria-label="Engineering Capabilities">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow eyebrow-2">Technical Focus</span>
            <h2 className="section-title">Engineering Capabilities</h2>
            <p className="section-subtitle">
              How I approach architectural challenges, backend resilience, intelligent integrations, and platform stability.
            </p>
          </div>

          <div className="grid-2 capabilities-grid">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.id} className="capability-card wb-card wb-card-interactive">
                  <div className="cap-header">
                    <div className="cap-icon-box">
                      <Icon size={22} />
                    </div>
                    <span className="badge badge-outline">{cap.tag}</span>
                  </div>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.desc}</p>
                  <Link to={cap.projectLink} className="cap-link">
                    <span>{cap.projectLabel}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE PREVIEW */}
      <section className="section experience-preview-section" aria-label="Career Timeline Preview">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="eyebrow">Career Path</span>
              <h2 className="section-title">Experience & Assignments</h2>
              <p className="section-subtitle">
                Consistent engineering growth and client assignments in high-velocity software production.
              </p>
            </div>
            <div className="section-action-desktop">
              <Link to="/experience" className="btn btn-secondary">
                <span>Full Timeline</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="exp-preview-cards">
            {TIMELINE_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="exp-preview-item wb-card">
                <div className="exp-preview-top">
                  <div>
                    <span className="badge badge-accent" style={{ marginBottom: '8px', display: 'inline-flex' }}>{exp.badge}</span>
                    <h3 className="exp-preview-role">{exp.role}</h3>
                    <div className="exp-preview-company">
                      {exp.company} · {exp.location}
                    </div>
                  </div>
                  <div className="exp-preview-period">{exp.period}</div>
                </div>

                <p className="exp-preview-desc">{exp.description}</p>

                <div className="exp-preview-skills">
                  {exp.skills.slice(0, 6).map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="section closing-cta-section" aria-label="Contact Call to Action">
        <div className="container">
          <div className="cta-banner wb-card">
            <div className="cta-badge font-mono">
              <span className="status-dot"></span>
              <span>Open to Collaboration</span>
            </div>
            <h2 className="cta-heading">
              Have a complex workflow to{' '}
              <span className="text-gradient">simplify?</span>
            </h2>
            <p className="cta-text">
              Let's discuss backend systems, API development, integrations, and automation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>
              <ResumeLink className="btn btn-secondary btn-lg">
                <FileText size={16} />
                <span>Download Resume</span>
              </ResumeLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
