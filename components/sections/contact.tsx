"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Send } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Send, href: "https://t.me/username", label: "Telegram" },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono mb-4">06. Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Work Together</span></h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I’m currently open to new opportunities and collaborations.
            If you have an interesting project or would like to discuss a potential role, feel free to reach out — my inbox is always open.
          </p>

          <Button asChild size="lg" className="group mb-12">
            <a href="mailto:randomhero177@gmail.com">
              Send a message
              <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -4 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
