import React from "react";
import { Compare } from "../ui/compare";

export function CompareDemo() {
  return (
    <div className=" m-10 p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4 flex gap-4 ">
      <Compare
        firstImage="photo2.png"
        secondImage="photo1.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassName="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
