<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app-container h-screen overflow-hidden flex flex-col text-white/70
	bg-radial-[at_25%_95%] from-primaryBg to-secondaryBg
	">
	{@render children?.()}
</div>
