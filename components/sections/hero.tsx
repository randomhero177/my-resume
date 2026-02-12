"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Send, MapPin, Briefcase, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const terminalLines = [
  { type: "command", text: "whoami", delay: 0 },
  { type: "output", text: "Konstantin Vasin", delay: 800 },
  { type: "command", text: "cat role.txt", delay: 1600 },
  { type: "output", text: "Frontend-developer", delay: 2400 },
  { type: "command", text: "ls skills/", delay: 3200 },
  { type: "output", text: "react/ vue.js/  typescript/  nextjs/  tailwind/ vuetify/", delay: 4000 },
  { type: "command", text: "echo $STATUS", delay: 4800 },
  { type: "output", text: "Open to discuss new opportunities", highlight: true, delay: 5600 },
]

function TypingText({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30 + Math.random() * 40)
      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, onComplete])

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
      )}
    </span>
  )
}

function TerminalLine({
  type,
  text,
  highlight,
  isVisible,
  isTyping,
  onTypingComplete,
}: {
  type: string
  text: string
  highlight?: boolean
  isVisible: boolean
  isTyping: boolean
  onTypingComplete: () => void
}) {
  if (!isVisible) return null

  return (
    <div className="flex items-start gap-2 leading-relaxed">
      {type === "command" ? (
        <>
          <span className="text-primary shrink-0">guest@portfolio</span>
          <span className="text-muted-foreground shrink-0">:</span>
          <span className="text-accent shrink-0">~</span>
          <span className="text-muted-foreground shrink-0">$</span>
          <span className="text-foreground ml-2">
            {isTyping ? (
              <TypingText text={text} onComplete={onTypingComplete} />
            ) : (
              text
            )}
          </span>
        </>
      ) : (
        <span
          className={`ml-0 ${highlight ? "text-primary font-semibold" : "text-muted-foreground"}`}
        >
          {isTyping ? (
            <TypingText text={text} onComplete={onTypingComplete} />
          ) : (
            text
          )}
        </span>
      )}
    </div>
  )
}

export function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [typingLine, setTypingLine] = useState<number | null>(null)
  const [completedLines, setCompletedLines] = useState<number[]>([])

  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index])
        setTypingLine(index)
      }, line.delay)
    })
  }, [])

  const handleTypingComplete = (index: number) => {
    setCompletedLines((prev) => [...prev, index])
    if (typingLine === index) {
      setTypingLine(null)
    }
  }

  const showProfileCard = completedLines.length >= 2

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 md:px-8 lg:px-16 py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={showProfileCard ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
              
              <div className="relative bg-card border border-border rounded-2xl p-6 overflow-hidden">

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent" />
                

                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-50" />
                  <div className="relative w-full h-full rounded-full border-4 border-background bg-secondary overflow-hidden flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">?</span>
                  </div>
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-card" />
                </div>

                <div className="text-center space-y-3">
                  <h2 className="text-2xl font-bold text-foreground">Konstantin Vasin</h2>
                  <p className="text-primary font-medium">Frontend-developer</p>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Barcelona
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      8+ years
                    </span>
                  </div>
                </div>

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  I create modern web applications with a focus on performance and UX. I love clean code, new technologies and learning new languages.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {["React", "Vue.js", "TypeScript", "Next.js", "Tailwind"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex justify-center gap-2">
                  <Button variant="outline" size="icon" asChild className="bg-transparent h-9 w-9">
                    <a href="https://github.com/randomhero177/my-resume" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="bg-transparent h-9 w-9">
                    <a href="https://www.linkedin.com/in/konstantin-vasin-55395754/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="bg-transparent h-9 w-9">
                    <a href="https://t.me/skeiterov" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                      <Send className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <div className="rounded-lg overflow-hidden border border-border bg-card shadow-2xl">
              
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-4">
                  guest@portfolio: ~
                </span>
              </div>

              <div className="p-4 md:p-6 font-mono text-sm md:text-base space-y-1 min-h-[280px]">
                {terminalLines.map((line, index) => (
                  <TerminalLine
                    key={index}
                    type={line.type}
                    text={line.text}
                    highlight={line.highlight}
                    isVisible={visibleLines.includes(index)}
                    isTyping={typingLine === index && !completedLines.includes(index)}
                    onTypingComplete={() => handleTypingComplete(index)}
                  />
                ))}

                
                {completedLines.length === terminalLines.length && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-primary">guest@portfolio</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-accent">~</span>
                    <span className="text-muted-foreground">$</span>
                    <span className="inline-block w-2 h-4 bg-primary ml-2 animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6.5 }}
              className="flex items-center gap-4 mt-6"
            >
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  Contact
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent">
                <a href="#projects">My projects</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#skills" aria-label="Прокрутить вниз">
          <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </a>
      </motion.div>

      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
