interface GitHubRepo {
	stargazers_count: number;
}

export async function fetchGithubStars(owner: string, repo: string): Promise<number | null> {
	const url = `https://api.github.com/repos/${owner}/${repo}`;

	try {
		const response = await fetch(url, {
			headers: {
				Accept: 'application/vnd.github.v3+json',
				'User-Agent': 'afkaradotdev'
			}
		});

		if (!response.ok) {
			return null;
		}

		const data: GitHubRepo = await response.json();
		return data.stargazers_count;
	} catch {
		return null;
	}
}
