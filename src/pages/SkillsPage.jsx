import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SKILL_CATEGORIES } from '../data/skills';
import {
  Cpu,
  Database,
  Zap,
  Layout,
  GitBranch,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function SkillsPage({ onOpenResume }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'databases', label: 'Databases & Query Optimization' },
    { id: 'ai-integrations', label: 'AI & Integrations' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'infrastructure', label: 'Deployment & Tools' },
    { id: 'mobile', label: 'Mobile (Ongoing)' },
    { id: 'familiar', label: 'Familiar Technologies' },
  ];

  const displayedCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeFilter);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'backend':
        return <Cpu size={20} className="text-accent" />;
      case 'databases':
        return <Database size={20} className="text-accent" />;
      case 'ai-integrations':
        return <Zap size={20} className="text-accent" />;
      case 'frontend':
        return <Layout size={20} className="text-accent" />;
      case 'infrastructure':
        return <GitBranch size={20} className="text-accent" />;
      case 'mobile':
        return <Smartphone size={20} className="text-accent" />;
      default:
        return <Sparkles size={20} className="text-accent" />;
    }
  };

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Production Core':
        return 'badge-accent';
      case 'Production Integration':
      case 'Production Experience':
      case 'Production Operations':
        return 'badge-outline';
      case 'Key Achievement':
        return 'badge-award';
      case 'Active Development':
        return 'badge-warning';
      default:
        return 'badge-outline';
    }
  };

  return (
    <div className="skills-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow font-mono">[CAPABILITY MATRIX // TECHNICAL WORKBENCH]</span>
          <h1 className="page-title">
            Engineering Capabilities & <br />
            <span className="text-accent">Technology Specialization</span>
          </h1>
          <p className="page-subtitle">
            A comprehensive mapping of backend services, database tuning, conversational AI, deployment operations, and exploratory tooling.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="skills-filter-section">
        <div className="container">
          <div className="skills-tabs-bar wb-card" role="tablist" aria-label="Skills Category Filter">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`skill-tab-btn font-mono ${activeFilter === tab.id ? 'tab-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Capability Map */}
      <section className="section-sm skills-content-section">
        <div className="container">
          <div className="capability-categories-stack">
            {displayedCategories.map((cat) => (
              <div key={cat.id} className="capability-category-block wb-card">
                {/* Category Header */}
                <div className="cat-block-header">
                  <div className="cat-header-left">
                    <div className="cat-icon-wrap">{getCategoryIcon(cat.id)}</div>
                    <div>
                      <h2 className="cat-title">{cat.title}</h2>
                      <p className="cat-desc">{cat.description}</p>
                    </div>
                  </div>
                  <div className="cat-header-right">
                    <span className="badge badge-accent font-mono">{cat.tag}</span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="skills-items-grid">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-item-card">
                      <div className="skill-item-top font-mono">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`badge ${getLevelBadgeClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="skill-item-detail">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Note */}
      <section className="section-sm">
        <div className="container">
          <div className="skills-summary-banner wb-card font-mono">
            <div className="banner-top">
              <span className="status-dot"></span>
              <span>ENGINEERING INTEGRITY NOTE</span>
            </div>
            <p className="banner-text">
              Skill classifications reflect actual production engineering responsibilities at Axel Technologies and Workpex client assignments. Generic percentages and arbitrary proficiency progress bars are omitted in favor of concrete implementation experience.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner wb-card">
            <h2 className="cta-heading">Ready to discuss these technical capabilities?</h2>
            <p className="cta-text">
              Let's connect to discuss how these backend and automation skills apply to your technical requirements.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Conversation</span>
                <ArrowRight size={15} />
              </Link>
              <button onClick={onOpenResume} className="btn btn-secondary">
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
