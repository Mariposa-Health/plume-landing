'use client';
import { useState, useEffect } from 'react';
import EnvelopeIcon from '@/components/icons/EnvelopeIcon';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const [utm, setUtm] = useState({ utm_campaign: '', utm_source: '', utm_medium: '' });

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtm({
      utm_campaign: p.get('utm_campaign') ?? '',
      utm_source:   p.get('utm_source')   ?? '',
      utm_medium:   p.get('utm_medium')   ?? '',
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) return setMsg('Enter a valid email');

    setLoading(true);
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, utm }),
    });
    setLoading(false);
    if (res.ok) {
      setMsg('Thanks! Please confirm via the email we just sent.');
      setEmail('');
    } else {
      setMsg('Something went wrong — try again later.');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full max-w-[400px] mx-auto h-12">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 border border-[#5E6569] rounded-l-md px-4 outline-none"
          placeholder="your@email.com"
          required
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-12 bg-[#6816AF] flex items-center justify-center rounded-r-md hover:bg-[#5712A0]"
          aria-label="Subscribe"
        >
          {loading
            ? <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            : <EnvelopeIcon />}
        </button>
      </form>
      {msg && <p className="text-center mt-2 text-sm">{msg}</p>}
    </>
  );
}
