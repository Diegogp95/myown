<script lang="ts">
	interface Props {
		href?: string;
		text: string;
		icon?: 'download' | 'external' | 'arrow' | 'none';
		variant?: 'primary' | 'secondary' | 'accent';
		target?: '_blank' | '_self';
		onclick?: () => void;
	}

	let {
		href,
		text,
		icon = 'none',
		variant = 'primary',
		target = '_self',
		onclick
	}: Props = $props();

	const variantClasses = {
		primary: {
			bg: 'bg-tech-blue-600/80 hover:bg-tech-blue-500/90',
			border: 'border border-tech-blue-400/50 hover:border-tech-blue-300/80',
			shadow: 'shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]'
		},
		secondary: {
			bg: 'bg-cyber-cyan-600/80 hover:bg-cyber-cyan-500/90',
			border: 'border border-cyber-cyan-400/50 hover:border-cyber-cyan-300/80',
			shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
		},
		accent: {
			bg: 'bg-electric-purple-600/80 hover:bg-electric-purple-500/90',
			border: 'border border-electric-purple-400/50 hover:border-electric-purple-300/80',
			shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]'
		}
	};

	const iconPaths = {
		download: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		external: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
		arrow: 'M14 5l7 7m0 0l-7 7m7-7H3',
		none: ''
	};

	const baseClasses = 'group relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden';
</script>

{#if href}
	<a
		{href}
		{target}
		class="{baseClasses} {variantClasses[variant].bg} {variantClasses[variant].border} {variantClasses[variant].shadow}"
	>
		<!-- Animated background shimmer -->
		<div class="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

		{#if icon !== 'none'}
			<svg class="w-5 h-5 group-hover:rotate-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconPaths[icon]} />
			</svg>
		{/if}
		<span class="relative z-10">{text}</span>
	</a>
{:else}
	<button
		{onclick}
		class="{baseClasses} {variantClasses[variant].bg} {variantClasses[variant].border} {variantClasses[variant].shadow}"
	>
		<!-- Animated background shimmer -->
		<div class="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

		{#if icon !== 'none'}
			<svg class="w-5 h-5 group-hover:rotate-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconPaths[icon]} />
			</svg>
		{/if}
		<span class="relative z-10">{text}</span>
	</button>
{/if}
