import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { getRepos } from "@/lib/github";

export default async function HomeSection() {
  const repositories = await getRepos();

  const featuredRepositories = repositories.filter((repository) =>
    repository.topics?.includes("featured")
  );

  return (
    <section
      id="home"
      aria-label="Home section"
      className="
        min-h-screen
        px-6
        md:px-12

        pt-20
        pb-28
        md:py-24

        flex
        flex-col
        justify-center
      "
    >
      <div className="max-w-5xl w-full">
        {/* Introduction */}
        <header className="mb-24">
          <h1 className="font-serif text-5xl font-semibold leading-tight">
            {profile.name}
          </h1>

          <p className="mt-4 text-2xl text-muted">
            {profile.title}
          </p>

          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            I build things to understand how they work. Through infrastructure
            labs, security research, and intelligent systems, I explore how
            complex technologies are built, secured, and understood.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#work">View Work</Button>

            <Button href="#contact">Resume</Button>

            <Button href={socials.github} external>
              GitHub
            </Button>

            <Button href={socials.linkedin} external>
              LinkedIn
            </Button>
          </div>
        </header>

        {/* Selected Work */}
        <div>
          <h2 className="font-serif text-3xl font-semibold mb-6">
            Selected Work
          </h2>

          <div className="space-y-4">
            {featuredRepositories.map((repository, index) => (
              <ProjectCard
                key={repository.id}
                repository={repository}
                recordNumber={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}