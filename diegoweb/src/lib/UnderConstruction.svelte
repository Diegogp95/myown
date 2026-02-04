<script lang="ts">
	import { languages, type Lang } from '$lib/i18n';
	let { lang }: { lang: Lang } = $props();
	const t = languages[lang] || languages.en;

</script>

<div class="flex flex-col items-center justify-center min-h-[400px] py-20">
	<div class="text-8xl mb-8 animate-pulse">
		{t.underConstruction.icon}
	</div>
	<h2 class="text-3xl font-bold mb-4 text-center">
		{t.underConstruction.title}
	</h2>
	<p class="text-lg text-white/70 text-center max-w-md">
		{t.underConstruction.message}
	</p>
</div>
