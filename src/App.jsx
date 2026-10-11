import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // instant scroll to top on route change
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => setResumeOpen(true);
  const handleCloseResume = () => setResumeOpen(false);

  return (
    <div className="app-layout">
      <ScrollToTop />
      
      {/* Persistent Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Area */}
      <main id="main-content" className="main-content-flow" role="main">
        <Routes>
          <Route path="/" element={<HomePage onOpenResume={handleOpenResume} />} />
          <Route path="/about" element={<AboutPage onOpenResume={handleOpenResume} />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/experience" element={<ExperiencePage onOpenResume={handleOpenResume} />} />
          <Route path="/skills" element={<SkillsPage onOpenResume={handleOpenResume} />} />
          <Route path="/contact" element={<ContactPage onOpenResume={handleOpenResume} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Global Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
