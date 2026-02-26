import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Headline from "./Headline";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 lg:fixed  space-y-8">
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-medium">
            dan(ish)
          </Link>

          {/* Mobile theme toggle */}
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>

        <Headline />

        <p className="text-xs text-muted-foreground">
          Full-stack engineer focused on building scalable backend systems and
          clean, thoughtful interfaces.
        </p>

        <p className="text-xs text-green-500">﹂available for work</p>
      </section>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex flex-col space-y-2 text-xs">
        <a
          href="#about"
          className="text-muted-foreground hover:text-foreground transition"
        >
          → about
        </a>
        <a
          href="#experience"
          className="text-muted-foreground hover:text-foreground transition"
        >
          → experience
        </a>
        <a
          href="#projects"
          className="text-muted-foreground hover:text-foreground transition"
        >
          → projects
        </a>
        <a
          href="#contact"
          className="text-muted-foreground hover:text-foreground transition"
        >
          → contact
        </a>
      </nav>

      {/* Desktop Theme Toggle */}
      <div className="hidden lg:block">
        <ThemeToggle />
      </div>

      {/* Social */}
      <div className="hidden lg:flex gap-4 text-xs text-muted-foreground">
        <a href="https://github.com/yourname" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourname" target="_blank">
          LinkedIn
        </a>
        <a href="/resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
