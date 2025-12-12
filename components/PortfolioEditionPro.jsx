import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const updates = [
  { id: 'u1', title: 'Design system overhaul', tag: 'Design', summary: 'Built a token-driven system…', img: 'https://placehold.co/800x450?text=Project+1' },
  { id: 'u2', title: 'Performance tuning', tag: 'Performance', summary: 'Cut LCP by 1.4s using edge caching…', img: 'https://placehold.co/800x450?text=Project+2' },
  { id: 'u3', title: 'Headless storefront', tag: 'FrontEnd', summary: 'Built a CMS-driven Next.js storefront…', img: 'https://placehold.co/800x450?text=Project+3' },
  { id: 'u4', title: 'AI assistant', tag: 'AI', summary: 'Mini assistant that generates content and tasks…', img: 'https://placehold.co/800x450?text=Project+4' }
];

export default function PortfolioEditionPro() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const filtered = updates.filter(u => filter === 'All' ? true : u.tag === filter);

  return (
    <div className='min-h-screen bg-brand-cream text-brand-ink px-6 pb-20'>
      
      {/* NAV */}
      <nav className='py-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-11 w-11 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold'>
            XM
          </div>
          <div>
            <div className='text-lg font-semibold'>x3 42</div>
            <div className='text-xs opacity-60'>Designer · Frontend</div>
          </div>
        </div>

        <div className='flex gap-4 text-sm'>
          <a href='#work' className='hover:underline'>Work</a>
          <a href='#updates' className='hover:underline'>Updates</a>
          <a href='#contact' className='hover:underline'>Contact</a>
          <a href='/resume.pdf' className='ml-4 px-3 py-2 bg-black text-white rounded'>Resume</a>
        </div>
      </nav>

      {/* HERO */}
      <header className='mt-8 grid lg:grid-cols-2 gap-16 items-center relative'>
        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.7}}
        >
          <h1 className='text-5xl display leading-tight'>
            The <span className='italic'>Renaissance</span> Edition of my portfolio — curated updates & product features
          </h1>

          <p className='mt-6 text-lg opacity-80 max-w-xl'>
            Inspired by Shopify Editions. A scroll-first portfolio that highlights my strongest work with clean editorial design + motion.
          </p>

          <div className='mt-8 flex gap-4'>
            <a href='#updates' className='px-6 py-3 bg-black text-white rounded-lg shadow'>See updates</a>
            <a href='#work' className='px-6 py-3 border rounded-lg'>View projects</a>
          </div>
        </motion.div>

        {/* RIGHT HERO PANEL */}
        <motion.div
          initial={{opacity:0, scale:0.96}}
          animate={{opacity:1, scale:1}}
          transition={{duration:0.6}}
          className='relative rounded-3xl overflow-hidden shadow-2xl border border-black/5'
        >
          <img src='https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80' className='w-full h-96 object-cover' />
          <div className='hero-overlay'></div>

          <div className='p-6 bg-white'>
            <div className='flex justify-between text-sm'>
              <span className='font-semibold'>Featured update</span>
              <span className='opacity-50'>Live</span>
            </div>
            <h3 className='mt-3 font-semibold text-xl'>Aurora UI — Design System</h3>
            <p className='opacity-70 mt-2 text-sm'>Tokens, typography and components that scale across products.</p>
          </div>

          <div className='absolute -right-6 -bottom-6 p-3 bg-indigo-600 text-white rounded-lg shadow-xl'>
            Try demo →
          </div>
        </motion.div>
      </header>

      {/* UPDATES */}
      <section id='updates' className='mt-20'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-semibold'>Latest updates</h2>

          <div className='flex gap-3'>
            {['All','Design','Performance','FrontEnd','AI'].map(t => {
              const classes = 'px-3 py-1 rounded text-sm ' + (filter===t ? 'bg-black text-white' : 'bg-white border');
              return (
                <button 
                  key={t}
                  onClick={() => setFilter(t)} 
                  className={classes}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {filtered.map(u => (
            <motion.article 
              key={u.id}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6}}
              className='overflow-hidden rounded-xl border bg-white shadow-sm'
            >
              <div className='relative h-44'>
                <img src={u.img} className='w-full h-full object-cover' />
                <div className='absolute left-4 top-4 bg-black text-white text-xs px-2 py-1 rounded'>
                  {u.tag}
                </div>
              </div>

              <div className='p-4'>
                <h3 className='font-semibold text-xl'>{u.title}</h3>
                <p className='opacity-70 text-sm mt-2'>{u.summary}</p>

                <div className='mt-4 flex justify-between items-center text-sm'>
                  <span className='opacity-50'>Case study</span>
                  <button 
                    onClick={() => setActive(u)} 
                    className='px-3 py-1 bg-black text-white rounded'
                  >
                    Read
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div 
            className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50'
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
          >
            <motion.div
              initial={{scale:0.9, opacity:0}}
              animate={{scale:1, opacity:1}}
              exit={{scale:0.9, opacity:0}}
              className='max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden'
            >
              <div className='p-6'>
                <h3 className='text-2xl font-bold'>{active.title}</h3>
                <p className='mt-4 opacity-70'>{active.summary}</p>

                <div className='mt-6 flex justify-end gap-3'>
                  <button 
                    onClick={() => setActive(null)} 
                    className='px-4 py-2 border rounded'
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className='mt-20 opacity-60 text-sm'>
        © {new Date().getFullYear()} x3 42 — Inspired by Shopify Editions.
      </footer>
    </div>
  );
}
