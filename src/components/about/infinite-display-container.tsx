"use client";

import { techStackIcons } from "@/content/about-content";
import { InfiniteDisplayLogos } from "./infinite-display-logos";


export function InfiniteDisplayContainer() {
  return (
    <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteDisplayLogos items={techStackIcons} direction="right" speed="slow" />
    </div>
  );
}


