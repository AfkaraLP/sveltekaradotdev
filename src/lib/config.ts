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
	},
	{
		title: "FlashMemory-DeepSeek-V4: Lightning Index Ultra-Long Context via Lookahead Sparse Attention",
		url: "https://arxiv.org/abs/2606.09079",
		description: "A novel inference paradigm powered by a Neural Memory Indexer built upon DeepSeek-V4, wherein Lookahead Sparse Attention proactively predicts future context demands and preserves only query-critical KV chunks in GPU memory. Compresses the KV cache footprint to a mere 13.5% of baseline at 1M context",
		tags: ["paper", "arxiv", "machine-learning", "attention", "efficiency", "research"]
	},
	{
		title: "IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse",
		url: "https://arxiv.org/abs/2603.12201",
		description: "A method that exploits cross-layer redundancy in sparse attention indexers by partitioning layers into Full layers (with their own indexers) and Shared layers (reusing nearest indices), removing 75% of indexer computations with negligible quality degradation on a 30B model",
		tags: ["paper", "arxiv", "machine-learning", "attention", "efficiency", "research"]
	},
	{
		title: "Lightning OPD: Efficient Post-Training for Large Reasoning Models with Offline On-Policy Distillation",
		url: "https://arxiv.org/abs/2604.13010",
		description: "An offline on-policy distillation framework that eliminates the need for a live teacher server by enforcing teacher consistency—precomputing teacher log-probabilities over SFT rollouts. Achieves 4.0x higher training efficiency, reaching 69.9% on AIME 2024 from a Qwen3-8B-Base in just 30 GPU hours",
		tags: ["paper", "arxiv", "machine-learning", "distillation", "reasoning", "research"]
	},
	{
		title: "KTO: Model Alignment as Prospect Theoretic Optimization",
		url: "https://arxiv.org/abs/2402.01306",
		description: "An alignment method rooted in Kahneman & Tversky's prospect theory that directly maximizes the utility of generations rather than the log-likelihood of preferences. Matches or exceeds DPO at scales from 1B to 30B using only a binary signal of whether an output is desirable",
		tags: ["paper", "arxiv", "machine-learning", "alignment", "research"]
	},
	{
		title: "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture",
		url: "https://arxiv.org/abs/2301.08243",
		description: "A non-generative approach for self-supervised learning from images that predicts the representations of target blocks from a single context block, learning highly semantic image representations without relying on hand-crafted data-augmentations. Scales ViT-Huge/14 on ImageNet using 16 A100 GPUs in under 72 hours",
		tags: ["paper", "arxiv", "machine-learning", "self-supervised", "vision", "research"]
	},
	{
		title: "Efficient Generative Modeling with Residual Vector Quantization-Based Tokens",
		url: "https://arxiv.org/abs/2412.10208",
		description: "An efficient RVQ-based generative model (ResGen) that directly predicts the vector embedding of collective tokens rather than individual ones, keeping inference steps independent of quantization depth. Validated on conditional image generation and zero-shot text-to-speech synthesis",
		tags: ["paper", "arxiv", "machine-learning", "generative", "quantization", "research"]
	},
	{
		title: "ACE-Step 1.5: Pushing the Boundaries of Open-Source Music Generation",
		url: "https://arxiv.org/abs/2602.00744",
		description: "An open-source music foundation model of commercial grade running on consumer hardware—under 2 seconds per full song on an A100, under 4GB VRAM. Employs a hybrid LM+DiT architecture where the LM acts as an omni-capable planner, with stylistic control across 50+ languages",
		tags: ["paper", "arxiv", "machine-learning", "audio", "music", "generative", "research"]
	},
	{
		title: "Infinite Worlds with Versatile Interactions",
		url: "https://arxiv.org/abs/2607.07534",
		description: "An advanced world model (LingBot-World 2.0) achieving unbounded interaction horizons with consistent quality, 720p video at 60 fps, diverse interactive elements (attacking, archery, spell-casting, shooting), and an agentic harness with pilot and director agents. Pairs a 14B model with a 1.3B counterpart deployable on a single GPU",
		tags: ["paper", "arxiv", "machine-learning", "generative", "worlds", "research"]
	},
	{
		title: "Kimi K3: Open Frontier Intelligence",
		url: "https://arxiv.org/abs/2607.24653",
		description: "A 2.8T parameter Mixture-of-Experts model with 104B activated parameters, native vision, and a 1-million-token context window. Built on Kimi Delta Attention, Attention Residuals, and Stable LatentMoE, achieving frontier-level performance across coding, agentic, knowledge, reasoning, and vision tasks",
		tags: ["paper", "arxiv", "machine-learning", "llm", "open-source", "research"]
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

