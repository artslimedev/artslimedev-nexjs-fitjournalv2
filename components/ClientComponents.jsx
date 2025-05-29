"use client";

import dynamic from "next/dynamic";
import { LoadingComponent } from "./LoadingComponent";

export const DynamicLineChart = dynamic(() => import("./LineChart"), {
  loading: () => <LoadingComponent />,
});

export const DynamicStats = dynamic(() => import("./Stats"));

export const DynamicCardioForm = dynamic(() => import("./Cardio/CardioForm"));

export const DynamicStrengthForm = dynamic(() =>
  import("./Strength/StrengthForm")
);
