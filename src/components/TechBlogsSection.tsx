import TechBlogCard from "./TechBlogCard";

const techBlogs = [
  {
    name: "Packet Pushers",
    description: "Podcasts and articles covering enterprise networking, data center technologies, and network automation.",
    url: "https://packetpushers.net",
    tags: ["Networking", "Podcasts", "Enterprise"],
  },
  {
    name: "Network Collective",
    description: "Community-driven content featuring discussions on network design, career development, and industry trends.",
    url: "https://thenetworkcollective.com",
    tags: ["Community", "Career", "Design"],
  },
  {
    name: "Ivan Pepelnjak - ipSpace",
    description: "Deep technical content on network design, SDN, cloud networking, and automation from a veteran engineer.",
    url: "https://blog.ipspace.net",
    tags: ["SDN", "Cloud", "Design"],
  },
  {
    name: "Networkfuntimes",
    description: "Practical tutorials and explanations of networking concepts from beginner to advanced topics.",
    url: "https://networkfuntimes.com",
    tags: ["Tutorials", "CCNA", "Learning"],
  },
  {
    name: "Cisco Blogs - Networking",
    description: "Official Cisco content covering new technologies, best practices, and product updates.",
    url: "https://blogs.cisco.com/networking",
    tags: ["Cisco", "Vendor", "Updates"],
  },
  {
    name: "The Networking Nerd",
    description: "Insights on networking trends, wireless technologies, and the business side of IT infrastructure.",
    url: "https://networkingnerd.net",
    tags: ["Wireless", "Trends", "Industry"],
  },
];

const TechBlogsSection = () => {
  return (
    <section id="resources" className="py-20 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Recommended Tech Blogs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated collection of excellent networking and infrastructure blogs from the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techBlogs.map((blog, index) => (
            <TechBlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBlogsSection;
