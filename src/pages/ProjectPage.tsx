import { useParams } from "react-router-dom";
import Container from "@/components/layout/Container";
import projects from "@/data/projects";
import PageNotFound from "./PageNotFound";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <section className="py-32">
      <Container>
        <h1 className="text-4xl font-semibold">{project.name}</h1>
      </Container>
    </section>
  );
};

export default ProjectPage;
