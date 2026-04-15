import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "GEOVIGILANCE LABS | AI-BASED LAND USE MONITORING SYSTEM",
      description: "Real-time monitoring of land changes using AI. Automated alert system for unauthorized activities. Support for smart governance and environmental sustainability.",
      journal: "Springer",
      year: "2025",
      link: "https://link.springer.com/article/10.1007/s42979-025-04089-9",
      doi: "https://doi.org/10.1007/978-3-031-86296-0_2",
      tag: "AI & Remote Sensing",
      color: "from-primary/10 to-primary/5",
      accent: "text-primary",
      border: "border-primary/20",
    },
    {
      title: "Skin Lesion Analysis for Monkeypox Detection: A Deep Learning Perspective",
      description: "Research and development of prediction models for Monkeypox Disease using Deep Learning techniques and computer vision.",
      journal: "IJIRT",
      year: "2024",
      link: "https://ijirt.org/article?manuscript=172618",
      doi: null,
      tag: "Deep Learning & Healthcare",
      color: "from-secondary/10 to-secondary/5",
      accent: "text-secondary",
      border: "border-secondary/20",
    }
  ];

  return (
    <section id="publications" className="py-24 px-4 section-violet">
      <div className="container mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent/80 tracking-widest uppercase mb-3">
            Research work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Research papers and technical publications
          </p>
          <div className="section-underline mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className={`h-full bg-white rounded-2xl p-6 border ${pub.border} hover-lift`}
                style={{ boxShadow: '0 2px 16px -4px rgba(100,120,150,0.07)' }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pub.color} flex items-center justify-center flex-shrink-0 border ${pub.border}`}>
                    <FileText className={`w-5 h-5 ${pub.accent}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${pub.accent} bg-current/5`}
                        style={{ background: `hsl(var(--${pub.accent.split('-')[1] === 'primary' ? 'primary' : pub.accent.split('-')[1] === 'secondary' ? 'secondary' : 'accent'}) / 0.08)` }}>
                        {pub.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{pub.journal} · {pub.year}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-foreground/85 leading-snug mb-3 text-[15px]">
                  {pub.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {pub.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-xl border-border hover:border-primary/30 hover:text-primary text-sm h-8"
                  >
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                      Read Paper
                    </a>
                  </Button>
                  {pub.doi && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="rounded-xl text-muted-foreground hover:text-primary text-sm h-8"
                    >
                      <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        DOI
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
