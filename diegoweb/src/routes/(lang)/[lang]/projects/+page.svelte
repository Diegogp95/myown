<script lang="ts">
	import { languages } from "$lib/i18n";
	import SectionHeader from "$lib/SectionHeader.svelte";
	import ProjectCard from "$lib/ProjectCard.svelte";

	let { data } = $props();

	const t = languages[data.lang].projects;

	// Convert projects object to array for easier iteration
	const projectsArray = Object.entries(t.entries).map(([slug, project]) => ({
		slug,
		...project
	}));

</script>

<SectionHeader title={t.title} />

<div class="space-y-6 mt-8">
	{#each projectsArray as project}
		<ProjectCard
			title={project.title}
			description={project.description}
			image={project.image}
			technologies={project.technologies}
			links={project.links}
			date={project.date}
			status={project.status}
			slug={project.slug}
			lang={data.lang}
			detailsText={t.detailsButton}
			statusCompleted={t.hero.statusCompleted}
			statusInProgress={t.hero.statusInProgress}
		/>
	{/each}
</div>