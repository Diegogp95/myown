<script lang="ts">
	import Bubble from "$lib/Bubble.svelte";
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

	interface Props {
		icon: IconDefinition;
		label: string;
		value: string;
		description: string;
		href?: string;
		gradientClass: string;
		hoverShadowClass?: string;
		hoverTextClass?: string;
	}

	let {
		icon,
		label,
		value,
		description,
		href,
		gradientClass,
		hoverShadowClass,
		hoverTextClass
	}: Props = $props();

	const isLink = href !== undefined;
</script>

<Bubble>
	{#if isLink}
		<a
			{href}
			target={href.startsWith('http') ? '_blank' : undefined}
			rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
			class="block group transition-transform duration-300 hover:scale-105"
		>
			<div class="flex items-start gap-4">
				<div class="shrink-0">
					<div class="w-16 h-16 text-3xl rounded-lg {gradientClass} flex items-center justify-center shadow-lg {hoverShadowClass || ''} transition-all duration-300">
						<FontAwesomeIcon {icon} class="text-white" />
					</div>
				</div>
				<div class="flex-1 min-w-0">
					<h3 class="text-2xl font-semibold text-white mb-2 {hoverTextClass || ''} transition-colors duration-300">
						{label}
					</h3>
					<p class="text-white/80 font-medium mb-1 break-all">
						{value}
					</p>
					<p class="text-sm text-white/60">
						{description}
					</p>
				</div>
			</div>
		</a>
	{:else}
		<div class="flex items-start gap-4">
			<div class="shrink-0">
				<div class="w-16 h-16 text-3xl rounded-lg {gradientClass} flex items-center justify-center shadow-lg">
					<FontAwesomeIcon {icon} class="text-white" />
				</div>
			</div>
			<div class="flex-1 min-w-0">
				<h3 class="text-2xl font-semibold text-white mb-2">
					{label}
				</h3>
				<p class="text-white/80 font-medium mb-1 break-all">
					{value}
				</p>
				<p class="text-sm text-white/60">
					{description}
				</p>
			</div>
		</div>
	{/if}
</Bubble>
