import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
 const companyProjects = [
    {

      title: "Erudite Website",
      description: "Enterprise-level website platform with advanced features and scalability. Built with modern web technologies to deliver exceptional user experience and performance.",
      tech: ["Next.js", "TailwindCSS", "Postgres"],
      link: "https://www.eruditeworks.com/",
      github: "#",
      myRole: "Full Stack Developer",
      gradient: "from-pink-500 to-purple-600"
    },

    {
      title: "Data Backup",
      description: "Developed a robust, automated backup service using Node.js for securely exporting Salesforce data. The application leverages the jsforce library to query Salesforce objects and efficiently streams large datasets using fast-csv, uploading the final backups directly to Google Drive via the Google APIs.",
      tech: ["Node.js", "Salesforce", "MySQL"],
      link: "#",
      github: "#",
      myRole: "Node and Salesforce Developer",
      gradient: "from-cyan-500 to-blue-600"
    },

    {
      title: "EW Sign",
      description: "A comprehensive digital signature solution designed to automate document workflows, seamlessly integrated into Salesforce.",
      tech: ["Next.js", "React.js", "MySQL", "TypeScript", "Express.js", "Salesforce"],
      link: "#",
      github: "#",
      myRole: "FullStack Developer and Salesforce Developer",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const governmentProjects = [
    {
      title: "Government Portal",
      description: "This is the community project given by ICMR to Parul University. An implementation model for high-quality patient-centric integrated emergency care through iterative processes, implement and evaluate the optimized model in terms of coverage, implementation, costing, and impact on outcomes across 6 districts, with the aim of achieving 80% population coverage.",
      tech: ["React.js", "CSS", "Mongodb", "TypeScript"],
      link: "#",
      github: "#",
      myRole: "FullStack Developer",
      gradient: "from-orange-500 to-red-600"
    }
  ];



  const personalProjects = [
    {
      title: "Next-Events",
      description: "A dynamic event discovery platform built with Next.js, designed to help users find and explore upcoming events. The application features a clean interface to browse all events, view details for specific gatherings like 'Networking for introverts' and 'Networking for extroverts', and see key information such as the date, time, and location for each listing.",
      tech: ["Next.js", "CSS"],
      link: "https://next-events-lcj2.vercel.app/",
      github: "https://github.com/hetashridk/Next-Events",
      myRole: "FullStack Developer",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "NextLevel-Food",
      description: "A full-stack web application, 'NextLevel Food,' built for food enthusiasts to discover and share their favorite recipes. The site features an 'Explore Meals' section to browse various dishes and a 'Community' section where users can contribute their own recipes, connecting with other food lovers from around the world.",
      tech: ["Next.js", "CSS", "SQLite"],
      link: "https://next-level-food-webapp.vercel.app/",
      github: "https://github.com/hetashridk/NextLevel-Food-webapp",
      myRole: "FullStack Developer",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];



  const otherProjects = [
    {
      title: "PU AI Society",
      description: "AI research and development community platform fostering collaboration and innovation in artificial intelligence and machine learning.",
      tech: ["React.js", "CSS"],
      link: "https://thepuaiso.org/",
      github: "#",
      myRole: "Frontend Developer",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "PUAISO Membership System",
      description: "Comprehensive membership management system with payment processing, event management, and member analytics dashboard.",
      tech: ["React.js", "Express.js", "Mongodb", "MySQL", "TailwindCSS"],
      link: "https://puaiso.paruluniversity.ac.in/",
      github: "#",
      myRole: "Lead and FullStack Developer",
      gradient: "from-pink-500 to-rose-600"
    }
  ];


  // Updated render function to use ProjectCard
  const renderProjects = (projects: typeof companyProjects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full" // Added h-full to ensure motion div stretches
        >
          {/* Here we pass the mapped data to the ProjectCard component.
            We map `title` to `name`, `tech` to `tools`, etc.
          */}
          <ProjectCard
            project={{
              name: project.title,
              tools: project.tech,
              role: project.myRole,
              description: project.description,
              liveUrl: project.link,
              github: project.github,
            }}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional, personal, and community projects
          </p>
        </motion.div>

        {/* The Tab structure remains identical */}
        <Tabs defaultValue="company" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="government">Government</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="other">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="company">
            {renderProjects(companyProjects)}
          </TabsContent>

          <TabsContent value="government">
            {renderProjects(governmentProjects)}
          </TabsContent>

          <TabsContent value="personal">
            {renderProjects(personalProjects)}
          </TabsContent>

          <TabsContent value="other">
            {renderProjects(otherProjects)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;