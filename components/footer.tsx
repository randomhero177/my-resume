"use client"

import { Github, Linkedin, Send } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Send, href: "https://t.me/username", label: "Telegram" },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6 md:hidden">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm font-mono text-center">
          Создано с{" "}
          <span className="text-primary">Next.js</span>,{" "}
          <span className="text-primary">Tailwind CSS</span> и{" "}
          <span className="text-accent">любовью</span>
        </p>
        <p className="text-muted-foreground/60 text-xs font-mono">
          {new Date().getFullYear()} | Ваше Имя
        </p>
      </div>
    </footer>
  )
}
