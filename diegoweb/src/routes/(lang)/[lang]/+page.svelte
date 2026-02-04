<script lang="ts">
	import SectionHeader from "$lib/SectionHeader.svelte";
	import SubSectionHeader from "$lib/SubSectionHeader.svelte";
	import LoremBubble from "$lib/LoremBubble.svelte";
	import UnderConstruction from "$lib/UnderConstruction.svelte";

	let { data } = $props();


</script>

<SectionHeader title={data.t['home']['title']} />
<UnderConstruction lang={data.lang} />
<SubSectionHeader title={data.t['home']['description']} />
<UnderConstruction lang={data.lang} />
<LoremBubble />
<LoremBubble />
<LoremBubble />
<LoremBubble />
<LoremBubble />
<LoremBubble />