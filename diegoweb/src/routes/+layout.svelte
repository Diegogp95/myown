<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app-container h-screen overflow-hidden flex flex-col text-white/70 bg-[#0a0a0a] relative">
	<!-- Tech Auras Background -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<!-- Tech Blue Aura - Top Right -->
		<div class="absolute -top-40 -right-40 w-96 h-96 bg-tech-blue-600/10 rounded-full blur-[120px]"></div>

		<!-- Electric Purple Aura - Bottom Left -->
		<div class="absolute -bottom-40 -left-40 w-96 h-96 bg-electric-purple-600/10 rounded-full blur-[120px]"></div>

		<!-- Cyber Cyan Aura - Middle Right -->
		<div class="absolute top-1/2 -right-20 w-80 h-80 bg-cyber-cyan-600/8 rounded-full blur-[100px]"></div>

		<!-- Emerald Aura - Top Left -->
		<div class="absolute -top-20 -left-20 w-72 h-72 bg-emerald-600/8 rounded-full blur-[100px]"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 flex flex-col h-full">
		{@render children?.()}
	</div>
</div>
