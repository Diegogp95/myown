<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<div class="mb-12 inline-block w-full">
	<h1 class="text-3xl md:text-4xl font-bold text-white mb-3">
		{title}
	</h1>
	<div class="relative h-0.5 w-full overflow-hidden">
		<div class="absolute h-full w-1/3 bg-linear-to-r from-transparent via-cyber-cyan-400 to-transparent animate-shine"></div>
	</div>
</div>
