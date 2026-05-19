import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MD. Hasnat — Full Stack Engineer" },
      { name: "description", content: "Full Stack Engineer building scalable, high-performance web applications across frontend, backend, databases, and deployment infrastructure." },
      { property: "og:title", content: "MD. Hasnat — Full Stack Engineer" },
      { property: "og:description", content: "Building modern products. Solving real problems." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" },
    ],
  }),
});

function Dot({ on = true }: { on?: boolean }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: on ? "var(--terminal)" : "var(--terminal-dim)" }}
    />
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="label mb-4">{`// section ${index} ${title.toLowerCase()}`}</div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      {/* Top status bar */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          <div className="flex items-center gap-3">
            <Dot />
            <span>system://hasnat.dev</span>
            <span className="hidden sm:inline">// portfolio.build_v04 // full_stack_engineer</span>
          </div>
          <div className="flex items-center gap-3">
            <span>online</span>
            <span className="rounded-sm bg-terminal/10 px-1.5 py-0.5 text-terminal">GMT+6</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6">
        {/* Hero */}
        <section className="border-b border-border pt-12 pb-16">
          <div className="label mb-6">— operator id: hasnat_md</div>
          <h1 className="display text-foreground" style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}>
            MD. Hasnat
          </h1>
          <div className="display mt-2 text-terminal-dim" style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}>
            Full Stack Engineer<span className="text-terminal">.</span>
          </div>
        </section>

        {/* Intro grid */}
        <section className="grid grid-cols-1 gap-10 border-b border-border py-10 lg:grid-cols-3">
          <div>
            <div className="label mb-3">— current status</div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building scalable, high-performance web applications that solve real-world client experience across frontend, backend, databases, and deployment infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-widest">
              <a href="#projects" className="border border-terminal bg-terminal/10 px-3 py-2 text-terminal hover:bg-terminal/20">
                [ view_work ]
              </a>
              <a href="#experience" className="border border-border px-3 py-2 text-foreground hover:border-terminal hover:text-terminal">
                [ download_resume ]
              </a>
              <a href="#contact" className="border border-border px-3 py-2 text-foreground hover:border-terminal hover:text-terminal">
                [ contact ]
              </a>
            </div>
          </div>

          <div>
            <div className="label mb-3">— core expertise</div>
            <ul className="space-y-2 text-sm">
              {[
                ["01", "React JS / Next JS"],
                ["02", "Node JS / Nest JS"],
                ["03", "PostgreSQL / MongoDB"],
                ["04", "Python / Go"],
                ["05", "Cloud Infrastructure"],
              ].map(([n, t]) => (
                <li key={n} className="flex items-center gap-3">
                  <Dot />
                  <span className="text-terminal-dim">[{n}]</span>
                  <span className="uppercase tracking-wider">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label mb-3">— focus areas</div>
            <ul className="space-y-2 text-sm uppercase tracking-wider">
              {[
                "Scalable backend systems",
                "Resilient APIs & SDKs",
                "Performance & DX",
                "Architecture & design",
                "AI & LLM workflows",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-terminal">›</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section className="grid grid-cols-1 gap-12 border-b border-border py-16 lg:grid-cols-2">
          <div>
            <div className="label mb-6">— operative briefing</div>
            <h2 className="display text-foreground" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Build modern<br />
              products.<br />
              <span className="text-terminal-dim">Solve real</span><br />
              <span className="text-terminal-dim">problems.</span>
            </h2>
            <p className="mt-8 max-w-md text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
              Clean architecture. Scalable systems. Better user experience. Good software is not only about getting code — it's about building systems that are maintainable, scalable, performant, and user-friendly.
            </p>
          </div>

          <div>
            <div className="label mb-4">Developer focused on real-world product engineering</div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I started my journey as a frontend developer, but quickly counted into backend development, database design, deployment systems, and holistic application architecture while serving client projects.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rather than just building interfaces, I enjoy understanding the complete systems map — from frontend user experience to backend logic, APIs, databases, and infrastructure. Currently focused on growing into a strong Full Stack Engineer capable of building production-level applications end-to-end.
            </p>

            <div className="label mt-10 mb-4">— what i bring / why it works</div>
            <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
              {[
                "End-to-end product engineering",
                "Pixel-perfect UI / UX execution",
                "Full-stack development experience",
                "Resilient architecture thinking",
                "Problem-solving mindset",
                "Fast adaptability to new tech",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 border border-border bg-card/40 px-3 py-2">
                  <span className="text-terminal">✓</span>
                  <span className="uppercase tracking-wider">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border py-16">
          <div className="label mb-4">— professional deployment</div>
          <h2 className="display text-foreground" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            Experience
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <div className="label mb-3">— current role</div>
              <h3 className="display text-2xl">Frontend Developer</h3>
              <div className="mt-1 text-xs uppercase tracking-widest text-terminal">
                // full-stack responsibilities
              </div>
              <div className="label-dim mt-6 mb-2">— primary / day-to-day duties</div>
              <ul className="space-y-2 text-sm">
                {[
                  "Build scalable interface applications using React and Next JS",
                  "Integrate REST APIs and manage complex frontend state",
                  "Develop backend modules using Node JS and Nest JS",
                  "Design database structures using PostgreSQL and MongoDB",
                  "Participate in deployment and infrastructure decisions",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-muted-foreground">
                    <span className="text-terminal">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="label-dim mt-8 mb-3">— current projects</div>
              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-widest">
                {["Admin & billing stack", "Vendor architecture", "Order Tools", "High-performance APIs"].map((t) => (
                  <span key={t} className="border border-border px-2 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="label mb-3">— skill summary</div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Working on production-level applications involving frontend systems, backend APIs, dashboards, database design, and infrastructure deployment.
              </p>
              <div className="label mt-10 mb-3">— development mindset</div>
              <p className="display text-2xl leading-tight">
                Clean architecture.<br />
                Scalable systems.<br />
                <span className="text-terminal-dim">Better UX.</span>
              </p>
              <p className="mt-6 text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
                I believe good software is not only about writing code — it's about building systems that are maintainable, scalable, performant, and user-friendly.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-border py-16">
          <div className="label mb-4">— operative deployments</div>
          <h2 className="display text-foreground" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            Featured Projects
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "// project_01",
                title: "Multi-Vendor Marketplace Platform",
                blurb: "Full vendor onboarding workflow with payouts, inventory, and orders.",
                desc: "A scalable multi-vendor marketplace platform designed to connect buyers and sellers with transparency-focused features, role-based permissions, and modern infrastructure architecture.",
                stack: ["React", "Next.js", "Node.js", "Stripe", "Redis"],
                features: [
                  "Multi-tenant architecture (vendor, buyer, admin)",
                  "Stripe payment processing",
                  "Real-time order tracking with WebSockets",
                ],
              },
              {
                tag: "// project_02",
                title: "File Upload & Media System",
                blurb: "Scalable media upload system with CDN optimization.",
                desc: "A custom file and image upload system designed for handling multiple uploads, previews, optimized delivery, and media management workflows.",
                stack: ["Node.js", "TypeScript", "Cloudflare R2", "AWS"],
                features: [
                  "Chunked upload pipeline with resume",
                  "Image transforms, previews & metadata",
                  "Bandwidth-optimized signed asset URLs",
                ],
              },
              {
                tag: "// project_03",
                title: "Role-Based Dashboard",
                blurb: "Enterprise dashboard with granular access control.",
                desc: "A dashboard system built for managing multiple user roles with secure authentication, dynamic permissions, and responsive analytics interfaces.",
                stack: ["Next.js", "Nest.js", "Postgres", "TRPC"],
                features: [
                  "Role-based access management",
                  "Dynamic permission policies",
                  "Real-time analytics & audit logs",
                ],
              },
            ].map((p) => (
              <article key={p.title} className="panel flex flex-col p-5">
                <div className="label">{p.tag}</div>
                <h3 className="display mt-4 text-xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-terminal-dim">{p.blurb}</p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className="label-dim mt-5 mb-2">// tech</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="border border-border px-1.5 py-0.5 text-[10px] text-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="label-dim mt-5 mb-2">// key_features</div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-terminal">›</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full border border-border py-2.5 text-[11px] uppercase tracking-widest text-foreground transition-colors hover:border-terminal hover:text-terminal">
                  [ view_project ]
                </button>
              </article>
            ))}
          </div>

          {/* Technical log */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
            <div>
              <h3 className="display text-3xl">Technical<br />Log</h3>
              <p className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                Technical specs of all operative capabilities and system fundamentals.
              </p>
            </div>
            <div className="panel divide-y divide-border">
              <div className="grid grid-cols-[160px_1fr_80px] gap-4 px-4 py-2 text-[10px] uppercase tracking-widest text-terminal-dim">
                <span>// system_type</span>
                <span>// primary_stack</span>
                <span className="text-right">// status</span>
              </div>
              {[
                ["[frontend_dev]", "React.js // Next.js // TypeScript // Tailwind CSS // Material UI // Motion Framework // Zustand // Redux", "ACTIVE"],
                ["[backend_dev]", "Node.js // Nest.js // Express.js // REST API // Auth & Authorization // Role-based access control", "ACTIVE"],
                ["[databases_dev]", "PostgreSQL // MongoDB // Prisma ORM // SQL", "ACTIVE"],
                ["[devops_basic]", "Docker // Git // CI/CD // File Storage Systems // S3 & Cloudinary // Deployment Pipelines", "STABLE"],
              ].map(([type, stack, status]) => (
                <div key={type} className="grid grid-cols-[160px_1fr_80px] gap-4 px-4 py-3 text-xs">
                  <span className="text-terminal">{type}</span>
                  <span className="text-muted-foreground">{stack}</span>
                  <span className="text-right text-terminal">{status}</span>
                </div>
              ))}
              <button className="w-full px-4 py-3 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-terminal">
                + load full archive
              </button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid grid-cols-1 gap-12 border-b border-border py-16 lg:grid-cols-2">
          <div>
            <div className="label mb-4">— operative // contact_log</div>
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Let's build<br />something<br /><span className="text-terminal-dim">great.</span>
            </h2>

            <dl className="mt-10 space-y-3 text-sm">
              {[
                ["email_", "z.hasnat.dev@gmail.com"],
                ["github_", "github.com/yourprofile"],
                ["linkedin_", "linkedin.com/in/yourprofile"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[100px_1fr] items-center gap-4 border border-border bg-card/40 px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-widest text-terminal">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-muted-foreground cursor-blink">
              status_ Last log out: 13:42:08 UTC // system synchronized // ready &gt; project rebrief incoming
            </p>
          </div>

          <div>
            <div className="label mb-4">— availability profile</div>
            <ul className="space-y-2 text-sm">
              {[
                "Full Stack Developer roles",
                "Frontend Engineering roles",
                "Product-focused engineering teams",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 border border-border bg-card/40 px-3 py-3">
                  <Dot />
                  <span className="uppercase tracking-wider">{t}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:z.hasnat.dev@gmail.com"
              className="mt-6 block border border-terminal bg-terminal/10 py-4 text-center text-xs uppercase tracking-[0.3em] text-terminal transition-colors hover:bg-terminal/20"
            >
              [ initiate_contact_sequence ]
            </a>

            <div className="label-dim mt-10 mb-2">— transmission frequency</div>
            <p className="text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
              I respond within 24 hours. Asynchronous comms preferred. Available for remote engagements globally.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-2 py-6 text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2026 hasnat.dev // all systems operational</span>
          <span>built with React + TanStack // designed in the dark</span>
        </footer>
      </div>
    </main>
  );
}
