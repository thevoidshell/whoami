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