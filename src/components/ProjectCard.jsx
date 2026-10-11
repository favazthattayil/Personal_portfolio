import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Database, Zap, GitBranch, Layers, Smartphone } from 'lucide-react';

export default function ProjectCard({ project, priority = false }) {
  const getIconForCategory = (cat) => {
    switch (cat) {
      case 'AI & Integrations':
        return <Zap size={16} className="text-accent" />;
      case 'Performance & Data':
        return <Database size={16} className="text-accent" />;
      case 'Automation':
        return <Cpu size={16} className="text-accent" />;
      case 'Mobile & Applications':
        return <Smartphone size={16} className="text-accent" />;
      default:
        return <Layers size={16} className="text-accent" />;
    }
  };

  const getStatusBadgeClass = (statusType) => {
    switch (statusType) {
      case 'production':
        return 'badge-accent';
      case 'assignment':
        return 'badge-outline';
      case 'ongoing':
        return 'badge-warning';
      default:
        return 'badge-outline';
    }
  };

  return (
    <article
      className={`project-card wb-card wb-card-interactive span-${project.gridSpan || 'medium'}`}
      aria-labelledby={`prj-title-${project.id}`}
    >
      <Link to={`/work/${project.slug}`} className="project-card-link-overlay" aria-label={`View ${project.title} Case Study`}>
        {/* Screen reader only */}
        <span className="sr-only">Read full case study for {project.title}</span>
      </Link>

      {/* Top Metadata Bar */}
      <div className="card-top-meta">
        <div className="meta-left">
          <span className="prj-number font-mono">{project.number}</span>
          <span className="meta-divider">/</span>
          <span className="prj-category font-mono">{project.category}</span>
        </div>
        <div className="meta-right">
          <span className={`badge ${getStatusBadgeClass(project.statusType)}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="card-heading-group">
        <div className="category-icon-wrap">
          {getIconForCategory(project.category)}
        </div>
        <h3 id={`prj-title-${project.id}`} className="card-title">
          {project.title}
        </h3>
        <p className="card-subtitle font-mono">{project.subtitle}</p>
      </div>

      {/* One-Line Problem Statement Callout */}
      <div className="card-problem-statement">
        <span className="problem-label font-mono">PROBLEM:</span>
        <p className="problem-text">{project.problemStatement}</p>
      </div>

      {/* Concise Contribution Summary */}
      <div className="card-contribution">
        <span className="contrib-label font-mono">CONTRIBUTION:</span>
        <p className="contrib-text">{project.contributionSummary}</p>
      </div>

      {/* Tech Stack Chips */}
      <div className="card-tech-list">
        {project.stack.slice(0, 5).map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="tech-tag font-mono text-muted">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      {/* Card Footer / Action */}
      <div className="card-footer-action">
        <span className="view-case-study font-mono">
          Explore Case Study
          <ArrowUpRight size={15} className="action-arrow" />
        </span>
        <span className="card-context font-mono text-muted">{project.period}</span>
      </div>
    </article>
  );
}
