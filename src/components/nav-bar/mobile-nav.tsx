"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "./constants";

import { ModeToggle } from "../home/mode-toggle";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const onChange = () => {
    setOpen(!open);
  };
  return (
    <Sheet open={open} onOpenChange={onChange}>
      <SheetTrigger>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="w-full flex-col flex justify-between">
        <SheetHeader>
          <SheetTitle className=" pt-8">
            <ModeToggle />
          </SheetTitle>
          <div className="flex flex-col justify-between pt-8">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:text-primary text-xl font-semibold text-foreground"
              >
                Home
              </Link>
              {NavLinks.map((item, i) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={i}
                  href={item.href}
                  className="hover:text-primary text-xl font-semibold text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </SheetHeader>
        <SheetFooter>
          <div className="">
            <p className="text-xs text-center text-muted-foreground">
              ©{new Date().getFullYear()} Asad Komi. all rights reserved.
            </p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
