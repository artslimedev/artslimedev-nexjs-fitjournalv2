'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SessionWrapper from '../providers/SessionWrapper';

export default function ClientLayout({ children }) {
  return (
    <SessionWrapper>
      {({ session, status }) => (
        <>
          <Sidebar />
          <main className="bg-gray-100 min-h-screen m-auto md:px-6 sm:ml-20 p-4">
            <Header session={session} status={status} />
            {children}
          </main>
        </>
      )}
    </SessionWrapper>
  );
}

