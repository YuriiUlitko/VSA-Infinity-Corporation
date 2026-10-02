import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, Loader2Icon, MailIcon, PhoneIcon } from 'lucide-react';
import { FormField, inputClass } from '../FormField';
import { useEstimateForm } from './useEstimateForm';
import { contact, serviceTypes } from '../../data/landing';
import { AnimatedHeading } from '../AnimatedHeading';

const ease = [0.23, 1, 0.32, 1] as const;

export function EstimateForm() {
  const { values, errors, status, submitError, setField, handleSubmit, reset } = useEstimateForm();
  const describedBy = (field: string) => errors[field as keyof typeof errors] ? `${field}-error` : undefined;

  return (
    <section id="estimate" className="w-full scroll-mt-20 bg-sage py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid overflow-hidden rounded-sm border border-line bg-white lg:grid-cols-12">
          <div className="flex flex-col border-b border-line p-8 md:p-12 lg:col-span-5 lg:border-b-0 lg:border-r">
            <AnimatedHeading className="font-display text-3xl font-extrabold uppercase leading-tight tracking-wider text-ink md:text-4xl">
              Ready to upgrade your bathroom?
            </AnimatedHeading>
            <p className="mt-4 text-base leading-relaxed text-body">
              Fill out the form below to schedule your free in-home consultation and estimate.
            </p>

            <div className="mt-10 space-y-5 border-t border-line pt-8 lg:mt-auto">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-ink hover:text-pine">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-sage">
                  <MailIcon className="h-4 w-4 text-pine" aria-hidden="true" />
                </span>
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="flex items-center gap-3 text-sm text-ink hover:text-pine">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-sage">
                  <PhoneIcon className="h-4 w-4 text-pine" aria-hidden="true" />
                </span>
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:col-span-7">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ?
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease }}
                className="flex h-full min-h-[420px] flex-col items-start justify-center"
                role="status">
                
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-pine">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-wider text-ink">
                    Request received
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-body">
                    Thank you, {values.name.split(' ')[0]}. We’ll call you within one business day to schedule your
                    free in-home consultation.
                  </p>
                  <button
                  type="button"
                  onClick={reset}
                  className="mt-8 text-sm font-semibold text-pine underline underline-offset-4 hover:text-pine-dark">
                  
                    Submit another request
                  </button>
                </motion.div> :

              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease }}
                onSubmit={handleSubmit}
                noValidate
                className="grid gap-6 sm:grid-cols-2">
                
                  <FormField id="name" label="Full Name" error={errors.name} className="sm:col-span-2">
                    <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={values.name}
                    onChange={(e) => setField('name', e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={describedBy('name')}
                    className={inputClass(!!errors.name)} />
                  
                  </FormField>

                  <FormField id="phone" label="Phone Number" error={errors.phone}>
                    <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(267) 903-9999"
                    value={values.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={describedBy('phone')}
                    className={inputClass(!!errors.phone)} />
                  
                  </FormField>

                  <FormField id="email" label="Email Address" error={errors.email}>
                    <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={values.email}
                    onChange={(e) => setField('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={describedBy('email')}
                    className={inputClass(!!errors.email)} />
                  
                  </FormField>

                  <fieldset className="sm:col-span-2" aria-describedby={describedBy('service')}>
                    <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">Service Type</legend>
                    <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-4">
                      {serviceTypes.map((type) => {
                      const selected = values.service === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setField('service', type)}
                          className={`whitespace-nowrap rounded-sm border px-3 py-3 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-1 ${
                          selected ?
                          'border-pine bg-pine text-white' :
                          errors.service ?
                          'border-red-600 bg-white text-ink hover:border-pine' :
                          'border-line bg-white text-ink hover:border-pine'}`
                          }>
                          
                            {type}
                          </button>);

                    })}
                    </div>
                    {errors.service &&
                  <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-700">
                        {errors.service}
                      </p>
                  }
                  </fieldset>

                  <FormField id="zip" label="Location / Zip Code" error={errors.zip} className="sm:col-span-2">
                    <input
                    id="zip"
                    type="text"
                    autoComplete="postal-code"
                    placeholder="Collegeville, 19426"
                    value={values.zip}
                    onChange={(e) => setField('zip', e.target.value)}
                    aria-invalid={!!errors.zip}
                    aria-describedby={describedBy('zip')}
                    className={inputClass(!!errors.zip)} />
                  
                  </FormField>

                  <FormField id="notes" label="Project Notes" optional className="sm:col-span-2">
                    <textarea
                    id="notes"
                    rows={4}
                    placeholder="Tell us about your bathroom, timeline, and the finishes you have in mind."
                    value={values.notes}
                    onChange={(e) => setField('notes', e.target.value)}
                    className={`${inputClass(false)} resize-none`} />
                  
                  </FormField>

                  <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.website}
                      onChange={(e) => setField('website', e.target.value)}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    {status === 'error' && submitError &&
                      <p role="alert" className="mb-4 text-sm text-red-700">
                        {submitError}
                      </p>
                    }
                    <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-pine px-6 py-4 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors duration-150 hover:bg-pine-dark disabled:cursor-not-allowed disabled:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 md:text-sm">
                    
                      {status === 'submitting' ?
                    <>
                          <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending request…
                        </> :

                    'Claim Your Free Estimate'
                    }
                    </button>
                    <p className="mt-4 text-center text-sm text-body">
                      Or email us directly at{' '}
                      <a href={`mailto:${contact.email}`} className="font-medium text-pine underline underline-offset-4">
                        {contact.email}
                      </a>
                    </p>
                  </div>
                </motion.form>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}