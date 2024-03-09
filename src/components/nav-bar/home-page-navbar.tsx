import Link from "next/link";
import React from "react";

import { ModeToggle } from "../home/mode-toggle";
import { navigationLinks } from "@/content/home-content";

const HomePageNavbar = () => {
  return (
    <div className="flex items-center justify-center gap-6 text-sm border p-2 px-4 shadow-sm rounded-full">
      {navigationLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className="text-muted-foreground hover:text-black hover:dark:text-white"
        >
          {link.name}
        </Link>
      ))}
      <ModeToggle />
    </div>
  );
};

export default HomePageNavbar;
