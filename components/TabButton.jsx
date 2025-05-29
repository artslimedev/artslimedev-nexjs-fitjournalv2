"use client";

import { Tab } from "@headlessui/react";

export const TabButton = ({ selected, children }) => (
  <Tab
    className={`
      tab-btn text-lg bg-white shadow-lg shadow-black-500/10 
      px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400
      ${selected ? "bg-purple-400" : ""}
    `}
  >
    {children}
  </Tab>
);
