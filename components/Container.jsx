import React from "react";
import { Tab } from "@headlessui/react";
import Strength from "./Strength/Strength";
import Cardio from "./Cardio/Cardio";

const Container = () => {
  return (
    <>
      <div>
        <Tab.Group>
          <Tab.List className={"flex gap-4 items-center justify-start"}>
            <Tab
              className={
                "tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 focus:bg-purple-400"
              }
            >
              Cardio
            </Tab>
            <Tab
              className={
                "tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 focus:bg-purple-400"
              }
            >
              Strength
            </Tab>
          </Tab.List>

          <Tab.Panels className={" mt-6"}>
            <Tab.Panel>
              <Cardio />
            </Tab.Panel>

            <Tab.Panel>
              <Strength />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Container;
