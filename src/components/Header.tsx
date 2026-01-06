import { Network, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Network className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 blur-lg bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Infra<span className="text-gradient">pulse</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#articles" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Articles
            </a>
            <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#articles" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Articles
              </a>
              <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
