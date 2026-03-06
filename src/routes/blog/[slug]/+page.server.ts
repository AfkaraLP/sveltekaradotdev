import { loadBlogPosts, renderMarkdown } from '$lib/blog';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const posts = loadBlogPosts();
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		error(404, 'Article not found');
	}

	return {
		post: {
			slug: post.slug,
			title: post.title,
			date: post.date,
			description: post.description,
			htmlContent: renderMarkdown(post.content)
		}
	};
};
