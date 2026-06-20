import { Repository } from "@/lib/github";
import Tag from "./Tag";

interface ProjectCardProps {
    repository: Repository;
    recordNumber?: number;
}

function getPrimaryLanguage(
    languages: Record<string, number>
): string | null {
    return (
        Object.entries(languages).reduce(
            (largest, current) =>
                current[1] > largest[1]
                    ? current
                    : largest,
            ["", 0] as [string, number]
        )[0] || null
    );
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
        <article className="border-t border-border py-8">

            {record && (
                <p
                    className="
                        mb-5
                        font-mono
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-subtle
                    "
                >
                    Record {record}
                </p>
            )}


            <h2
                className="
                    font-serif
                    text-3xl
                    font-semibold
                    leading-tight
                "
            >
                {repository.name}
            </h2>


            <p
                className="
                    mt-5
                    max-w-3xl
                    text-muted
                    leading-relaxed
                "
            >
                {repository.description ?? "No description available."}
            </p>


            <div
                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-x-8
                    gap-y-2
                    text-xs
                    uppercase
                    tracking-[0.15em]
                "
            >

                {primaryLanguage && (
                    <div className="flex gap-2">

                        <span className="text-subtle">
                            Language
                        </span>

                        <span className="font-mono text-foreground">
                            {primaryLanguage}
                        </span>

                    </div>
                )}


                <div className="flex gap-2">

                    <span className="text-subtle">
                        Revised
                    </span>

                    <span className="font-mono text-foreground">
                        {formatLastUpdated(repository.updated_at)}
                    </span>

                </div>

            </div>


            {visibleTopics.length > 0 && (
                <ul
                    className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                        border-l
                        border-border
                        pl-3
                    "
                >

                    {visibleTopics.map((topic, index) => (
                        <li
                            key={topic}
                            className="flex items-center"
                        >

                            <Tag size="index">
                                {topic}
                            </Tag>

                            {index < visibleTopics.length - 1 && (
                                <span
                                    className="mx-2 text-subtle"
                                    aria-hidden="true"
                                >
                                    ·
                                </span>
                            )}

                        </li>
                    ))}

                </ul>
            )}


            <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${repository.name}`}
                className="
                    mt-8
                    inline-block
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-muted
                    transition-colors
                    hover:text-foreground
                "
            >
                View Source →
            </a>

        </article>
    );
}