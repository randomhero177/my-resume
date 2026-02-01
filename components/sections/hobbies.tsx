"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Camera, Gamepad2, Music, BookOpen, Plane, Coffee } from "lucide-react"

const hobbies = [
  {
    icon: Camera,
    title: "Фотография",
    description: "Люблю запечатлевать моменты городской жизни и путешествий",
  },
  {
    icon: Gamepad2,
    title: "Видеоигры",
    description: "Indie-игры и стратегии — отличный способ отдохнуть",
  },
  {
    icon: Music,
    title: "Музыка",
    description: "От классики до электроники. Иногда играю на гитаре",
  },
  {
    icon: BookOpen,
    title: "Чтение",
    description: "Научная фантастика, книги по саморазвитию и техническая литература",
  },
  {
    icon: Plane,
    title: "Путешествия",
    description: "Исследование новых мест и культур вдохновляет на новые идеи",
  },
  {
    icon: Coffee,
    title: "Кофе",
    description: "Ценитель specialty кофе. V60 — мой любимый метод заваривания",
  },
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
            Увлечения
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
