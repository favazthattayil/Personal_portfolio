import React, { useState } from 'react';
import { Cpu, Database, Radio, GitBranch, ArrowRight, Zap, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

export default function SystemVisual() {
  const [activeNode, setActiveNode] = useState('laravel-core');

  const nodes = [
    {
      id: 'triggers',
      name: 'Event Ingestion',
      category: 'Inbound Triggers',
      icon: Radio,
      badge: 'TRIGGERS',
      detail: 'Captures service milestones, schedule changes, webhooks, and technician inputs across the platform.',
      metrics: '100+ Workflow Rules Supported',
    },
    {
      id: 'laravel-core',
      name: 'Laravel API Engine',
      category: 'Core Orchestration',
      icon: Cpu,
      badge: 'BACKEND CORE',
      detail: 'RESTful architecture handling business logic, Sanctum auth, rule evaluation, and event subscribers.',
      metrics: 'PHP 8.2 / Laravel MVC / REST APIs',
    },
    {
      id: 'ai-layer',
      name: 'AI Intelligence Node',
      category: 'Integrations',
      icon: Zap,
      badge: 'SPEECH & VISION',
      detail: 'Orchestrates Vapi voice agents for automated calling and OpenAI multimodal API for HVAC equipment identification.',
      metrics: 'Vapi Voice & OpenAI Multimodal',
    },
    {
      id: 'mysql-core',
      name: 'High-Volume MySQL',
      category: 'Database & Search',
      icon: Database,
      badge: 'MILLIONS OF ROWS',
      detail: 'Optimized relational tables, composite indexing, and dynamic query filtering across massive datasets.',
      metrics: 'Optimized Multi-Criteria Queries',
    },
    {
      id: 'infrastructure',
      name: 'Production Delivery',
      category: 'Reliability & Tools',
      icon: GitBranch,
      badge: 'INFRASTRUCTURE',
      detail: 'Git-based release workflows, Linux / Ubuntu servers, SMS/Email gateways, and Razorpay payment transactions.',
      metrics: 'Git-Controlled Releases / Linux',
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <div className="system-visual-workbench" aria-label="Interactive System Architecture Visualization">
      {/* Workbench Header */}
      <div className="workbench-top-bar">
        <div className="workbench-title-group">
          <div className="status-dot"></div>
          <span className="font-mono workbench-label">SYSTEM ARCHITECTURE PIPELINE // BACKEND & AI</span>
        </div>
        <div className="workbench-controls font-mono">
          <span className="workbench-metric">STATE: SYNCHRONIZED</span>
        </div>
      </div>

      {/* Interactive System Canvas */}
      <div className="system-canvas">
        {/* SVG Flow Connections */}
        <svg
          className="system-flow-svg"
          viewBox="0 0 760 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--border-strong)" />
              <stop offset="50%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--border-strong)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines in SVG background */}
          <line x1="50" y1="150" x2="710" y2="150" stroke="var(--border-subtle)" strokeDasharray="4 4" />
          <line x1="230" y1="60" x2="230" y2="240" stroke="var(--border-subtle)" strokeDasharray="4 4" />
          <line x1="530" y1="60" x2="530" y2="240" stroke="var(--border-subtle)" strokeDasharray="4 4" />

          {/* Primary Connection Paths with Animation */}
          {/* Node 1 to Node 2 */}
          <path
            d="M 140 150 L 230 150"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="flow-line-pulse"
          />

          {/* Node 2 to Node 3 (Top Branch) */}
          <path
            d="M 370 150 C 410 150, 420 80, 470 80 L 510 80"
            stroke="url(#flowGrad)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="flow-line-pulse"
          />

          {/* Node 2 to Node 4 (Bottom Branch) */}
          <path
            d="M 370 150 C 410 150, 420 220, 470 220 L 510 220"
            stroke="url(#flowGrad)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="flow-line-pulse"
          />

          {/* Convergence to Node 5 */}
          <path
            d="M 640 80 C 665 80, 675 150, 690 150"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 640 220 C 665 220, 675 150, 690 150"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Node Elements Overlaid on Canvas */}
        <div className="system-nodes-layer">
          {/* Node 1: Triggers */}
          <button
            onClick={() => setActiveNode('triggers')}
            className={`sys-node-card node-pos-1 ${activeNode === 'triggers' ? 'node-active' : ''}`}
            aria-label="Event Ingestion Node"
          >
            <div className="node-chip font-mono">STAGE 01</div>
            <div className="node-title">
              <Radio size={15} className="node-icon" />
              <span>Event Triggers</span>
            </div>
            <div className="node-sub font-mono">Webhooks & Rules</div>
          </button>

          {/* Node 2: Laravel Core */}
          <button
            onClick={() => setActiveNode('laravel-core')}
            className={`sys-node-card node-pos-2 ${activeNode === 'laravel-core' ? 'node-active' : ''}`}
            aria-label="Laravel API Core Node"
          >
            <div className="node-chip font-mono">STAGE 02 · CORE</div>
            <div className="node-title">
              <Cpu size={16} className="node-icon text-accent" />
              <span>Laravel API Engine</span>
            </div>
            <div className="node-sub font-mono">REST / Auth / State Machine</div>
          </button>

          {/* Node 3: AI Layer (Top) */}
          <button
            onClick={() => setActiveNode('ai-layer')}
            className={`sys-node-card node-pos-3 ${activeNode === 'ai-layer' ? 'node-active' : ''}`}
            aria-label="AI Integrations Node"
          >
            <div className="node-chip font-mono">STAGE 03A</div>
            <div className="node-title">
              <Zap size={15} className="node-icon text-accent" />
              <span>AI Calling & Vision</span>
            </div>
            <div className="node-sub font-mono">Vapi Voice & OpenAI API</div>
          </button>

          {/* Node 4: MySQL Optimization (Bottom) */}
          <button
            onClick={() => setActiveNode('mysql-core')}
            className={`sys-node-card node-pos-4 ${activeNode === 'mysql-core' ? 'node-active' : ''}`}
            aria-label="Database Optimization Node"
          >
            <div className="node-chip font-mono">STAGE 03B</div>
            <div className="node-title">
              <Database size={15} className="node-icon" />
              <span>MySQL Optimization</span>
            </div>
            <div className="node-sub font-mono">Indexed Multi-Million Rows</div>
          </button>

          {/* Node 5: Delivery & Tools */}
          <button
            onClick={() => setActiveNode('infrastructure')}
            className={`sys-node-card node-pos-5 ${activeNode === 'infrastructure' ? 'node-active' : ''}`}
            aria-label="Infrastructure & Delivery Node"
          >
            <div className="node-chip font-mono">STAGE 04</div>
            <div className="node-title">
              <GitBranch size={15} className="node-icon" />
              <span>Field Execution</span>
            </div>
            <div className="node-sub font-mono">Git Deploys & P3 Tools</div>
          </button>
        </div>
      </div>

      {/* Interactive Telemetry Inspection Panel */}
      <div className="workbench-telemetry-panel">
        <div className="telemetry-header">
          <div className="telemetry-badge font-mono">
            <span>INSPECTING NODE:</span>
            <strong>{currentNode.name.toUpperCase()}</strong>
          </div>
          <div className="telemetry-metrics font-mono">
            <span className="metric-tag">{currentNode.metrics}</span>
          </div>
        </div>
        <p className="telemetry-desc">{currentNode.detail}</p>
      </div>
    </div>
  );
}
