import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Re-ordered experiences to be strictly chronological (most recent first)
  // and added the new 'details' array for the accordion
  const experiences = [
    {
      period: "February 2026 - Present",
      title: "Full Stack and AI Developer",
      company: "Crosslinks Production House",
      description: "Working on high-performance web applications and production-level digital solutions, focusing on modern front-end frameworks and robust back-end integrations.",
      details: [
        {
          title: "Role Focus",
          text: "Full-stack development using modern technologies to build scalable production-ready applications."
        },
        {
          title: "Production Environment",
          text: "Collaborating with a creative team to deliver seamless digital experiences for various production house projects."
        },
        {
          title: "Key Learning",
          text: "Deepened expertise in production workflows and high-fidelity UI/UX implementations."
        }
      ]
    },
    {
      period: "January 2026 - Present",
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      description: "Consulting with diverse clients to deliver custom web solutions, ranging from landing pages to complex web applications, specializing in React and Next.js.",
      details: [
        {
          title: "Global Reach",
          text: "Working with clients across different regions to provide tailored technical solutions."
        },
        {
          title: "Project Management",
          text: "Handling everything from initial requirement gathering to deployment and maintenance."
        },
        {
          title: "Technical Stack",
          text: "Leveraging the power of React, Next.js, and GenAI to build cutting-edge digital products."
        }
      ]
    },
    {
      period: "August 2025 - January 2026",
      title: "Junior Salesforce Developer",
      company: "EruditeWorks Private Limited",
      description: "Promoted to a developer role, taking ownership of a new internal data backup tool. This full-stack application uses Node.js, MySQL, and Salesforce APIs to back up/restore critical org data to Google Drive. Also responsible for optimizing and maintaining the 'EW Sign' application.",
      details: [
        {
          title: "Key Project",
          text: "Internal Salesforce Data Backup & Restore Tool."
        },
        {
          title: "Problem Solved",
          text: "The company required a secure, off-platform solution to back up vital Salesforce data, mitigating data loss risks and providing a reliable restore mechanism independent of Salesforce's native tools."
        },
        {
          title: "Biggest Challenge",
          text: "The primary difficulty was efficiently handling large, asynchronous data exports from the Salesforce Bulk API. Processing these massive datasets and streaming them to Google Drive without exceeding server memory limits or hitting API rate limits was a significant architectural hurdle."
        },
        {
          title: "Solution",
          text: "I designed a queue-based system in Node.js to manage the asynchronous API jobs. By processing data in streams and chunks, the solution maintains a low memory footprint. I also implemented robust error handling and retry logic to ensure data integrity despite network or API interruptions."
        },
        {
          title: "Overall Learning",
          text: "This project provided deep insights into large-scale data integration, asynchronous processing in Node.js, and the nuances of Salesforce APIs. It reinforced the critical importance of resilient, memory-efficient system architecture."
        }
      ]
    },
    {
      period: "January 2025 - July 2025",
      title: "Salesforce Intern",
      company: "EruditeWorks Private Limited",
      description: "Contributed to the 'EW Sign' digital signing tool, primarily by building and deploying its dedicated Admin Portal. This involved using Next.js for the frontend and integrating with an Express.js backend and MySQL database to manage user roles and data.",
      details: [
        {
          title: "Key Project",
          text: "'EW Sign' Digital Tool - Admin Portal."
        },
        {
          title: "Problem Solved",
          text: "The 'EW Sign' application needed a secure, internal admin portal to manage user accounts, permissions, and track document statuses, which was previously a manual process for the support team."
        },
        {
          title: "Biggest Challenge",
          text: "As my first major project, the primary challenge was rapidly learning the Next.js framework and understanding how to securely integrate it with an existing Express.js API and MySQL database, ensuring all data handling was correct and secure."
        },
        {
          title: "Solution",
          text: "I successfully developed and deployed several key components for the admin portal, focusing on building clean, reusable React components for the UI. I also assisted the senior team by developing LWC components for the main user-facing application."
        },
        {
          title: "Overall Learning",
          text: "This internship provided a strong foundation in full-stack development within a production environment. I gained practical, hands-on experience with the MERN stack (specifically Next.js) and was introduced to the Salesforce ecosystem, including LWC and Apex."
        }
      ]
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
                className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
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

                      {/* --- Accordion Start --- */}
                      <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1" className="border-t border-primary/20">
                          <AccordionTrigger className="text-primary hover:no-underline">
                            Read more...
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-2">
                              {exp.details.map((detail, i) => (
                                <div key={i}>
                                  <strong className="text-secondary">{detail.title}:</strong>
                                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                                    {detail.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      {/* --- Accordion End --- */}

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