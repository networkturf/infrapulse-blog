// Search functionality
(function() {
  'use strict';
  
  let searchIndex = [];
  let posts = [];
  
  // Initialize search index
  function initSearchIndex() {
    // Fetch posts data from Jekyll's site data
    const postsData = document.querySelector('[data-posts]');
    if (postsData) {
      try {
        posts = JSON.parse(postsData.textContent);
        buildSearchIndex();
      } catch (e) {
        console.error('Error parsing posts data:', e);
      }
    }
  }
  
  // Build search index
  function buildSearchIndex() {
    searchIndex = posts.map(post => ({
      title: post.title || '',
      content: (post.content || '').replace(/<[^>]*>/g, ' ').substring(0, 500),
      url: post.url || '',
      date: post.date || '',
      tags: post.tags || []
    }));
  }
  
  // Simple search function
  function search(query) {
    if (!query || query.trim().length < 2) {
      return [];
    }
    
    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const results = [];
    
    searchIndex.forEach((item, index) => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();
      
      searchTerms.forEach(term => {
        // Title matches are worth more
        if (titleLower.includes(term)) {
          score += 10;
        }
        // Content matches
        if (contentLower.includes(term)) {
          score += 1;
        }
        // Tag matches
        item.tags.forEach(tag => {
          if (tag.toLowerCase().includes(term)) {
            score += 5;
          }
        });
      });
      
      if (score > 0) {
        results.push({
          ...item,
          score: score,
          originalIndex: index
        });
      }
    });
    
    // Sort by score (descending)
    results.sort((a, b) => b.score - a.score);
    
    return results.slice(0, 20); // Limit to 20 results
  }
  
  // Display search results
  function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p class="no-results">No results found. Try different keywords.</p>';
      return;
    }
    
    const html = results.map(result => {
      const date = result.date ? new Date(result.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '';
      
      return `
        <div class="search-result-item">
          <h3><a href="${result.url}">${result.title}</a></h3>
          <div class="search-result-meta">${date}</div>
          <div class="search-result-excerpt">${result.content.substring(0, 150)}...</div>
        </div>
      `;
    }).join('');
    
    resultsContainer.innerHTML = html;
  }
  
  // Initialize search when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');
    const resultsContainer = document.getElementById('search-results');
    
    if (!searchBox || !resultsContainer) return;
    
    // Initialize search index
    initSearchIndex();
    
    // Handle search input
    let searchTimeout;
    searchBox.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      const query = this.value;
      
      searchTimeout = setTimeout(() => {
        if (query.trim().length >= 2) {
          const results = search(query);
          displayResults(results);
        } else {
          resultsContainer.innerHTML = '<p class="no-results">Type at least 2 characters to search...</p>';
        }
      }, 300); // Debounce search
    });
    
    // Handle Enter key
    searchBox.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = this.value;
        if (query.trim().length >= 2) {
          const results = search(query);
          displayResults(results);
        }
      }
    });
  });
})();

