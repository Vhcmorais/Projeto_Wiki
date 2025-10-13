import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Users, FileText, Search } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import '../pages/cssPages/HomePage.css';
import '../pages/cssPages/dark.css';

const HomePage = () => {
  const {isDarkMode} = useDarkMode();
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
    // abre a div da sessão home page
    <div className="home-page">

    {/* Abre a div da sessão hero-section, componentes de texto do hero da página */}
      <div className="hero-section">
        <h1>Slime Rancher Wiki</h1>
        <p>Todas as informações sobre Slime Rancher em um só lugar.</p>

        {/* Abre a div da sessão hero-actions, botões de ação do hero da página */}
        <div className="hero-actions">
          <Link to="/search" className="btn btn-primary">
            <Search size={18} />
            Encontre na wiki
          </Link>
          <Link to="/page/about" className="btn btn-secondary">
            Sobre o jogo
            <ArrowRight size={18} />
          </Link>
        </div> {/* Fecha a div da sessão hero-actions */}
        
        {/* Abre a div da sessão hero-image, imagem do hero da página */}
        <div className="hero-image-right">
          <img src="images/beatrix_hero.png" alt="Imagem do Beatrix" />
        </div> {/* Fecha a div da sessão hero-image-right */}

        <div className="hero-image-left">
          <img
            src={isDarkMode ? "/images/brreu-hero.png" : "/images/slime_hero.png"}
            alt="Hero Left"/>
        </div> {/* Fecha a div da sessão hero-image-left */}

      </div> {/* Fecha a div da sessão hero-section */}


      {/* Abre a div da sessão featured-pages, páginas em destaque da home page */}
      <div className="featured-pages">
        <h2>Páginas em Destaque</h2>

        {/* Abre a div da sessão pages-grid, grid das páginas em destaque */}
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
      </div> {/* Fecha a div da sessão featured-pages */}
      
      {/* Abre a div da sessão quick-stats, estatísticas rápidas da home page */}
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