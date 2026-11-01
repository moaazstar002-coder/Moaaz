import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import './styles/theme.css';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  // Fast & Snappy Preloader Timer (under 1.1s instead of 2.8s!)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  // Section Observer for Smooth Active Section Spy on Scroll
  useEffect(() => {
    const sectionIds = ['home', 'about-me', 'skills', 'projects', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080e] text-[#f1f5f9] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Snappy Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Zero Re-Render GPU Cursor */}
      <CustomCursor />

      {/* Top Luminous Scroll Progress */}
      <ScrollProgress />

      {/* Sticky Top Header Navigation */}
      <Navigation onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Floating Island Action Dock */}
      <Sidebar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero id="home" onNavigate={scrollToSection} />
        <About id="about-me" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>

      {/* Minimalist Tech Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
