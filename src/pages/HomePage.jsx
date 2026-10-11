import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { TIMELINE_EXPERIENCE, CAREER_STATS } from '../data/experience';
import ProjectCard from '../components/ProjectCard';
import SystemVisual from '../components/SystemVisual';
import { ArrowRight, ArrowUpRight, Cpu, Database, Zap, GitBranch, Award, CheckCircle2, FileText, Layers, ShieldCheck } from 'lucide-react';

export default function HomePage({ onOpenResume }) {
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
      tag: 'PRODUCTION OPERATIONS',
      desc: 'Modernizing release pipelines from legacy manual FTP uploads to version-controlled Git workflows, configuring Linux/Ubuntu web servers, and resolving production bottlenecks.',
      projectLink: '/experience',
      projectLabel: 'View Experience Timeline',
    },
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="container hero-container">
          <div className="hero-split-layout">
            {/* Left Editorial Content */}
            <div className="hero-editorial">
              <div className="hero-meta-badges">
                <span className="badge badge-accent font-mono">
                  <span className="status-dot"></span>
                  SOFTWARE ENGINEER
                </span>
                <span className="badge badge-outline font-mono">
                  3+ YEARS PROD
                </span>
                <span className="badge badge-outline font-mono">
                  KERALA, INDIA
                </span>
              </div>

              <h1 className="hero-heading">
                Engineering reliable systems. <br />
                <span className="text-accent">Automating what matters.</span>
              </h1>

              <p className="hero-subheading">
                I'm Favas, a Software Engineer building Laravel APIs, AI-powered workflows, and production systems that solve real business problems.
              </p>

              <div className="hero-cta-group">
                <Link to="/work" className="btn btn-primary btn-lg">
                  <span>Explore My Work</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  <span>Get in Touch</span>
                </Link>
                <button
                  onClick={onOpenResume}
                  className="btn btn-ghost btn-lg hero-resume-link"
                >
                  <FileText size={16} />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Technical Telemetry Chips */}
              <div className="hero-telemetry font-mono">
                <div className="telemetry-item">
                  <span className="text-muted">FOCUS:</span>
                  <span>Laravel / REST / AI Integrations / MySQL</span>
                </div>
                <div className="telemetry-item">
                  <span className="text-muted">LOCATION:</span>
                  <span>Malappuram, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Right Abstract System Visualization */}
            <div className="hero-visual-col">
              <SystemVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED ENGINEERING OUTCOMES (EVIDENCE-BASED) */}
      <section className="section outcomes-section" aria-label="Key Engineering Outcomes">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow font-mono">[01 // EVIDENCE-BASED OUTCOMES]</span>
            <h2 className="section-title">Measurable Production Contributions</h2>
            <p className="section-subtitle">
              Verified outcomes from 3+ years building and scaling mission-critical systems at Axel Technologies and client assignments.
            </p>
          </div>

          <div className="outcomes-grid">
            <div className="outcome-card wb-card">
              <div className="outcome-metric font-mono text-accent">100+</div>
              <div className="outcome-label font-mono">WORKFLOW CONDITIONS</div>
              <p className="outcome-desc">
                Engineered a dynamic Laravel communication rule engine evaluating over 100 business conditions to automate client Email and SMS notifications without code changes.
              </p>
              <div className="outcome-badge font-mono">CLIENT COMMUNICATION ENGINE</div>
            </div>

            <div className="outcome-card wb-card">
              <div className="outcome-metric font-mono text-accent">Millions</div>
              <div className="outcome-label font-mono">ROWS OPTIMIZED</div>
              <p className="outcome-desc">
                Restructured slow relational queries, created composite indexing, and eliminated bottlenecks across multi-million-row CRM lead tables at Workpex.
              </p>
              <div className="outcome-badge font-mono">WORKPEX CRM ASSIGNMENT</div>
            </div>

            <div className="outcome-card wb-card">
              <div className="outcome-metric font-mono text-accent">Git</div>
              <div className="outcome-label font-mono">DEPLOYMENT MIGRATION</div>
              <p className="outcome-desc">
                Transitioned production release processes away from brittle manual FTP file uploads to modern, version-controlled Git deployment workflows.
              </p>
              <div className="outcome-badge font-mono">INFRASTRUCTURE MODERNIZATION</div>
            </div>

            <div className="outcome-card wb-card">
              <div className="outcome-metric font-mono text-accent">Award</div>
              <div className="outcome-label font-mono">BEST PERFORMANCE</div>
              <p className="outcome-desc">
                Honored with the Best Performance Award at Axel Technologies Pvt. Ltd. for technical leadership, reliable delivery, and production platform stewardship.
              </p>
              <div className="outcome-badge font-mono">AXEL TECHNOLOGIES PVT. LTD.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK */}
      <section className="section selected-work-section" aria-label="Selected Engineering Projects">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="eyebrow font-mono">[02 // SELECTED WORK]</span>
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
            <span className="eyebrow font-mono">[03 // TECHNICAL FOCUS]</span>
            <h2 className="section-title">Engineering Capabilities</h2>
            <p className="section-subtitle">
              How I approach architectural challenges, backend resilience, intelligent integrations, and platform stability.
            </p>
          </div>

          <div className="grid-2 capabilities-grid">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.id} className="capability-card wb-card">
                  <div className="cap-header">
                    <div className="cap-icon-box">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <span className="badge badge-outline font-mono">{cap.tag}</span>
                  </div>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.desc}</p>
                  <Link to={cap.projectLink} className="cap-link font-mono">
                    <span>{cap.projectLabel}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL EXPERIENCE PREVIEW */}
      <section className="section experience-preview-section" aria-label="Career Timeline Preview">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="eyebrow font-mono">[04 // CAREER PATH]</span>
              <h2 className="section-title">Experience & Assignments</h2>
              <p className="section-subtitle">
                Consistent engineering growth and client assignments in high-velocity software production.
              </p>
            </div>
            <div className="section-action-desktop">
              <Link to="/experience" className="btn btn-secondary">
                <span>Full Experience Timeline</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="exp-preview-cards">
            {TIMELINE_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="exp-preview-item wb-card">
                <div className="exp-preview-top">
                  <div>
                    <span className="badge badge-accent font-mono mb-2">{exp.badge}</span>
                    <h3 className="exp-preview-role">{exp.role}</h3>
                    <div className="exp-preview-company font-mono text-muted">
                      {exp.company} · {exp.location}
                    </div>
                  </div>
                  <div className="exp-preview-period font-mono">
                    {exp.period}
                  </div>
                </div>

                <p className="exp-preview-desc">{exp.description}</p>

                <div className="exp-preview-skills">
                  {exp.skills.slice(0, 6).map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="section closing-cta-section" aria-label="Closing Contact Call to Action">
        <div className="container">
          <div className="cta-banner wb-card">
            <div className="cta-badge font-mono">
              <span className="status-dot"></span>
              <span>GET IN TOUCH // ENGINEERING COLLABORATION</span>
            </div>
            <h2 className="cta-heading">
              Have a complex workflow to simplify?
            </h2>
            <p className="cta-text">
              Let's discuss backend systems, API development, integrations, and automation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>
              <button onClick={onOpenResume} className="btn btn-secondary btn-lg">
                <FileText size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
