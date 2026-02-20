<script lang="ts">
	import SectionHeader from '$lib/SectionHeader.svelte';
	import TimelineItem from '$lib/TimelineItem.svelte';
	import SkillBadge from '$lib/SkillBadge.svelte';
	import { languages } from '$lib/i18n';

	let { data } = $props();
	const t = languages[data.lang].about;

	// Work Technologies
	const jobSkills = [
		[
			{ name: "Python", variant: "primary" as const },
			{ name: "Django", variant: "primary" as const },
			{ name: "Svelte", variant: "primary" as const },
			{ name: "Docker", variant: "primary" as const },
			{ name: "Node.js", variant: "secondary" as const },
			{ name: "Linux", variant: "secondary" as const }
		],
		[
			{ name: "Python", variant: "primary" as const },
			{ name: "Django", variant: "primary" as const },
			{ name: "Svelte", variant: "primary" as const },
			{ name: "Docker", variant: "primary" as const },
			{ name: "Node.js", variant: "secondary" as const },
			{ name: "Linux", variant: "primary" as const }
		]
	];

	// Skills categorized
	const skills = {
		languages: [
			{ name: "Python", level: "advanced" as const },
			{ name: "Js/Ts", level: "advanced" as const },
			{ name: "Java", level: "intermediate" as const },
			{ name: "C", level: "intermediate" as const },
			{ name: "C++", level: "basic" as const },
		],
		frontend: [
			{ name: "Svelte", level: "advanced" as const },
			{ name: "React", level: "basic" as const },
		],
		backend: [
			{ name: "Django", level: "advanced" as const },
			{ name: "Node.js", level: "intermediate" as const },
		],
		systems: [
			{ name: "Linux", level: "advanced" as const },
			{ name: "Bash", level: "advanced" as const },
			{ name: "PowerShell", level: "intermediate" as const },
			{ name: "SSH", level: "intermediate" as const },
			{ name: "Cron", level: "intermediate" as const },
			{ name: "Nginx", level: "intermediate" as const },
		],
		orchestration: [
			{ name: "Docker", level: "advanced" as const },
			{ name: "Kubernetes", level: "basic" as const },
			{ name: "GitHub Actions", level: "basic" as const },
		],
		versionControl: [
			{ name: "Git", level: "advanced" as const },
			{ name: "GitHub", level: "advanced" as const },
		],
		databases: [
			{ name: "PostgreSQL", level: "intermediate" as const },
			{ name: "MongoDB", level: "basic" as const },
		],
		cloud: [
			{ name: "AWS", level: "basic" as const },
		],
		tools: [
			{ name: "Excel", level: "intermediate" as const },
		]
	};
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Main Title -->
	<div class="mb-16 w-full">
		<SectionHeader title={t.title} />
		<p class="text-gray-400 text-lg mt-4">
			{t.intro}
		</p>
	</div>

</div>

<div class="container mx-auto md:px-4 py-8">
	<!-- Timeline Container -->
	<div class="ml-0 md:ml-12">

		<!-- Early Life -->
		<TimelineItem title={t.earlyLife.title} period={t.earlyLife.period} color="cyan">
			<p class="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
				{t.earlyLife.description1}
			</p>
			<p class="text-gray-400 text-sm italic whitespace-pre-line">
				{t.earlyLife.description2}
			</p>
		</TimelineItem>

		<!-- Education -->
		<TimelineItem title={t.education.title} period={t.education.period} color="purple">
			<div class="space-y-4">
				{#each t.education.degrees as degree, i}
					<div class:pt-4={i > 0} class:border-t={i > 0} class="border-white/10">
						<div class="flex flex-wrap items-center gap-2 mb-2">
							<h4 class="text-lg font-semibold text-white">{degree.title}</h4>
							<span class="px-2 py-1 text-xs font-mono border rounded-full bg-electric-purple-500/20 text-electric-purple-300 border-electric-purple-500/50">
								{degree.period}
							</span>
						</div>
						<p class="text-gray-400 text-sm mb-3">{degree.institution}</p>
						<p class="text-gray-300 leading-relaxed mb-3">
							{degree.description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each degree.badges as badge, j}
								<SkillBadge label={badge.name} variant={badge.variant} color="purple" />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</TimelineItem>

		<!-- Work Experience -->
		<TimelineItem title={t.experience.title} period={t.experience.period} color="pink">
			<div class="space-y-4">
				{#each t.experience.jobs as job, i}
					<div class:pt-4={i > 0} class:border-t={i > 0} class="border-white/10">
						<div class="flex flex-wrap items-center gap-2 mb-2">
							<h4 class="text-lg font-semibold text-white">{job.title} • {job.company}</h4>
							<span class="px-2 py-1 text-xs font-mono border rounded-full bg-neon-pink-500/20 text-neon-pink-300 border-neon-pink-500/50">
								{job.period}
							</span>
						</div>
						<p class="text-gray-300 leading-relaxed mb-3 py-6">
							{job.description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each jobSkills[i] as skill, j}
								<SkillBadge label={skill.name} variant={skill.variant} color="pink" />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</TimelineItem>

		<!-- Current Skills -->
		<TimelineItem title={t.skills.title} period={t.skills.period} color="green" isLast={true}>
			<p class="text-gray-300 leading-relaxed mb-4">{t.skills.description}</p>

			<!-- Skill Levels Legend -->
			<div class="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
				<p class="text-sm font-semibold text-gray-400 mb-3">{t.skills.legend.title}</p>
				<div class="flex flex-wrap gap-4 text-xs">
					<div class="flex items-center gap-2">
						<div class="w-3 h-3 rounded-full bg-crimson-500"></div>
						<span class="text-gray-300">{t.skills.legend.basic}</span>
					</div>
					<div class="flex items-center gap-2">
						<div class="w-3 h-3 rounded-full bg-amber-500"></div>
						<span class="text-gray-300">{t.skills.legend.intermediate}</span>
					</div>
					<div class="flex items-center gap-2">
						<div class="w-3 h-3 rounded-full bg-emerald-500"></div>
						<span class="text-gray-300">{t.skills.legend.advanced}</span>
					</div>
				</div>
			</div>

			<div class="space-y-3">
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.languages.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.languages as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.frontend.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.frontend as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.backend.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.backend as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.systems.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.systems as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.orchestration.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.orchestration as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.versionControl.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.versionControl as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.databases.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.databases as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
				<div>
					<h5 class="text-sm font-semibold text-gray-400 mb-2">{t.skills.categories.cloud.title}</h5>
					<div class="flex flex-wrap gap-2">
						{#each skills.cloud as skill}
							<SkillBadge label={skill.name} level={skill.level} />
						{/each}
					</div>
				</div>
			</div>
		</TimelineItem>

	</div>
</div>
