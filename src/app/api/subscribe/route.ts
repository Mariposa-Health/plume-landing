import { NextResponse } from 'next/server';
import { syncContact, attachCustomFields, subscribeToList } from '@/lib/activeCampaign';

export async function POST(req: Request) {
  const { email, utm } = await req.json() as {
    email: string;
    utm: { utm_campaign?: string; utm_source?: string; utm_medium?: string };
  };

  if (!email?.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    const id = await syncContact(email);
    await attachCustomFields(id, {
      utm_campaign: utm.utm_campaign ?? '',
      utm_source: utm.utm_source ?? '',
      utm_medium: utm.utm_medium ?? '',
    });
    await subscribeToList(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'ActiveCampaign error' }, { status: 500 });
  }
}
