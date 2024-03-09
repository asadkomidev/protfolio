"use client";

import Link from "next/link";

import { navigationLinks } from "@/content/home-content";
import { cn } from "@/lib/utils";
import { ModeToggleMain } from "../home/mode-toggle-main";
import Container from "../shared/container";

type Props = {
  className?: string;
};

const MainNavbar = ({ className }: Props) => {
  return (
    <nav className={cn("flex items-center justify-center z-30", className)}>
      <Container className="border shadow-sm fixed top-6 bg-black dark:bg-white text-sm  flex items-center justify-center gap-3 md:gap-6 mx-auto rounded-full p-2">
        <Link
          href="/"
          className="text-white dark:text-black hover:text-white/60 dark:hover:text-black/60"
        >
          Home
        </Link>
        {navigationLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-white dark:text-black hover:text-white/60 dark:hover:text-black/60"
          >
            {link.name}
          </Link>
        ))}
        <ModeToggleMain />
      </Container>
    </nav>
  );
};

export default MainNavbar;
