"use client";

import { Check, CopyIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  code: string;
};

const Copy = ({ code }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (codeValue: string) => {
    try {
      await navigator.clipboard.writeText(codeValue);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="">
      <div
        onClick={() => copyToClipboard(code)}
        className="absolute top-4 right-4 cursor-pointer p-1.5 rounded-md transition-all duration-300 ease-in-out hover:bg-zinc-600"
      >
        {copied ? (
          <Check className="w-3 h-3 text-white" />
        ) : (
          <CopyIcon className="w-3 h-3 text-white" />
        )}
      </div>
    </div>
  );
};

export default Copy;
