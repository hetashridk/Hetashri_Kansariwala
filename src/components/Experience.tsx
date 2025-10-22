import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "January 2025 - Presnt",
      title: "Full Stack Developer",
      company: "Freelance",
      description: "Built custom web applications for few clients. Specialized in React, Node.js, and database design. Delivered projects on time and within budget."
    },
    {
      period: "August 2025 - Present",
      title: "Junior Salesforce Developer",
      company: "EruditeWorks Private Limited",
      description: "Developing a new internal data backup tool, primarily takes the backup/restore the records of salesforce in google drive using MySQL, Express.js and Salesforce."
    },
    {
      period: "January 2025 - July 2025",
      title: "Salesforce Intern",
      company: "EruditeWorks Private Limited",
      description: "Contributed to the digital signing tool, specifically building and deploying the dedicated Admin Portal using Next.js and integrating it with Express.js and MySQL to manage user roles and data. Also gained foundational experience in Salesforce, LWC, and Apex while assisting with the development of the main EW Sign user interface."
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey as a software engineer and the companies I've worked with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <Card className="glass-card border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-secondary font-semibold text-lg">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50"></div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
