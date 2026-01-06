import { Network, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Network className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">
                Infra<span className="text-gradient">pulse</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              A technical blog dedicated to network engineering, infrastructure automation, and the evolving world of enterprise networking. Written by engineers, for engineers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Topics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Routing Protocols</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Network Automation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Data Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cloud Networking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#articles" className="hover:text-foreground transition-colors">All Articles</a></li>
              <li><a href="#resources" className="hover:text-foreground transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">RSS Feed</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Infrapulse. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary">♥</span> for the networking community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
