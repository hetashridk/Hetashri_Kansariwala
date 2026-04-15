import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "January 2026 — Present",
      title: "Full Stack & AI Developer",
      company: "Crosslinks Production House",
      type: "Full-time",
      description: "Working on high-performance web applications and production-level digital solutions, focusing on modern front-end frameworks and robust back-end integrations.",
      details: [
        { title: "Role Focus", text: "Full-stack development using modern technologies to build scalable production-ready applications." },
        { title: "Production Environment", text: "Collaborating with a creative team to deliver seamless digital experiences for various production house projects." },
        { title: "Key Learning", text: "Deepened expertise in production workflows and high-fidelity UI/UX implementations." }
      ]
    },
    {
      period: "January 2026 — Present",
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      type: "Freelance",
      description: "Consulting with diverse clients to deliver custom web solutions, ranging from landing pages to complex web applications, specializing in React and Next.js.",
      details: [
        { title: "Global Reach", text: "Working with clients across different regions to provide tailored technical solutions." },
        { title: "Project Management", text: "Handling everything from initial requirement gathering to deployment and maintenance." },
        { title: "Technical Stack", text: "Leveraging the power of React, Next.js, and GenAI to build cutting-edge digital products." }
      ]
    },
    {
      period: "August 2025 — January 2026",
      title: "Junior Salesforce Developer",
      company: "EruditeWorks Private Limited",
      type: "Full-time",
      description: "Promoted to a developer role, taking ownership of a new internal data backup tool. Full-stack application using Node.js, MySQL, and Salesforce APIs to back up/restore critical org data to Google Drive.",
      details: [
        { title: "Key Project", text: "Internal Salesforce Data Backup & Restore Tool." },
        { title: "Problem Solved", text: "The company required a secure, off-platform solution to back up vital Salesforce data, mitigating data loss risks." },
        { title: "Biggest Challenge", text: "Efficiently handling large, asynchronous data exports from the Salesforce Bulk API without exceeding memory limits." },
        { title: "Solution", text: "Designed a queue-based system in Node.js with stream-based processing and robust error handling." },
        { title: "Overall Learning", text: "Deep insights into large-scale data integration, asynchronous Node.js, and resilient system architecture." }
      ]
    },
    {
      period: "January 2025 — July 2025",
      title: "Salesforce Intern",
      company: "EruditeWorks Private Limited",
      type: "Internship",
      description: "Contributed to the 'EW Sign' digital signing tool, primarily by building and deploying its dedicated Admin Portal using Next.js, Express.js, and MySQL.",
      details: [
        { title: "Key Project", text: "'EW Sign' Digital Tool — Admin Portal." },
        { title: "Problem Solved", text: "The application needed a secure admin portal to manage user accounts, permissions, and document statuses." },
        { title: "Biggest Challenge", text: "Rapidly learning Next.js and integrating it with an existing Express.js API and MySQL database." },
        { title: "Solution", text: "Developed and deployed key admin portal components, focusing on clean reusable React components." },
        { title: "Overall Learning", text: "Strong foundation in full-stack development and introduction to the Salesforce ecosystem including LWC and Apex." }
      ]
    },
  ];

  const typeColors: Record<string, string> = {
    "Full-time": "bg-primary/10 text-primary border-primary/20",
    "Freelance": "bg-accent/10 text-accent border-accent/20",
    "Internship": "bg-secondary/10 text-secondary border-secondary/20",
  };

  return (
    <section id="experience" ref={ref} className="py-24 px-4 section-sage">
      <div className="container mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary/80 tracking-widest uppercase mb-3">
            My journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Companies I've had the privilege of working with
          </p>
          <div className="section-underline mt-5" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className={`relative flex gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6 z-10">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-sm shadow-primary/30 mt-7 md:mt-0 ml-[18px] md:ml-0 border-2 border-white" />
                </div>

                {/* Card */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} md:w-1/2`}>
                  <div
                    className="bg-white rounded-2xl p-6 border border-border/60 hover-lift"
                    style={{ boxShadow: '0 2px 16px -4px rgba(100,120,150,0.07)' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground/90">{exp.title}</h3>
                        <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${typeColors[exp.type]}`}>
                          {exp.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                    <Accordion type="single" collapsible className="mt-3">
                      <AccordionItem value="details" className="border-t border-border/60 mt-3">
                        <AccordionTrigger className="text-sm text-primary/80 hover:text-primary hover:no-underline py-2">
                          Details & learnings
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pt-1">
                            {exp.details.map((d, i) => (
                              <div key={i}>
                                <span className="font-semibold text-secondary text-sm">{d.title}:</span>
                                <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">{d.text}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
