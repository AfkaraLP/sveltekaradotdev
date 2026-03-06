export interface Project {
	name: string;
	description: string;
	language: string;
	owner: string;
	repo: string;
}

export const YEAR = new Date().getFullYear();

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
