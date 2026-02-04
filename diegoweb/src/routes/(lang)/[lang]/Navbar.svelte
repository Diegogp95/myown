<script lang="ts">
	import { languages, type Lang } from '$lib/i18n';

	let { lang }: { lang: Lang } = $props();
	const t = languages[lang] || languages.en;

</script>
<div class="sticky top-0 z-50 flex flex-col w-full">
	<nav class="p-2">
		<ul class="flex flex-row justify-end [&>li]:hover:text-white">
			<li class="px-4"><a href="/{lang}/">{t.nav.home}</a></li>
			<li class="px-4"><a href="/{lang}/about">{t.nav.about}</a></li>
			<li class="px-4"><a href="/{lang}/projects">{t.nav.projects}</a></li>
			<li class="px-4"><a href="/{lang}/blog">{t.nav.blog}</a></li>
			<li class="px-4"><a href="/{lang}/contact">{t.nav.contact}</a></li>
		</ul>
	</nav>
	<div class="h-0.5 bg-linear-to-r from-transparent from-5% via-white/30 to-transparent to-95%"></div>
</div>