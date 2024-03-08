"use client";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";
import Navbar from "../nav-bar/nav-bar";
import { Badge } from "../ui/badge";

export function HomeIntro() {
  return (
    <div className="flex-col items-center hidden md:flex">
      <TextRevealCard
        text="Innovative Solutions,"
        revealText="Innovative Solutions, Exceptional Code"
      >
        <TextRevealCardTitle className="">
          <Badge variant="secondary" className="text-md font-normal mb-2">
            <span className="pr-2">👋🏾 Hi,</span>
            <span className="">I'm Asad</span>
          </Badge>
        </TextRevealCardTitle>
        <TextRevealCardDescription className="">
          Dedicated to transforming complex challenges into elegant software
          solutions. Expert in diverse technologies, driven by innovation.
        </TextRevealCardDescription>
      </TextRevealCard>
      <div className="hidden md:flex">
        <Navbar />
      </div>
    </div>
  );
}
