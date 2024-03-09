"use client";

import { EvervaultCard } from "./evervault-card";
import Link from "next/link";
import { LinkIcon, ExternalLink } from "lucide-react";

import { ProjectList } from "@/types/project";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

type Props = {
  project: ProjectList;
};

export function ProjectCard({ project }: Props) {
  return (
    <Card className="flex flex-col items-start p-4 relative">
      <EvervaultCard text="hover" />

      <h1 className="text-base font-medium pt-4">{project.name}</h1>
      <h2 className="text-sm text-muted-foreground pt-1">
        {project.description}
      </h2>
      <p className="py-4 flex items-center justify-between w-full">
        <Link
          target="_blank"
          href={project.github}
          className="flex items-center gap-2 text-sm"
        >
          <LinkIcon className="h-4 w-4" />
          <span className="">github.com</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
        </Link>
      </p>
      <div className=" flex items-center gap-2">
        {project.technologies.map((item: any, i: number) => (
          <div key={i}>
            <Badge>{item.name}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
