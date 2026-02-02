<script lang="ts">
	/* Translated Root Layout */
	import Navbar from "./Navbar.svelte";

	// Here we pass down childrens and lang data
	let { children, data } = $props();

</script>

<Navbar lang={data.lang} />
{@render children()}
