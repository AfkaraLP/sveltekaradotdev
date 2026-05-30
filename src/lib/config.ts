export interface Project {
	name: string;
	description: string;
	language: string;
	owner: string;
	repo: string;
}

export interface Bookmark {
	title: string,
	url: string,
	description: string,
	tags: string[]
}

export const YEAR = new Date().getFullYear();
export const BOOKMARKS: Bookmark[] = [
	{
		title: "Attention Is All You Need",
		url: "https://arxiv.org/abs/1706.03762",
		description: "The seminal paper from the scholars of Google that first unveiled the Transformer architecture and hath since reshaped the entire landscape of machine learning",
		tags: ["paper", "arxiv", "machine-learning", "fundamental", "research"]
	},
	{
		title: "The Rust Programming Language",
		url: "https://doc.rust-lang.org/book/",
		description: "The official tome for those who seek mastery of Rust, guiding the reader from first principles to advanced craft in a language of great safety and elegance",
		tags: ["book", "rust", "programming-language", "learning"]
	},
	{
		title: "Learn You a Haskell for Great Good!",
		url: "https://learnyouahaskell.github.io/",
		description: "A most whimsical and delightful introduction to Haskell, the purest of functional languages, written for those who dare to think in abstractions",
		tags: ["book", "haskell", "functional", "learning"]
	},
	{
		title: "Auto-Encoding Variational Bayes",
		url: "https://arxiv.org/abs/1312.6114",
		description: "The foundational treatise by Kingma and Welling that bestowed upon the world the Variational Autoencoder, marrying Bayesian inference with deep learning in a manner most elegant and transformative",
		tags: ["paper", "arxiv", "machine-learning", "deep-learning", "generative", "research"]
	},
	{
		title: "Neural Discrete Representation Learning",
		url: "https://arxiv.org/abs/1711.00937",
		description: "The work of van den Oord et al. that introduced VQ-VAE, learning discrete representations of data through vector quantization, a technique of great import for generative modelling",
		tags: ["paper", "arxiv", "machine-learning", "deep-learning", "representation-learning", "research"]
	},
	{
		title: "Stable Audio 3",
		url: "https://arxiv.org/abs/2605.17991",
		description: "Stability AI's latest marvel in sonic generation, a diffusion-based model that conjures audio of remarkable fidelity and controllability from textual descriptions",
		tags: ["paper", "arxiv", "machine-learning", "audio", "generative", "research"]
	},
	{
		title: "SAME: A Semantically-Aligned Music Autoencoder",
		url: "https://arxiv.org/abs/2605.18613",
		description: "A most ingenious autoencoder architecture that aligns semantic meaning with musical structure, enabling the manipulation and generation of music with unprecedented semantic coherence",
		tags: ["paper", "arxiv", "machine-learning", "audio", "music", "research"]
	}
]

export const PROJECTS: Project[] = [

	{
		"name": "spellsp",
		"description": "Hark! A spell-checking apparatus for the Language Server Protocol, forged in the fires of RUST",
		"language": "Rust",
		"owner": "afkaralp",
		"repo": "spellsp"
	},
	{
		"name": "qwen3-tts-webui",
		"description": "Clone thine own voice with this marvellous web interface & programmatic gateway, powered by the Qwen3-TTS engine",
		"language": "Python",
		"owner": "afkaralp",
		"repo": "qwen3-tts-webui"
	},
	{
		"name": "ascii-renderer",
		"description": "Witness! Two-dimensional Ascii rendering in Rust, complete with a three-dimensional demonstration for the curious",
		"language": "Rust",
		"owner": "afkaralp",
		"repo": "ascii-renderer"
	},
	{
		"name": "torus-http",
		"description": "For the gentleman who desires HTTP without the theatrical complexity - synchronous & stupendously simple",
		"language": "Rust",
		"owner": "afkaralp",
		"repo": "torus-http"
	},
	{
		"name": "sexditor",
		"description": "Born of curiosity! The author's expedition into ratatui, regex illumination, helix motions & the essential arts of saving and editing",
		"language": "Rust",
		"owner": "afkaralp",
		"repo": "sexditor"
	}
];

export function projectUrl(project: Project): string {
	return `https://github.com/${project.owner}/${project.repo}`;
}

export function toRoman(num: number): string {
	const numerals: [number, string][] = [
		[1000, 'M'],
		[900, 'CM'],
		[500, 'D'],
		[400, 'CD'],
		[100, 'C'],
		[90, 'XC'],
		[50, 'L'],
		[40, 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I']
	];

	let result = '';
	for (const [value, symbol] of numerals) {
		while (num >= value) {
			result += symbol;
			num -= value;
		}
	}
	return result;
}

export const YEAR_ROMAN = toRoman(YEAR);

export function splitFirstLetter(title: string): { letter: string; rest: string } {
	const letter = title.charAt(0);
	const rest = title.slice(1);
	return { letter, rest };
}

export function generateLetterFavicon(letter: string): string {
	const size = 128;
	const canvas = document.createElement('canvas');
	canvas.width = size;
	canvas.height = size;
	const ctx = canvas.getContext('2d')!;

	ctx.clearRect(0, 0, size, size);

	ctx.fillStyle = '#2a2218';
	ctx.font = `900 ${size * 0.85}px "Playfair Display", serif`;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(letter.toUpperCase(), size / 2, size / 2 + 2);

	return canvas.toDataURL('image/png');
}

