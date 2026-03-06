import { loadBlogPosts } from '$lib/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = loadBlogPosts();

	return {
		posts: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			date: post.date,
			description: post.description,
			content: post.content
		}))
	};
};
