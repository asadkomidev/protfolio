import { type Metadata } from 'next'
import { getProjects } from "@/actions/projects";
import { ProjectList } from "@/types/project";

import Projects from "@/components/projects/projects";
import Container from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Projects - Showcasing Full-Stack Development Expertise in .NET, Next.js, and Beyond",
  description:
    "Dive into Asad Komi's portfolio of diverse projects, demonstrating skills in .NET, React, Next.js, and full-stack development for modern web applications.",

}

export const revalidate = 0;

export default async function Page() {
  const data: ProjectList[] = await getProjects();
  return (
    <Container className="min-h-[80vh]">
      <Projects data={data} />
    </Container>
  );
}
