import ArticleCard from "./ArticleCard";
import { getArticles, formatDate } from "@/lib/articles";

const ArticlesSection = () => {
  const articles = getArticles();

  return (
    <section id="articles" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Deep technical content for network professionals</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              readTime={article.readTime}
              date={formatDate(article.date)}
              featured={index === 0 && article.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
