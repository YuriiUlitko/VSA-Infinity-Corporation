import { useState, type FormEvent } from 'react';

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  zip: string;
  notes: string;
  website: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: FormValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  zip: '',
  notes: '',
  website: '',
};

export function useEstimateForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === 'error') {
      setStatus('idle');
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    setSubmitError(null);

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      let data: { ok?: boolean; error?: string } = {};
      try {
        data = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        data = {};
      }

      if (!response.ok || !data.ok) {
        setStatus('error');
        setSubmitError(
          data.error ||
            'Unable to send your request right now. Please try again or email us directly.',
        );
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setSubmitError(
        'Unable to send your request right now. Please try again or email us directly.',
      );
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
    setSubmitError(null);
  };

  return { values, errors, status, submitError, setField, handleSubmit, reset };
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (values.phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.service) errors.service = 'Please choose a service type.';
  if (!values.zip.trim()) errors.zip = 'Please enter your town or zip code.';
  return errors;
}
