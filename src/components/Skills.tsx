import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs,
  SiPython, SiMongodb, SiPostgresql, SiDocker,
  SiAmazon, SiGit, SiTailwindcss, SiNextdotjs,
  SiExpress, SiRedis, SiFigma, SiFirebase,
  SiSalesforce
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      emoji: "✦",
      color: "text-primary",
      bgColor: "bg-primary/8",
      skills: [
        { name: "React", icon: SiReact, color: "#29b6ca" },
        { name: "Next.js", icon: SiNextdotjs, color: "#334155" },
        { name: "JavaScript", icon: SiJavascript, color: "#d4a017" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0d9488" },
        { name: "Salesforce", icon: SiSalesforce, color: "#019cdf" }
      ]
    },
    {
      title: "Backend",
      emoji: "◈",
      color: "text-secondary",
      bgColor: "bg-secondary/8",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#475569" },
      ]
    },
    {
      title: "Database",
      emoji: "◉",
      color: "text-accent",
      bgColor: "bg-accent/8",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ]
    },
    {
      title: "Tools & Design",
      emoji: "◎",
      color: "text-primary",
      bgColor: "bg-primary/8",
      skills: [
        { name: "Git", icon: SiGit, color: "#c94a2e" },
        { name: "Figma", icon: SiFigma, color: "#c4502a" },
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-4 section-rose">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary/80 tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies I use to craft remarkable digital experiences
          </p>
          <div className="section-underline mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <span className={`text-lg ${category.color}`}>{category.emoji}</span>
                <h3 className="font-semibold text-foreground/80 text-sm tracking-wide uppercase">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.06
                    }}
                    className="skill-pill group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white transition-colors">
                        <skill.icon
                          className="text-xl transition-transform group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="font-medium text-foreground/85 text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
