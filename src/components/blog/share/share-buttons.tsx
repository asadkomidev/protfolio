"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Share2 } from "lucide-react";
import { Button } from "../../ui/button";
import ShareX from "./share-x";
import ShareLinkedIn from "./share-linkedin";
import CopyLink from "./copy-link";

type Props = {
  url: string;
  quote?: string;
};

const ShareButtons = ({ url, quote }: Props) => {
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button size={"icon"} variant="ghost">
                <Share2 strokeWidth={1} className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent align="end">
            <p>Share</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <CopyLink url={url} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ShareX url={url} quote={quote} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShareLinkedIn url={url} quote={quote} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButtons;
