'use client';
import EnvelopeIcon from '@/components/icons/EnvelopeIcon';
import { useNewsletter } from '@/hooks/useNewsletter';

export default function NewsletterForm() {
  const { email, setEmail, submit, isPending, msg } = useNewsletter();

  return (
    <>
      <form
        onSubmit={e => { e.preventDefault(); submit(); }}
        className="flex w-full max-w-[400px] mx-auto h-12"
      >
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 border border-[#5E6569] rounded-l-md px-4 outline-none"
          placeholder="your@email.com"
          required
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-12 bg-[#6816AF] rounded-r-md flex items-center justify-center hover:bg-[#5712A0]"
        >
          {isPending
            ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            : <EnvelopeIcon />}
        </button>
      </form>
      {msg && <p className="text-center mt-2 text-sm">{msg}</p>}
    </>
  );
}
