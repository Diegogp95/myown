<script lang="ts">
	import { page } from '$app/state';
	import { languages, type Lang } from '$lib/i18n';

	const error = $derived(page.error);
	const status = $derived(page.status);

	// Extract lang from URL params
	const lang = $derived((page.params.lang as Lang) || 'en');
	const t = $derived(languages[lang] || languages.en);

</script>

<div class="flex flex-col items-center justify-center min-h-[500px]">
	{#if status === 404}
		<div class="text-9xl font-bold mb-8 text-white/20">
			404
		</div>
		<div class="text-4xl font-bold mb-4">
			{t.error[404].title}
		</div>
		<p class="text-xl text-white/70 text-center max-w-md mb-8">
			{t.error[404].message}
		</p>
		<a
			href="/{lang}" 
			class="px-6 py-3 bg-teal-blue-600 hover:bg-teal-blue-700 
			       rounded-lg transition-colors duration-200 font-semibold"
		>
			{t.error[404].goHome}
		</a>
	{:else}
		<div class="text-9xl font-bold mb-8 text-white/20">
			{status}
		</div>
		<h1 class="text-4xl font-bold mb-4">Error</h1>
		<p class="text-xl text-white/70 text-center max-w-md">
			{error?.message || 'An unexpected error occurred'}
		</p>
	{/if}
</div>
