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

    const record = recordNumber
        ?.toString()
        .padStart(3, "0");


    return (
        <article className="border-t border-gray-800 py-8">

            {/* Record Number */}
            {record && (
                <p className="text-sm tracking-[0.25em] text-gray-600 mb-5">
                    RECORD {record}
                </p>
            )}


            {/* Title */}
            <div className="mt-3 flex items-center gap-3 flex-wrap">

                <h2 className="text-3xl font-semibold">
                    {repository.name}
                </h2>

            </div>


            {/* Description */}
            <p className="mt-5 max-w-3xl text-gray-400 leading-relaxed">
                {repository.description ?? "No description available."}
            </p>


            {/* Metadata */}
            <div className="mt-6 flex gap-8 text-xs tracking-[0.15em] uppercase">
                {primaryLanguage && (
                    <div className="flex gap-2">
                        <span className="text-gray-600">
                            Language
                        </span>

                        <span className="text-gray-300">
                            {primaryLanguage}
                        </span>
                    </div>
                )}

                <div className="flex gap-2">
                    <span className="text-gray-600">
                        Revised
                    </span>

                    <span className="text-gray-300">
                        {formatLastUpdated(repository.updated_at)}
                    </span>
                </div>
            </div>


            {/* Topics */}
            {visibleTopics.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 border-l border-gray-700 pl-3">
                    {visibleTopics.map((topic, index) => (
                        <span key={topic} className="flex items-center">
                            <Tag size="index">
                                {topic}
                            </Tag>

                            {index < visibleTopics.length - 1 && (
                                <span className="mx-2 text-gray-600">
                                    ·
                                </span>
                            )}
                        </span>
                    ))}
                </div>
            )}


            {/* Repository Link */}
            <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm tracking-wide text-gray-300 hover:text-white transition"
            >
                View Source →
            </a>

        </article>
    );
}