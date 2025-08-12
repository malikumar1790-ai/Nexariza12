import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Team } from './pages/Team';
import { Portfolio } from './pages/Portfolio';
import { Testimonials } from './pages/Testimonials';
import { ProjectBuilder } from './pages/ProjectBuilder';
import { Milestones } from './pages/Milestones';
import { Contact } from './pages/Contact';
import { VoiceAI } from './pages/VoiceAI';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/project-builder" element={<ProjectBuilder />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/voice-ai" element={<VoiceAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;