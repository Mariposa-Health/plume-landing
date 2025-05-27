'use client';
import { LDProvider } from 'launchdarkly-react-client-sdk';
import { useMemo } from 'react';

export function LaunchDarklyProvider({ children }: { children: React.ReactNode }) {
  const user = useMemo(() => {
    if (typeof window === 'undefined') {
      return { key: 'server-side-render', anonymous: true };
    }

    let id = localStorage.getItem('ld_uid');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('ld_uid', id);
    }
    return { key: id, anonymous: true };
  }, []);

  return (
    <LDProvider
      clientSideID={process.env.NEXT_PUBLIC_LD_CLIENT_ID!}
      user={user}
      reactOptions={{ useCamelCaseFlagKeys: true }}
    >
      {children}
    </LDProvider>
  );
}
