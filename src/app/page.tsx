import Button from "@/components/Button";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { getRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getRepos();

  const featuredRepos = repos.filter(
    (repo) => repo.topics?.includes("featured")
  );

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold">
            {profile.name}
          </h1>

          <p className="mt-4 text-2xl text-gray-300">
            {profile.title}
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl">
            Building secure systems, infrastructure,
            and AI-powered security tools.
            I explore cybersecurity through hands-on
            labs, detection engineering, malware
            analysis, and software development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <Button href="/projects" external={false}>
              View Projects
            </Button>

            <Button href="/resume" external={false}>
              Resume
            </Button>

            <Button href={socials.github} external={true}>
              GitHub
            </Button>

            <Button href={socials.linkedin} external={true}>
              LinkedIn
            </Button>

          </div>
        </section>


        {/* Featured Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Featured Projects
          </h2>

          <div className="space-y-4">

            {featuredRepos.map((repo) => (
              <div
                key={repo.id}
                className="border border-gray-700 rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold">
                  {repo.name}
                </h3>

                <p className="mt-3 text-gray-400">
                  {repo.description ?? "No description available."}
                </p>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 underline"
                >
                  View Repository →
                </a>

              </div>
            ))}

          </div>
        </section>

      </div>
    </main>
  );
}