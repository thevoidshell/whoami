import { getRepos } from "@/lib/github";

export default async function ProjectsPage() {
    const repos = await getRepos();

    const portfolioRepos = repos.filter(
        (repo: any) =>
            repo.topics?.includes("thevoidshell")
    );

    const sortedRepos = [...portfolioRepos].sort(
        (a: any, b: any) => {
            const aFeatured = a.topics?.includes("featured");
            const bFeatured = b.topics?.includes("featured");

            if (aFeatured && !bFeatured) return -1;
            if (!aFeatured && bFeatured) return 1;

            return 0;
        }
    );

    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8">
                Projects
            </h1>

            <div className="space-y-4">
                {sortedRepos.map((repo: any) => {
                    const visibleTopics =
                        repo.topics?.filter(
                            (topic: string) =>
                                topic !== "thevoidshell" &&
                                topic !== "featured"
                        ) || [];

                    return (
                        <div
                            key={repo.id}
                            className="border border-gray-700 rounded-lg p-6"
                        >
                            <div className="flex items-center gap-3">
                                <h2 className="text-2xl font-bold">
                                    {repo.name}
                                </h2>

                                {repo.topics?.includes("featured") && (
                                    <span className="px-2 py-1 text-xs border rounded">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <p className="mt-2 text-gray-400">
                                {repo.description ||
                                    "No description provided."}
                            </p>

                            {visibleTopics.length > 0 && (
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    {visibleTopics.map(
                                        (topic: string) => (
                                            <span
                                                key={topic}
                                                className="px-2 py-1 text-sm border rounded"
                                            >
                                                {topic}
                                            </span>
                                        )
                                    )}
                                </div>
                            )}

                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 underline"
                            >
                                View Repository →
                            </a>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}