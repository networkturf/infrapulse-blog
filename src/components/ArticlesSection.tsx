import ArticleCard from "./ArticleCard";

const articles = [
  {
    title: "Understanding BGP Route Leaks: Detection and Prevention Strategies",
    excerpt: "A comprehensive guide to identifying and mitigating BGP route leaks in enterprise networks. Learn how to implement RPKI, IRR filtering, and automated monitoring systems.",
    category: "BGP & Routing",
    readTime: "12 min read",
    date: "Jan 4, 2026",
    featured: true,
  },
  {
    title: "Network Automation with Ansible: From Zero to Production",
    excerpt: "Step-by-step tutorial on automating network device configuration using Ansible playbooks and inventory management.",
    category: "Automation",
    readTime: "8 min read",
    date: "Jan 2, 2026",
  },
  {
    title: "EVPN-VXLAN Fabric Design Patterns",
    excerpt: "Exploring modern data center fabric architectures using EVPN for control plane and VXLAN for overlay networking.",
    category: "Data Center",
    readTime: "15 min read",
    date: "Dec 28, 2025",
  },
  {
    title: "Zero Trust Network Architecture: Implementation Guide",
    excerpt: "How to design and implement a zero trust security model for your enterprise network infrastructure.",
    category: "Security",
    readTime: "10 min read",
    date: "Dec 22, 2025",
  },
  {
    title: "SD-WAN vs Traditional WAN: A Technical Comparison",
    excerpt: "Deep dive into the architectural differences between software-defined WAN and legacy WAN technologies.",
    category: "SD-WAN",
    readTime: "7 min read",
    date: "Dec 18, 2025",
  },
  {
    title: "IPv6 Transition Strategies for Enterprise Networks",
    excerpt: "Practical approaches to IPv6 adoption including dual-stack, tunneling, and translation mechanisms.",
    category: "IPv6",
    readTime: "9 min read",
    date: "Dec 15, 2025",
  },
];

const ArticlesSection = () => {
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
              key={index}
              {...article}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
