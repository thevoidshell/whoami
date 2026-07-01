export interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
    updated_at: string;
    languages_url: string;
    languages: Record<string, number>;
}

// GitHub API repo type (partial raw response)
type GitHubRepoResponse = Omit<Repository, "languages">;

const githubFetchOptions: RequestInit = {
    headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
    },
    next: {
        revalidate: 3600,
    } as any,
};

let cachedRepositories: Promise<Repository[]> | null = null;

function getPortfolioRepositories(repositories: Repository[]): Repository[] {
    return repositories.filter((repo) =>
        repo.topics?.includes("thevoidshell")
    );
}

function getWebsiteRepositories(repositories: Repository[]): Repository[] {
    return repositories.filter((repo) =>
        repo.topics?.includes("thewebsite")
    );
}

export async function getRepos(): Promise<Repository[]> {
    if (cachedRepositories) return cachedRepositories;

    cachedRepositories = (async () => {
        const repositoryResponse = await fetch(
            "https://api.github.com/user/repos?per_page=100",
            githubFetchOptions
        );

        if (!repositoryResponse.ok) {
            throw new Error("Failed to fetch GitHub repositories");
        }

        const repositories =
            (await repositoryResponse.json()) as GitHubRepoResponse[];

        const repositoriesWithLanguages: Repository[] = await Promise.all(
            repositories.map(async (repository) => {
                const languageResponse = await fetch(
                    repository.languages_url,
                    githubFetchOptions
                );

                let languages: Record<string, number> = {};

                if (languageResponse.ok) {
                    languages = await languageResponse.json();
                }

                return {
                    ...repository,
                    languages,
                };
            })
        );

        return repositoriesWithLanguages;
    })();

    return cachedRepositories;
}

export async function getPortfolioTopics(): Promise<string[]> {
    const repositories = await getRepos();
    const portfolioRepositories = getPortfolioRepositories(repositories);

    const topicScores = new Map<string, number>();

    portfolioRepositories.forEach((repo) => {
        const daysSinceUpdate =
            (Date.now() - new Date(repo.updated_at).getTime()) /
            (1000 * 60 * 60 * 24);

        let recencyWeight = 1;

        if (daysSinceUpdate <= 30) recencyWeight = 5;
        else if (daysSinceUpdate <= 90) recencyWeight = 4;
        else if (daysSinceUpdate <= 180) recencyWeight = 3;
        else if (daysSinceUpdate <= 365) recencyWeight = 2;

        repo.topics.forEach((topic) => {
            if (topic === "thevoidshell" || topic === "featured") return;

            topicScores.set(
                topic,
                (topicScores.get(topic) ?? 0) + recencyWeight
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
    const portfolioRepositories = getPortfolioRepositories(repositories);

    const languageTotals = new Map<string, number>();

    portfolioRepositories.forEach((repo) => {
        Object.entries(repo.languages || {}).forEach(([lang, bytes]) => {
            languageTotals.set(
                lang,
                (languageTotals.get(lang) ?? 0) + bytes
            );
        });
    });

    return [...languageTotals.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([lang]) => lang);
}

export async function getWebsiteRepository(): Promise<Repository | null> {
    const repos = await getRepos();

    const websiteRepo = repos.find((repo) =>
        repo.topics?.includes("thewebsite")
    );

    return websiteRepo ?? null;
}