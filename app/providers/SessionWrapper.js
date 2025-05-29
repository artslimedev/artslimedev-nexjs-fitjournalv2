'use client';

import { useSession } from 'next-auth/react';

export default function SessionWrapper({ children }) {
  const { data: session, status } = useSession();
  
  return children({ session, status });
}

