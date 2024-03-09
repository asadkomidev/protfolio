"use client";

import { homeContent } from "@/content/home-content";
import HomePageNavbar from "../nav-bar/home-page-navbar";
import { Badge } from "../ui/badge";
import { TextTypingCard } from "./text-typing-card";

const words = `Innovative Solutions, Exceptional Code`;

export function HomeIntroMobile() {
  return (
    <div className="flex flex-col items-center md:hidden pb-12 px-4">
      <div className="text-center">
        <Badge variant="secondary" className="text-md font-normal mb-2">
          <span className="pr-2">{homeContent.badge}</span>
          <span className="">{homeContent.label}</span>
        </Badge>
        <p className="text-muted-foreground text-sm">
          {homeContent.description}
        </p>
      </div>
      <TextTypingCard words={homeContent.toReveal} />
      <div className="flex pt-24">
        <HomePageNavbar />
      </div>
    </div>
  );
}
