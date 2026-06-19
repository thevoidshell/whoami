import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { getRepos } from "@/lib/github";

export default async function Home() {
  const repositories = await getRepos();

  const featuredRepositories = repositories.filter(
    (repository) => repository.topics.includes("featured")
  );

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">

        <section className="mb-16">
          <h1 className="text-5xl font-bold">
            {profile.name}
          </h1>

          <p className="mt-4 text-2xl text-gray-300">
            {profile.title}
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl">
            I build things to understand how they work. <br/>
            Through infrastructure labs, security research, and AI systems, I explore how complex technologies are built, broken, and improved.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">
              Explore Work
            </Button>

            <Button href="/resume">
              Resume
            </Button>

            <Button href={socials.github} external>
              GitHub
            </Button>

            <Button href={socials.linkedin} external>
              LinkedIn
            </Button>
          </div>
        </section>


        <section>
          <h2 className="text-3xl font-bold mb-6">
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

        </section>
      </div>
    </main>
  );
}