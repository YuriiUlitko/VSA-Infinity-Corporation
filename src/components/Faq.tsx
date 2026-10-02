import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { faqs } from '../data/landing';
import { AnimatedHeading } from './AnimatedHeading';

export function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pine">FAQ</p>
          <AnimatedHeading className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl">
            Common questions
          </AnimatedHeading>
          <p className="mt-4 text-base leading-relaxed text-body">
            Straight answers about timing, pricing, and what to expect before we start your remodel.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((item, index) => {
              const open = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;

              return (
                <li key={item.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-pine focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2"
                    >
                      <span className="font-display text-base font-bold tracking-wide text-ink md:text-lg">
                        {item.question}
                      </span>
                      <PlusIcon
                        className={`h-5 w-5 shrink-0 text-pine transition-transform duration-200 ${
                          open ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-sm leading-relaxed text-body md:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
