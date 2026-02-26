import Container from "@/components/layout/Container";

const Hero = () => {
  return (
    <section className=" flex items-center">
      <Container>
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-semibold leading-none tracking-tight">
            I build{" "}
            <span className="text-muted-foreground">scalable systems</span> and
            ship well-tested software that solves real-world problems.
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Full-stack engineer focused on shipping reliable backend systems and
            thoughtful frontend experiences. Currently building real-world
            platforms and exploring AI-native workflows.
          </p>

          <div className="flex gap-6 pt-4">
            <a
              href="#projects"
              className="text-sm underline underline-offset-4 hover:opacity-60"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="text-sm underline underline-offset-4 hover:opacity-60"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
