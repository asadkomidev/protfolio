import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const blocksToText = (blocks: any) => {
  let text = "";
  blocks.forEach((block: { _type: string; children: any[] }) => {
    if (block._type === "block") {
      block.children.forEach((child: { text: string }) => {
        text += child.text + " ";
      });
    }
  });
  return text.trim();
};

export function calculateReadingTime(postContent: any) {
  const content = blocksToText(postContent);

  const wordsPerMinute = 200;

  const text = content.replace(/<\/?[^>]+(>|$)/g, "");
  const wordCount = text
    .split(/\s+/)
    .filter((word: any) => word.length > 0).length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}
