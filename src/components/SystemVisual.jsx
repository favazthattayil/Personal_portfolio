import React, { useState } from 'react';
import { ArrowRight, Cpu, Database, GitBranch, Radio, Zap } from 'lucide-react';

const nodes = [
  {
    id: 'triggers',
    name: 'Event Triggers',
    category: 'Webhooks & Rules',
    icon: Radio,
    stage: 'STAGE 01',
    metrics: '100+ Workflow Rules Supported',
    detail: 'Captures service milestones, schedule changes, webhooks, and technician inputs across the platform.',
  },
  {
    id: 'laravel-core',
    name: 'Laravel API Engine',
    category: 'REST / Auth / State Machine',
    icon: Cpu,
    stage: 'STAGE 02 · CORE',
    metrics: 'PHP 8.2 / Laravel MVC / REST APIs',
    detail: 'RESTful architecture handling business logic, Sanctum auth, rule evaluation, and event subscribers.',
  },
  {
    id: 'ai-layer',
    name: 'AI Calling & Vision',
    category: 'Vapi Voice & OpenAI API',
    icon: Zap,
    stage: 'STAGE 03A',
    metrics: 'Vapi Voice & OpenAI Multimodal',
    detail: 'Orchestrates Vapi voice agents for automated calling and OpenAI multimodal API for HVAC equipment identification.',
  },
  {
    id: 'mysql-core',
    name: 'MySQL Optimization',
    category: 'Indexed Multi-Million Rows',
    icon: Database,
    stage: 'STAGE 03B',
    metrics: 'Optimized Multi-Criteria Queries',
    detail: 'Optimized relational tables, composite indexing, and dynamic query filtering across massive datasets.',
  },
  {
    id: 'infrastructure',
    name: 'Field Execution',
    category: 'Git Deploys & P3 Tools',
    icon: GitBranch,
    stage: 'STAGE 04',
    metrics: 'Git-Controlled Releases / Linux',
    detail: 'Git-based release workflows, Linux / Ubuntu servers, SMS/Email gateways, and Razorpay payment transactions.',
  },
];

function ArchitectureNode({ node, active, onSelect }) {
  const Icon = node.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(node.id)}
      className={`sys-node-card ${active ? 'node-active' : ''}`}
      aria-pressed={active}
    >
      <span className="node-chip font-mono">{node.stage}</span>
      <span className="node-title">
        <Icon size={16} className="node-icon" aria-hidden="true" />
        <span>{node.name}</span>
      </span>
      <span className="node-sub font-mono">{node.category}</span>
    </button>
  );
}

function FlowConnector({ active }) {
  return (
    <div className={`system-flow-connector ${active ? 'connector-active' : ''}`} aria-hidden="true">
      <span className="system-flow-line" />
      <ArrowRight className="system-flow-arrow" size={14} />
    </div>
  );
}

export default function SystemVisual() {
  const [activeNode, setActiveNode] = useState('laravel-core');
  const currentNode = nodes.find((node) => node.id === activeNode) ?? nodes[1];
  const currentNodeIndex = nodes.findIndex((node) => node.id === activeNode);
  const progress = (currentNodeIndex / (nodes.length - 1)) * 100;

  return (
    <section className="system-visual-workbench" aria-label="Interactive system architecture pipeline">
      <div className="workbench-top-bar">
        <div className="workbench-title-group">
          <div className="status-dot" aria-hidden="true" />
          <span className="font-mono workbench-label">SYSTEM ARCHITECTURE PIPELINE // BACKEND & AI</span>
        </div>
        <div className="workbench-controls font-mono">
          <span className="workbench-metric">STATE: SYNCHRONIZED</span>
        </div>
      </div>

      <div className="system-canvas">
      <div className="pipeline-progress" aria-label={`Pipeline stage ${currentNodeIndex + 1} of ${nodes.length}`}>
        <span className="pipeline-progress-label font-mono">
          PIPELINE STAGE <strong>{String(currentNodeIndex + 1).padStart(2, '0')}</strong> / {String(nodes.length).padStart(2, '0')}
        </span>
        <div className="pipeline-progress-track" aria-hidden="true">
          <span className="pipeline-progress-fill" style={{ width: `${progress}%` }} />
          {nodes.map((node, index) => (
            <span
              key={node.id}
              className={`pipeline-progress-stop ${index <= currentNodeIndex ? 'progress-stop-reached' : ''}`}
              style={{ left: `${(index / (nodes.length - 1)) * 100}%` }}
            />
          ))}
        </div>
      </div>
      <div className="system-flow-layout">
        <ArchitectureNode
          node={nodes[0]}
            active={activeNode === nodes[0].id}
            onSelect={setActiveNode}
          />
          <FlowConnector active={currentNodeIndex >= 1} />
          <ArchitectureNode
            node={nodes[1]}
            active={activeNode === nodes[1].id}
            onSelect={setActiveNode}
          />
          <FlowConnector active={currentNodeIndex >= 2} />
          <div className="system-branch-group" aria-label="Core service branches">
            {nodes.slice(2, 4).map((node) => (
              <ArchitectureNode
                key={node.id}
                node={node}
                active={activeNode === node.id}
                onSelect={setActiveNode}
              />
            ))}
          </div>
          <FlowConnector active={currentNodeIndex >= 4} />
          <ArchitectureNode
            node={nodes[4]}
            active={activeNode === nodes[4].id}
            onSelect={setActiveNode}
          />
        </div>
      </div>

      <div className="workbench-telemetry-panel" aria-live="polite">
        <div className="telemetry-content" key={currentNode.id}>
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
    </section>
  );
}
