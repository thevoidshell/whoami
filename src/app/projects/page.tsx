import ProjectCard from "@/components/ProjectCard";
import { getRepos } from "@/lib/github";

export default async function ProjectsPage() {
    const repositories = await getRepos();

    const portfolioRepositories = repositories.filter(
        (repository) =>
            repository.topics.includes("thevoidshell")
    );

    const sortedRepositories = [...portfolioRepositories]
        .sort((first, second) => {
            const firstFeatured =
                first.topics.includes("featured");

            const secondFeatured =
                second.topics.includes("featured");

            return Number(secondFeatured) - Number(firstFeatured);
        });

    return (
        <main className="min-h-screen p-8">
            <section className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">
                    Projects
                </h1>

                <div className="space-y-6">
                    {sortedRepositories.map((repository) => (
                        <ProjectCard
                            key={repository.id}
                            repository={repository}
                        />
                    ))}
                </div>

            </section>
        </main>
    );
}