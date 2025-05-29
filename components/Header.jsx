import React from "react";

const Header = ({ session, status }) => {
  // Ensure we don't show loading state during hydration
  if (typeof window === "undefined") {
    return null;
  }

  const userName = session?.user?.name || "Guest";

  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <h2 className="text-lg font-semibold">
        {status === "loading" ? "Loading..." : `Welcome Back, ${userName}`}
      </h2>
    </div>
  );
};

export default Header;
