const BASE = process.env.AC_BASE_URL!;
const KEY  = process.env.AC_API_KEY!;

type UTMKeys = 'utm_campaign' | 'utm_source' | 'utm_medium';

const FIELD_MAP: Record<UTMKeys, string> = {
  utm_campaign: process.env.AC_UTM_CAMPAIGN_FIELD!,
  utm_source:   process.env.AC_UTM_SOURCE_FIELD!,
  utm_medium:   process.env.AC_UTM_MEDIUM_FIELD!,
};

async function acRequest<T>(
  path: string,
  method: 'GET' | 'POST' | 'PUT',
  body?: unknown,
): Promise<T> {
  const res = await fetch(`${BASE}/api/3${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': KEY,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export async function syncContact(email: string) {
  const { contact } = await acRequest<{ contact: { id: string } }>(
    '/contacts',
    'POST',
    { contact: { email } },
  ).catch(async () => {
    const { contacts } = await acRequest<{ contacts: { id: string }[] }>(
      `/contacts?email=${encodeURIComponent(email)}`,
      'GET',
    );
    if (!contacts?.[0]) throw new Error('Contact lookup failed');
    return { contact: contacts[0] };
  });
  return contact.id;
}

export async function attachCustomFields(
  contactId: string,
  utm: Record<UTMKeys, string>,
) {
  await Promise.all(
    (Object.keys(utm) as UTMKeys[])
      .filter(k => utm[k])
      .map(k =>
        acRequest('/fieldValues', 'POST', {
          fieldValue: { contact: contactId, field: FIELD_MAP[k], value: utm[k] },
        }),
      ),
  );
}

export async function subscribeToList(contactId: string) {
  await acRequest('/contactLists', 'POST', {
    contactList: { list: process.env.AC_LIST_ID, contact: contactId, status: 1 },
  });
}
