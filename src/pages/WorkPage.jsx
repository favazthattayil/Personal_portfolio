import React, { useState, useMemo } from 'react';
import { PROJECTS, CATEGORIES, TECH_TAGS, STATUS_FILTERS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Search, Filter, X, SlidersHorizontal, Layers, Check } from 'lucide-react';

export default function WorkPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTech, setSelectedTech] = useState([]);

  // Toggle tech tag
  const handleToggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSelectedTech([]);
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesSubtitle = project.subtitle.toLowerCase().includes(query);
        const matchesProblem = project.problemStatement.toLowerCase().includes(query);
        const matchesSummary = project.contributionSummary.toLowerCase().includes(query);
        const matchesTech = project.stack.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSubtitle && !matchesProblem && !matchesSummary && !matchesTech) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        if (project.categorySlug !== selectedCategory) {
          return false;
        }
      }

      // 3. Status Filter
      if (selectedStatus !== 'all') {
        if (project.statusType !== selectedStatus) {
          return false;
        }
      }

      // 4. Technology Filter (AND condition if multiple selected)
      if (selectedTech.length > 0) {
        const hasAllTech = selectedTech.every((tech) =>
          project.stack.includes(tech)
        );
        if (!hasAllTech) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedStatus, selectedTech]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedStatus !== 'all' ||
    selectedTech.length > 0;

  return (
    <div className="work-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow font-mono">[PORTFOLIO // PRODUCTION SYSTEMS & CASE STUDIES]</span>
          <h1 className="page-title">
            Engineering Portfolio & <br />
            <span className="text-accent">Systems Architecture</span>
          </h1>
          <p className="page-subtitle">
            Searchable index of production platforms, backend APIs, automated calling pipelines, technician tools, and database optimization initiatives.
          </p>
        </div>
      </section>

      {/* Filter Workbench */}
      <section className="work-filter-section">
        <div className="container">
          <div className="filter-panel wb-card">
            {/* Top row: Search and Status */}
            <div className="filter-top-row">
              {/* Search Bar */}
              <div className="search-bar-wrap">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by keyword, architecture, or technology..."
                  className="search-input font-body"
                  aria-label="Search projects"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="clear-search-btn"
                    aria-label="Clear search query"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Status Select */}
              <div className="status-filter-wrap">
                <label className="font-mono text-muted filter-label">STATUS:</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="status-select font-mono"
                  aria-label="Filter by project status"
                >
                  {STATUS_FILTERS.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Action */}
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="btn btn-ghost btn-sm reset-filters-btn font-mono"
                  aria-label="Reset all filters"
                >
                  <X size={14} />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="filter-category-row">
              <span className="font-mono text-muted category-label">CATEGORY:</span>
              <div className="category-tabs" role="tablist" aria-label="Filter by Category">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={selectedCategory === cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`category-tab-btn font-mono ${selectedCategory === cat.id ? 'cat-active' : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Technology Tag Pills */}
            <div className="filter-tech-row">
              <span className="font-mono text-muted tech-label">STACK TAGS:</span>
              <div className="tech-pills-list">
                {TECH_TAGS.map((tech) => {
                  const isSelected = selectedTech.includes(tech);
                  return (
                    <button
                      key={tech}
                      onClick={() => handleToggleTech(tech)}
                      className={`tech-pill-btn font-mono ${isSelected ? 'pill-active' : ''}`}
                      aria-pressed={isSelected}
                    >
                      {isSelected && <Check size={12} className="pill-check" />}
                      <span>{tech}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid & Results Status */}
      <section className="section-sm work-results-section">
        <div className="container">
          {/* Results count & status telemetry */}
          <div className="results-telemetry-bar font-mono">
            <div className="telemetry-left">
              <span className="status-dot"></span>
              <span>
                SHOWING <strong>{filteredProjects.length}</strong> OF {PROJECTS.length} PROJECTS
              </span>
            </div>
            {hasActiveFilters && (
              <div className="telemetry-right text-muted">
                FILTERS ACTIVE
              </div>
            )}
          </div>

          {/* Grid or Empty State */}
          {filteredProjects.length > 0 ? (
            <div className="projects-editorial-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-results-state wb-card">
              <div className="empty-icon-wrap">
                <SlidersHorizontal size={36} className="text-muted" />
              </div>
              <h3 className="empty-title">No projects match the selected criteria</h3>
              <p className="empty-desc">
                Try loosening your search query, deselecting stack tags, or switching category filters.
              </p>
              <button
                onClick={handleClearFilters}
                className="btn btn-primary btn-sm font-mono mt-4"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
