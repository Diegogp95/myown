<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<div class="mb-8 inline-block">
	<h2 class="text-xl md:text-2xl font-bold text-white mb-2">
		{title}
	</h2>
	<div class="relative h-0.5 w-full overflow-hidden">
		<div class="absolute h-full w-1/3 bg-linear-to-r from-transparent via-electric-purple-400 to-transparent animate-shine"></div>
	</div>
</div>
