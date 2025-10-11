import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
import Dev_Team_Page from './pages/Dev_Team_Page';
import SlimesPage from './pages/SlimesPage';
import WikiDevPage from './pages/WikiDevPage';
import ArchitecturePage from './pages/ArchitecturePage';

import { DarkModeProvider } from './contexts/DarkModeContext';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DarkModeProvider>
      <Router>
        <div className="app">
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className="app-content">
            <Sidebar isOpen={sidebarOpen} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/resources" element={<SlimesPage />} />
                <Route path="/team" element={<Dev_Team_Page />} />
                <Route path="/dev" element={<WikiDevPage />} />
                <Route path="/architecture" element={<ArchitecturePage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;