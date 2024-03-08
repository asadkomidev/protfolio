import { ProjectList } from "@/types/project";
import { Heading } from "../shared/heading";
import { ProjectCard } from "./project-card";

type Props = {
  data: ProjectList[];
};

const Projects = ({ data }: Props) => {
  return (
    <Heading
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
        {data.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </Heading>
  );
};

export default Projects;
