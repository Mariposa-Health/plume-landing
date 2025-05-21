'use client';
import { useEffect, useState } from 'react';
import EnvelopeIcon from './icons/EnvelopeIcon';
import { submitToActiveCampaign } from '@/lib/activeCampaign';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utmParams, setUtmParams] = useState({ utm_campaign: '', utm_source: '', utm_medium: '' });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return setMessage('Enter a valid email.');

    setIsSubmitting(true);
    setMessage('');

    try {
      await submitToActiveCampaign(email, utmParams);
      setSubscribed(true);
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (err) {
      setMessage('Something went wrong. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (subscribed)
    return <div className="text-center bg-[#E7F9ED] text-[#10734F] p-4 rounded-lg font-fibra">Check your inbox to confirm subscription.</div>;

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-[400px] mx-auto">
        <div className="flex w-full h-[48px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-[18px] py-3 border border-[#5E6569] font-fibra text-base rounded-l-[6px] rounded-r-none"
            style={{ color: '#5E6569', backgroundColor: '#FFF' }}
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#6816AF] w-[48.9px] min-w-[48.9px] text-white flex justify-center items-center rounded-r-[6px] rounded-l-none hover:bg-[#5712A0]"
            aria-label="Subscribe"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <EnvelopeIcon />
            )}
          </button>
        </div>
      </form>

      {message && (
        <p className={`text-center font-fibra text-sm mt-2 ${message.includes('Thank') ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </>
  );
}
