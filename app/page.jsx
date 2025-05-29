import { Suspense } from "react";
import {
  TabWrapper,
  TabList,
  TabPanels,
  TabPanel,
} from "@/components/TabWrapper";
import { TabButton } from "@/components/TabButton";
import {
  LineChart,
  Stats,
  CardioForm,
  StrengthForm,
} from "@/components/DynamicComponents";
import CardioEntries from "@/components/Cardio/CardioEntries";
import CardioEntryCard from "@/components/Cardio/CardioEntryCard";
import StrengthEntries from "@/components/Strength/StrengthEntries";
import StrengthEntryCard from "@/components/Strength/StrengthEntryCard";

export default function Home() {
  return (
    <div className="p-4">
      <TabWrapper>
        <TabList>
          <TabButton>Cardio</TabButton>
          <TabButton>Strength</TabButton>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="w-full items-center md:grid md:grid-cols-5 pb-8 gap-x-10">
                <LineChart />
                <Stats />
              </div>
              <div className="bg-white border rounded-lg shadow pt-3">
                <CardioForm />
                <CardioEntries />
              </div>
              <CardioEntryCard />
            </Suspense>
          </TabPanel>

          <TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="w-full items-center md:grid md:grid-cols-5 pb-8 gap-x-10">
                <LineChart />
                <Stats />
              </div>
              <div className="bg-white border rounded-lg shadow pt-3">
                <StrengthForm />
                <StrengthEntries />
              </div>
              <StrengthEntryCard />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </TabWrapper>
    </div>
  );
}
