import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Search, Gamepad2, Users, Settings } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: Home, label: 'Página Inicial' },
    { path: '/page/about', icon: Gamepad2, label: 'Sobre o jogo' },
    { path: '/page/resources', icon: FileText, label: 'Slimes e Recursos' },
    { path: '/page/team', icon: Users, label: 'Equipe Desenvolvedora' },
    { path: '/search', icon: Search, label: 'Procurar' },
  ];

  const recentPages = [
    { path: '/page/dev', title: 'Desenvolvedor da Wiki' },
    { path: '/page/arquiteture', title: 'Arquitetura da Wiki' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <h3>Tópicos</h3>
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
          <h3>Adicionado recentemente!</h3>
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