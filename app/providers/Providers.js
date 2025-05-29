"use client";

import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-20">
        <div className="p-6">
          <Header session={session} status={status} />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Layout>{children}</Layout>
    </SessionProvider>
  );
}
