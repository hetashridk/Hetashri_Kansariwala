import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiMongodb, SiPostgresql, SiDocker,
  SiAmazon, SiGit, SiTailwindcss, SiNextdotjs,
  SiExpress, SiRedis, SiFigma, SiFirebase,
  SiLightning,
  SiSalesforce
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Salesforce", icon: SiSalesforce, color: "#019cdf" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        // { name: "Python", icon: SiPython, color: "#3776AB" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        // { name: "Redis", icon: SiRedis, color: "#DC382D" },
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        // { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        // { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        // { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to build amazing products
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-secondary">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="glass-card p-4 rounded-lg hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon 
                        className="text-3xl transition-transform group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <span className="font-medium">{skill.name}</span>
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
