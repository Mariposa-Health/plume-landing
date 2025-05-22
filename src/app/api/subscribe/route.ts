import { NextResponse } from 'next/server';
import { upsertContact, saveUTM, subscribe } from '@/lib/activeCampaign';
import { z } from 'zod';

const Payload = z.object({
  email: z.string().email(),
  utm:   z.object({
    utm_campaign: z.string().optional(),
    utm_source:   z.string().optional(),
    utm_medium:   z.string().optional(),
  }),
});

export async function POST(req: Request) {
  const json = await req.json();
  const parse = Payload.safeParse(json);
  if (!parse.success)
    return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 400 });

  try {
    const id = await upsertContact(parse.data.email);
    await saveUTM(id, parse.data.utm);
    await subscribe(id);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ code: e.message ?? 'AC_ERROR' }, { status: 500 });
  }
}
