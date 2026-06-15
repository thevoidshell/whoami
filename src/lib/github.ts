export async function getRepos() {
    const response = await fetch(
        "https://api.github.com/users/thevoidshell/repos?per_page=100",
        {
            headers: {
                Accept: "application/vnd.github+json",
            },
            next: { revalidate: 3600 },
        }
    );

    return response.json();
}

export async function getPortfolioTopics(): Promise<string[]> {
    const repos = await getRepos();

    const portfolioRepos = repos.filter(
        (repo: any) =>
            repo.topics?.includes("thevoidshell")
    );

    const topicScores = new Map<string, number>();

    portfolioRepos.forEach((repo: any) => {
        const updatedAt = new Date(repo.updated_at);
        const now = new Date();

        const daysSinceUpdate =
            (now.getTime() - updatedAt.getTime()) /
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

        repo.topics?.forEach((topic: string) => {
            if (
                topic === "thevoidshell" ||
                topic === "featured"
            ) {
                return;
            }

            topicScores.set(
                topic,
                (topicScores.get(topic) || 0) +
                recencyWeight
            );
        });
    });

    return [...topicScores.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([topic]) => topic);
}