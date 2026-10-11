import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Info, Layers, RefreshCw } from 'lucide-react';

export default function ArchitectureFlow({ project }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!project || !project.architecture || !project.architecture.steps) {
    return null;
  }

  const { title, disclaimer, steps } = project.architecture;

  return (
    <div className="arch-flow-wrapper" aria-label="Interactive Architecture Flow">
      {/* Header and Disclaimer */}
      <div className="arch-flow-header">
        <div className="arch-flow-title-wrap">
          <div className="status-dot"></div>
          <h3 className="arch-flow-title font-mono">{title}</h3>
        </div>
        <div className="arch-disclaimer font-mono">
          <Info size={13} />
          <span>{disclaimer}</span>
        </div>
      </div>

      {/* Horizontal / Step Workflow Diagram */}
      <div className="arch-steps-container">
        <div className="arch-steps-grid">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div key={step.id} className="arch-step-item-wrap">
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`arch-step-card ${isSelected ? 'arch-step-active' : ''}`}
                  aria-label={`Step ${idx + 1}: ${step.name}`}
                  aria-pressed={isSelected}
                >
                  <div className="arch-step-top">
                    <span className="step-num font-mono">0{idx + 1}</span>
                    <span className={`step-type-badge font-mono type-${step.type}`}>
                      {step.type.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="step-name">{step.name}</h4>
                </button>

                {/* Arrow connector between steps (not after last step) */}
                {idx < steps.length - 1 && (
                  <div className="arch-step-connector" aria-hidden="true">
                    <ChevronRight size={18} className="connector-icon" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Detail Card */}
      {steps[activeStep] && (
        <div className="arch-active-step-detail">
          <div className="step-detail-header">
            <div className="step-indicator font-mono">
              <span className="text-accent">STEP 0{activeStep + 1} OF 0{steps.length} :</span>
              <strong>{steps[activeStep].name.toUpperCase()}</strong>
            </div>
            <span className={`badge badge-accent font-mono`}>
              STATUS: VERIFIED WORKFLOW
            </span>
          </div>
          <p className="step-detail-text">{steps[activeStep].desc}</p>
        </div>
      )}
    </div>
  );
}
