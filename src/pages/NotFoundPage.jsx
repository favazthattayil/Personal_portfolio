import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Home, Layers, Terminal } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-workbench wb-card">
          <div className="workbench-top font-mono">
            <span className="status-dot"></span>
            <span>DIAGNOSTIC EXCEPTION // HTTP 404</span>
          </div>

          <div className="error-code font-mono text-accent">404</div>

          <h1 className="error-title">Route Endpoint Not Found</h1>

          <p className="error-desc">
            The requested URI does not match any registered route in the portfolio routing table.
            The system remains operational.
          </p>

          <div className="error-telemetry font-mono">
            <div className="diag-line">
              <span className="text-muted">ROUTER_STATUS:</span> 404_NO_MATCH
            </div>
            <div className="diag-line">
              <span className="text-muted">LOCATION:</span> {window.location.pathname}
            </div>
            <div className="diag-line">
              <span className="text-muted">RECOVERY_ACTION:</span> DISPATCH_TO_KNOWN_ENDPOINT
            </div>
          </div>

          <div className="recovery-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={15} />
              <span>Return to Home</span>
            </Link>
            <Link to="/work" className="btn btn-secondary">
              <Layers size={15} />
              <span>Explore Projects</span>
            </Link>
            <Link to="/contact" className="btn btn-ghost font-mono">
              <span>Report Issue</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
