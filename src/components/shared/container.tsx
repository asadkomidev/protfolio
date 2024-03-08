import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-5xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
