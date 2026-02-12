"use client"

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-sm font-mono text-center">
          Developed with{" "}
          <span className="text-primary">Next.js</span>,{" "}
          <span className="text-primary">Tailwind CSS</span>,{" "}
          <span className="text-accent">love and coffee</span>
        </p>
        <p className="text-muted-foreground/60 text-xs font-mono">
          {new Date().getFullYear()} | randomhero177
        </p>
      </div>
    </footer>
  )
}
