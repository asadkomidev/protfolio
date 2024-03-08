"use client";

import Navbar from "../nav-bar/nav-bar";
import { Badge } from "../ui/badge";
import { TextGenerateEffect } from "./typing";

const words = `Innovative Solutions, Exceptional Code`;

export function TypeWriter() {
  return (
    <div className="flex flex-col items-center md:hidden pb-12 px-4">
      <div className="text-center">
        <Badge variant="secondary" className="text-md font-normal mb-2">
          <span className="pr-2">👋🏾 Hi,</span>
          <span className="">I'm Asad</span>
        </Badge>
        <p className="text-muted-foreground text-sm">
          Dedicated to transforming complex challenges into elegant software
          solutions. Expert in diverse technologies, driven by innovation.
        </p>
      </div>
      <TextGenerateEffect words={words} />
      <div className="flex pt-24">
        <Navbar />
      </div>
    </div>
  );
}
