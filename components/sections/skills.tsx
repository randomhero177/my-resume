"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript"],
  Frameworks: ["React", "Vue.js", "Next.js", "Angular"],
  Styling: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components"],
  Testing: ["Jest", "Cypress"],
  Tools: ["Git", "Vite", "Webpack", "Figma"],
  Other: ["RESTful APIs", "Microfrontend Architecture", "PWA", "Web Performance"],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span>
            Skills
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-primary font-mono text-sm mb-4">{`// ${category}`}</h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-accent">{">"}</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
