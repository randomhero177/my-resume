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
            About me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, <span className="text-foreground font-medium">I’m Konstantin</span>, a Senior Frontend Engineer with a strong background in building scalable web applications for both internal enterprise systems and customer-facing products.
              </p>
              <p>
                Most of my experience comes from working as part of product and engineering teams in established companies, including <span className="text-primary">BASF, fl.ru, 1cloud.ru, and sape.ru</span>. I’ve contributed to large-scale platforms, high-traffic marketplaces, and enterprise-grade solutions, focusing on performance, maintainability, and long-term architecture.
                Alongside my in-house experience, I’ve also delivered branded e-commerce projects such as <span className="text-primary">Barking Irons × Red Dead Redemption 2</span> and the <span className="text-primary">Kings of Leon merchandise store</span>, as well as developed my own educational web application — <span className="text-primary">Conjugate Me</span>.
              </p>
              <p>
                I enjoy working at the intersection of clean architecture, modern frontend technologies, and real business needs. My approach combines technical depth with practical execution — building systems that are not only functional, but reliable and scalable.
                Open to collaborating on impactful web projects and frontend-focused initiatives.
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
