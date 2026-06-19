import { Repository } from "@/lib/github";
import Tag from "./Tag";

interface ProjectCardProps {
    repository: Repository;
    recordNumber?: number;
}

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


export default function ProjectCard({
    repository,
    recordNumber,
}: ProjectCardProps) {

    const visibleTopics = repository.topics.filter(
        (topic) =>
            topic !== "thevoidshell" &&
            topic !== "featured"
    );

    const primaryLanguage =
        getPrimaryLanguage(repository.languages);

    const isFeatured =
        repository.topics.includes("featured");

    const record = recordNumber
        ?.toString()
        .padStart(3, "0");


    return (
        <article
            className="border border-gray-700 rounded-lg p-6"
        >

            {/* Header */}
            <div className="flex items-center gap-3 flex-wrap">
                {record && (
                    <p>
                        {record}
                    </p>
                )}
                <h2 className="text-2xl font-bold">
                    {repository.name}
                </h2>

                {isFeatured && (
                    <Tag size="badge">
                        Featured
                    </Tag>
                )}

            </div>


            {/* Description */}
            <p className="mt-3 text-gray-400">
                {repository.description ??
                    "No description provided."}
            </p>


            {/* Metadata */}
            <div className="mt-3 flex gap-4 text-sm text-gray-500">

                {primaryLanguage && (
                    <span>
                        {primaryLanguage}
                    </span>
                )}

                <span>
                    Updated {
                        formatLastUpdated(
                            repository.updated_at
                        )
                    }
                </span>

            </div>


            {/* Topics */}
            {visibleTopics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">

                    {visibleTopics.map((topic) => (
                        <Tag
                            key={topic}
                            size="small"
                        >
                            {topic}
                        </Tag>
                    ))}

                </div>
            )}


            {/* Repository Link */}
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
}