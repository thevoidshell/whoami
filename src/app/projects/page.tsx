import { getRepos } from "@/lib/github";

export default async function ProjectsPage() {
    const repos = await getRepos();
    const portfolioRepos = repos.filter(
        (repo: any) =>
            repo.topics?.includes("thevoidshell")
    );
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8">
                Projects
            </h1>

            {portfolioRepos.map((repo: any) => (
                <div
                    key={repo.id}
                    className="border rounded-lg p-4 mb-4"
                >
                    <h2 className="text-xl font-bold">
                        {repo.name}
                    </h2>

                    <p className="mt-2">
                        {repo.description}
                    </p>

                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Repository →
                    </a>
                </div>
            ))}
        </main>
    );
}