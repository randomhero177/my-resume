"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Tech Company",
    role: "Senior Frontend Developer",
    period: "2023 — Настоящее время",
    description: [
      "Разработка и поддержка критически важных компонентов для основного продукта компании",
      "Внедрение современных практик разработки и оптимизация производительности",
      "Менторство junior-разработчиков и проведение code review",
      "Участие в архитектурных решениях и планировании спринтов",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2021 — 2023",
    description: [
      "Создание адаптивных веб-приложений для клиентов из различных отраслей",
      "Тесное сотрудничество с дизайнерами для реализации pixel-perfect интерфейсов",
      "Интеграция с различными CMS и API",
      "Оптимизация SEO и Web Vitals метрик",
    ],
    technologies: ["Vue.js", "Nuxt", "Tailwind CSS", "REST API"],
  },
  {
    company: "Startup Inc",
    role: "Junior Frontend Developer",
    period: "2019 — 2021",
    description: [
      "Разработка пользовательских интерфейсов для SaaS-платформы",
      "Участие в переходе с jQuery на React",
      "Написание unit и integration тестов",
      "Поддержка legacy кода и рефакторинг",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Jest"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span>
            Опыт работы
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all",
                    "hover:bg-primary/5 hover:text-primary",
                    "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                    activeTab === index
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-h-[300px]"
            >
              <h3 className="text-xl font-medium mb-1">
                {experiences[activeTab].role}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-4">
                {experiences[activeTab].period}
              </p>
              <ul className="space-y-3 mb-6">
                {experiences[activeTab].description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">{">"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experiences[activeTab].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
