import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Linkedin, MapPin, Briefcase } from "lucide-react";

const experience = [
  {
    company: "TraxxionAI",
    role: "Frontend Developer",
    period: "Web Application",
    url: "https://www.traxxion.ai/",
    description:
      "Contributed to an AI-powered Workforce Management platform — building responsive interfaces for time tracking, intelligent employee scheduling, and real-time labor analytics used by organizations to streamline operations.",
    stack: ["React", "TypeScript", "TailwindCSS"],
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arlind Idrizi — Frontend & Mobile Developer" },
      {
        name: "description",
        content:
          "Arlind Idrizi is a frontend and mobile developer based in Tirana, Albania, with 4 years of experience building web and mobile applications.",
      },
      { property: "og:title", content: "Arlind Idrizi — Frontend & Mobile Developer" },
      {
        property: "og:description",
        content: "Frontend & mobile developer based in Tirana, Albania.",
      },
    ],
  }),
});

const projects = [
  {
    index: "01",
    type: "Web Application",
    title: "Analytics Dashboard",
    description:
      "A real-time dashboard for tracking product metrics, built with React and TypeScript. Focused on dense data visualisation and keyboard-first workflows.",
    stack: ["React", "TypeScript", "TailwindCSS", "Recharts"],
    year: "2024",
  },
  {
    index: "02",
    type: "Mobile Application",
    title: "Fitness Companion",
    description:
      "A cross-platform mobile app for tracking workouts and recovery. Smooth gestures, offline-first sync, and a calm minimalist interface.",
    stack: ["React Native", "Expo", "TypeScript", "Zustand"],
    year: "2024",
  },
];

const skills = [
  "React", "React Native", "TypeScript", "Next.js",
  "TailwindCSS", "Expo", "Node.js", "REST & GraphQL",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-xs tracking-widest uppercase">
            AI<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-8 font-mono text-xs tracking-widest uppercase md:flex">
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <a
            href="mailto:arlindidrizi01@gmail.com"
            className="font-mono text-xs tracking-widest uppercase text-primary hover:underline underline-offset-4"
          >
            Available
          </a>
        </div>
      </header>

      <section id="top" className="relative px-6 pt-40 pb-32 md:pt-56 md:pb-48">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span className="inline-block h-px w-8 bg-primary" />
            Portfolio / 2026
          </div>
          <h1 className="font-serif text-7xl leading-[0.95] tracking-tight md:text-[9rem]">
            Arlind
            <br />
            <span className="italic text-primary">Idrizi</span>
          </h1>
          <div className="mt-12 grid gap-12 md:grid-cols-12">
            <p className="md:col-span-7 md:col-start-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Frontend & mobile developer crafting precise, performant interfaces.
              <span className="text-foreground"> Four years building products</span> that
              feel quiet, considered, and a little inevitable.
            </p>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Tirana, Albania
            </span>
            <span>04 Years</span>
            <span>Available for work</span>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border/60 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <div className="mb-4 font-mono text-xs tracking-widest uppercase text-muted-foreground">
              / Selected Work
            </div>
            <h2 className="font-serif text-5xl md:text-7xl">
              Things I've <span className="italic text-primary">built</span>
            </h2>
          </div>

          <div className="divide-y divide-border/60 border-y border-border/60">
            {projects.map((p) => (
              <article
                key={p.index}
                className="group grid cursor-pointer gap-6 py-10 transition-colors hover:bg-card/40 md:grid-cols-12 md:items-start md:gap-8 md:py-14 md:px-4"
              >
                <div className="md:col-span-1 font-mono text-xs tracking-widest text-muted-foreground">
                  {p.index}
                </div>
                <div className="md:col-span-3">
                  <div className="font-mono text-xs tracking-widest uppercase text-primary">
                    {p.type}
                  </div>
                  <div className="mt-2 font-mono text-xs text-muted-foreground">{p.year}</div>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-serif text-3xl md:text-5xl leading-tight transition-transform group-hover:-translate-x-1">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 flex md:justify-end">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border/60 px-6 py-32">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              / About
            </div>
            <div className="mt-6 font-mono text-xs tracking-widest uppercase text-primary">
              [ AI ]
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="font-serif text-3xl md:text-5xl leading-[1.1]">
              I build interfaces with the same care a typographer gives a single glyph —
              <span className="italic text-primary"> obsessively, quietly, in service of the reader.</span>
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
              Based in Tirana, I work across web and mobile, with a strong bias toward
              React, React Native, and TypeScript. Four years of shipping production
              software has taught me that the best UI is the one nobody notices.
            </p>

            <div className="pt-6">
              <div className="mb-4 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                / Stack
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
                {skills.map((s) => (
                  <div key={s} className="border-t border-border pt-3 font-mono text-sm">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border/60 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            / Contact — 2026
          </div>
          <h2 className="font-serif text-6xl md:text-[10rem] leading-[0.9] tracking-tight">
            Let's <span className="italic text-primary">talk.</span>
          </h2>

          <div className="mt-20 grid gap-10 md:grid-cols-2">
            <a
              href="mailto:arlindidrizi01@gmail.com"
              className="group flex items-center justify-between border-t border-border py-6 transition-colors hover:border-primary"
            >
              <div>
                <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  Email
                </div>
                <div className="mt-2 font-serif text-2xl md:text-3xl break-all">
                  arlindidrizi01@gmail.com
                </div>
              </div>
              <Mail className="h-6 w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>

            <a
              href="https://www.linkedin.com/in/arlind-idrizi-210486191/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-t border-border py-6 transition-colors hover:border-primary"
            >
              <div>
                <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  LinkedIn
                </div>
                <div className="mt-2 font-serif text-2xl md:text-3xl">/arlind-idrizi</div>
              </div>
              <Linkedin className="h-6 w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 font-mono text-xs tracking-widest uppercase text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 Arlind Idrizi</div>
          <div>Built in Tirana — All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}
