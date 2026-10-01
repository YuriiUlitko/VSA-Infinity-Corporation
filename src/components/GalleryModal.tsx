import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
  type GalleryImage } from
'../data/gallery';

type GalleryModalProps = {
  open: boolean;
  onClose: () => void;
  initialCategory?: 'All' | GalleryCategory;
};

export function GalleryModal({ open, onClose, initialCategory = 'All' }: GalleryModalProps) {
  const [category, setCategory] = useState<'All' | GalleryCategory>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => category === 'All' ? galleryImages : galleryImages.filter((img) => img.category === category),
    [category]
  );

  useEffect(() => {
    if (open) setCategory(initialCategory);
  }, [open, initialCategory]);

  useEffect(() => {
    if (!open) {
      setLightboxIndex(null);
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) setLightboxIndex(null);else
        onClose();
      }
      if (lightboxIndex === null || filtered.length === 0) return;
      if (e.key === 'ArrowRight') setLightboxIndex((i) => i == null ? 0 : (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft')
      setLightboxIndex((i) => i == null ? 0 : (i - 1 + filtered.length) % filtered.length);
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, lightboxIndex, filtered.length]);

  if (typeof document === 'undefined') return null;

  const active: GalleryImage | null = lightboxIndex == null ? null : filtered[lightboxIndex] ?? null;

  return createPortal(
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Project photo gallery">
        
          <motion.div
          className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm border border-line bg-white shadow-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          onClick={(e) => e.stopPropagation()}>
          
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-7 md:py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pine">Gallery</p>
                <h2 className="mt-1 font-display text-xl font-extrabold uppercase tracking-wider text-ink md:text-2xl">
                  Project photos
                </h2>
              </div>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:border-pine hover:text-pine focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2">
              
                <XIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-line px-5 py-3 md:px-7">
              {galleryCategories.map((item) =>
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setLightboxIndex(null);
              }}
              className={`rounded-sm px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 ${
              category === item ?
              'bg-pine text-white' :
              'bg-alabaster text-body hover:bg-sage hover:text-pine'}`
              }>
              
                  {item}
                </button>
            )}
            </div>

            <div className="overflow-y-auto px-5 py-5 md:px-7 md:py-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
                {filtered.map((img, index) =>
              <button
                key={img.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square overflow-hidden rounded-sm border border-line bg-alabaster focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2">
                
                    <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent px-2.5 py-2 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {img.category}
                    </span>
                  </button>
              )}
              </div>
              {filtered.length === 0 &&
            <p className="py-16 text-center text-sm text-body">No photos in this category yet.</p>
            }
            </div>
          </motion.div>

          <AnimatePresence>
            {active && lightboxIndex !== null &&
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}>
            
                <button
              type="button"
              aria-label="Close photo"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/25 bg-ink/40 text-white transition-colors hover:border-white hover:bg-ink/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8 md:top-8">
              
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>

                <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => i == null ? 0 : (i - 1 + filtered.length) % filtered.length);
              }}
              className="absolute left-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/25 bg-ink/40 text-white transition-colors hover:border-white hover:bg-ink/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-8">
              
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>

                <motion.img
              key={active.id}
              src={active.src}
              alt={active.alt}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[min(1100px,92vw)] object-contain shadow-2xl" />
            

                <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => i == null ? 0 : (i + 1) % filtered.length);
              }}
              className="absolute right-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/25 bg-ink/40 text-white transition-colors hover:border-white hover:bg-ink/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8">
              
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>

                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display text-xs font-bold uppercase tracking-wider text-white/80">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </motion.div>
          }
          </AnimatePresence>
        </motion.div>
      }
    </AnimatePresence>,
    document.body
  );
}
