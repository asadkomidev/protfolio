import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { NavLinks } from "./constants";
import { ModeToggle } from "../home/mode-toggle-main";
import Container from "../shared/container";

type Props = {
  className?: string;
};

const Navbar = ({ className }: Props) => {
  return (
    <nav className={cn("flex items-center justify-center z-30", className)}>
      <Container className="border shadow-sm fixed top-6 bg-black dark:bg-white text-sm  flex items-center justify-center gap-3 md:gap-6 mx-auto rounded-full p-2">
        <Link
          href="/"
          className="text-white dark:text-black hover:text-white/60 dark:hover:text-black/60"
        >
          Home
        </Link>
        {NavLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-white dark:text-black hover:text-white/60 dark:hover:text-black/60"
          >
            {link.name}
          </Link>
        ))}
        <ModeToggle />
      </Container>
    </nav>
  );
};

export default Navbar;
