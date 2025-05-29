"use client";

import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";

// Dynamically import components with no SSR
const Strength = dynamic(() => import("./Strength/Strength"), { ssr: false });
const Cardio = dynamic(() => import("./Cardio/Cardio"), { ssr: false });

const Container = () => {
  return (
    <div>
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

        <Tab.Panels className="mt-6">
          <Tab.Panel>
            <Cardio />
          </Tab.Panel>
          <Tab.Panel>
            <Strength />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Container;
