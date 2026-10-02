import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import { testimonials, testimonialSlides } from '../data/landing';

/** Soft trim for the longest featured quotes so the green card stays readable. */
const FEATURED_LIMIT = 320;

function truncateQuote(quote: string, limit: number) {
  if (quote.length <= limit) return quote;
  const clipped = quote.slice(0, limit);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${(lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).trimEnd()}…`;
}

function Stars({ rating = 5, className = 'fill-pine text-pine' }: { rating?: number; className?: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) =>
      <StarIcon
        key={i}
        className={`h-4 w-4 ${i < rating ? className : 'fill-transparent text-current opacity-30'}`}
        aria-hidden="true" />

      )}
    </div>);

}

function FadeRevealQuote({ text, className }: { text: string; className?: string }) {
  const words = text.split(/(\s+)/);
  let wordIndex = 0;

  return (
    <blockquote className={className} aria-label={text}>
      {words.map((word, i) => {
        if (word.trim() === '') {
          return <span key={`s-${i}`}>{word}</span>;
        }

        const delayIndex = wordIndex++;
        return (
          <motion.span
            key={`${word}-${i}`}
            className="inline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.35,
              delay: 0.12 + delayIndex * 0.028,
              ease: [0.23, 1, 0.32, 1]
            }}>
            
            {word}
          </motion.span>);

      })}
    </blockquote>);

}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0
  })
};

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
  typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

export function Testimonials() {
  const isDesktop = useIsDesktop();
  const [[page, direction], setSlide] = useState([0, 0]);
  const [frameHeight, setFrameHeight] = useState<number | undefined>(undefined);
  const slideRef = useRef<HTMLDivElement>(null);

  const total = isDesktop ? testimonialSlides.length : testimonials.length;

  useEffect(() => {
    setSlide([0, 0]);
    setFrameHeight(undefined);
  }, [isDesktop]);

  const featured = isDesktop ?
  testimonials[testimonialSlides[page][0]] :
  testimonials[page];
  const side = isDesktop ? testimonialSlides[page].slice(1).map((i) => testimonials[i]) : [];
  const featuredQuote = truncateQuote(featured.quote, FEATURED_LIMIT);

  useLayoutEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    const measure = () => {
      const next = Math.ceil(el.getBoundingClientRect().height);
      setFrameHeight(next);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [page, isDesktop]);

  const paginate = (dir: number) => {
    setSlide(([p]) => [(p + dir + total) % total, dir]);
  };

  const goTo = (index: number) => {
    if (index === page) return;
    setSlide([index, index > page ? 1 : -1]);
  };

  return (
    <section id="feedback" className="w-full border-t border-line bg-alabaster py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl">
            What homeowners say
          </h2>
          <p className="max-w-md text-base leading-relaxed text-body">
            Real{' '}
            <a
              href="https://maps.app.goo.gl/YjVqysEeC6zPWBh27?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pine underline decoration-pine/30 underline-offset-2 transition-colors hover:decoration-pine">
              
              Google reviews
            </a>{' '}
            from homeowners we’ve worked with.
          </p>
        </div>

        <div
          className="relative mt-10 overflow-hidden transition-[min-height] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={frameHeight ? { minHeight: frameHeight } : undefined}>
          
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={`${isDesktop ? 'd' : 'm'}-${page}`}
              ref={slideRef}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="grid items-start gap-6 lg:grid-cols-12">
              
              <figure className="flex flex-col rounded-sm bg-pine p-8 text-white md:p-12 lg:col-span-7">
                <motion.span
                  className="font-display text-6xl font-extrabold leading-none text-white/30"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                  
                  “
                </motion.span>
                <FadeRevealQuote
                  text={featuredQuote}
                  className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl" />
                
                <motion.figcaption
                  className="mt-8 flex flex-col gap-1 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08,
                    ease: [0.23, 1, 0.32, 1]
                  }}>
                  
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wider">{featured.name}</p>
                    <p className="mt-1 text-sm text-white/70">
                      {featured.location} · {featured.project}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <Stars rating={featured.rating ?? 5} className="fill-white text-white" />
                  </div>
                </motion.figcaption>
              </figure>

              {isDesktop &&
              <div className="hidden flex-col gap-6 lg:col-span-5 lg:flex">
                  {side.map((t, i) =>
                <motion.figure
                  key={t.name}
                  className="flex flex-col rounded-sm border border-line bg-white p-7 md:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.18 + i * 0.18,
                    ease: [0.23, 1, 0.32, 1]
                  }}>
                  
                      <Stars rating={t.rating ?? 5} />
                      <blockquote className="mt-4 text-base leading-relaxed text-ink">“{t.quote}”</blockquote>
                      <figcaption className="mt-6 border-t border-line pt-5">
                        <p className="font-display text-sm font-bold uppercase tracking-wider text-ink">{t.name}</p>
                        <p className="mt-1 text-sm text-body">
                          {t.location} · {t.project}
                        </p>
                      </figcaption>
                    </motion.figure>
                )}
                </div>
              }
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous reviews"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-white text-ink transition-colors hover:border-pine hover:text-pine focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2">
            
            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Review pages">
            {Array.from({ length: total }).map((_, i) =>
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Show reviews page ${i + 1} of ${total}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 ${
              i === page ? 'w-6 bg-pine' : 'w-2 bg-line hover:bg-pine/40'}`
              } />

            )}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next reviews"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-white text-ink transition-colors hover:border-pine hover:text-pine focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2">
            
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>);

}
