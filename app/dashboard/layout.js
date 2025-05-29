'use client';

import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="bg-gray-100 min-h-screen m-auto md:px-6 sm:ml-20 p-4">
        <Header />
        {children}
      </main>
    </>
  );
}

