import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/*
  Editions - Full Hero (A)
  - External images are used so Vercel shows them immediately.
  - Replace the external URLs later with your own uploads to /public.
*/

const UPDATES = [
  { id: 'u1', title: 'Design system overhaul', tag: 'Design', summary: 'Built a token-driven system for consistent theming across products.', img: 'https://placehold.co/1200x700?text=Project+1' },
  { id: 'u2', title: 'Performance tuning', tag: 'Performance', summary: 'Cut LCP by 1.4s and improved TTFB with edge caching.', img: 'https://placehold.co/1200x700?text=Project+2' },
  { id: 'u3', title: 'Headless storefront', tag: 'FrontEnd', summary: 'Headless Next.js store with CMS-driven content.', img: 'https://placehold.co/1200x700?text=Project+3' },
  { id: 'u4', title: 'AI assistant (Sidekick-style)', tag: 'AI', summary: 'Prompt-driven tool to generate content and tasks quickly.', img: 'https://placehold.co/1200x700?text=Project+4' }
];

export default function PortfolioEditionPro() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const prefersReduced = useReducedMotion();
  const sceneRef = useRef(null);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el || prefersReduced) return;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--mx', (x * 24).toFixed(2) + 'px');
      el.style.setProperty('--my', (y * 14).toFixed(2) + 'px');
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [prefersReduced]);

  const filtered = UPDATES.filter(u => filter === 'All' ? true : u.tag === filter);

  return (
    <div className="min-h-screen bg-edition-cream text-edition-ink antialiased">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex gap-6">
          {/* Left chapter index */}
          <aside className="w-56 sticky top-6 hidden lg:block">
            <div className="mb-6 text-sm font-bold tracking-tight">The<br/>Renaissance<br/>Edition</div>
            <nav className="mt-8 text-sm opacity-85 space-y-4">
              <a href="#sidekick" className="block">I · Sidekick</a>
              <a href="#agentic" className="block">II · Agentic</a>
              <a href="#online" className="block">III · Online</a>
              <a href="#retail" className="block">IV · Retail</a>
              <a href="#marketing" className="block">V · Marketing</a>
            </nav>
            <div className="mt-8 text-xs opacity-60">© {new Date().getFullYear()} x3 42</div>
          </aside>

          <main className="flex-1">
            {/* NAV */}
            <nav className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">XM</div>
                <div>
                  <div className="text-lg font-semibold">x3 42</div>
                  <div className="text-xs opacity-70">Designer · Frontend</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a href="#work" className="text-sm hover:underline">Work</a>
                <a href="#updates" className="text-sm hover:underline">Updates</a>
                <a href="#contact" className="text-sm hover:underline">Contact</a>
                <a href="/resume.pdf" className="ml-4 px-3 py-2 bg-black text-white rounded">Resume</a>
              </div>
            </nav>

            {/* HERO SECTION (Edition A) */}
            <section className="relative overflow-visible">
              <div ref={sceneRef} className="relative hero-scene">
                {/* Full-bleed painting (external for now) */}
                <div className="relative rounded-3xl hero-card overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=60"
                    alt="Renaissance painting style background"
                    className="w-full h-[54vh] object-cover"
                  />

                  {/* Foreground info card bottom */}
                  <div className="p-6 bg-white/95">
                    <div className="flex items-center justify-between">
                      <div className="text-xs opacity-70">Featured update</div>
                      <div className="text-xs opacity-50">Live</div>
                    </div>
                    <h3 className="mt-3 font-semibold text-2xl">Aurora UI — Design System</h3>
                    <p className="mt-2 text-sm opacity-70">Tokens, typography and components that scale across products.</p>
                  </div>
                </div>

                {/* Floating cutouts (external images for demo) */}
                <motion.img
                  src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=60"
                  alt="float left"
                  className="absolute left-6 bottom-8 w-64 rounded-lg transform-gpu z-30 float-left"
                  style={{ translate: 'var(--mx,0) var(--my,0)' }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                />

                <motion.img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=520&q=60"
                  alt="float right"
                  className="absolute right-8 top-10 w-56 rounded-lg transform-gpu z-20 float-right"
                  style={{ translate: 'calc(var(--mx,0) * -0.5) calc(var(--my,0) * -0.5)' }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.12 }}
                />

                {/* Grid overlay */}
                <div className="absolute inset-0 pointer-events-none grid-overlay" />

                {/* Left editorial headline */}
                <div className="absolute left-8 top-10 max-w-xl text-edition-cream copy-shadow z-40">
                  <h1 className="text-5xl font-serif leading-tight text-edition-ink">
                    The <span className="italic">Renaissance</span> Edition of my portfolio — curated updates & product features
                  </h1>
                  <p className="mt-6 text-lg opacity-80 max-w-lg">Inspired by Shopify Editions. A scroll-first portfolio with editorial motion.</p>

                  <div className="mt-8 flex gap-4">
                    <a href="#updates" className="px-6 py-3 bg-black text-white rounded-lg shadow">See updates</a>
                    <a href="#work" className="px-6 py-3 border rounded-lg">View projects</a>
                  </div>
                </div>
              </div>
            </section>

            {/* UPDATES GRID */}
            <section id="updates" className="mt-16">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Latest updates</h2>
                <div className="flex gap-3">
                  {['All','Design','Performance','FrontEnd','AI'].map(t => (
                    <button key={t} onClick={() => setFilter(t)} className={px-3 py-1 rounded }>{t}</button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(u => (
                  <motion.article key={u.id} className="rounded-xl overflow-hidden border bg-white shadow-sm" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
                    <div className="relative h-44">
                      <img src={u.img} alt={u.title} className="w-full h-full object-cover" />
                      <div className="absolute left-4 top-4 px-2 py-1 bg-black text-xs text-white rounded">{u.tag}</div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{u.title}</h3>
                      <p className="mt-2 text-sm opacity-70">{u.summary}</p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-xs opacity-50">Case study</div>
                        <div className="flex gap-2">
                          <button onClick={() => setActive(u)} className="px-3 py-1 bg-black text-white rounded text-sm">Read</button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <AnimatePresence>
              {active && (
                <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                  <div className="absolute inset-0 bg-black/50" onClick={()=>setActive(null)} />
                  <motion.div className="relative z-10 max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-lg" initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} exit={{y:20, opacity:0}}>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold">{active.title}</h3>
                      <p className="mt-3 text-sm opacity-70">{active.summary}</p>
                      <div className="mt-6 flex items-center justify-end gap-3">
                        <button onClick={()=>setActive(null)} className="px-4 py-2 border rounded">Close</button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <footer className="mt-12 text-sm opacity-70">© {new Date().getFullYear()} x3 42 — portfolio edition.</footer>
          </main>
        </div>
      </div>
    </div>
  );
}
