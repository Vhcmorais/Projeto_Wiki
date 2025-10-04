import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, FileText, Clock } from 'lucide-react';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchData = [
    {
      id: 1,
      title: 'Getting Started',
      slug: 'getting-started',
      excerpt: 'Learn the basics of using this wiki and how to navigate through the content.',
      category: 'Documentation',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'About This Wiki',
      slug: 'about',
      excerpt: 'Learn more about this wiki, its purpose, and how it can help you.',
      category: 'General',
      lastUpdated: '2024-01-10'
    },
    {
      id: 3,
      title: 'Our Team',
      slug: 'team',
      excerpt: 'Meet the amazing people who make this wiki possible.',
      category: 'General',
      lastUpdated: '2024-01-12'
    },
    {
      id: 4,
      title: 'API Documentation',
      slug: 'api-docs',
      excerpt: 'Complete reference for our API endpoints and authentication.',
      category: 'Technical',
      lastUpdated: '2024-01-08'
    },
    {
      id: 5,
      title: 'User Guide',
      slug: 'user-guide',
      excerpt: 'Step-by-step guide for new users to get the most out of the platform.',
      category: 'Documentation',
      lastUpdated: '2024-01-05'
    }
  ];

  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    setSearchParams({ q: searchQuery });
  };

  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
    setSearchParams({});
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Procure na Wiki</h1>
        <p>Encontre a informação que deseja de maneira rápida e fácil</p>
      </div>

      <div className="search-form-container">
        <form className="search-form-large" onSubmit={(e) => e.preventDefault()}>
          <div className="search-input-large">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search for articles, guides, or topics..."
              value={query}
              onChange={handleSearch}
              className="search-input"
              autoFocus
            />
            {query && (
              <button 
                type="button" 
                className="clear-search"
                onClick={handleClearSearch}
              >
                ×
              </button>
            )}
          </div>
        </form>
      </div>

      {isLoading && (
        <div className="search-loading">
          <div className="loading-spinner"></div>
          <p>Searching...</p>
        </div>
      )}

      {!isLoading && query && (
        <div className="search-results">
          <div className="results-header">
            <h2>
              {results.length > 0 
                ? `${results.length} result${results.length !== 1 ? 's' : ''} found for "${query}"`
                : `No results found for "${query}"`
              }
            </h2>
          </div>

          {results.length > 0 ? (
            <div className="results-list">
              {results.map((result) => (
                <Link 
                  key={result.id} 
                  to={`/page/${result.slug}`}
                  className="search-result-item"
                >
                  <div className="result-icon">
                    <FileText size={20} />
                  </div>
                  <div className="result-content">
                    <h3>{result.title}</h3>
                    <p className="result-excerpt">{result.excerpt}</p>
                    <div className="result-meta">
                      <span className="result-category">{result.category}</span>
                      <span className="result-date">
                        <Clock size={14} />
                        {result.lastUpdated}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>Try searching with different keywords or check your spelling.</p>
              <div className="search-suggestions">
                <h3>Popular searches:</h3>
                <div className="suggestion-tags">
                  <button onClick={() => setQuery('getting started')}>Getting Started</button>
                  <button onClick={() => setQuery('API')}>API</button>
                  <button onClick={() => setQuery('tutorial')}>Tutorial</button>
                  <button onClick={() => setQuery('guide')}>Guide</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {!query && (
        <div className="search-empty">
          <Search size={48} className="empty-icon" />
          <h2>Start searching</h2>
          <p>Enter a search term above to find relevant articles and documentation.</p>
          
          <div className="popular-searches">
            <h3>Popular searches:</h3>
            <div className="popular-tags">
              <button onClick={() => setQuery('getting started')}>Getting Started</button>
              <button onClick={() => setQuery('API documentation')}>API Documentation</button>
              <button onClick={() => setQuery('user guide')}>User Guide</button>
              <button onClick={() => setQuery('troubleshooting')}>Troubleshooting</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
