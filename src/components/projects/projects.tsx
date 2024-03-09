import { projectsContent } from "@/content/projects-content";
import { ProjectList } from "@/types/project";
import { PageLayout } from "../shared/page-layout";
import { ProjectCard } from "./project-card";

type Props = {
  data: ProjectList[];
};

const Projects = ({ data }: Props) => {
  return (
    <PageLayout
      title={projectsContent.title}
      intro={projectsContent.intro}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
