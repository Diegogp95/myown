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
		primary: 'bg-elephant-600 hover:bg-elephant-500',
		secondary: 'bg-teal-blue-600 hover:bg-teal-blue-500',
		accent: 'bg-livid-brown-600 hover:bg-livid-brown-500'
	};

	const iconPaths = {
		download: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		external: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
		arrow: 'M14 5l7 7m0 0l-7 7m7-7H3',
		none: ''
	};

	const baseClasses = 'group relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105';
</script>

{#if href}
	<a
		{href}
		{target}
		class="{baseClasses} {variantClasses[variant]}"
	>
		{#if icon !== 'none'}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconPaths[icon]} />
			</svg>
		{/if}
		<span>{text}</span>
	</a>
{:else}
	<button
		{onclick}
		class="{baseClasses} {variantClasses[variant]}"
	>
		{#if icon !== 'none'}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconPaths[icon]} />
			</svg>
		{/if}
		<span>{text}</span>
	</button>
{/if}
