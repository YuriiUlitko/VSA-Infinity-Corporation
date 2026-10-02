import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';
import { serviceAreas, serviceAreaPins } from '../data/landing';
import { AnimatedHeading } from './AnimatedHeading';
import { StaggerReveal } from './StaggerReveal';
import { asset } from '../utils/asset';

function MapPinMarker() {
  return (
    <svg
      viewBox="0 0 24 32"
      className="h-7 w-5 drop-shadow-sm md:h-8 md:w-6"
      aria-hidden="true"
    >
      <path
        d="M12 0C5.925 0 1 4.925 1 11c0 7.5 9.2 19.4 10.15 20.55a1.1 1.1 0 0 0 1.7 0C13.8 30.4 23 18.5 23 11 23 4.925 18.075 0 12 0Z"
        className="fill-pine"
      />
      <circle cx="12" cy="11" r="4.25" className="fill-white" />
    </svg>
  );
}

export function ServiceAreas() {
  return (
    <section id="areas" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <AnimatedHeading className="font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl">
            Serving local communities
          </AnimatedHeading>
          <p className="mt-4 text-base leading-relaxed text-body">
            Proudly remodeling bathrooms across Montgomery and Chester Counties. Don’t see your town? Ask us —
            we likely cover it.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {serviceAreas.map((area, index) => (
              <StaggerReveal key={area} as="li" index={index} step={0.04}>
                <div className="flex items-center gap-2 text-sm font-medium text-ink">
                  <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-pine" aria-hidden="true" />
                  {area}
                </div>
              </StaggerReveal>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="relative w-full overflow-hidden rounded-sm border border-line bg-sage/30">
            <img
              src={asset('service-areas-map.png')}
              alt="Map of Montgomery and Chester County service areas around Philadelphia"
              width={620}
              height={421}
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {serviceAreaPins.map((pin, index) => (
                <div
                  key={pin.name}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <motion.div
                    className="origin-bottom"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      type: 'spring',
                      stiffness: 480,
                      damping: 18,
                      mass: 0.65,
                      delay: index * 0.1,
                    }}
                  >
                    <MapPinMarker />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
