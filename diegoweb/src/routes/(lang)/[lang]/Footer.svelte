<script lang="ts">
	import { languages, type Lang } from '$lib/i18n';
	import Svelte from '$lib/assets/Svelte.png';
	import Tailwind from '$lib/assets/Tailwind.png';

	let { lang }: { lang: Lang } = $props();
	const t = languages[lang] || languages.en;

</script>

<footer class="w-full text-xs md:text-sm text-white/50">
	<div class="h-0.5 bg-linear-to-r from-transparent from-5% via-white/30 to-transparent to-95%"></div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 items-center px-4 md:px-6 py-4 md:py-6">
		<div class="text-center md:text-left">
			Think, Code, Build.
		</div>
		<div class="text-center text-xs md:text-sm">
			&copy; {new Date().getFullYear()} Diego Gallegos<br class="lg:hidden" /> <span class="hidden lg:inline">-</span> {t.footer.rights}
		</div>
		<div class="flex flex-wrap items-center gap-2 justify-center md:justify-end">
			<span class="text-xs md:text-sm">Powered By:</span>
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer" class="inline-block">
				<img src={Svelte} alt="Svelte" class="h-5 md:h-6" />
			</a>
			<a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="inline-block">
				<img src={Tailwind} alt="Tailwind" class="w-5 md:w-6" />
			</a>
		</div>
	</div>
</footer>