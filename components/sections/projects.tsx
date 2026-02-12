"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, ArrowUpRight, Sparkles, Zap, Layers, Globe, Terminal, Palette, FlameIcon, Music, Shield, BookOpen, Wine } from "lucide-react"

const projects = [
  {
    title: "Barking Irons × Red Dead Redemption 2 Collection Launch",
    description:
        "Led frontend development for the official collaboration launch between Barking Irons and Rockstar Games (RDR2). Built high-performance Shopify storefront optimized for traffic spikes during product drop, ensuring seamless checkout experience.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Custom Theme Development",
      "Performance Optimization",
    ],
    github: null,
    live: "https://barkingirons.com",
    icon: FlameIcon,
    color: "from-primary to-primary/50",
    size: "large",
  },
  {
    title: "Kings of Leon Official Merch Store",
    description:
        "Developed and launched the official merchandise store for Kings of Leon. Implemented custom Shopify theme, integrated third-party marketing tools, and optimized UX for international customers.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "E-commerce",
      "UX Optimization",
    ],
    github: null,
    live: "https://kingsofleonshop.com",
    icon: Music,
    color: "from-accent to-accent/50",
    size: "medium",
  },
  {
    title: "Conjugate Me — Spanish Learning App",
    description:
        "Designed and developed a non-profit educational web application for practicing Spanish verb conjugations. Built with a scalable frontend architecture and interactive training flow focused on UX and learning efficiency.",
    technologies: [
      "React",
      "Tailwind CSS",
      "State Management",
      "Vercel",
    ],
    github: "https://github.com/randomhero177/conjugate-me",
    live: "https://conjugate-me.vercel.app/",
    icon: BookOpen,
    color: "from-chart-5 to-chart-5/50",
    size: "medium",
  },
  {
    title: "Racimo de Uva — Winery Website",
    description:
        "Delivered a custom WordPress website for a Spanish winery, handling full development lifecycle from staging to production deployment. Implemented theme customization, performance optimization, and hosting migration.",
    technologies: [
      "WordPress",
      "PHP",
      "Custom Theme",
      "Deployment",
      "SEO Optimization",
    ],
    live: "https://www.racimodeuva.com/",
    icon: Wine,
    color: "from-chart-4 to-chart-4/50",
    size: "small",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4"
            >
              04. Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selected {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                projects
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A curated selection of client and personal work. Each project represents a unique challenge and a practical, real-world solution.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                  <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className=" group relative overflow-hidden rounded-2xl
                        border border-border bg-card
                        hover:border-primary/40
                        transition-all duration-500"
                  >
                    
                    <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-background" />
                        </div>

                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          {project.github && (
                              <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                  aria-label="GitHub"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                          )}

                          {project.live && (
                              <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                  aria-label="Live Demo"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                          )}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground"
                            >
                {tech}
              </span>
                        ))}
                      </div>
                    </div>

                    <div
                        className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} rounded-full opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700`}
                    />
                  </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/randomhero177"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <Github className="w-5 h-5" />
              More code on GitHub
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
