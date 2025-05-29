"use client";

import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import components with no SSR
const Strength = dynamic(() => import("./Strength/Strength"), { ssr: false });
const Cardio = dynamic(() => import("./Cardio/Cardio"), { ssr: false });

const Container = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full animate-pulse">
        <div className="h-10 w-32 bg-gray-200 rounded-lg mb-6"></div>
        <div className="h-96 w-full bg-gray-100 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex gap-4 items-center justify-start">
          <Tab
            className={({ selected }) =>
              `tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 ${
                selected ? "bg-purple-400" : ""
              }`
            }
          >
            Cardio
          </Tab>
          <Tab
            className={({ selected }) =>
              `tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 ${
                selected ? "bg-purple-400" : ""
              }`
            }
          >
            Strength
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-6 w-full">
          <Tab.Panel className="w-full">
            <Cardio />
          </Tab.Panel>
          <Tab.Panel className="w-full">
            <Strength />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Container;
