import React from 'react';
import { steps } from '../data/landing';

export function Process() {
  return (
    <section id="process" className="w-full bg-alabaster py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl">
            Our 4-step process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            A clear path from first visit to final walkthrough — you always know what happens next.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) =>
          <li key={step.number} className="flex flex-col bg-white p-7 md:p-8">
              <span className="font-display text-4xl font-extrabold text-pine">{step.number}</span>
              <span className="mt-6 block h-px w-10 bg-pine" aria-hidden="true" />
              <h3 className="mt-6 font-display text-base font-bold uppercase tracking-wider text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{step.description}</p>
            </li>
          )}
        </ol>
      </div>
    </section>);

}