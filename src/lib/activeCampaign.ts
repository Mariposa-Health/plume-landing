const BASE = process.env.AC_BASE_URL!;
const KEY  = process.env.AC_API_KEY!;
const AC_HEADERS = { 'Content-Type': 'application/json', 'Api-Token': KEY };

type UTM = { utm_campaign?: string; utm_source?: string; utm_medium?: string };
type UTMKeys = keyof Required<UTM>;

const FIELD_MAP: Record<UTMKeys, string> = {
  utm_campaign: process.env.AC_UTM_CAMPAIGN_FIELD!,
  utm_source:   process.env.AC_UTM_SOURCE_FIELD!,
  utm_medium:   process.env.AC_UTM_MEDIUM_FIELD!,
};

async function ac<T>(path: string, init: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}/api/3${path}`, { ...init, headers: AC_HEADERS });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export async function upsertContact(email: string): Promise<string> {
  try {
    const { contact } = await ac<{ contact: { id: string } }>('/contacts', {
      method: 'POST',
      body: JSON.stringify({ contact: { email } }),
    });
    return contact.id;
  } catch {
    const { contacts } = await ac<{ contacts: { id: string }[] }>(
      `/contacts?email=${encodeURIComponent(email)}`, { method: 'GET' },
    );
    if (!contacts?.[0]) throw new Error('CONTACT_LOOKUP_FAILED');
    return contacts[0].id;
  }
}

export async function saveUTM(contactId: string, utm: UTM) {
  await Promise.all(
    (Object.entries(utm) as [UTMKeys, string | undefined][])
      .filter(([, v]) => v)
      .map(([k, v]) =>
        ac('/fieldValues', {
          method: 'POST',
          body: JSON.stringify({ fieldValue: { contact: contactId, field: FIELD_MAP[k], value: v } }),
        }),
      ),
  );
}

export async function subscribe(contactId: string) {
  return ac('/contactLists', {
    method: 'POST',
    body: JSON.stringify({
      contactList: { list: process.env.AC_LIST_ID, contact: contactId, status: 1 },
    }),
  });
}
