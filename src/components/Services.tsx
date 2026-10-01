import React, { useState } from 'react';
import { services } from '../data/landing';
import { GalleryModal } from './GalleryModal';
import type { GalleryCategory } from '../data/gallery';

function PhotoHoverTrigger({
  src,
  alt,
  className,
  onOpen,
  imgClassName




}: {src: string;alt: string;className?: string;imgClassName?: string;onOpen: () => void;}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="See more photos"
      className={`group relative block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 ${className ?? ''}`}>
      
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-[filter,transform] duration-300 ease-out group-hover:scale-[1.02] group-hover:blur-[3px] group-focus-visible:blur-[3px] ${imgClassName ?? ''}`} />
      
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100 group-focus-visible:bg-ink/35 group-focus-visible:opacity-100">
        <span className="rounded-sm bg-white px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-ink shadow-sm">
          See more photos
        </span>
      </span>
    </button>);

}

export function Services() {
  const [featured, ...rest] = services;
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState<'All' | GalleryCategory>('All');

  const openGallery = (category: 'All' | GalleryCategory = 'All') => {
    setGalleryCategory(category);
    setGalleryOpen(true);
  };

  return (
    <section id="services" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl">
            Complete bathroom services
          </h2>
          <p className="max-w-md text-base leading-relaxed text-body">
            Every trade under one contract — so your project stays on scope, on schedule, and on budget.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="flex flex-col overflow-hidden rounded-sm border border-line bg-white lg:col-span-7">
            <PhotoHoverTrigger
              src={featured.image}
              alt="Fully remodeled bathroom with freestanding tub and walk-in shower"
              imgClassName="aspect-[16/10] w-full"
              onOpen={() => openGallery('Bathroom')} />
            
            <div className="flex flex-1 flex-col p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pine">Signature service</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wider text-ink">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-body">{featured.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                {featured.tags.map((tag) =>
                <li key={tag} className="rounded-sm bg-sage px-3 py-1.5 text-xs font-medium text-pine">
                    {tag}
                  </li>
                )}
              </ul>
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-5 lg:grid-rows-3">
            {rest.map((service) => {
              const category: 'All' | GalleryCategory =
              service.title.includes('Floor') ?
              'Floor' :
              service.title.includes('Vanit') ?
              'Bathroom' :
              service.title.includes('Tub') ?
              'Bathroom' :
              'All';

              return (
                <article
                  key={service.title}
                  className="grid grid-cols-[120px_1fr] overflow-hidden rounded-sm border border-line bg-white sm:grid-cols-[180px_1fr]">
                  
                  <PhotoHoverTrigger
                    src={service.image}
                    alt=""
                    className="h-full min-h-[150px]"
                    onOpen={() => openGallery(category)} />
                  
                  <div className="flex flex-col justify-center p-5 md:p-6">
                    <h3 className="font-display text-base font-bold uppercase tracking-wider text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
                  </div>
                </article>);

            })}
          </div>
        </div>
      </div>

      <GalleryModal open={galleryOpen} onClose={() => setGalleryOpen(false)} initialCategory={galleryCategory} />
    </section>);

}
