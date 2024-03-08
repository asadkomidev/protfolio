"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  let [mounted, setMounted] = React.useState(false);
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group text-muted-foreground"
      onClick={() => setTheme(otherTheme)}
    >
      <Sun
        strokeWidth={1}
        className="h-6 w-6 transition dark:hidden hover:text-black hover:dark:text-white "
      />
      <Moon
        strokeWidth={1}
        className="hidden h-5 w-5 transition dark:block hover:text-white hover:dark:text-white  "
      />
    </button>
  );
}
