import { profile } from "@/data/profile";
import { getRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getRepos();
  const featuredRepos = repos.filter(
    (repo: any) =>
      repo.topics?.includes("featured")
  );

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">
        {profile.name}
      </h1>

      <p className="mt-4 text-lg">
        {profile.title}
      </p>

      <h2 className="mt-12 text-3xl font-bold">
        Featured Projects
      </h2>
      <div className="mt-6">
        {featuredRepos.map((repo: any) => (
          <div
            key={repo.id}
            className="border rounded-lg p-4 mb-4"
          >
            <h3 className="text-xl font-bold">
              {repo.name}
            </h3>

            <p className="mt-2">
              {repo.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}