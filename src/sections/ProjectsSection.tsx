import ProjectCard from "@/components/ProjectCard";
import { getRepos } from "@/lib/github";

export default async function ProjectsSection() {
    const repositories = await getRepos();

    const portfolioRepositories = repositories.filter(
        (repository) =>
            repository.topics.includes("thevoidshell")
    );

    const sortedRepositories = [...portfolioRepositories].sort(
        (first, second) =>
            Number(second.topics.includes("featured")) -
            Number(first.topics.includes("featured"))
    );

    return (
        <section
            id="work"
            className="
    min-h-screen
    px-6
    md:px-12

    py-20
    md:py-24

    flex
    flex-col
    justify-center
"
        >
            <div className="max-w-5xl w-full">

                <h1 className="font-serif text-4xl font-semibold mb-4">
                    Project Index
                </h1>

                <p className="max-w-2xl text-muted leading-relaxed mb-12">
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

            </div>

        </section>
    );
}