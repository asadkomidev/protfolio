import { getProjects } from "@/actions/projects";
import { ProjectList } from "@/types/project";

import Projects from "@/components/projects/projects";
import Container from "@/components/shared/container";

export const revalidate = 20;

export default async function Page() {
  const data: ProjectList[] = await getProjects();
  return (
    <Container className="h-[80vh]">
      <Projects data={data} />
    </Container>
  );
}
