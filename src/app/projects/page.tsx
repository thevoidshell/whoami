import { getRepos, Repository } from "@/lib/github";

export default async function ProjectsPage() {
    const repositories = await getRepos();

    const portfolioRepositories = repositories.filter(
        (repository: Repository) =>
            repository.topics.includes("thevoidshell")
    );

    const sortedRepositories = [...portfolioRepositories].sort(
        (firstRepository, secondRepository) => {
            const firstFeatured =
                firstRepository.topics.includes("featured");

            const secondFeatured =
                secondRepository.topics.includes("featured");

            if (firstFeatured !== secondFeatured) {
                return Number(secondFeatured) - Number(firstFeatured);
            }

            return (
                new Date(secondRepository.updated_at).getTime() -
                new Date(firstRepository.updated_at).getTime()
            );
        }
    );

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">
                    Projects
                </h1>

                <div className="space-y-6">
                    {sortedRepositories.map((repository) => {

                        const visibleTopics =
                            repository.topics.filter(
                                (topic) =>
                                    topic !== "thevoidshell" &&
                                    topic !== "featured"
                            );

                        return (
                            <article
                                key={repository.id}
                                className="border border-gray-700 rounded-lg p-6"
                            >

                                <div className="flex items-center gap-3 flex-wrap">

                                    <h2 className="text-2xl font-bold">
                                        {repository.name}
                                    </h2>

                                    {repository.topics.includes("featured") && (
                                        <span className="px-2 py-1 text-xs border rounded">
                                            Featured
                                        </span>
                                    )}

                                </div>

                                <p className="mt-3 text-gray-400">
                                    {repository.description ??
                                        "No description provided."}
                                </p>


                                {visibleTopics.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">

                                        {visibleTopics.map((topic) => (
                                            <span
                                                key={topic}
                                                className="px-2 py-1 text-sm border rounded"
                                            >
                                                {topic}
                                            </span>
                                        ))}

                                    </div>
                                )}


                                <a
                                    href={repository.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-5 underline"
                                >
                                    View Repository →
                                </a>

                            </article>
                        );
                    })}
                </div>

            </div>
        </main>
    );
}