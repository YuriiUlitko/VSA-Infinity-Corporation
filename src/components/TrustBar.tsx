import React from 'react';
import { trustItems } from '../data/landing';
import { AnimatedHeading } from './AnimatedHeading';
import { StaggerReveal } from './StaggerReveal';

export function TrustBar() {
  return (
    <>
      <div className="w-full bg-white sm:hidden">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <AnimatedHeading className="font-display text-2xl font-extrabold uppercase leading-tight tracking-wider text-ink">
            Why homeowners choose us
          </AnimatedHeading>
          <p className="mt-3 text-sm leading-relaxed text-body">
            From first visit to final walkthrough — clear pricing, careful craftsmanship, and a crew that treats your
            home with respect.
          </p>
        </div>
      </div>

      <section aria-label="Why homeowners choose us" className="w-full border-y border-line bg-alabaster">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) =>
          <StaggerReveal
            key={item.title}
            as="li"
            index={i}
            className={`border-line px-5 py-8 md:px-8 ${i > 0 ? 'border-t sm:border-t-0' : ''} ${
            i % 2 === 1 ? 'sm:border-l' : ''} ${
            i >= 2 ? 'sm:border-t lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l' : ''}`}>
            
              <p className="font-display text-sm font-bold uppercase tracking-wider text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-body">{item.detail}</p>
            </StaggerReveal>
          )}
        </ul>
      </section>
    </>);

}
