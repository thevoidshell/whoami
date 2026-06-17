import { getRepos, Repository } from "@/lib/github";


function getPrimaryLanguage(
    languages: Record<string, number>
): string | null {

    const sortedLanguages = Object.entries(languages)
        .sort((first, second) => second[1] - first[1]);

    return sortedLanguages.length > 0
        ? sortedLanguages[0][0]
        : null;
}


function formatLastUpdated(date: string): string {

    return new Date(date).toLocaleDateString(
        "en-CA",
        {
            year: "numeric",
            month: "short",
        }
    );
}


export default async function ProjectsPage() {

    const repositories = await getRepos();


    const portfolioRepositories = repositories.filter(
        (repository) =>
            repository.topics.includes("thevoidshell")
    );


    const sortedRepositories = [...portfolioRepositories]
        .sort((firstRepository, secondRepository) => {

            const firstFeatured =
                firstRepository.topics.includes("featured");

            const secondFeatured =
                secondRepository.topics.includes("featured");

            return Number(secondFeatured) - Number(firstFeatured);
        });


    return (
        <main className="min-h-screen p-8">

            <section className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">
                    Projects
                </h1>


                <div className="space-y-6">

                    {sortedRepositories.map((repository) => {

                        const visibleTopics =
                            repository.topics.filter(
                                (topic) =>
                                    topic !== "thevoidshell"
                                    &&
                                    topic !== "featured"
                            );


                        const primaryLanguage =
                            getPrimaryLanguage(
                                repository.languages
                            );


                        return (

                            <article
                                key={repository.id}
                                className="border border-gray-700 rounded-lg p-6"
                            >

                                {/* Header */}
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


                                {/* Description */}
                                <p className="mt-3 text-gray-400">
                                    {
                                        repository.description
                                        ??
                                        "No description provided."
                                    }
                                </p>


                                {/* Project metadata */}
                                <div className="mt-3 flex gap-4 text-sm text-gray-500">

                                    {
                                        primaryLanguage &&
                                        <span>
                                            {primaryLanguage}
                                        </span>
                                    }

                                    <span>
                                        Updated {
                                            formatLastUpdated(
                                                repository.updated_at
                                            )
                                        }
                                    </span>

                                </div>


                                {/* Tags */}
                                {
                                    visibleTopics.length > 0 &&
                                    (
                                        <div className="flex flex-wrap gap-2 mt-4">

                                            {
                                                visibleTopics.map(
                                                    (topic) => (

                                                        <span
                                                            key={topic}
                                                            className="px-2 py-1 text-sm border rounded"
                                                        >
                                                            {topic}
                                                        </span>

                                                    )
                                                )
                                            }

                                        </div>
                                    )
                                }


                                {/* Link */}
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

            </section>

        </main>
    );
}