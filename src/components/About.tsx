import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "💻",
      text: "Results-driven Software Engineer with expertise in JavaScript and full-stack web development."
    },
    {
      icon: "🚀",
      text: "Passionate about building scalable, high-performance applications that enhance user experience."
    },
    {
      icon: "⚡",
      text: "Thrive in dynamic environments, leveraging problem-solving skills and technical expertise."
    },
    {
      icon: "📚",
      text: "Quick learner with a self-driven approach, constantly exploring new technologies."
    },
    {
      icon: "🌍",
      text: "Dedicated to making the web more accessible and impactful through innovation."
    },
    {
      icon: "🎯",
      text: "Proven track record of developing robust, efficient solutions for real-world challenges."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">WHO I AM</h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl">👨‍💻</div>
                  <p className="text-xl font-semibold">Professional Developer</p>
                  <p className="text-muted-foreground">Building the future, one line at a time</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
