import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "GEOVIGILANCE LABS | AI-BASED LAND USE MONITORING SYSTEM",
      description: "Real-time monitoring of land changes using Al Automated alert system for unauthorized activities Support for smart governance and environmental sustainability",
      journal: "Research Journal",
      year: "2025",
      link: "https://link.springer.com/article/10.1007/s42979-025-04089-9",
      doi: "https://doi.org/10.1007/978-3-031-86296-0_2"
    },
    {
      title: "Skin Lesion Analysis for Monkeypox Detection: A Deep Learning Perspective",
      description: "Research and Devlop Prediction for Monkeypox Disease using Deep Learning Techniques",
      journal: "Tech Publications",
      year: "2024",
      link: "https://ijirt.org/article?manuscript=172618",
      doi: "#"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research papers and technical publications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{publication.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {publication.journal} • {publication.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{publication.description}</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={publication.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Paper
                      </a>
                    </Button>
                    {publication.doi && publication.doi !== "#" && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={publication.doi} target="_blank" rel="noopener noreferrer">
                        DOI
                      </a>
                    </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
