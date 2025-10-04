import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Search, Gamepad2, Users, Settings } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/page/getting-started', icon: FileText, label: 'Getting Started' },
    { path: '/page/about', icon: Gamepad2, label: 'About' },
    { path: '/page/team', icon: Users, label: 'Team' },
    { path: '/search', icon: Search, label: 'Search' },
  ];

  const recentPages = [
    { path: '/page/getting-started', title: 'Getting Started' },
    { path: '/page/about', title: 'About This Wiki' },
    { path: '/page/team', title: 'Our Team' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <h3>Navigation</h3>
          <ul>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="recent-pages">
          <h3>Recent Pages</h3>
          <ul>
            {recentPages.map((page) => (
              <li key={page.path}>
                <Link to={page.path} className="recent-link">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
