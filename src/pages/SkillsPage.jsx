import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SKILL_CATEGORIES } from '../data/skills';
import { Cpu, Database, Zap, Layout, GitBranch, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import ResumeLink from '../components/ResumeLink';

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'databases', label: 'Databases' },
    { id: 'ai-integrations', label: 'AI & Integrations' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'infrastructure', label: 'DevOps & Tools' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'familiar', label: 'Familiar' },
  ];

  const displayedCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeFilter);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'backend': return <Cpu size={20} />;
      case 'databases': return <Database size={20} />;
      case 'ai-integrations': return <Zap size={20} />;
      case 'frontend': return <Layout size={20} />;
      case 'infrastructure': return <GitBranch size={20} />;
      case 'mobile': return <Smartphone size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  const getLevelBadge = (level) => {
    if (level === 'Production Core') return 'badge-accent';
    if (level === 'Key Achievement') return 'badge-green';
    if (level === 'Active Development') return 'badge-pink';
    return 'badge-outline';
  };

  return (
    <div className="skills-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Capability Matrix</span>
          <h1 className="page-title">
            Engineering Capabilities &{' '}
            <span className="text-gradient">Technology Stack</span>
          </h1>
          <p className="page-subtitle">
            A comprehensive mapping of backend services, database tuning, conversational AI,
            deployment operations, and exploratory tooling.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '0 0 8px 0' }}>
        <div className="container">
          <div className="skills-category-nav">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`skills-cat-btn ${activeFilter === tab.id ? 'cat-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {displayedCategories.map((cat) => (
              <div key={cat.id} className="wb-card">
                {/* Category Header */}
                <div className="skills-cat-header">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div className="cap-icon-box" style={{ flexShrink: 0 }}>
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <h2 className="skills-cat-title">{cat.title}</h2>
                      <p className="skills-cat-desc">{cat.description}</p>
                    </div>
                  </div>
                  <span className="badge badge-accent">{cat.tag}</span>
                </div>

                {/* Skills Grid */}
                <div className="skills-items-grid">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-item-card wb-card">
                      <div className="skill-item-top">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`badge ${getLevelBadge(skill.level)} skill-level-badge`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="skill-desc">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrity Note */}
      <section className="section-sm">
        <div className="container">
          <div className="wb-card" style={{ padding: '24px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span className="status-dot"></span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>
                Engineering Integrity Note
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              Skill classifications reflect actual production engineering responsibilities. Generic
              percentage bars and arbitrary proficiency scores are omitted in favor of concrete
              implementation experience at Axel Technologies and Workpex.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner wb-card">
            <h2 className="cta-heading">
              Ready to discuss{' '}
              <span className="text-gradient">these capabilities?</span>
            </h2>
            <p className="cta-text">
              Let's connect to discuss how these backend and automation skills apply to your
              technical requirements.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Conversation</span>
                <ArrowRight size={15} />
              </Link>
              <ResumeLink className="btn btn-secondary btn-lg">
                <span>Download Resume</span>
              </ResumeLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
