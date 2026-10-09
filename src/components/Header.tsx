import React from 'react';
import { MailIcon } from 'lucide-react';
import { contact } from '../data/landing';
import { WhatsAppIcon } from './WhatsAppIcon';

function isHomePath(pathname: string) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path === '/';
}

export function Header() {
  const onHome = typeof window === 'undefined' || isHomePath(window.location.pathname);
  const homeHref = onHome ? '#top' : '/';
  const estimateHref = onHome ? '#estimate' : '/#estimate';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <a href={homeHref} className="flex items-center whitespace-nowrap" aria-label="VSA Infinity Corporation home">
          <span className="flex flex-col items-end leading-none text-ink">
            <span className="font-display text-base font-extrabold uppercase tracking-[0.04em] sm:text-lg">
              VSA Infinity
            </span>
            <span className="mt-0.5 font-display text-[9px] font-medium uppercase tracking-[0.22em] sm:text-[10px]">
              Corporation
            </span>
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="hidden items-center gap-5 text-sm text-body lg:flex">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 transition-colors duration-150 hover:text-pine"
            >
              <MailIcon className="h-4 w-4 text-pine" aria-hidden="true" />
              {contact.email}
            </a>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${contact.phone}`}
              className="flex items-center gap-2 transition-colors duration-150 hover:text-pine"
            >
              <WhatsAppIcon className="h-4 w-4 text-pine" />
              {contact.phone}
            </a>
          </div>

          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-sm text-pine transition-colors duration-150 hover:bg-sage lg:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>

          <a
            href={estimateHref}
            className="whitespace-nowrap rounded-sm bg-pine px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider text-white transition-colors duration-150 hover:bg-pine-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 md:px-5 md:py-3 md:text-xs"
          >
            Get Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}
