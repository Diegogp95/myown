<script lang="ts">
	import { languages } from "$lib/i18n";
	import ProjectHero from "$lib/ProjectHero.svelte";
	import ProjectSection from "$lib/ProjectSection.svelte";
	import Gallery from "$lib/Gallery.svelte";

	let { data } = $props();
	const t = languages[data.lang].projects.entries.portfolio;

</script>


<!-- Hero Section -->
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

<!-- Motivation -->
<ProjectSection title={t.sections.motivation.title} variant="highlight">
	{#each t.sections.motivation.paragraphs as paragraph}
		<p>{paragraph}</p>
	{/each}
</ProjectSection>

<!-- Infrastructure & DevOps -->
<ProjectSection title={t.sections.infrastructure.title}>
	<p class="text-white/80 mb-6">{t.sections.infrastructure.intro}</p>
	
	<div class="grid md:grid-cols-2 gap-6 mb-6">
		<div>
			<h3 class="text-lg md:text-xl font-semibold text-tech-blue-400 mb-3">{t.sections.infrastructure.aws.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each t.sections.infrastructure.aws.items as item}
					<li class="flex items-start gap-2">
						<span class="w-2 h-2 rounded-full bg-tech-blue-400 mt-2 shrink-0"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="text-lg md:text-xl font-semibold text-cyber-cyan-400 mb-3">{t.sections.infrastructure.cicd.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each t.sections.infrastructure.cicd.items as item}
					<li class="flex items-start gap-2">
						<span class="w-2 h-2 rounded-full bg-cyber-cyan-400 mt-2 shrink-0"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="bg-electric-purple-500/10 border-l-4 border-electric-purple-400 p-4 rounded-r">
		<p class="text-white/70 text-sm">{t.sections.infrastructure.nextSteps}</p>
	</div>
</ProjectSection>

<!-- Tech Stack -->
<ProjectSection title={t.sections.techStack.title} variant="highlight">
	<div class="grid md:grid-cols-2 gap-6">
		<div>
			<h3 class="text-lg md:text-xl font-semibold text-tech-blue-400 mb-3">{t.sections.techStack.frontend.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each t.sections.techStack.frontend.items as item}
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-tech-blue-400"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="text-lg md:text-xl font-semibold text-cyber-cyan-400 mb-3">{t.sections.techStack.tools.title}</h3>
			<ul class="space-y-2 text-white/80">
				{#each t.sections.techStack.tools.items as item}
					<li class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-cyber-cyan-400"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</ProjectSection>
