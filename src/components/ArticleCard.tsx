import { Clock, Calendar, ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const ArticleCard = ({ title, excerpt, category, readTime, date, featured = false }: ArticleCardProps) => {
  return (
    <article
      className={`group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card-hover)] ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className={`relative p-6 ${featured ? 'md:p-10' : ''} h-full flex flex-col`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
            {category}
          </span>
        </div>

        <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {title}
        </h3>

        <p className={`text-muted-foreground mb-6 flex-grow ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
