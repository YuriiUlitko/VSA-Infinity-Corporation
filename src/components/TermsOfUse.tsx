import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { contact } from '../data/landing';

const linkClass = 'font-medium text-pine underline underline-offset-2 hover:text-pine-dark';
const h2Class = 'mt-12 font-display text-xl font-extrabold uppercase tracking-wider text-ink md:text-2xl';
const pClass = 'mt-4 text-sm leading-relaxed text-body md:text-base';
const listClass = 'mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base';

export function TermsOfUse() {
  useEffect(() => {
    document.title = 'Terms of Use | VSA Infinity Corporation';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-sans text-body">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pine">Legal</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-wider text-ink md:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-muted">Effective Date: October 9, 2026</p>
        <p className="mt-1 text-sm text-muted">Last Updated: October 9, 2026</p>

        <div className="prose-legal mt-10">
          <p className={pClass}>
            Welcome to the website of <strong className="text-ink">VSA Infinity Corporation</strong> (“Company”, “we”,
            “us”, or “our”), accessible at{' '}
            <a className={linkClass} href="https://vsainfinity.com/" target="_blank" rel="noopener noreferrer">
              https://vsainfinity.com/
            </a>{' '}
            (the “Website”).
          </p>
          <p className={pClass}>
            Please read these Terms of Use (“Terms”) carefully before using our Website or submitting any request for
            our services. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree
            with any part of these Terms, please do not use our Website.
          </p>

          <h2 className={h2Class}>1. About Our Services &amp; Website Purpose</h2>
          <p className={pClass}>
            VSA Infinity Corporation provides turnkey bathroom remodeling, tub-to-shower conversions, custom tile and
            flooring, and related residential renovation services across Montgomery and Chester Counties, Pennsylvania.
          </p>
          <p className={pClass}>
            The content on this Website is provided for informational, marketing, and preliminary consultation
            scheduling purposes only.
          </p>

          <h2 className={h2Class}>2. Estimates, Consultations, and No Binding Contract</h2>
          <ul className={listClass}>
            <li>
              <strong className="text-ink">Informational Inquiries:</strong> Submitting an inquiry, contact form, or
              request for a “Free Estimate” / “In-Home Consultation” through our Website does{' '}
              <strong className="text-ink">not</strong> create a binding contract for construction, remodeling, or any
              other home improvement services.
            </li>
            <li>
              <strong className="text-ink">Formal Agreements:</strong> Any agreement to perform home improvement or
              remodeling work must be executed through a separate, written{' '}
              <strong className="text-ink">Home Improvement Contract</strong> signed by both parties, outlining the
              specific scope of work, timeline, materials, pricing, and payment terms in compliance with applicable
              Pennsylvania laws, including the Pennsylvania Home Improvement Consumer Protection Act (HICPA).
            </li>
            <li>
              <strong className="text-ink">Quotes and Pricing:</strong> Preliminary information, pricing indicators, or
              verbal estimates discussed prior to an executed written contract are non-binding and subject to an on-site
              property evaluation. We reserve the right to decline or reschedule any consultation request at our
              discretion.
            </li>
          </ul>

          <h2 className={h2Class}>3. Communications &amp; Consent (TCPA Notice)</h2>
          <p className={pClass}>
            By providing your contact details (including full name, phone number, location, and email address) through
            our Website forms, you expressly consent to be contacted by VSA Infinity Corporation by phone, SMS/text
            message, or email regarding your consultation request, project details, and service inquiries.
          </p>
          <ul className={listClass}>
            <li>Consent is not a mandatory condition of purchasing our services.</li>
            <li>Standard message and data rates may apply depending on your mobile carrier.</li>
            <li>
              You may opt out of marketing communications at any time by replying “STOP” to SMS messages or contacting
              us directly.
            </li>
          </ul>

          <h2 className={h2Class}>4. Intellectual Property Rights</h2>
          <p className={pClass}>
            All materials displayed on the Website — including but not limited to photographs of past remodeling
            projects, logos, text, graphics, design, layout, and service descriptions — are the proprietary property of
            VSA Infinity Corporation or its licensors and are protected by applicable United States copyright,
            trademark, and unfair competition laws.
          </p>
          <p className={pClass}>
            You may not copy, reproduce, republish, distribute, download, or use any photos, text, or content from this
            Website for commercial purposes without prior written authorization from VSA Infinity Corporation.
          </p>

          <h2 className={h2Class}>5. Permitted and Prohibited Use</h2>
          <p className={pClass}>You agree to use this Website only for legitimate, lawful purposes. You agree not to:</p>
          <ul className={listClass}>
            <li>Submit false, misleading, or fraudulent contact information through our estimate request forms.</li>
            <li>
              Use automated systems, bots, spiders, or scrapers to access or extract data from the Website without
              permission.
            </li>
            <li>
              Introduce viruses, malware, or any other harmful code that impairs the functionality or security of the
              Website.
            </li>
          </ul>

          <h2 className={h2Class}>6. Disclaimer of Warranties</h2>
          <p className={pClass}>
            This Website and all its contents are provided on an <strong className="text-ink">“AS IS”</strong> and{' '}
            <strong className="text-ink">“AS AVAILABLE”</strong> basis without warranties of any kind, either express or
            implied.
          </p>
          <p className={pClass}>While we strive to keep all information on the Website accurate and up to date:</p>
          <ul className={listClass}>
            <li>
              Project photographs and descriptions represent examples of previous custom installations; individual
              project results may vary depending on existing home conditions, layout, and selected materials.
            </li>
            <li>We do not warrant that the Website will operate uninterrupted, secure, or free of errors.</li>
          </ul>

          <h2 className={h2Class}>7. Limitation of Liability</h2>
          <p className={pClass}>
            To the fullest extent permitted by Pennsylvania and federal law, in no event shall VSA Infinity Corporation,
            its officers, employees, agents, or contractors be liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from:
          </p>
          <ul className={listClass}>
            <li>Your access to, use of, or inability to use this Website.</li>
            <li>Any communications, delays, or technical errors resulting from contact form submissions.</li>
            <li>Reliance on any general information or photos provided on this Website.</li>
          </ul>
          <p className={pClass}>
            Liability related to actual remodeling, plumbing, tile work, or construction services is governed solely by
            the terms of the signed, written Home Improvement Contract between you and VSA Infinity Corporation.
          </p>

          <h2 className={h2Class}>8. Service Area Limitations</h2>
          <p className={pClass}>
            Our remodeling services are primarily offered in Montgomery County and Chester County, Pennsylvania
            (including Collegeville, Phoenixville, King of Prussia, Norristown, Lansdale, and surrounding communities).
            Inquiries submitted from outside our service area may not be eligible for in-home consultations or service
            delivery.
          </p>

          <h2 className={h2Class}>9. Governing Law and Jurisdiction</h2>
          <p className={pClass}>
            These Terms of Use shall be governed by and construed in accordance with the laws of the{' '}
            <strong className="text-ink">Commonwealth of Pennsylvania</strong>, United States, without regard to its
            conflict of law principles. Any legal dispute or proceeding arising out of or related to the use of this
            Website shall be brought exclusively in the state or federal courts located in Montgomery County or Chester
            County, Pennsylvania.
          </p>

          <h2 className={h2Class}>10. Modifications to Terms</h2>
          <p className={pClass}>
            We reserve the right to amend or update these Terms of Use at any time. Changes will take effect immediately
            upon posting to this page, with the updated “Effective Date” at the top. Your continued use of the Website
            following any changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className={h2Class}>11. Contact Us</h2>
          <p className={pClass}>
            If you have any questions or concerns regarding these Terms of Use, please reach out to us:
          </p>
          <ul className={listClass}>
            <li>
              <strong className="text-ink">Company:</strong> VSA Infinity Corporation
            </li>
            <li>
              <strong className="text-ink">Phone / WhatsApp:</strong>{' '}
              <a className={linkClass} href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                {contact.phone}
              </a>
            </li>
            <li>
              <strong className="text-ink">Email:</strong>{' '}
              <a className={linkClass} href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <strong className="text-ink">Website:</strong>{' '}
              <a className={linkClass} href="https://vsainfinity.com/" target="_blank" rel="noopener noreferrer">
                https://vsainfinity.com/
              </a>
            </li>
            <li>
              <strong className="text-ink">Service Area:</strong> Montgomery &amp; Chester Counties, PA
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
