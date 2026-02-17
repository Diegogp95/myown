<script lang="ts">
	import { languages, type Lang } from '$lib/i18n';
	import { page } from '$app/state';

	let { lang }: { lang: Lang } = $props();
	const t = languages[lang] || languages.en;

	let isOpen = $state(false);
	let isMobileMenuOpen = $state(false);

	const languageNames: Record<Lang, string> = {
		en: 'en',
		es: 'es'
	};

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function switchLanguage(newLang: Lang) {
		isOpen = false;
		const currentPath = page.url.pathname;
		const pathWithoutLang = currentPath.replace(/^\/(en|es)/, '');
		window.location.href = `/${newLang}${pathWithoutLang || '/'}` ;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.language-dropdown')) {
			isOpen = false;
		}
	}

	$effect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});

</script>

<div class="sticky top-0 px-4 z-50 flex flex-col w-full">
	<nav class="p-2">
		<!-- Hamburger Button - Visible on mobile only -->
		<div class="md:hidden flex justify-end">
			<button
				onclick={toggleMobileMenu}
				class="p-2 hover:text-white transition-colors"
				aria-label="Toggle menu"
				aria-expanded={isMobileMenuOpen}
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		<!-- Desktop Navigation - Hidden on mobile -->
		<ul class="hidden md:flex flex-row justify-end items-center [&>li]:hover:text-white">
			<li class="px-4"><a href="/{lang}/">{t.nav.home}</a></li>
			<li class="px-4"><a href="/{lang}/about/">{t.nav.about}</a></li>
			<li class="px-4"><a href="/{lang}/projects/">{t.nav.projects}</a></li>
			<li class="px-4"><a href="/{lang}/blog/">{t.nav.blog}</a></li>
			<li class="px-4"><a href="/{lang}/contact/">{t.nav.contact}</a></li>

			<!-- Language Dropdown - Desktop -->
			<li class="px-4 relative language-dropdown">
				<button
					onclick={toggleDropdown}
					class="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
					aria-label="Select language"
				>
					<span class="font-semibold">{languageNames[lang]}</span>
					<svg
						class="w-3 h-3 transition-transform {isOpen ? 'rotate-180' : ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</button>

				{#if isOpen}
					<div class="absolute right-0 mt-2 py-1 w-12 bg-primaryBg border border-loblolly-700 rounded shadow-xl text-sm">
						{#each Object.entries(languageNames) as [key, name]}
							<button
								onclick={() => switchLanguage(key as Lang)}
								disabled={key === lang}
								class="block w-full px-2 py-1 text-left transition-colors {key === lang ? 'font-bold text-white opacity-50 cursor-default' : 'hover:bg-secondaryBg cursor-pointer'}"
							>
								{name}
							</button>
						{/each}
					</div>
				{/if}
			</li>
		</ul>

		<!-- Mobile Dropdown Menu -->
		{#if isMobileMenuOpen}
			<div class="md:hidden mt-2 py-2 bg-primaryBg border border-loblolly-700 rounded shadow-xl">
				<a href="/{lang}/" onclick={closeMobileMenu} class="block px-4 py-2 hover:bg-secondaryBg hover:text-white transition-colors">{t.nav.home}</a>
				<a href="/{lang}/about/" onclick={closeMobileMenu} class="block px-4 py-2 hover:bg-secondaryBg hover:text-white transition-colors">{t.nav.about}</a>
				<a href="/{lang}/projects/" onclick={closeMobileMenu} class="block px-4 py-2 hover:bg-secondaryBg hover:text-white transition-colors">{t.nav.projects}</a>
				<a href="/{lang}/blog/" onclick={closeMobileMenu} class="block px-4 py-2 hover:bg-secondaryBg hover:text-white transition-colors">{t.nav.blog}</a>
				<a href="/{lang}/contact/" onclick={closeMobileMenu} class="block px-4 py-2 hover:bg-secondaryBg hover:text-white transition-colors">{t.nav.contact}</a>

				<!-- Language selector in mobile menu -->
				<div class="px-4 py-2 border-t border-loblolly-700 mt-2 pt-3">
					<div class="text-xs text-white/50 mb-2">
						{t.nav.language}
					</div>
					<div class="flex gap-2">
						{#each Object.entries(languageNames) as [key, name]}
							<button
								onclick={() => { switchLanguage(key as Lang); closeMobileMenu(); }}
								disabled={key === lang}
								class="px-3 py-1 rounded transition-colors {key === lang ? 'bg-secondaryBg text-white font-bold' : 'bg-primaryBg hover:bg-secondaryBg'}"
							>
								{name}
							</button>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</nav>
	<div class="h-0.5 bg-linear-to-r from-transparent from-5% via-white/30 to-transparent to-95%"></div>
</div>
