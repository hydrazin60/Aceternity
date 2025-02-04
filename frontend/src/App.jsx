import React from "react";
import { ThreeDCardDemo } from "./components/Card/ThreeDCardDemo";
import { CompareDemo } from "./components/Card/CompareDemo";
import { GoogleGeminiEffectDemo } from "./components/Card/GoogleGeminiEffectDemo";
import { SparklesPreview } from "./components/Card/SparklesPreview";
import { MeteorsDemo } from "./components/Card/MeterorsDemo";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/Card/ShootingStarsAndStarsBackgroundDemo";

export default function App() {
  return (
    <div className="text-3xl">
      <div className=" ">
        <ThreeDCardDemo />
        <CompareDemo />
        <GoogleGeminiEffectDemo />
        <SparklesPreview />
        <MeteorsDemo />
        <ShootingStarsAndStarsBackgroundDemo />F
      </div>
    </div>
  );
}
