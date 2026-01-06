import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticlesSection from "@/components/ArticlesSection";
import TechBlogsSection from "@/components/TechBlogsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ArticlesSection />
        <TechBlogsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
