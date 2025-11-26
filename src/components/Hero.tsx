import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const codeSnippet = `const developer = {
  name: 'Hetashri Kansariwala',
  skills: ['React', 'Next.js', 'Node.js', 'MySql'],
  hardworker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardworker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  },
  currentlyLearning: RAG, Generative AI, Agentic AI
};`;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10"
            >
              <span className="text-primary font-medium">🚀 Available for opportunities</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                Hello, <br />
                I'm <span className="text-primary">Hetashri Kansariwala</span>, <br />
                a Professional <br />
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                   // 'Freelancer',
                   // 2000,
                    'Salesforce Developer',
                    2000
                    // 'AI Engineer',
                    // 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="gradient-text"
                />
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
              Full Stack Developer specializing in building exceptional digital experiences with modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <FaEnvelope className="" />
                Contact Me
              </Button>
              </a>
              <Link to='https://drive.google.com/file/d/185GujXIzhWZyl5gBzFkN8j4Pw5eQKtSp/view?usp=sharing' target="_blank" >
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                Get Resume
              </Button>
              </Link>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com/hetashridk" target="_blank" rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/hetashrikansariwala/" target="_blank" rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href="https://x.com/Hetashridk?t=FeNYWVDxnr4xvrOogvdG_g&s=09" target="_blank" rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors">
                <FaTwitter size={28} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-card p-6 rounded-2xl overflow-hidden">
              {/* Window Controls */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
              </div>

              {/* Code Content */}
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground">
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-accent">developer</span> = {"{"}
                  {"\n  "}
                  <span className="text-secondary">name:</span>{" "}
                  <span className="text-primary">'Hetashri Kansariwala'</span>,
                  {"\n  "}
                  <span className="text-secondary">skills:</span>{" "}
                  [<span className="text-primary">'React'</span>,{" "}
                  <span className="text-primary">'Next.js'</span>,{" "}
                  <span className="text-primary">'Node.js'</span>,{" "}
                  <span className="text-primary">'TailwindCSS'</span>,{" "}
                  <span className="text-primary">'MySql'</span>],
                  {"\n  "}
                  <span className="text-secondary">hardworker:</span>{" "}
                  <span className="text-accent">true</span>,
                  {"\n  "}
                  <span className="text-secondary">quickLearner:</span>{" "}
                  <span className="text-accent">true</span>,
                  {"\n  "}
                  <span className="text-secondary">problemSolver:</span>{" "}
                  <span className="text-accent">true</span>,
                  {"\n  "}
                  <span className="text-secondary">learning:</span>{" "}
                  <span className="text-accent">Full-Stack Gen-AI, LangChain, RAG Systems, Agents</span>,
                  {"\n  "}
                  <span className="text-secondary">hireable:</span>{" "}
                  <span className="text-primary">function</span>() {"{"}
                  {"\n    "}
                  <span className="text-primary">return</span> (
                  {"\n      "}
                  <span className="text-accent">this</span>.hardworker &&
                  {"\n      "}
                  <span className="text-accent">this</span>.problemSolver &&
                  {"\n      "}
                  <span className="text-accent">this</span>.skills.length {">="} 5
                  {"\n    "});
                  {"\n  "}
                  {"}"}
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
