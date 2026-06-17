export interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
    updated_at: string;
    languages_url: string;
    languages: Record<string, number>;
};

let cachedRepositories: Promise<Repository[]> | null = null;


export async function getRepos(): Promise<Repository[]> {
    if (cachedRepositories) {
        return cachedRepositories;
    }

    cachedRepositories = (async () => {
        const repositoryResponse = await fetch(
            "https://api.github.com/user/repos?per_page=100",
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
                next: { revalidate: 3600 },
            }
        );

        if (!repositoryResponse.ok) {
            throw new Error("Failed to fetch GitHub repositories");
        }

        const repositories = await repositoryResponse.json();

        const repositoriesWithLanguages = await Promise.all(
            repositories.map(async (repository: Repository) => {
                const languageResponse = await fetch(
                    repository.languages_url,
                    {
                        headers: {
                            Accept: "application/vnd.github+json",
                            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                        },
                        next: { revalidate: 3600 },
                    }
                );

                if (!languageResponse.ok) {
                    return {
                        ...repository,
                        languages: {},
                    };
                }

                const languageStatistics = await languageResponse.json();

                return {
                    ...repository,
                    languages: languageStatistics,
                };
            })
        );

        return repositoriesWithLanguages;
    })();

    return cachedRepositories;
}


export async function getPortfolioTopics(): Promise<string[]> {
    const repositories = await getRepos();

    const portfolioRepositories = repositories.filter(
        (repository) =>
            repository.topics?.includes("thevoidshell")
    );

    const topicScores = new Map<string, number>();

    portfolioRepositories.forEach((repository) => {
        const daysSinceUpdate =
            (Date.now() - new Date(repository.updated_at).getTime()) /
            (1000 * 60 * 60 * 24);

        let recencyWeight = 1;

        if (daysSinceUpdate <= 30) {
            recencyWeight = 5;
        } else if (daysSinceUpdate <= 90) {
            recencyWeight = 4;
        } else if (daysSinceUpdate <= 180) {
            recencyWeight = 3;
        } else if (daysSinceUpdate <= 365) {
            recencyWeight = 2;
        }

        repository.topics?.forEach((topic) => {
            if (
                topic === "thevoidshell" ||
                topic === "featured"
            ) {
                return;
            }

            topicScores.set(
                topic,
                (topicScores.get(topic) || 0) + recencyWeight
            );
        });
    });

    return [...topicScores.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([topic]) => topic);
}


export async function getTechStack(): Promise<string[]> {
    const repositories = await getRepos();

    const portfolioRepositories = repositories.filter(
        (repository) =>
            repository.topics?.includes("thevoidshell")
    );

    const languageTotals = new Map<string, number>();

    portfolioRepositories.forEach((repository) => {
        Object.entries(repository.languages).forEach(
            ([language, bytes]) => {
                languageTotals.set(
                    language,
                    (languageTotals.get(language) || 0) + Number(bytes)
                );
            }
        );
    });

    return [...languageTotals.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([language]) => language);
}