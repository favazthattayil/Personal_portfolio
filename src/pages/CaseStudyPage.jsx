import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import ArchitectureFlow from '../components/ArchitectureFlow';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  Cpu,
  Database,
  Calendar,
  User,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Award
} from 'lucide-react';

export default function CaseStudyPage() {
  const { slug } = useParams();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[currentIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const relatedProjects = PROJECTS.filter(
    (p) => p.id !== project.id && (p.categorySlug === project.categorySlug || p.featured)
  ).slice(0, 2);

  return (
    <article className="case-study-page" aria-labelledby="case-study-title">
      {/* 1. HERO & METADATA BANNER */}
      <section className="case-study-hero">
        <div className="container">
          {/* Back link */}
          <div className="case-study-back-wrap">
            <Link to="/work" className="btn btn-ghost btn-sm font-mono back-to-work-link">
              <ArrowLeft size={15} />
              <span>Back to Work Directory</span>
            </Link>
          </div>

          <div className="case-study-header-content">
            <div className="case-study-meta-tags">
              <span className="font-mono prj-id-tag">{project.number}</span>
              <span className="badge badge-accent font-mono">{project.status}</span>
              <span className="badge badge-outline font-mono">{project.category}</span>
              {project.isOngoing && (
                <span className="badge badge-warning font-mono">ONGOING INITIATIVE</span>
              )}
            </div>

            <h1 id="case-study-title" className="case-study-title">
              {project.title}
            </h1>

            <p className="case-study-subtitle font-mono">
              {project.subtitle}
            </p>

            {/* Quick Metadata Bar */}
            <div className="case-study-meta-grid wb-card font-mono">
              <div className="meta-grid-item">
                <span className="meta-item-label text-muted">ROLE</span>
                <span className="meta-item-val">{project.role}</span>
              </div>
              <div className="meta-grid-item">
                <span className="meta-item-label text-muted">ORGANIZATION / CONTEXT</span>
                <span className="meta-item-val">{project.context}</span>
              </div>
              <div className="meta-grid-item">
                <span className="meta-item-label text-muted">TIMELINE</span>
                <span className="meta-item-val">{project.period}</span>
              </div>
              <div className="meta-grid-item">
                <span className="meta-item-label text-muted">PRIMARY STACK</span>
                <span className="meta-item-val">{project.stack.slice(0, 3).join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PROBLEM STATEMENT */}
      <section className="section-sm case-study-section">
        <div className="container">
          <div className="case-study-grid-split">
            {/* Left Column: Context & Problem */}
            <div className="content-col-left">
              <div className="cs-block">
                <span className="eyebrow font-mono">[01 // BUSINESS CONTEXT]</span>
                <h2 className="cs-section-heading">Operational Background</h2>
                <p>{project.businessContext}</p>
              </div>

              <div className="cs-block">
                <span className="eyebrow font-mono">[02 // CORE PROBLEM]</span>
                <h2 className="cs-section-heading">The Challenge Being Solved</h2>
                <div className="cs-problem-box wb-card">
                  <p className="problem-highlight-text">{project.problem}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Project Goals & Metrics */}
            <div className="content-col-right">
              <div className="cs-goals-box wb-card">
                <div className="cs-box-top font-mono">
                  <span className="status-dot"></span>
                  <span>ENGINEERING GOALS</span>
                </div>
                <ul className="cs-goals-list">
                  {project.goals.map((goal, i) => (
                    <li key={i} className="cs-goal-item">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Metrics Box */}
              {project.metrics && (
                <div className="cs-metrics-box wb-card mt-4">
                  <div className="cs-box-top font-mono">
                    <span className="text-muted">SYSTEM TELEMETRY</span>
                  </div>
                  <div className="metrics-list-vertical">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="metric-row font-mono">
                        <span className="metric-lbl text-muted">{m.label}:</span>
                        <strong className="metric-v text-accent">{m.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL ARCHITECTURE FLOW DIAGRAM */}
      <section className="section-sm case-study-arch-section">
        <div className="container">
          <span className="eyebrow font-mono">[03 // ARCHITECTURE & WORKFLOW]</span>
          <h2 className="cs-section-heading mb-6">Technical Architecture Diagram</h2>

          <ArchitectureFlow project={project} />
        </div>
      </section>

      {/* 4. FAVAS'S INDIVIDUAL CONTRIBUTIONS & IMPLEMENTATION */}
      <section className="section-sm case-study-section">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow font-mono">[04 // INDIVIDUAL RESPONSIBILITY]</span>
            <h2 className="cs-section-heading">My Engineering Contributions</h2>
            <p className="section-subtitle">
              Exact technical responsibilities and implementations authored and delivered by Favas T.
            </p>
          </div>

          <div className="contributions-grid">
            {project.favasContribution.map((item, idx) => (
              <div key={idx} className="contrib-item wb-card">
                <div className="contrib-num font-mono text-accent">0{idx + 1}</div>
                <p className="contrib-text">{item}</p>
              </div>
            ))}
          </div>

          {/* Implementation Details */}
          {project.implementationDetails && (
            <div className="implementation-blocks-section mt-8">
              <h3 className="subheading font-mono text-muted mb-4">
                DEEP-DIVE IMPLEMENTATION MODULES
              </h3>
              <div className="grid-2">
                {project.implementationDetails.map((impl, idx) => (
                  <div key={idx} className="impl-card wb-card">
                    <div className="impl-top font-mono">
                      <Cpu size={15} className="text-accent" />
                      <span>{impl.title}</span>
                    </div>
                    <p className="impl-desc">{impl.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK BREAKDOWN */}
      <section className="section-sm case-study-section">
        <div className="container">
          <div className="stack-breakdown-card wb-card">
            <div className="stack-top font-mono">
              <span className="status-dot"></span>
              <span>VERIFIED TECH STACK DEPLOYED</span>
            </div>
            <div className="stack-tags-expanded">
              {project.stack.map((tech) => (
                <div key={tech} className="expanded-tech-tag font-mono">
                  <span className="tech-bullet">•</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING CHALLENGES & FACTUAL VERIFICATION */}
      <section className="section-sm case-study-section">
        <div className="container">
          <div className="section-header-compact">
            <span className="eyebrow font-mono">[05 // VERIFICATION & INTEGRITY]</span>
            <h2 className="cs-section-heading">Documented Facts & Clarifications</h2>
            <p className="section-subtitle">
              Maintaining engineering integrity by distinguishing verified production facts from third-party vendor systems or areas requiring confirmation.
            </p>
          </div>

          <div className="facts-grid">
            {project.technicalFacts.map((fact, idx) => (
              <div key={idx} className="fact-card wb-card">
                <div className="fact-header font-mono">
                  <ShieldCheck size={16} className="text-accent" />
                  <span className="fact-title">{fact.fact}</span>
                  <span className="badge badge-accent ml-auto">VERIFIED RECORD</span>
                </div>
                <p className="fact-detail">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PREVIOUS / NEXT PROJECT NAVIGATION */}
      <section className="section-sm prev-next-section">
        <div className="container">
          <div className="prev-next-grid">
            <Link to={`/work/${prevProject.slug}`} className="prev-card wb-card">
              <div className="pn-label font-mono text-muted">
                <ChevronLeft size={14} />
                <span>PREVIOUS CASE STUDY</span>
              </div>
              <div className="pn-title">{prevProject.title}</div>
            </Link>

            <Link to={`/work/${nextProject.slug}`} className="next-card wb-card">
              <div className="pn-label font-mono text-muted">
                <span>NEXT CASE STUDY</span>
                <ChevronRight size={14} />
              </div>
              <div className="pn-title">{nextProject.title}</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA */}
      <section className="section-sm case-study-cta-section">
        <div className="container">
          <div className="cta-banner wb-card">
            <h2 className="cta-heading">Want to discuss this architecture?</h2>
            <p className="cta-text">
              Reach out to talk through backend implementations, API design, or workflow automation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Conversation</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/work" className="btn btn-secondary">
                <span>Explore More Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
