<script lang="ts">
	/* Translated Root Layout */
	import Navbar from "./Navbar.svelte";
	import Footer from "./Footer.svelte";

	// Here we pass down childrens and lang data
	let { children, data } = $props();

</script>

<Navbar lang={data.lang} />
<div class="flex-1 overflow-y-auto grid grid-cols-[5%_90%_5%] md:grid-cols-[10%_80%_10%] lg:grid-cols-[20%_60%_20%] grid-rows-[1fr_auto]">
	<main class="col-start-2 row-start-1 bg-white/1 py-10 px-6">
		{@render children()}
	</main>
	<div class="col-span-full row-start-2">
		<Footer lang={data.lang} />
	</div>
</div>
