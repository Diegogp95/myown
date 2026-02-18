<script lang="ts">
	import Terminal from "$lib/Terminal.svelte";
	import Button from "$lib/Button.svelte";

	let { data } = $props();


</script>

<div class="max-w-5xl mx-auto flex flex-col items-center gap-16">

	<div class="flex flex-col items-center gap-6 mt-4 text-center">
		<div class="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2">
			<h1 class="text-3xl md:text-4xl text-white/70 font-light">{data.t['home']['title1st']}</h1>
			<h1 class="text-5xl md:text-6xl font-bold bg-linear-to-r from-tech-blue-400 via-cyber-cyan-300 to-tech-blue-400 bg-clip-text text-transparent pb-2">
				{data.t['home']['title2nd']}
			</h1>
		</div>
		<p class="text-xl md:text-2xl text-white/70 font-light max-w-2xl">{data.t['home']['subtitle']}</p>
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
