import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { heroImage } from '../data/landing';
import { AnimatedHeading } from './AnimatedHeading';

export function Hero() {
  return (
    <section
      id="top"
      className="flex w-full flex-col bg-white lg:min-h-[calc(var(--app-vh)-5rem)] lg:justify-center">
      
      {/* Mobile full-bleed photo */}
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full lg:hidden">
        
        <img
          src={heroImage}
          alt="Modern freestanding bathtub with marble feature wall and vertical white tile"
          className="aspect-[16/11] max-h-[42vh] w-full object-cover" />
        
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent"
          aria-hidden="true" />
        
      </motion.figure>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-5 pb-10 pt-6 md:gap-12 md:px-8 md:pb-12 md:pt-8 lg:min-h-[calc(var(--app-vh)-5rem)] lg:grid-cols-12 lg:gap-14 lg:py-12">
        <div className="flex flex-col justify-center lg:col-span-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sage px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-pine">
            <span className="h-1.5 w-1.5 rounded-full bg-pine" aria-hidden="true" />
            Montgomery &amp; Chester Counties, PA
          </span>

          <AnimatedHeading
            as="h1"
            duration={1.1}
            className="mt-5 font-display text-[34px] font-extrabold uppercase leading-[1.02] tracking-wide text-ink sm:mt-7 sm:text-5xl xl:text-[64px]">
            
            Transform your bathroom into a <span className="text-pine">modern oasis</span>
          </AnimatedHeading>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-body sm:mt-6 md:text-lg">
            Turnkey bathroom renovations and precision tub-to-shower conversions. Fixed quotes, licensed
            craftsmanship, and zero-compromise quality.
          </p>

          <dl className="mt-6 grid max-w-xl grid-cols-1 overflow-hidden rounded-sm border border-line sm:grid-cols-2 md:mt-10">
            <div className="bg-pine p-5 text-white">
              <dt className="font-display text-sm font-bold uppercase tracking-wider">100% Turnkey Solutions</dt>
              <dd className="mt-1.5 text-sm text-white/75">Full demo to final fixture</dd>
            </div>
            <div className="bg-alabaster p-5">
              <dt className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                Licensed &amp; Fully Insured
              </dt>
              <dd className="mt-1.5 text-sm text-body">Montgomery &amp; Chester Counties</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 md:mt-10">
            <a
              href="#estimate"
              className="group inline-flex w-fit items-center gap-3 whitespace-nowrap rounded-sm bg-graphite px-7 py-4 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors duration-150 hover:bg-pine focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2">
              
              Request Free Estimate
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                aria-hidden="true" />
              
            </a>
            <p className="text-xs text-muted">*Free in-home design consultation &amp; quote</p>
          </div>
        </div>

        {/* Desktop photo */}
        <motion.figure
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
          className="relative hidden lg:col-span-6 lg:block">
          
          <div className="overflow-hidden rounded-sm border border-line bg-alabaster">
            <img
              src={heroImage}
              alt="Modern freestanding bathtub with marble feature wall and vertical white tile"
              className="h-[min(640px,calc(var(--app-vh)-10rem))] w-full object-cover" />
            
          </div>
          <figcaption className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted">
            <span>Freestanding tub remodel</span>
            <span>Marble feature wall</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>);

}
