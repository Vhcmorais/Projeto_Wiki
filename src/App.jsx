import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import SearchPage from './pages/SearchPage';
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
                <Route path="/page/:slug" element={<WikiPage />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;