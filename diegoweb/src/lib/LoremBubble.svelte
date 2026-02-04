<script lang="ts">
	import { lorem, loremTitle, loremSubtitle } from '$lib/lorem';
	import Bubble from '$lib/Bubble.svelte';
</script>


<Bubble>
	<h2 class="text-2xl font-bold mb-4">{loremTitle}</h2>
	<h3 class="text-xl font-semibold mb-2">{loremSubtitle}</h3>
	<p>{lorem}</p>
</Bubble>