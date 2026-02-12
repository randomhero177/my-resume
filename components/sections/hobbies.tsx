"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Plane, Scale, GlobeIcon } from "lucide-react"

const hobbies = [
  {
    icon: Scale,
    title: "Scrum Master Certification",
    description: "Completed professional Scrum training with focus on Agile team processes and delivery optimization."
  },
  {
    icon: GlobeIcon,
    title: "Languages",
    description: "Russian (native), English (C2), Spanish (B2), Italian (B1). Actively improving fluency for international collaboration."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Regularly study frontend architecture, DevOps practices, and scalable system design."
  }
]

export function Hobbies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hobbies" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">05.</span>
            Beyond Engineering
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all"
              >
                <hobby.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{hobby.title}</h3>
                <p className="text-muted-foreground text-sm">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
