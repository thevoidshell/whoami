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

export async function getPortfolioTopics() {
    const repos = await getRepos();

    const portfolioRepos = repos.filter(
        (repo: any) =>
            repo.topics?.includes("thevoidshell")
    );

    const topics: string[] = portfolioRepos.flatMap(
        (repo: any) => repo.topics || []
    );

    return [...new Set<string>(topics)].filter(
        (topic) =>
            topic !== "thevoidshell" &&
            topic !== "featured"
    );
}