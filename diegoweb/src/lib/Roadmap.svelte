<script lang="ts">
	interface RoadmapItem {
		text: string;
		done: boolean;
	}

	interface Props {
		items: RoadmapItem[];
	}

	let { items }: Props = $props();
</script>

<ul class="space-y-3">
	{#each items as item}
		<li class="flex items-start gap-3">
			{#if item.done}
				<!-- Completed: green tick -->
				<span class="w-5 h-5 rounded border border-green-500 bg-green-500/20 mt-0.5 shrink-0 flex items-center justify-center">
					<svg class="w-3 h-3 text-green-400" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</span>
				<span class="text-white/40 line-through">{item.text}</span>
			{:else}
				<!-- Pending: hollow checkbox -->
				<span class="w-5 h-5 rounded border border-white/30 mt-0.5 shrink-0 flex items-center justify-center">
					<span class="w-2 h-2 rounded-sm bg-white/20"></span>
				</span>
				<span class="text-white/80">{item.text}</span>
			{/if}
		</li>
	{/each}
</ul>
