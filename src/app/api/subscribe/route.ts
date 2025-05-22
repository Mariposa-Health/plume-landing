import { NextResponse } from 'next/server';
import { z } from 'zod';
import { upsertContact, saveUTM, subscribe } from '@/lib/activeCampaign';
import { isAppError } from '@/lib/error';

const Payload = z.object({
  email: z.string().email(),
  utm: z.object({
    utm_campaign: z.string().optional(),
    utm_source:   z.string().optional(),
    utm_medium:   z.string().optional(),
  }),
});

type SuccessJson = { ok: true };
type ErrorJson   = { ok: false; code: string; details?: unknown };

function json200(body: SuccessJson) {
  return NextResponse.json(body, { status: 200 });
}

function json400(body: ErrorJson) {
  return NextResponse.json(body, { status: 400 });
}

function json500(body: ErrorJson) {
  return NextResponse.json(body, { status: 500 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = Payload.safeParse(body);
  if (!parsed.success) {
    return json400({
      ok: false,
      code: 'VALIDATION_ERROR',
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const { email, utm } = parsed.data;

  try {
    const id = await upsertContact(email);           
    await saveUTM(id, utm);                         
    await subscribe(id);                             
    return json200({ ok: true });
  } catch (err: unknown) {
    console.error(err);

    if (isAppError(err)) {
      return json500({ ok: false, code: err.code, details: err.meta });
    }

    return json500({ ok: false, code: 'UNKNOWN' });
  }
}
