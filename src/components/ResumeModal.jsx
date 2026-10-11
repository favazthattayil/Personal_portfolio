import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, ExternalLink, MapPin, Award, CheckCircle } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const markdownContent = `# Favas T
**Software Engineer | Backend Systems & AI Integrations**
Email: favast2000@gmail.com
Location: Malappuram, Kerala, India
LinkedIn: https://linkedin.com/in/favas-t-963751255
GitHub: https://github.com/favazthattayil

---

## PROFESSIONAL SUMMARY
Software Engineer with 3+ years of production experience building and maintaining business-critical software, backend APIs, AI-enabled workflows, and technician-facing tools. Experience includes a production HVAC service platform for a U.S.-based company, CRM optimization across millions of records, automated customer communication, and deployment workflow improvements.

Central message: "I build reliable backend systems, automate complex workflows, and turn practical business problems into production-ready software."

---

## WORK EXPERIENCE

### Axel Technologies Pvt. Ltd. — Calicut Cyberpark, Kerala
**Software Engineer** (Promoted from Associate Software Engineer)
*August 2023 – Present*
* Awarded **Best Performance Award** for technical delivery and consistency.
* Core backend contributor to the P3 production HVAC platform for a U.S.-based client.
* Architected Athena: an AI-driven voice calling workflow integrating Vapi for automated appointment scheduling, follow-ups, and audio recording pipelines.
* Engineered a Laravel communication automation engine supporting 100+ business workflow conditions for automated Email & SMS dispatch.
* Spearheaded migration from legacy manual FTP releases to version-controlled, Git-based production deployments.
* Developed technician-facing tools in the P3 Toolbox, including ID Pro with OpenAI API for AI-assisted HVAC equipment nameplate identification and Repair vs Replace decision guidance.
* Building supporting REST APIs and mobile synchronization logic for the ongoing Flutter mobile application with offline-first synchronization.

### Workpex — Calicut, Kerala
**Software Engineer (Client Assignment)**
*May 2025 – November 2025*
* Assigned to Workpex, a subsidiary of Axel Technologies, to resolve critical backend performance bottlenecks in their CRM platform. Returned to Axel Technologies on client request upon completion.
* Optimized search queries and multi-criteria filtering across datasets containing millions of rows in MySQL.
* Built automated lead-status transition logic based on user engagement thresholds and activity milestones.
* Engineered lead-value reporting modules to aggregate and forecast sales pipeline revenue without locking transactional tables.
* Implemented dynamic backend filtering in Laravel to process compound criteria cleanly.

---

## TECHNICAL SKILLS
* **Backend:** PHP, Laravel, Lumen, REST API Design, Eloquent ORM, Authentication & Sessions, Workflow Automation
* **Databases:** MySQL, SQL Query Optimization, Large-Dataset Search, Supabase, PostgreSQL
* **AI & Integrations:** OpenAI API (Vision & Text), Vapi (AI Voice Calling), Razorpay Payment Gateway, Webhooks, REST APIs
* **Frontend:** React.js, JavaScript (ES6+), Redux, Redux Toolkit, HTML5, CSS3, SCSS, Bootstrap, Axios, React Router
* **Tools & Infrastructure:** Git, GitHub, Version-Controlled Releases, Linux / Ubuntu Servers, Composer, npm, Server Troubleshooting
* **Mobile (Ongoing):** Flutter, Firebase, Offline/Online Data Synchronization, Dart
* **Familiar with:** Node.js, Next.js, TypeScript, MongoDB, AWS

---

## EDUCATION
* **Bachelor of Computer Applications (BCA)** — IGNOU (Pursuing; currently completing final project)
* **Diploma in Electronics & Communication** — AKNM Government Polytechnic College, Chelari
* **Higher Secondary Education** — PPTMYHSS, Cherur (2016 – 2018)

---

## SELECTED PROJECTS
* **Athena — AI Calling Assistant:** Automated calling workflow using Laravel and Vapi with recording ingestion and analytics dashboard.
* **P3 Toolbox & ID Pro:** AI-assisted equipment identification from nameplate photos using OpenAI API, plus Repair vs Replace logic and Razorpay integration.
* **Client Communication Automation:** Configurable rule engine supporting 100+ conditions for automated Email and SMS messages.
* **Workpex CRM Search Optimization:** Backend query optimization and dynamic filtering across multi-million-row MySQL datasets.
* **Office Management Application:** Independently designed and built Laravel system for car-rental and staff operations.
* **Flutter Mobile App & Offline Sync:** Ongoing mobile application with Firebase and supporting Laravel REST APIs for uninterrupted field work.
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Favas_T_Software_Engineer_Resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Favas T Resume Document"
    >
      <div className="resume-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-modal-topbar no-print">
          <div className="modal-title font-mono">
            <span className="status-dot"></span>
            <span>VERIFIED RESUME // FAVAS T</span>
          </div>

          <div className="modal-actions">
            <button
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="btn btn-secondary btn-sm"
              title="Download Markdown formatted resume"
            >
              <Download size={15} />
              <span>Download .md</span>
            </button>

            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close Resume Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Content */}
        <div className="resume-document-sheet" id="printable-resume">
          {/* Header */}
          <header className="resume-header">
            <div className="resume-header-top">
              <div>
                <h1 className="resume-name">FAVAS T</h1>
                <p className="resume-title font-mono">
                  Software Engineer | Backend Systems & AI Integrations
                </p>
              </div>
              <div className="resume-award-badge font-mono">
                <Award size={14} className="text-accent" />
                <span>Best Performance Award</span>
              </div>
            </div>

            <div className="resume-contact-bar font-mono">
              <span><Mail size={12} /> favast2000@gmail.com</span>
              <span><MapPin size={12} /> Malappuram, Kerala, India</span>
              <a href="https://linkedin.com/in/favas-t-963751255" target="_blank" rel="noreferrer">
                linkedin.com/in/favas-t-963751255
              </a>
              <a href="https://github.com/favazthattayil" target="_blank" rel="noreferrer">
                github.com/favazthattayil
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="resume-sec-title font-mono">PROFESSIONAL SUMMARY</h2>
            <p className="resume-summary-text">
              Software Engineer with 3+ years of production experience building and maintaining business-critical software, backend APIs, AI-enabled workflows, and technician-facing tools. Experience includes a production HVAC service platform for a U.S.-based company, CRM optimization across millions of records, automated customer communication, and deployment workflow improvements.
            </p>
            <p className="resume-quote font-mono">
              "I build reliable backend systems, automate complex workflows, and turn practical business problems into production-ready software."
            </p>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="resume-sec-title font-mono">WORK EXPERIENCE</h2>

            {/* Axel Technologies */}
            <div className="resume-job-block">
              <div className="job-header">
                <div>
                  <h3 className="job-role">Software Engineer (Promoted from Associate)</h3>
                  <div className="job-company font-mono">Axel Technologies Pvt. Ltd. · Calicut Cyberpark, Kerala</div>
                </div>
                <div className="job-dates font-mono">August 2023 – Present</div>
              </div>
              <div className="job-award-tag font-mono">
                ★ Best Performance Award Recipient
              </div>
              <ul className="resume-bullet-list">
                <li>Core backend contributor to the P3 production HVAC platform for a U.S.-based client company.</li>
                <li>Architected <strong>Athena</strong>: an AI-driven voice calling workflow integrating Vapi for automated appointment scheduling, follow-ups, and audio recording pipelines.</li>
                <li>Engineered a Laravel communication automation engine supporting <strong>100+ business workflow conditions</strong> for automated Email & SMS dispatch.</li>
                <li>Spearheaded migration from legacy manual FTP releases to version-controlled, Git-based production deployments.</li>
                <li>Developed technician-facing tools in the P3 Toolbox, including ID Pro with OpenAI API for AI-assisted HVAC equipment nameplate identification and Repair vs Replace decision guidance.</li>
                <li>Building supporting REST APIs and mobile synchronization logic for the ongoing Flutter mobile application with offline-first synchronization.</li>
              </ul>
            </div>

            {/* Workpex Assignment */}
            <div className="resume-job-block">
              <div className="job-header">
                <div>
                  <h3 className="job-role">Software Engineer (Client Assignment)</h3>
                  <div className="job-company font-mono">Workpex (Subsidiary of Axel Technologies) · Calicut, Kerala</div>
                </div>
                <div className="job-dates font-mono">May 2025 – November 2025</div>
              </div>
              <p className="resume-note font-mono text-muted">
                * Assigned to resolve CRM bottlenecks; returned to Axel Technologies on client request upon completion.
              </p>
              <ul className="resume-bullet-list">
                <li>Optimized search queries and multi-criteria filtering across CRM datasets containing <strong>millions of rows</strong> in MySQL.</li>
                <li>Built automated lead-status transition logic based on user engagement thresholds and activity milestones.</li>
                <li>Engineered lead-value reporting modules to aggregate and forecast sales pipeline revenue without locking transactional tables.</li>
                <li>Implemented dynamic backend filtering in Laravel to process compound criteria cleanly.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-sec-title font-mono">TECHNICAL SKILLS</h2>
            <div className="resume-skills-grid">
              <div className="skill-line">
                <strong className="font-mono">Backend:</strong>
                <span>PHP, Laravel, Lumen, REST API Design, Eloquent ORM, Authentication & Sessions, Workflow Automation</span>
              </div>
              <div className="skill-line">
                <strong className="font-mono">Databases:</strong>
                <span>MySQL, SQL Query Optimization, Large-Dataset Search, Supabase, PostgreSQL</span>
              </div>
              <div className="skill-line">
                <strong className="font-mono">AI & Integrations:</strong>
                <span>OpenAI API (Vision & Text), Vapi (AI Voice Calling), Razorpay Payment Gateway, Webhooks, REST APIs</span>
              </div>
              <div className="skill-line">
                <strong className="font-mono">Frontend:</strong>
                <span>React.js, JavaScript (ES6+), Redux, Redux Toolkit, HTML5, CSS3, SCSS, Bootstrap, Axios, React Router</span>
              </div>
              <div className="skill-line">
                <strong className="font-mono">Tools & DevOps:</strong>
                <span>Git, GitHub, Version-Controlled Releases, Linux / Ubuntu Servers, Composer, npm, Server Troubleshooting</span>
              </div>
              <div className="skill-line">
                <strong className="font-mono">Mobile (Ongoing):</strong>
                <span>Flutter, Firebase, Offline/Online Data Synchronization, Dart</span>
              </div>
              <div className="skill-line">
                <strong className="font-mono">Familiar With:</strong>
                <span>Node.js, Next.js, TypeScript, MongoDB, AWS</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-sec-title font-mono">EDUCATION</h2>
            <div className="resume-edu-list">
              <div className="edu-item">
                <div className="edu-name"><strong>Bachelor of Computer Applications (BCA)</strong> — IGNOU</div>
                <div className="edu-meta font-mono text-muted">Currently pursuing — working on final project</div>
              </div>
              <div className="edu-item">
                <div className="edu-name"><strong>Diploma in Electronics & Communication</strong> — AKNM Govt. Polytechnic College, Chelari</div>
                <div className="edu-meta font-mono text-muted">Completed Engineering Diploma</div>
              </div>
              <div className="edu-item">
                <div className="edu-name"><strong>Higher Secondary Education</strong> — PPTMYHSS, Cherur</div>
                <div className="edu-meta font-mono text-muted">2016 – 2018</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
