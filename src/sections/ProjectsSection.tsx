import ProjectCard from "@/components/ProjectCard";
import { getRepos } from "@/lib/github";

export default async function ProjectsSection() {
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
        <section id="work">
            <main className="min-h-screen p-8">
                <section className="max-w-4xl mx-auto">

                    <h1 className="font-serif text-4xl font-semibold mb-4">
                        Project Index
                    </h1>

                    <p className="text-muted leading-relaxed max-w-2xl mb-12">
                        A complete record of projects, experiments,
                        and technical studies.
                    </p>

                    <div className="space-y-6">
                        {sortedRepositories.map((repository, index) => (
                            <ProjectCard
                                key={repository.id}
                                repository={repository}
                                recordNumber={index + 1}
                            />
                        ))}
                    </div>

                </section>
            </main>
        </section>
    );
}