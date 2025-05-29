'use client';

import { Tab } from "@headlessui/react";
import Stats from "@/components/Stats";
import LineChart from "@/components/LineChart";
import CardioForm from "@/components/Cardio/CardioForm";
import CardioEntries from "@/components/Cardio/CardioEntries";
import CardioEntryCard from "@/components/Cardio/CardioEntryCard";
import StrengthForm from "@/components/Strength/StrengthForm";
import StrengthEntries from "@/components/Strength/StrengthEntries";
import StrengthEntryCard from "@/components/Strength/StrengthEntryCard";

export default function Home() {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-4 items-center justify-start">
        <Tab
          className="tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 focus:bg-purple-400"
        >
          Cardio
        </Tab>
        <Tab
          className="tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 focus:bg-purple-400"
        >
          Strength
        </Tab>
      </Tab.List>

      <Tab.Panels className="mt-6">
        <Tab.Panel>
          <div className="w-full items-center md:grid md:grid-cols-5 ml-3 pb-8 pr-8 gap-x-10">
            <LineChart />
            <Stats />
          </div>
          <div className="bg-white border rounded-lg shadow pt-3">
            <CardioForm />
            <CardioEntries />
          </div>
          <CardioEntryCard />
        </Tab.Panel>

        <Tab.Panel>
          <div className="w-full items-center sm:grid sm:grid-cols-5 ml-3 pb-8 pr-8 gap-x-10">
            <LineChart />
            <Stats />
          </div>
          <div className="bg-white border rounded-lg shadow pt-3">
            <StrengthForm />
            <StrengthEntries />
          </div>
          <StrengthEntryCard />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
