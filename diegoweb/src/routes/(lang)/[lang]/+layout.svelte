<script lang="ts">
	/* Translated Root Layout */
	import Navbar from "./Navbar.svelte";
	import Footer from "./Footer.svelte";

	// Here we pass down children and lang data
	let { children, data } = $props();

</script>

<Navbar lang={data.lang} />
<div class="flex-1 overflow-y-auto grid grid-cols-[5%_90%_5%] md:grid-cols-[10%_80%_10%] lg:grid-cols-[20%_60%_20%] grid-rows-[1fr_auto] relative">
	<!-- Left gradient border -->
	<div class="absolute left-[5%] md:left-[10%] lg:left-[20%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-tech-blue-500/30 to-transparent"></div>

	<!-- Right gradient border -->
	<div class="absolute right-[5%] md:right-[10%] lg:right-[20%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-cyber-cyan-500/30 to-transparent"></div>

	<main class="col-start-2 row-start-1 py-10 px-6 relative">
		{@render children()}
	</main>
	<div class="col-span-full row-start-2">
		<Footer lang={data.lang} />
	</div>
</div>
