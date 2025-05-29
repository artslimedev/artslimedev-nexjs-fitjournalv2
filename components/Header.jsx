"use client";

import React, { useState, useEffect } from "react";

const Header = ({ session, status }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing during initial mount to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <h2 className="text-lg font-semibold">Loading...</h2>
      </div>
    );
  }

  const userName = session?.user?.name || "Guest";

  return (
    <div className="flex justify-between items-center mb-8 px-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <h2 className="text-lg font-semibold">
        {status === "loading" ? "Loading..." : `Welcome Back, ${userName}`}
      </h2>
    </div>
  );
};

export default Header;
