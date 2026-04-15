import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "💻",
      title: "Engineer",
      text: "Results-driven Software Engineer with expertise in JavaScript and full-stack web development."
    },
    {
      icon: "🚀",
      title: "Builder",
      text: "Passionate about building scalable, high-performance applications that enhance user experience."
    },
    {
      icon: "⚡",
      title: "Problem Solver",
      text: "Thriving in dynamic environments, leveraging problem-solving skills and technical expertise."
    },
    {
      icon: "📚",
      title: "Learner",
      text: "Quick learner with a self-driven approach, constantly exploring new technologies."
    },
    {
      icon: "🌍",
      title: "Innovator",
      text: "Dedicated to making the web more accessible and impactful through innovation."
    },
    {
      icon: "🎯",
      title: "Executor",
      text: "Proven track record of developing robust, efficient solutions for real-world challenges."
    }
  ];

  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" },
    { value: "2", label: "Publications" },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary/80 tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-foreground/60 uppercase tracking-wider mb-8">
              Who I Am
            </h3>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50/80 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg group-hover:bg-primary/12 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground/80 text-sm mb-0.5">{feature.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats + visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Avatar card */}
            <div
              className="rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(168 35% 95%) 0%, hsl(258 35% 97%) 50%, hsl(338 35% 96%) 100%)',
                border: '1px solid hsl(220 20% 90%)',
              }}
            >
              {/* Decorative rings */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full border border-primary/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full border border-secondary/10 translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-4 text-4xl mx-auto border border-border/60">
                  👩‍💻
                </div>
                <h4 className="text-xl font-bold text-foreground/85">Professional Developer</h4>
                <p className="text-muted-foreground text-sm mt-1.5">Building the future, one line at a time</p>

                <div className="flex items-center justify-center gap-1.5 mt-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-primary/80 font-medium">Open to work</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white rounded-2xl p-4 text-center border border-border/60 shadow-sm hover-lift"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Currently learning */}
            <div className="bg-white rounded-2xl p-5 border border-border/60 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {["RAG Systems", "LangChain", "Generative AI", "Agentic AI"].map((topic) => (
                  <span key={topic} className="tag-badge">{topic}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
