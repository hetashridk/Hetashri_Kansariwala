import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Particles from "@/components/Particles";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        {/* <Pricing /> */}
        <Contact />
      </main>
      
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Developer Portfolio - Hetashri Kansariwala
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
