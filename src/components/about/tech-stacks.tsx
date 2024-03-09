"use client";

import { TechStackIcons } from "./constants";
import { TechLogos } from "./moving-cards";


export function InfiniteTechLogo() {
  return (
    <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <TechLogos items={TechStackIcons} direction="right" speed="slow" />
    </div>
  );
}


