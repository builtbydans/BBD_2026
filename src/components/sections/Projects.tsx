import { useState } from "react";
import Container from "@/components/layout/Container";
import { useNavigate } from "react-router-dom";
import projects from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="projects" className="py-32">
      <Container>
        <div className="space-y-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onMouseEnter={() => setActive(project)}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className={`text-left p-6 border transition ${
                    active.id === project.id
                      ? "border-foreground"
                      : "border-border hover:border-foreground/50"
                  }`}
                >
                  <h3 className="text-xl font-medium">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="border p-10 min-h-75 flex flex-col justify-center transition">
              <h3 className="text-2xl font-semibold">{active.name}</h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
