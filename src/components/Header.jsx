import { Search, Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import './header.css';
import './dark.css';

const Header = ({ onToggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="menu-button" onClick={onToggleSidebar}>
            <Menu size={25} />
          </button>
          <div className="logo">
            <img src ="images/slimeHeader.png" alt="Slime Header" className="header-icon" />
            <span>Slime Rancher - Fan Wiki</span>
          </div>
        </div>
        
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Procure informações..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </form>

        <div className="header-actions">
          <button 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={25} /> : <Moon size={25} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
