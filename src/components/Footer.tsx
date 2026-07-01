import Image from "next/image";
import Link from "next/link";
import { getWebsiteRepository } from "@/lib/github";

export default async function Footer() {
    const repo = await getWebsiteRepository();

    const description = repo?.description;

    const updatedDate = repo?.updated_at
        ? new Date(repo.updated_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        })
        : null;

    const repoUrl = repo?.html_url;

    return (
        <footer className="border-t border-border">
            <div className="hidden lg:grid grid-cols-[1.8fr_220px_140px] items-stretch">
                {/* Left */}
                <div className="px-8 py-6">
                    <h2 className="font-serif text-xl font-semibold mb-3">
                        whoami
                    </h2>

                    <p className="text-muted leading-relaxed">
                        {description ?? "Repository metadata unavailable"}
                    </p>

                    {repoUrl && (
                        <Link
                            href={repoUrl}
                            target="_blank"
                            className="inline-block mt-6 text-sm transition-colors hover:text-foreground"
                        >
                            View Source →
                        </Link>
                    )}
                </div>

                {/* Metadata */}
                <div className="border-l border-border grid grid-rows-2">
                    <div className="px-6 py-5 border-b border-border flex flex-col justify-center">
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle mb-1">
                            Language
                        </p>
                        <p>
                            {repo?.languages && Object.keys(repo.languages).length > 0
                                ? Object.entries(repo.languages)
                                    .sort((a, b) => b[1] - a[1])[0]?.[0]
                                : "—"}
                        </p>
                    </div>

                    <div className="px-6 py-5 flex flex-col justify-center">
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle mb-1">
                            Revised
                        </p>
                        <p>{updatedDate ?? "—"}</p>
                    </div>
                </div>

                {/* QR Container (Desktop) */}
                <div className="border-l border-border flex items-center justify-center">
                    <Image
                        src="/qr/qr.svg"
                        alt="QR code"
                        width={96}
                        height={96}
                        className="select-none transition-all duration-300 dark:invert [.light_&]:invert-0"
                    />
                </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden px-6 py-8">
                <h2 className="font-serif text-xl font-semibold mb-3">
                    whoami
                </h2>

                <p className="text-muted leading-relaxed">
                    {description ?? "Repository metadata unavailable"}
                </p>

                <div className="flex gap-10 mb-6 mt-6">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle mb-1">
                            Language
                        </p>
                        <p>
                            {repo?.languages && Object.keys(repo.languages).length > 0
                                ? Object.entries(repo.languages)
                                    .sort((a, b) => b[1] - a[1])[0]?.[0]
                                : "—"}
                        </p>
                    </div>

                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle mb-1">
                            Revised
                        </p>
                        <p>{updatedDate ?? "—"}</p>
                    </div>
                </div>

                {repoUrl && (
                    <Link
                        href={repoUrl}
                        target="_blank"
                        className="text-sm transition-colors hover:text-foreground"
                    >
                        View Source →
                    </Link>
                )}
            </div>
        </footer>
    );
}