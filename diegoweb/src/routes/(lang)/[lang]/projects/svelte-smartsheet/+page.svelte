<script lang="ts">
	import { languages } from "$lib/i18n";
	import ProjectHero from "$lib/ProjectHero.svelte";
	import ProjectSection from "$lib/ProjectSection.svelte";

	let { data } = $props();
	const t = languages[data.lang].projects.entries['svelte-smartsheet'];
	const s = t.sections;

</script>

<!-- Hero -->
<ProjectHero
	title={t.title}
	image={t.image}
	description={t.description}
	technologies={t.technologies}
	links={t.links}
	date={t.date}
	status={t.status}
	technologiesLabel={languages[data.lang].projects.hero.technologiesLabel}
	statusCompleted={languages[data.lang].projects.hero.statusCompleted}
	statusInProgress={languages[data.lang].projects.hero.statusInProgress}
/>

<!-- Overview -->
<ProjectSection title={s.overview.title} variant="highlight">
	{#each s.overview.paragraphs as paragraph}
		<p class="text-white/80 mb-4 last:mb-0">{paragraph}</p>
	{/each}
</ProjectSection>

<!-- Key Features -->
<ProjectSection title={s.features.title}>
	<div class="grid md:grid-cols-3 gap-6">
		<!-- Performance -->
		<div>
			<h3 class="text-lg font-semibold text-tech-blue-400 mb-3">{s.features.performance.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each s.features.performance.items as item}
					<li class="flex items-start gap-2">
						<span class="w-2 h-2 rounded-full bg-tech-blue-400 mt-2 shrink-0"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Interaction -->
		<div>
			<h3 class="text-lg font-semibold text-cyber-cyan-400 mb-3">{s.features.interaction.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each s.features.interaction.items as item}
					<li class="flex items-start gap-2">
						<span class="w-2 h-2 rounded-full bg-cyber-cyan-400 mt-2 shrink-0"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Programmatic API -->
		<div>
			<h3 class="text-lg font-semibold text-electric-purple-400 mb-3">{s.features.api.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each s.features.api.items as item}
					<li class="flex items-start gap-2">
						<span class="w-2 h-2 rounded-full bg-electric-purple-400 mt-2 shrink-0"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</ProjectSection>

<!-- Themes -->
<ProjectSection title={s.themes.title} variant="highlight">
	<p class="text-white/70 mb-6">{s.themes.intro}</p>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
		{#each s.themes.items as theme}
			<div class="bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-center">
				<code class="text-tech-blue-400 font-mono text-sm">{theme.name}</code>
				<p class="text-white/60 text-xs mt-1">{theme.description}</p>
			</div>
		{/each}
	</div>
</ProjectSection>

<!-- Tech Stack -->
<ProjectSection title={s.techStack.title}>
	<div class="grid md:grid-cols-3 gap-6">
		<div>
			<h3 class="text-lg font-semibold text-tech-blue-400 mb-3">{s.techStack.core.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each s.techStack.core.items as item}
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-tech-blue-400"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="text-lg font-semibold text-cyber-cyan-400 mb-3">{s.techStack.styling.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each s.techStack.styling.items as item}
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-cyber-cyan-400"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="text-lg font-semibold text-electric-purple-400 mb-3">{s.techStack.hosting.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each s.techStack.hosting.items as item}
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-electric-purple-400"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</ProjectSection>

<!-- Status & Roadmap -->
<ProjectSection title={s.roadmap.title} variant="highlight">
	<div class="bg-electric-purple-500/10 border-l-4 border-electric-purple-400 p-4 rounded-r mb-6">
		<p class="text-white/70 text-sm">{s.roadmap.statusNote}</p>
	</div>
	<ul class="space-y-3">
		{#each s.roadmap.items as item}
			<li class="flex items-start gap-3 text-white/80">
				<span class="w-4 h-4 rounded border border-white/30 mt-0.5 shrink-0 flex items-center justify-center">
					<span class="w-2 h-2 rounded-sm bg-white/20"></span>
				</span>
				<span>{item}</span>
			</li>
		{/each}
	</ul>
</ProjectSection>
