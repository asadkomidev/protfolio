"use client";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";
import HomePageNavbar from "../nav-bar/home-page-navbar";
import { Badge } from "../ui/badge";
import { homeContent } from "@/content/home-content";

export function HomeIntro() {
  return (
    <div className="flex-col items-center hidden md:flex">
      <TextRevealCard
        text={homeContent.text}
        revealText={homeContent.toReveal}
      >
        <TextRevealCardTitle className="">
          <Badge variant="secondary" className="text-md font-normal mb-2">
            <span className="pr-2">{homeContent.badge}</span>
            <span className="">{homeContent.label}</span>
          </Badge>
        </TextRevealCardTitle>
        <TextRevealCardDescription className="">
         {homeContent.description}
        </TextRevealCardDescription>
      </TextRevealCard>
      <div className="hidden md:flex">
        <HomePageNavbar />
      </div>
    </div>
  );
}
