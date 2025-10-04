import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Users, FileText, Search } from 'lucide-react';

const HomePage = () => {
  const featuredPages = [
    {
      title: 'Sobre o jogo',
      description: 'Saiba mais sobre Slime Rancher',
      path: '/page/about',
      icon: Gamepad2
    },
    {
      title: 'Slimes e Recursos',
      description: 'Conheça as mais variadas slimes e recursos de Slime Rancher',
      path: '/page/resources',
      icon: FileText
    },
    {
      title: 'Desenvolvedores',
      description: 'Saiba mais sobre a Monomi Park, empresa desenvolvedora de Slime Rancher',
      path: '/page/team',
      icon: Users
    }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Slime Rancher Wiki</h1>
        <p>Todas as informações sobre Slime Rancher em um só lugar.</p>
        <div className="hero-actions">
          <Link to="/search" className="btn btn-primary">
            <Search size={18} />
            Encontre na wiki
          </Link>
          <Link to="/page/getting-started" className="btn btn-secondary">
            Sobre o jogo
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="featured-pages">
        <h2>Páginas em Destaque</h2>
        <div className="pages-grid">
          {featuredPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link key={page.path} to={page.path} className="page-card">
                <div className="page-icon">
                  <Icon size={24} />
                </div>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <div className="page-arrow">
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat">
          <h3>+ 5 Mi</h3>
          <p>cópias vendidas em todas as plataformas</p>
        </div>
        <div className="stat">
          <h3>+ 17 mil</h3>
          <p>jogadores simultâneos</p>
        </div>
        <div className="stat">
          <h3>+ 8 anos</h3>
          <p>de lançamento</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;