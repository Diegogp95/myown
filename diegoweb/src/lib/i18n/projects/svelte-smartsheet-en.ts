export default {
	title: "SmartSheet",
	description: "An Excel-like spreadsheet component library for Svelte — built for large grids with DOM virtualization, keyboard navigation, multi-cell selection, inline editing, 5 built-in themes, and a full public API for styling, imputation, and data extraction.",
	image: "/images/projects/svelte-smartsheet.png",
	date: "February 2026",
	status: "in-progress" as const,
	technologies: [
		{ label: "SvelteKit", variant: "primary" as const },
		{ label: "TypeScript", variant: "primary" as const },
		{ label: "CSS", variant: "primary" as const },
		{ label: "Vercel", variant: "primary" as const }
	],
	links: [
		{ type: "github" as const, url: "https://github.com/Diegogp95/svelte-smartsheet" },
		{ type: "demo" as const, url: "https://svelte-smartsheet.vercel.app/" }
	],
	sections: {
		overview: {
			title: "What is SmartSheet?",
			paragraphs: [
				"SmartSheet is an Excel-like spreadsheet engine library for Svelte — a performant option for when you need to display and interact with large grids of data inside your Svelte app. It provides intuitive keyboard navigation, multi-cell selection, inline editing, per-cell styling APIs, and a fully virtualized rendering engine to keep things smooth even with large datasets.",
				"The project started as a tightly-coupled Svelte component, but the long-term vision is to refactor it into a framework-agnostic engine with separate adapters for Svelte, React, and others. The Svelte adapter is the first implementation and will eventually be published as svelte-smartsheet on npm.",
				"Not yet published to npm — you can follow the development on GitHub or explore the documentation site built with SvelteKit and deployed on Vercel."
			]
		},
		features: {
			title: "Key Features",
			performance: {
				title: "Performance",
				items: [
					"DOM virtualization — only visible rows and columns are rendered, keeping large grids smooth",
					"Ctrl + scroll to zoom, with more precise control planned for future releases"
				]
			},
			interaction: {
				title: "Interaction",
				items: [
					"Keyboard navigation — full arrow-key movement, Ctrl+Arrow to jump, Page Up/Down support",
					"Multi-cell selection — click, drag, and full row/column header selection with derived highlights",
					"Inline editing — double-click, Enter, or just type to start editing a cell",
					"Copy / paste support — clipboard integration to move data to and from external spreadsheets",
					"History manager — full undo/redo with visual feedback on affected cells"
				]
			},
			api: {
				title: "Programmatic API",
				items: [
					"Cell & header styling API — set background colors programmatically to build heatmaps and conditional formatting",
					"Data imputation layer — visual striped overlay for computed or AI-imputed values",
					"Export APIs — extract grid data, edited cells, or selected rows/columns on demand",
					"TypeScript generics — fully typed extraProps per cell for safe, IDE-assisted access inside API callbacks",
					"Processing overlay API — show loading states driven by external computations"
				]
			}
		},
		themes: {
			title: "Built-in Themes",
			intro: "Apply a theme via the theme prop. All visual tokens are CSS custom properties (--ss-*), so any of them can be overridden from your own stylesheet.",
			items: [
				{ name: "light", description: "Clean white — default" },
				{ name: "dark", description: "Dark grays, subtle blue accents" },
				{ name: "tech", description: "GitHub-dark inspired, blue headers" },
				{ name: "glow", description: "Deep space / aurora, cyan & purple" },
				{ name: "neon", description: "High-contrast neon on near-black" }
			]
		},
		techStack: {
			title: "Tech Stack",
			core: {
				title: "Core",
				items: [
					"Svelte 5 with SvelteKit",
					"TypeScript — fully typed generics for per-cell metadata"
				]
			},
			styling: {
				title: "Styling",
				items: [
					"Plain CSS with custom properties (--ss-*) for all theme tokens",
					"No external CSS framework — lightweight and self-contained"
				]
			},
			hosting: {
				title: "Hosting & Docs",
				items: [
					"Vercel for the documentation site deployment",
					"GitHub for source code and issue tracking"
				]
			}
		},
		roadmap: {
			title: "Status & Roadmap",
			statusNote: "The library is in active early development (v0.0.1-unstable). The core feature set is functional, but the codebase is not yet decoupled or tested enough for an npm release.",
			items: [
				"Live demo / playground page",
				"Decouple engine and refactor into a framework-agnostic core",
				"Set up testing environment and CI with unit and integration tests",
				"npm publish (stable 1.0.0)",
				"Column and row resizing by drag",
				"Sort / filter integration hooks",
				"React adapter"
			]
		}
	}
};
