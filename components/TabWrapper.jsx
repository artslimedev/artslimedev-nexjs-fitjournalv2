"use client";

import { Tab } from "@headlessui/react";

export function TabWrapper({ children }) {
  return <Tab.Group defaultIndex={0}>{children}</Tab.Group>;
}

export function TabList({ children }) {
  return (
    <Tab.List className="flex gap-4 items-center justify-start">
      {children}
    </Tab.List>
  );
}

export function TabPanels({ children }) {
  return <Tab.Panels className="mt-6">{children}</Tab.Panels>;
}

export function TabPanel({ children }) {
  return <Tab.Panel>{children}</Tab.Panel>;
}
