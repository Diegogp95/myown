<script lang="ts">
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
	import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
	import { faGlobe, faClock, faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
	import SkillBadge from "$lib/SkillBadge.svelte";

	interface ProjectLink {
		type: 'github' | 'demo' | 'npm';
		url: string;
		label?: string;
	}

	type ProjectStatus = 'completed' | 'in-progress';

	interface Props {
		title: string;
		image: string;
		description?: string;
		technologies: Array<{label: string, variant?: 'primary' | 'secondary'}>;
		links: ProjectLink[];
		date: string;
		status: ProjectStatus;
		technologiesLabel: string;
		statusCompleted: string;
		statusInProgress: string;
	}

	let {
		title,
		image,
		description,
		technologies,
		links,
		date,
		status,
		technologiesLabel,
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

<!-- Hero Section -->
<div class="relative overflow-hidden mb-12 py-4">
	<!-- Background decoration with unique glow effects -->
	<div class="absolute inset-0 -z-10">
		<!-- Animated gradient orbs with increased opacity for subtle glow -->
		<div class="absolute top-10 right-10 w-[500px] h-[500px] bg-neon-orange-500 rounded-full blur-[120px] opacity-25 animate-pulse"></div>
		<div class="absolute bottom-10 left-10 w-[500px] h-[500px] bg-neon-pink-500 rounded-full blur-[120px] opacity-25 animate-pulse" style="animation-delay: 1s;"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[100px] opacity-20"></div>

		<!-- Subtle grid pattern overlay for tech feel -->
		<div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<div class="container mx-auto px-4">
		<!-- Glass container for title and meta -->
		<div class="mb-8 rounded-2xl p-6 backdrop-blur-md bg-white/2 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
			<h1 class="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text bg-linear-to-r from-neon-orange-400 via-amber-400 to-neon-pink-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.3)]">
				{title}
			</h1>
	
			<div class="flex flex-wrap items-center gap-4 text-white/70">
				<div class="flex items-center gap-2">
					<FontAwesomeIcon icon={faClock} />
					<span class="text-sm">{date}</span>
				</div>
				<div class="flex items-center gap-2 {statusConfig[status].class}">
					<FontAwesomeIcon icon={statusConfig[status].icon} />
					<span class="text-sm font-semibold">{statusConfig[status].text}</span>
				</div>
			</div>
		</div>

		<!-- Main Image with glass effect -->
		<div class="relative overflow-hidden rounded-2xl mb-8 shadow-2xl group border-2 border-neon-orange-500/30 backdrop-blur-sm">
			<!-- Glass reflection overlay on top -->
			<div class="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-white/10 to-transparent pointer-events-none z-10"></div>

			<!-- Image container with vibrant gradient -->
			<div class="aspect-video bg-linear-to-br from-neon-orange-900/40 via-amber-900/40 to-neon-pink-900/40">
				<img
					src={image}
					alt={title}
					class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
			</div>
			<!-- Gradient overlay with warm tones -->
			<div class="absolute inset-0 bg-linear-to-t from-neon-orange-950/70 via-transparent to-transparent"></div>
			<!-- Glass shine effect on hover -->
			<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<div class="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent"></div>
			</div>
		</div>

		<!-- Description (if provided) -->
		{#if description}
			<p class="text-xl text-white/80 leading-relaxed mb-8 max-w-4xl">
				{description}
			</p>
		{/if}

		<!-- Technologies with glass container -->
		<div class="mb-8 rounded-xl p-5 backdrop-blur-sm bg-white/2 border border-white/5">
			<h3 class="text-sm font-semibold text-neon-orange-400/80 uppercase tracking-wider mb-3">
				{technologiesLabel}
			</h3>
			<div class="flex flex-wrap gap-2">
				{#each technologies as tech}
					<SkillBadge label={tech.label} variant={tech.variant || 'primary'} color="crimson"/>
				{/each}
			</div>
		</div>

		<!-- Links with enhanced glass effect -->
		{#if links.length > 0}
			<div class="flex flex-wrap gap-4">
				{#each links as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex items-center gap-3 px-6 py-3 rounded-lg backdrop-blur-md bg-white/5 hover:bg-neon-orange-500/10 border border-white/20 hover:border-neon-orange-400/60 text-white/70 hover:text-neon-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(251,146,60,0.3)] relative overflow-hidden"
					>
						<!-- Glass reflection -->
						<div class="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

						<FontAwesomeIcon icon={linkConfig[link.type].icon} class="w-6 h-6 relative z-10" />
						<span class="font-medium relative z-10">{link.label || linkConfig[link.type].label}</span>
						<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
