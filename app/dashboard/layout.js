"use client";

import React from "react";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <Header />
      {children}
    </main>
  );
}
