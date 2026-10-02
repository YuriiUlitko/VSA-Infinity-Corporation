import React from 'react';
import { steps } from '../data/landing';
import { AnimatedHeading } from './AnimatedHeading';
import { StaggerReveal } from './StaggerReveal';

export function Process() {
  return (
    <section id="process" className="w-full bg-alabaster py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-baseline justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pine">
            How the project runs
          </p>
          <p className="hidden text-xs tracking-wide text-muted sm:block">Four steps, in order</p>
        </div>

        <AnimatedHeading className="mt-6 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl lg:text-5xl">
          Our 4-step process
        </AnimatedHeading>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-body md:text-lg">
          A clear path from first visit to final walkthrough — you always know what happens next.
        </p>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <StaggerReveal key={step.number} as="li" index={index} className="min-w-0">
              <div className="flex h-full flex-col">
                <span className="block h-px w-full bg-line" aria-hidden="true" />
                <span className="mt-5 text-sm font-semibold tabular-nums text-pine">
                  {String(index + 1)}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-wide text-ink md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body md:text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </StaggerReveal>
          ))}
        </ol>

        <a
          href="#faq"
          className="mt-12 inline-block text-sm font-semibold text-pine underline underline-offset-4 transition-colors hover:text-pine-dark lg:mt-14"
        >
          Common questions about each step
        </a>
      </div>
    </section>
  );
}
