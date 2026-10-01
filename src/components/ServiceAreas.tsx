import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { serviceAreas } from '../data/landing';

export function ServiceAreas() {
  return (
    <section id="areas" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl">
            Serving local communities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Proudly remodeling bathrooms across Montgomery and Chester Counties. Don’t see your town? Ask us —
            we likely cover it.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3 lg:col-span-8">
          {serviceAreas.map((area, index) =>
          <li
            key={area}
            className={`flex items-center gap-2.5 bg-white px-5 py-4 text-sm font-medium text-ink ${
            index === serviceAreas.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`
            }>
            
              <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-pine" aria-hidden="true" />
              {area}
            </li>
          )}
        </ul>
      </div>
    </section>);

}