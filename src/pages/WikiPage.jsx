import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ArrowLeft, Edit, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';

const WikiPage = () => {
  const { slug } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Sample wiki content - in a real app, this would come from an API
  const getPageContent = (slug) => {
    const pages = {
      'getting-started': {
        title: 'Getting Started',
        content: `# Getting Started

Welcome to our wiki! This guide will help you get up and running quickly.

## What is this Wiki?

This wiki is a comprehensive knowledge base designed to help you find information quickly and efficiently. Whether you're looking for documentation, tutorials, or reference materials, you'll find it all here.

## How to Navigate

### Using the Sidebar
- The sidebar contains quick links to popular pages
- Use the navigation menu to browse different sections
- Recent pages are shown for quick access

### Using Search
- Use the search bar in the header to find specific content
- Search works across all pages and content
- Use keywords to narrow down your results

## Features

- **Markdown Support**: All pages support rich markdown formatting
- **Code Highlighting**: Code blocks are syntax highlighted
- **Responsive Design**: Works on desktop and mobile devices
- **Fast Search**: Quick and accurate search functionality

## Getting Help

If you need help or have questions:
1. Check the FAQ section
2. Search for existing documentation
3. Contact the team through the contact page

Happy exploring! 🚀`,
        lastUpdated: '2024-01-15',
        author: 'Wiki Team'
      },
      'about': {
        title: 'About This Wiki',
        content: `# About This Wiki

This wiki serves as the central hub for all our documentation and knowledge sharing.

## Our Mission

To provide a comprehensive, accessible, and well-organized knowledge base that empowers users to find the information they need quickly and efficiently.

## What You'll Find Here

### Documentation
- API references
- User guides
- Technical specifications
- Best practices

### Tutorials
- Step-by-step guides
- Video tutorials
- Code examples
- Troubleshooting guides

### Resources
- Templates
- Tools and utilities
- External links
- Community resources

## Contributing

We welcome contributions from the community! Here's how you can help:

1. **Report Issues**: Found an error? Let us know!
2. **Suggest Improvements**: Have ideas for better content?
3. **Add Content**: Share your knowledge with others
4. **Review Content**: Help us maintain quality

## Technology Stack

This wiki is built with modern web technologies:
- **Frontend**: React with Vite
- **Styling**: CSS3 with modern features
- **Content**: Markdown with syntax highlighting
- **Icons**: Lucide React icon library

## Contact

For questions or feedback, please reach out to our team through the contact page.`,
        lastUpdated: '2024-01-10',
        author: 'Wiki Team'
      },
      'team': {
        title: 'Our Team',
        content: `# Our Team

Meet the amazing people who make this wiki possible!

## Core Team

### Development Team
- **Frontend Developers**: Building beautiful and responsive interfaces
- **Backend Developers**: Ensuring robust and scalable infrastructure
- **DevOps Engineers**: Maintaining reliable deployment and monitoring

### Content Team
- **Technical Writers**: Creating clear and comprehensive documentation
- **Subject Matter Experts**: Providing domain-specific knowledge
- **Editors**: Ensuring content quality and consistency

### Design Team
- **UI/UX Designers**: Crafting intuitive user experiences
- **Visual Designers**: Creating engaging visual content
- **Accessibility Specialists**: Ensuring inclusive design

## Our Values

### Quality First
We believe in delivering high-quality content that users can trust and rely on.

### User-Centric
Every decision we make is guided by what's best for our users.

### Continuous Improvement
We're always looking for ways to make the wiki better.

### Collaboration
Great things happen when we work together.

## Join Our Team

Interested in contributing? We're always looking for passionate individuals to join our mission of creating the best possible wiki experience.

Check out our careers page for current openings!`,
        lastUpdated: '2024-01-12',
        author: 'Wiki Team'
      }
    };

    return pages[slug] || {
      title: 'Page Not Found',
      content: `# Page Not Found

Sorry, the page you're looking for doesn't exist.

## What you can do:

1. **Check the URL** - Make sure you typed it correctly
2. **Use the search** - Try searching for what you're looking for
3. **Browse categories** - Explore our content by category
4. **Go home** - Return to the [home page](/)

If you think this page should exist, please let us know!`,
      lastUpdated: '2024-01-01',
      author: 'System'
    };
  };

  const page = getPageContent(slug);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: page.title,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="wiki-page">
      <div className="page-header">
        <div className="page-nav">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
        
        <div className="page-title-section">
          <h1>{page.title}</h1>
          <div className="page-meta">
            <span>Last updated: {page.lastUpdated}</span>
            <span>•</span>
            <span>By: {page.author}</span>
          </div>
        </div>

        <div className="page-actions">
          <button 
            className={`action-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={handleBookmark}
            title="Bookmark this page"
          >
            <Bookmark size={18} />
          </button>
          <button 
            className="action-btn"
            onClick={handleShare}
            title="Share this page"
          >
            <Share2 size={18} />
          </button>
          <button className="action-btn" title="Edit this page">
            <Edit size={18} />
          </button>
        </div>
      </div>

      <div className="page-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          className="markdown-content"
        >
          {page.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default WikiPage;
