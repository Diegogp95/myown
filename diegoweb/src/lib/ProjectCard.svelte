<script lang="ts">
	import Bubble from "$lib/Bubble.svelte";
	import Button from "$lib/Button.svelte";
	import SkillBadge from "$lib/SkillBadge.svelte";
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
	import { faGlobe, faClock, faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

	interface ProjectLink {
		type: 'github' | 'demo' | 'npm';
		url: string;
		label?: string;
	}

	type ProjectStatus = 'completed' | 'in-progress';

	interface Props {
		title: string;
		description: string;
		image: string;
		technologies: Array<{label: string, variant?: 'primary' | 'secondary'}>;
		links: ProjectLink[];
		date: string;
		status: ProjectStatus;
		slug: string;
		lang: string; // For URL construction only
		detailsText: string;
		statusCompleted: string;
		statusInProgress: string;
	}

	let {
		title,
		description,
		image,
		technologies,
		links,
		date,
		status,
		slug,
		lang,
		detailsText,
		statusCompleted,
		statusInProgress
	}: Props = $props();

	const statusConfig: Record<ProjectStatus, { icon: any; text: string; class: string }> = {
		completed: {
			icon: faCheckCircle,
			text: statusCompleted,
			class: 'text-emerald-400'
		},
		'in-progress': {
			icon: faSpinner,
			text: statusInProgress,
			class: 'text-cyber-cyan-400'
		}
	};

	const linkConfig: Record<'github' | 'demo' | 'npm', { icon: any; label: string }> = {
		github: { icon: faGithub, label: 'GitHub' },
		demo: { icon: faGlobe, label: 'Demo' },
		npm: { icon: faNpm, label: 'npm' }
	};
</script>

<Bubble>
	<div class="flex flex-col lg:flex-row gap-6 group">
		<!-- Image Section -->
		<div class="lg:w-2/5 shrink-0">
			<div class="relative overflow-hidden rounded-lg aspect-video bg-linear-to-br from-tech-blue-900/50 to-electric-purple-900/50">
				<img
					src={image}
					alt={title}
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			</div>
		</div>

		<!-- Content Section -->
		<div class="flex-1 flex flex-col gap-4">
			<!-- Header -->
			<div class="flex flex-wrap items-start justify-between gap-3">
				<div class="flex-1 min-w-0">
					<h3 class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-tech-blue-400 transition-colors duration-300">
						{title}
					</h3>
					<div class="flex flex-wrap items-center gap-3 text-sm text-white/60">
						<div class="flex items-center gap-1.5">
							<FontAwesomeIcon icon={faClock} class="w-4 h-4" />
							<span>{date}</span>
						</div>
						<div class="flex items-center gap-1.5 {statusConfig[status].class}">
							<FontAwesomeIcon icon={statusConfig[status].icon} class="w-4 h-4" />
							<span>{statusConfig[status].text}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Description -->
			<p class="text-white/80 leading-relaxed">
				{description}
			</p>

			<!-- Technologies -->
			<div class="flex flex-wrap gap-2">
				{#each technologies as tech}
					<SkillBadge label={tech.label} variant={tech.variant} color="crimson" />
				{/each}
			</div>

			<!-- Bottom Section: External Links and Details Button -->
			<div class="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4">
				<!-- External Links -->
				{#if links.length > 0}
					<div class="flex items-center gap-3">
						{#each links as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-tech-blue-400/50 text-white/70 hover:text-tech-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]"
								title={link.label || linkConfig[link.type].label}
							>
								<FontAwesomeIcon icon={linkConfig[link.type].icon} class="w-5 h-5" />
								<span class="text-sm font-medium hidden sm:inline">{link.label || linkConfig[link.type].label}</span>
							</a>
						{/each}
					</div>
				{/if}

				<!-- Details Button -->
				<div class="ml-auto">
					<Button
						href="/{lang}/projects/{slug}"
						text={detailsText}
						icon="arrow"
						variant="secondary"
					/>
				</div>
			</div>
		</div>
	</div>
</Bubble>
