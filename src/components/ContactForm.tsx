import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';
import Button from './Button';

type FormFields = { name: string; email: string; subject: string; message: string };
type Toast = { type: 'success' | 'error'; message: string };
const initialFields: FormFields = { name: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields | 'form', string>>>({});
  const [status, setStatus] = useState('');
  const [toast, setToast] = useState<Toast | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function validate() {
    const next: Partial<Record<keyof FormFields, string>> = {};
    if (!fields.name.trim()) next.name = 'Enter your name.';
    if (!fields.email.trim()) next.email = 'Enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = 'Enter a valid email address.';
    if (!fields.subject.trim()) next.subject = 'Enter a subject.';
    if (fields.message.trim().length < 10) next.message = 'Tell me a little more (at least 10 characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('');
    if (!validate()) {
      const message = 'Please correct the highlighted fields.';
      setStatus(message);
      setToast({ type: 'error', message });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrors({ form: 'The contact form is not configured yet. Please email me directly.' });
      setStatus('Message not sent. Use the email link below.');
      setToast({ type: 'error', message: 'The contact form is not configured yet.' });
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending your message…');
    try {
      const data = new FormData(event.currentTarget);
      data.set('access_key', accessKey);
      data.set('from_name', 'Edikan Okon portfolio');
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await response.json() as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed');
      setFields(initialFields);
      setErrors({});
      const message = 'Thank you, your message was sent successfully.';
      setStatus(`${message} I’ll get back to you soon.`);
      setToast({ type: 'success', message });
    } catch {
      setErrors({ form: 'Your message could not be sent. Please email me directly.' });
      setStatus('Message not sent. Use the email link below.');
      setToast({ type: 'error', message: 'Your message could not be sent.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const key = event.target.name as keyof FormFields;
    setFields((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined, form: undefined }));
  }

  const inputClass = 'focus-ring mt-1 w-full rounded-lg border border-gray-300 px-4 py-3';
  return (
    <>
      {toast ? createPortal(
        <div
          className={`fixed bottom-5 left-5 right-5 z-[100] flex items-start gap-3 rounded-xl border px-4 py-3 shadow-xl sm:left-auto sm:max-w-sm ${
            toast.type === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
              : 'border-red-200 bg-red-50 text-red-950'
          }`}
          role={toast.type === 'error' ? 'alert' : 'status'}
          aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
          aria-atomic="true"
        >
          {toast.type === 'success' ? <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" /> : <AlertCircle className="mt-0.5 shrink-0 text-red-600" aria-hidden="true" />}
          <p className="pr-2 text-sm font-medium leading-6">{toast.message}</p>
          <button type="button" onClick={() => setToast(null)} className="focus-ring ml-auto shrink-0 rounded p-0.5" aria-label="Dismiss notification">
            <X size={18} aria-hidden="true" />
          </button>
        </div>,
        document.body,
      ) : null}
      <form onSubmit={handleSubmit} noValidate>
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">{status}</div>
      {errors.form ? <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800" role="alert">{errors.form} <a className="font-semibold underline" href="mailto:eddychristantus@gmail.com">Email Edikan</a>.</div> : null}
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="name" className="text-sm font-medium">Name</label><input id="name" name="name" value={fields.name} onChange={updateField} className={inputClass} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} required />{errors.name ? <p id="name-error" className="mt-1 text-sm text-red-700">{errors.name}</p> : null}</div>
        <div><label htmlFor="email" className="text-sm font-medium">Email</label><input id="email" name="email" type="email" value={fields.email} onChange={updateField} className={inputClass} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} required />{errors.email ? <p id="email-error" className="mt-1 text-sm text-red-700">{errors.email}</p> : null}</div>
      </div>
      <div className="mt-6"><label htmlFor="subject" className="text-sm font-medium">Subject</label><input id="subject" name="subject" value={fields.subject} onChange={updateField} className={inputClass} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} required />{errors.subject ? <p id="subject-error" className="mt-1 text-sm text-red-700">{errors.subject}</p> : null}</div>
      <div className="mt-6"><label htmlFor="message" className="text-sm font-medium">Message</label><textarea id="message" name="message" rows={6} value={fields.message} onChange={updateField} className={inputClass} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} required />{errors.message ? <p id="message-error" className="mt-1 text-sm text-red-700">{errors.message}</p> : null}</div>
      <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'}</Button>
      </form>
    </>
  );
}
