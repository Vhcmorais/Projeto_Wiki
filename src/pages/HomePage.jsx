import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, FileText, Search } from 'lucide-react';

const HomePage = () => {
  const featuredPages = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using this wiki',
      path: '/page/getting-started',
      icon: BookOpen
    },
    {
      title: 'About This Wiki',
      description: 'Learn more about this wiki and its purpose',
      path: '/page/about',
      icon: FileText
    },
    {
      title: 'Our Team',
      description: 'Meet the people behind this wiki',
      path: '/page/team',
      icon: Users
    }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Our Wiki</h1>
        <p>A comprehensive knowledge base for all your documentation needs.</p>
        <div className="hero-actions">
          <Link to="/search" className="btn btn-primary">
            <Search size={18} />
            Search Wiki
          </Link>
          <Link to="/page/getting-started" className="btn btn-secondary">
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="featured-pages">
        <h2>Featured Pages</h2>
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
          <h3>50+</h3>
          <p>Articles</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Categories</p>
        </div>
        <div className="stat">
          <h3>5+</h3>
          <p>Contributors</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
