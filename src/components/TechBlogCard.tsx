import { ExternalLink } from "lucide-react";

interface TechBlogCardProps {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

const TechBlogCard = ({ name, description, url, tags }: TechBlogCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
          {name}
        </h3>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-0.5 text-xs font-medium rounded bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default TechBlogCard;
