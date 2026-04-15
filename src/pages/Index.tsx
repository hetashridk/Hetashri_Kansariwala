import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Particles from "@/components/Particles";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background">
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>

      <footer className="relative z-10 py-10 px-4 bg-white border-t border-border/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                <span className="text-white text-[10px] font-bold">HK</span>
              </div>
              <span className="font-semibold text-foreground/70 text-sm">Hetashri Kansariwala</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Crafted with care</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
