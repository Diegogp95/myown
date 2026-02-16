<script lang="ts">
	import Terminal from "$lib/Terminal.svelte";
	import Button from "$lib/Button.svelte";

	let { data } = $props();


</script>

<div class="max-w-5xl mx-auto flex flex-col items-center gap-16">

	<div class="flex flex-col md:flex-row items-center gap-8 mt-4">
		<div class="flex flex-col items-center md:items-start gap-4">
			<div class="flex items-baseline gap-2">
				<h1 class="text-2xl text-white/70">{data.t['home']['title1st']}</h1>
				<h1 class="text-4xl font-bold text-white">{data.t['home']['title2nd']}</h1>
			</div>
			<p class="text-lg text-white/60">{data.t['home']['subtitle']}</p>
		</div>
	</div>

	<Terminal line={data.t['home']['description']} />

	<Button
		href={data.t['home']['cv']}
		text={data.t['home']['cvButton']}
		icon="download"
		variant="primary"
		target="_blank"
	/>

</div>
