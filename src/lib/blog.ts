import { marked, type Tokens } from 'marked';
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';

const renderer = {
	code({ text, lang }: Tokens.Code) {
		const label = lang ? lang.toUpperCase() : 'CODE';
		const langClass = lang ? ` class="language-${lang}"` : '';
		return `<pre data-lang="${label}"><code${langClass}>${text}</code></pre>\n`;
	}
};

marked.use(
	markedHighlight({
		highlight(code, lang) {
			if (lang && hljs.getLanguage(lang)) {
				return hljs.highlight(code, { language: lang }).value;
			}
			return hljs.highlightAuto(code).value;
		}
	}),
	{ renderer }
)

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	description: string;
	content: string;
}

function getExcerpt(content: string): string {
	const plain = content
		.split('\n')
		.filter((line) => !line.startsWith('#') && line.trim().length > 0)
		.slice(0, 2)
		.join(' ');

	if (plain.length > 200) {
		return plain.slice(0, 200) + '...';
	}
	return plain;
}

function parsePost(slug: string, content: string): BlogPost {
	let title = 'Untitled';
	let date = 'Unknown';
	let description: string | undefined;
	let body = content;

	if (content.startsWith('---')) {
		const parts = content.split('---');
		if (parts.length >= 3) {
			const frontmatter = parts[1];
			body = parts.slice(2).join('---').trim();

			for (const line of frontmatter.split('\n')) {
				const trimmed = line.trim();
				if (trimmed.startsWith('title:')) {
					title = trimmed.slice('title:'.length).trim().replace(/^["']|["']$/g, '');
				} else if (trimmed.startsWith('date:')) {
					date = trimmed.slice('date:'.length).trim().replace(/^["']|["']$/g, '');
				} else if (trimmed.startsWith('description:')) {
					description = trimmed
						.slice('description:'.length)
						.trim()
						.replace(/^["']|["']$/g, '');
				}
			}
		}
	}

	return {
		slug,
		title,
		date,
		description: description ?? getExcerpt(body),
		content: body
	};
}

export function renderMarkdown(content: string): string {
	return marked.parse(content, { async: false }) as string;
}

export { getExcerpt };

export function loadBlogPosts(): BlogPost[] {
	const postFiles = import.meta.glob('/src/posts/*.md', {
		query: '?raw',
		eager: true,
		import: 'default'
	});

	const posts: BlogPost[] = [];

	for (const [path, content] of Object.entries(postFiles)) {
		const slug = path.split('/').pop()?.replace('.md', '') ?? 'unknown';
		const post = parsePost(slug, content as string);
		posts.push(post);
	}

	posts.sort((a, b) => b.date.localeCompare(a.date));
	return posts;
}
