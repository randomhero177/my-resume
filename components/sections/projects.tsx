"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, ArrowUpRight, Sparkles, Zap, Layers, Globe, Terminal, Palette } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Полнофункциональная платформа электронной коммерции с корзиной, оплатой и админ-панелью",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    icon: Globe,
    color: "from-primary to-primary/50",
    size: "large",
  },
  {
    title: "Task Manager",
    description: "Drag-and-drop интерфейс с real-time обновлениями",
    technologies: ["React", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    icon: Layers,
    color: "from-accent to-accent/50",
    size: "medium",
  },
  {
    title: "Analytics Dashboard",
    description: "Интерактивные графики и визуализация данных",
    technologies: ["Vue 3", "D3.js", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    icon: Zap,
    color: "from-chart-3 to-chart-3/50",
    size: "medium",
  },
  {
    title: "Weather App",
    description: "Минималистичное приложение погоды с геолокацией",
    technologies: ["React", "OpenWeather API"],
    github: "https://github.com",
    icon: Sparkles,
    color: "from-chart-4 to-chart-4/50",
    size: "small",
  },
  {
    title: "Markdown Editor",
    description: "Live preview и экспорт в PDF",
    technologies: ["TypeScript", "CodeMirror"],
    github: "https://github.com",
    live: "https://example.com",
    icon: Terminal,
    color: "from-chart-5 to-chart-5/50",
    size: "small",
  },
  {
    title: "Portfolio Template",
    description: "Open source шаблон с анимациями",
    technologies: ["Astro", "Framer Motion"],
    github: "https://github.com",
    icon: Palette,
    color: "from-primary to-accent",
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
              Мои{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                проекты
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Подборка работ, которыми я горжусь. Каждый проект — это история решения уникальных задач.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {projects.map((project, index) => {
              const Icon = project.icon
              const isLarge = project.size === "large"
              const isMedium = project.size === "medium"

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    group relative overflow-hidden rounded-2xl border border-border bg-card
                    hover:border-primary/50 transition-all duration-500
                    ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                    ${isMedium ? "md:row-span-2" : ""}
                  `}
                >
                  
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative h-full p-6 flex flex-col">
                    
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
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
                      <h3
                        className={`font-bold mb-2 group-hover:text-primary transition-colors ${
                          isLarge ? "text-2xl" : "text-lg"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-muted-foreground ${
                          isLarge ? "text-base" : "text-sm"
                        } line-clamp-3`}
                      >
                        {project.description}
                      </p>
                    </div>

                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    
                    {isLarge && (
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <div className="p-3 rounded-full bg-primary text-primary-foreground">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                  </div>

                  
                  <div
                    className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-700`}
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <Github className="w-5 h-5" />
              Больше проектов на GitHub
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
