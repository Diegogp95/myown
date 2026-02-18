<script lang="ts">
	let { 
		label,
		level,
		variant,
		color
	}: { 
		label: string;
		level?: 'basic' | 'intermediate' | 'advanced';
		variant?: 'primary' | 'secondary';
		color?: 'cyan' | 'purple' | 'pink' | 'green' | 'orange' | 'indigo' | 'teal' | 'crimson';
	} = $props();

	const levels = {
		basic: {
			bg: 'bg-crimson-500/20',
			text: 'text-crimson-300',
			border: 'border-crimson-500/50',
			tooltip: 'Basic Knowledge'
		},
		intermediate: {
			bg: 'bg-amber-500/20',
			text: 'text-amber-300',
			border: 'border-amber-500/50',
			tooltip: 'Intermediate'
		},
		advanced: {
			bg: 'bg-emerald-500/20',
			text: 'text-emerald-300',
			border: 'border-emerald-500/50',
			tooltip: 'Advanced'
		}
	};

	// Base colors
	const colorMap = {
		cyan: {
			primary: { bg: 'bg-cyber-cyan-500/40', text: 'text-cyber-cyan-100', border: 'border-cyber-cyan-400/90' },
			secondary: { bg: 'bg-cyber-cyan-500/10', text: 'text-cyber-cyan-400', border: 'border-cyber-cyan-500/30' }
		},
		purple: {
			primary: { bg: 'bg-electric-purple-500/40', text: 'text-electric-purple-100', border: 'border-electric-purple-400/90' },
			secondary: { bg: 'bg-electric-purple-500/10', text: 'text-electric-purple-400', border: 'border-electric-purple-500/30' }
		},
		pink: {
			primary: { bg: 'bg-neon-pink-500/40', text: 'text-neon-pink-100', border: 'border-neon-pink-400/90' },
			secondary: { bg: 'bg-neon-pink-500/10', text: 'text-neon-pink-400', border: 'border-neon-pink-500/30' }
		},
		green: {
			primary: { bg: 'bg-emerald-500/40', text: 'text-emerald-100', border: 'border-emerald-400/90' },
			secondary: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' }
		},
		orange: {
			primary: { bg: 'bg-neon-orange-500/40', text: 'text-neon-orange-100', border: 'border-neon-orange-400/90' },
			secondary: { bg: 'bg-neon-orange-500/10', text: 'text-neon-orange-400', border: 'border-neon-orange-500/30' }
		},
		indigo: {
			primary: { bg: 'bg-indigo-500/40', text: 'text-indigo-100', border: 'border-indigo-400/90' },
			secondary: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/30' }
		},
		teal: {
			primary: { bg: 'bg-teal-500/40', text: 'text-teal-100', border: 'border-teal-400/90' },
			secondary: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/30' }
		},
		crimson: {
			primary: { bg: 'bg-crimson-500/40', text: 'text-crimson-100', border: 'border-crimson-400/90' },
			secondary: { bg: 'bg-crimson-500/10', text: 'text-crimson-400', border: 'border-crimson-500/30' }
		}
	};

	// Default
	const defaultStyle = {
		bg: 'bg-loblolly-600/20',
		text: 'text-loblolly-200',
		border: 'border-loblolly-500/40',
		tooltip: ''
	};

	let style;
	let tooltip = '';

	if (level) {
		// Priority 1: Level (overrides variant and color)
		style = levels[level];
		tooltip = style.tooltip;
	} else if (variant && color) {
		// Priority 2: Variant + Color
		style = colorMap[color][variant];
		tooltip = '';
	} else {
		// Priority 3: Default style
		style = defaultStyle;
		tooltip = '';
	}
</script>

<span 
	class="relative inline-block px-3 py-1 text-xs md:text-sm font-medium border rounded-full {style.bg} {style.text} {style.border} hover:scale-105 transition-transform duration-200 group/badge {tooltip ? 'cursor-help' : 'cursor-default'}"
>
	{label}
	{#if tooltip}
		<span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-normal bg-gray-900 text-gray-100 rounded border border-white/20 whitespace-nowrap opacity-0 group-hover/badge:opacity-100 pointer-events-none transition-opacity duration-200 z-10">
			{tooltip}
		</span>
	{/if}
</span>
