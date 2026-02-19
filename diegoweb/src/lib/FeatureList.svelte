<script lang="ts">
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

	interface Feature {
		title: string;
		description: string;
		icon?: any;
	}

	interface Props {
		features: Feature[];
		columns?: 1 | 2 | 3;
	}

	let {
		features,
		columns = 2
	}: Props = $props();

	const gridCols = {
		1: 'grid-cols-1',
		2: 'md:grid-cols-2',
		3: 'md:grid-cols-2 lg:grid-cols-3'
	};
</script>

<div class="grid {gridCols[columns]} gap-6">
	{#each features as feature}
		<div class="group relative overflow-hidden rounded-lg p-6 bg-white/5 border border-white/10 hover:border-tech-blue-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]">
			<!-- Icon -->
			{#if feature.icon}
				<div class="w-12 h-12 mb-4 rounded-lg bg-linear-to-br from-tech-blue-500 to-cyber-cyan-500 flex items-center justify-center text-white shadow-lg">
					<FontAwesomeIcon icon={feature.icon} class="w-6 h-6" />
				</div>
			{:else}
				<div class="mb-4">
					<FontAwesomeIcon icon={faCheckCircle} class="w-6 h-6 text-emerald-400" />
				</div>
			{/if}

			<!-- Content -->
			<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-tech-blue-400 transition-colors">
				{feature.title}
			</h3>
			<p class="text-white/70 leading-relaxed">
				{feature.description}
			</p>

			<!-- Hover effect -->
			<div class="absolute inset-0 -z-10 bg-linear-to-br from-tech-blue-500/0 to-cyber-cyan-500/0 group-hover:from-tech-blue-500/5 group-hover:to-cyber-cyan-500/5 transition-all duration-300"></div>
		</div>
	{/each}
</div>
