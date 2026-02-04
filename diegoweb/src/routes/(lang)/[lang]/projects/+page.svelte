<script lang="ts">
	import UnderConstruction from "$lib/UnderConstruction.svelte";

	let { data } = $props();
</script>

<UnderConstruction lang={data.lang} />
