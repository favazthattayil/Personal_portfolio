import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,111,255,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none'
      }} />

      <div className="not-found-code">404</div>
      <h1 className="not-found-title">Page Not Found</h1>
      <p className="not-found-desc">
        This endpoint doesn't exist in the system. The route you requested may have been
        moved, removed, or never existed.
      </p>
      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary btn-lg">
          <Home size={16} />
          <span>Back to Home</span>
        </Link>
        <Link to="/work" className="btn btn-secondary btn-lg">
          <span>View My Work</span>
        </Link>
      </div>
    </div>
  );
}
