import { Search, Menu, Gamepad2, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';

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
            <Menu size={20} />
          </button>
          <div className="logo">
            <Gamepad2 size={24} />
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
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
