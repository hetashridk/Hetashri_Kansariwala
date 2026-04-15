import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Soft background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, hsl(168 55% 60% / 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 20%, hsl(338 55% 65% / 0.08) 0%, transparent 55%),
            radial-gradient(ellipse 50% 60% at 60% 80%, hsl(258 55% 65% / 0.07) 0%, transparent 50%),
            hsl(42 35% 96%)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-7"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary/90 font-medium">Available for opportunities</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-medium text-lg"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="gradient-text">Hetashri</span>
                <br />
                <span className="text-foreground/90">Kansariwala</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 pt-1"
              >
                <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2500,
                    'Freelancer',
                    2500,
                    'AI Enthusiast',
                    2500,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  className="text-xl sm:text-2xl font-semibold gradient-text"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Full Stack Developer crafting exceptional digital experiences
              with modern web technologies and a passion for clean, purposeful design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl px-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <FaEnvelope className="mr-2" size={15} />
                  Contact Me
                </Button>
              </a>
              <Link
                to="https://drive.google.com/file/d/1_HAU03jPKNCvxZCRsMxJzqnz9eUb-K5O/view?usp=sharing"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-7 border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  Get Resume
                </Button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex gap-4 pt-2"
            >
              {[
                { href: "https://github.com/hetashridk", icon: FaGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/hetashrikansariwala/", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://x.com/Hetashridk?t=FeNYWVDxnr4xvrOogvdG_g&s=09", icon: FaTwitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'white',
                border: '1px solid hsl(220 20% 88% / 0.8)',
                boxShadow: '0 8px 40px -8px rgba(74,163,130,0.12), 0 2px 12px -4px rgba(100,120,150,0.08)',
              }}
            >
              {/* Window title bar */}
              <div
                className="flex items-center justify-between px-5 py-3.5 border-b"
                style={{ borderColor: 'hsl(220 20% 92%)', background: 'hsl(220 20% 98%)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">developer.js</span>
                <div className="w-16" />
              </div>

              {/* Code */}
              <div className="p-6 bg-[#f8f9fc]">
                <pre className="text-sm leading-7 font-mono">
                  <code>
                    <span style={{ color: '#7c52c8' }}>const</span>{" "}
                    <span style={{ color: '#2d6fa8' }}>developer</span>{" "}
                    <span style={{ color: '#c46482' }}>=</span>{" "}
                    <span style={{ color: '#64748b' }}>{"{"}</span>
                    {"\n  "}
                    <span style={{ color: '#2d6fa8' }}>name:</span>{" "}
                    <span style={{ color: '#c46482' }}>'Hetashri Kansariwala'</span>
                    <span style={{ color: '#64748b' }}>,</span>
                    {"\n  "}
                    <span style={{ color: '#2d6fa8' }}>skills:</span>{" "}
                    <span style={{ color: '#64748b' }}>[</span>
                    <span style={{ color: '#c46482' }}>'React'</span>
                    <span style={{ color: '#64748b' }}>, </span>
                    <span style={{ color: '#c46482' }}>'Next.js'</span>
                    <span style={{ color: '#64748b' }}>, </span>
                    <span style={{ color: '#c46482' }}>'Node.js'</span>
                    <span style={{ color: '#64748b' }}>, </span>
                    <span style={{ color: '#c46482' }}>'TailwindCSS'</span>
                    <span style={{ color: '#64748b' }}>],</span>
                    {"\n  "}
                    <span style={{ color: '#2d6fa8' }}>hardworker:</span>{" "}
                    <span style={{ color: '#4aa382' }}>true</span>
                    <span style={{ color: '#64748b' }}>,</span>
                    {"\n  "}
                    <span style={{ color: '#2d6fa8' }}>quickLearner:</span>{" "}
                    <span style={{ color: '#4aa382' }}>true</span>
                    <span style={{ color: '#64748b' }}>,</span>
                    {"\n  "}
                    <span style={{ color: '#2d6fa8' }}>problemSolver:</span>{" "}
                    <span style={{ color: '#4aa382' }}>true</span>
                    <span style={{ color: '#64748b' }}>,</span>
                    {"\n  "}
                    <span style={{ color: '#2d6fa8' }}>learning:</span>{" "}
                    <span style={{ color: '#c46482' }}>'GenAI, LangChain, RAG Systems'</span>
                    <span style={{ color: '#64748b' }}>,</span>
                    {"\n  "}
                    <span style={{ color: '#2d6fa8' }}>hireable:</span>{" "}
                    <span style={{ color: '#7c52c8' }}>function</span>
                    <span style={{ color: '#64748b' }}>()</span>{" "}
                    <span style={{ color: '#64748b' }}>{"{"}</span>
                    {"\n    "}
                    <span style={{ color: '#7c52c8' }}>return</span>{" "}
                    <span style={{ color: '#64748b' }}>(</span>
                    {"\n      "}
                    <span style={{ color: '#4aa382' }}>this</span>
                    <span style={{ color: '#64748b' }}>.hardworker</span>{" "}
                    <span style={{ color: '#c46482' }}>&&</span>
                    {"\n      "}
                    <span style={{ color: '#4aa382' }}>this</span>
                    <span style={{ color: '#64748b' }}>.problemSolver</span>{" "}
                    <span style={{ color: '#c46482' }}>&&</span>
                    {"\n      "}
                    <span style={{ color: '#4aa382' }}>this</span>
                    <span style={{ color: '#64748b' }}>.skills.length </span>
                    <span style={{ color: '#c46482' }}>{">="}</span>
                    <span style={{ color: '#e08030' }}> 5</span>
                    {"\n    "}
                    <span style={{ color: '#64748b' }}>);</span>
                    {"\n  "}
                    <span style={{ color: '#64748b' }}>{"}"}</span>
                    {"\n"}
                    <span style={{ color: '#64748b' }}>{"}"}</span>
                    <span style={{ color: '#64748b' }}>;</span>
                  </code>
                </pre>
              </div>

              {/* Status bar */}
              <div
                className="flex items-center gap-4 px-5 py-2 border-t"
                style={{ borderColor: 'hsl(220 20% 92%)', background: 'hsl(168 48% 34%)' }}
              >
                <span className="text-white/80 text-xs font-mono">JavaScript</span>
                <span className="text-white/60 text-xs">UTF-8</span>
                <span className="ml-auto text-white/60 text-xs">hireable: true ✓</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
