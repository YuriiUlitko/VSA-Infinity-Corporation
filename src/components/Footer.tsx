import React from 'react';
import { contact } from '../data/landing';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer className="w-full bg-graphite text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-start">
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              VSA Infinity Corporation
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-white/70">
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors duration-150 hover:text-white"
              >
                {contact.email}
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <p className="max-w-2xl text-xs leading-relaxed text-white/60">
            VSA Infinity Corporation is a licensed and fully insured home improvement contractor serving Montgomery
            and Chester Counties, Pennsylvania. Estimates and consultations are free and non-binding; final pricing
            is confirmed in a written fixed quote after an in-home visit. Project photos are representative of finish
            quality and may vary by material selection.
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VSA Infinity Corporation. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-6">
            <a href="#" className="transition-colors duration-150 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-150 hover:text-white">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
