<script lang="ts">
	let { 
		title, 
		period, 
		children,
		isLast = false,
		color = 'cyan' 
	}: { 
		title: string; 
		period?: string; 
		children: any;
		isLast?: boolean;
		color?: 'cyan' | 'purple' | 'pink' | 'green';
	} = $props();

	const colorClasses = {
		cyan: {
			circle: 'bg-cyber-cyan-500 shadow-cyber-cyan-500/50',
			line: 'bg-cyber-cyan-500/30',
			badge: 'bg-cyber-cyan-500/20 text-cyber-cyan-300 border-cyber-cyan-500/50'
		},
		purple: {
			circle: 'bg-electric-purple-500 shadow-electric-purple-500/50',
			line: 'bg-electric-purple-500/30',
			badge: 'bg-electric-purple-500/20 text-electric-purple-300 border-electric-purple-500/50'
		},
		pink: {
			circle: 'bg-neon-pink-500 shadow-neon-pink-500/50',
			line: 'bg-neon-pink-500/30',
			badge: 'bg-neon-pink-500/20 text-neon-pink-300 border-neon-pink-500/50'
		},
		green: {
			circle: 'bg-green-500 shadow-green-500/50',
			line: 'bg-green-500/30',
			badge: 'bg-green-500/20 text-green-300 border-green-500/50'
		}
	};

	const colors = colorClasses[color];
</script>

<div class="flex gap-6 relative group">
	<!-- Timeline Line & Circle -->
	<div class="flex flex-col items-center shrink-0 {!isLast ? 'pb-2' : ''}">
		<!-- Circle Indicator -->
		<div class="w-4 h-4 rounded-full {colors.circle} shadow-lg transition-transform duration-300 group-hover:scale-125 z-10"></div>

		<!-- Vertical Line -->
		<div class="w-0.5 grow {colors.line} mt-2"></div>
	</div>

	<!-- Content -->
	<div class="grow {!isLast ? 'pb-12' : ''}">
		<!-- Header with Title and Period -->
		<div class="flex flex-wrap items-center gap-3 mb-4">
			<h3 class="text-xl md:text-2xl font-bold text-white">{title}</h3>
			{#if period}
				<span class="px-3 py-1 text-sm font-mono border rounded-full {colors.badge}">
					{period}
				</span>
			{/if}
		</div>

		<!-- Content Bubble -->
		<div class="bg-white/5 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-colors duration-300">
			{@render children()}
		</div>
	</div>
</div>
