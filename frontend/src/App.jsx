import React from "react";
import { ThreeDCardDemo } from "./components/Card/ThreeDCardDemo";
import { CompareDemo } from "./components/Card/CompareDemo";
import { GoogleGeminiEffectDemo } from "./components/Card/GoogleGeminiEffectDemo";

export default function App() {
  return (
    <div className="text-3xl">
      <div className="flex flex-col gap-2  ">
        {/* <ThreeDCardDemo />
        <CompareDemo /> */}
        <GoogleGeminiEffectDemo />
      </div>
    </div>
  );
}
