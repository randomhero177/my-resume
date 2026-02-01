"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span>
            Обо мне
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Привет! Меня зовут <span className="text-foreground font-medium">[Ваше Имя]</span>, и я увлечен
                созданием вещей, которые живут в интернете. Мой интерес к веб-разработке начался
                ещё в 20XX году, когда я решил попробовать создать свой первый сайт.
              </p>
              <p>
                С тех пор я имел возможность работать в <span className="text-primary">стартапе</span>,{" "}
                <span className="text-primary">крупной корпорации</span> и{" "}
                <span className="text-primary">на фрилансе</span>. Мой основной фокус сейчас —
                создание доступных, инклюзивных продуктов и цифрового опыта.
              </p>
              <p>
                Вне работы я увлекаюсь фотографией, путешествиями и изучением новых технологий.
                Верю, что хороший код — это не только функциональность, но и искусство.
              </p>
            </div>

            <div className="relative group">
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative w-full h-full bg-card rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                    <span className="text-6xl font-bold">?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
