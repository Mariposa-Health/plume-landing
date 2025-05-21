const AC_API_URL = 'https://getmariposa.api-us1.com';
const AC_API_KEY = 'bbaf563dd558afe6d41fad140491379aabc2c769994eae383b865fdbcdc6d0a60805cfea';

type UTMKeys = 'utm_campaign' | 'utm_source' | 'utm_medium';

export async function submitToActiveCampaign(
  email: string,
  utmParams: Record<UTMKeys, string>
) {
  const contactRes = await fetch(`${AC_API_URL}/api/3/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': AC_API_KEY,
    },
    body: JSON.stringify({ contact: { email } }),
  });

  let contactId: string | undefined;

  if (contactRes.ok) {
    const contactData = await contactRes.json();
    contactId = contactData.contact?.id;
  } else {
    const searchRes = await fetch(`${AC_API_URL}/api/3/contacts?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Api-Token': AC_API_KEY },
    });
    const data = await searchRes.json();
    contactId = data.contacts?.[0]?.id;
    if (!contactId) throw new Error('Could not create/find contact');
  }

  const UTM_FIELD_MAPPINGS: Record<UTMKeys, string> = {
    utm_campaign: '1',
    utm_source: '2',
    utm_medium: '3',
  };

  for (const key of Object.keys(utmParams) as UTMKeys[]) {
    if (utmParams[key]) {
      await fetch(`${AC_API_URL}/api/3/fieldValues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': AC_API_KEY,
        },
        body: JSON.stringify({
          fieldValue: {
            contact: contactId,
            field: UTM_FIELD_MAPPINGS[key],
            value: utmParams[key],
          },
        }),
      });
    }
  }

  await fetch(`${AC_API_URL}/api/3/contactLists`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Api-Token': AC_API_KEY },
    body: JSON.stringify({
      contactList: {
        list: '1',
        contact: contactId,
        status: 1,
      },
    }),
  });
}
