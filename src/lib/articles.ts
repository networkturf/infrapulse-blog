// Article type definition
export interface ArticleFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  author?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  content: string;
}

// Parse frontmatter from markdown content
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const frontmatterStr = match[1];
  const body = match[2];
  
  const frontmatter: Record<string, any> = {};
  const lines = frontmatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse boolean values
      if (value === 'true') frontmatter[key] = true;
      else if (value === 'false') frontmatter[key] = false;
      else frontmatter[key] = value;
    }
  }
  
  return { frontmatter, body };
}

// Import all markdown files from the content/articles directory
const articleModules = import.meta.glob('/src/content/articles/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default' 
}) as Record<string, string>;

// Get all articles
export function getArticles(): Article[] {
  const articles: Article[] = [];
  
  for (const [path, content] of Object.entries(articleModules)) {
    const slug = path.replace('/src/content/articles/', '').replace('.md', '');
    const { frontmatter, body } = parseFrontmatter(content);
    
    articles.push({
      slug,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      category: frontmatter.category || 'Uncategorized',
      readTime: frontmatter.readTime || '5 min read',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      featured: frontmatter.featured || false,
      author: frontmatter.author || 'Anonymous',
      content: body,
    });
  }
  
  // Sort by date descending
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find(article => article.slug === slug);
}

// Format date for display
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}
