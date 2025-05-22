'use client';
import { useState, useTransition, useEffect } from 'react';

export function useNewsletter() {
  const [email, setEmail] = useState('');
  const [msg,   setMsg]   = useState('');
  const [isPending, start] = useTransition();

  const [utm, setUtm] = useState({ utm_campaign: '', utm_source: '', utm_medium: '' });

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtm({
      utm_campaign: p.get('utm_campaign') ?? '',
      utm_source:   p.get('utm_source')   ?? '',
      utm_medium:   p.get('utm_medium')   ?? '',
    });
  }, []);

  const submit = () =>
    start(async () => {
      const r = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, utm }),
      });
      setMsg(r.ok
        ? 'Thanks for subscribing!'
        : 'Something went wrong. Try again later.');
      if (r.ok) setEmail('');
    });

  return { email, setEmail, submit, isPending, msg };
}
