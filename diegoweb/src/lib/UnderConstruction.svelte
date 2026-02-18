<script lang="ts">
	import { languages, type Lang } from '$lib/i18n';

	let { lang }: { lang: Lang } = $props();
	const t = languages[lang] || languages.en;

</script>

<div class="flex flex-col items-center justify-center min-h-[400px] py-20 px-4">
	<!-- Main Card -->
	<div class="relative max-w-2xl w-full">
		<!-- Content -->
		<div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/[0.07] transition-colors duration-300">
			<!-- Animated Icon -->
			<div class="flex justify-center mb-6">
				<div class="relative">
					<div class="text-7xl md:text-8xl animate-bounce">
						{t.underConstruction.icon}
					</div>
					<!-- Decorative spinning circle -->
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="w-24 h-24 md:w-32 md:h-32 border border-cyber-cyan-500/20 rounded-full animate-spin" style="animation-duration: 4s;"></div>
					</div>
				</div>
			</div>

			<!-- Title -->
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-center text-cyber-cyan-400">
				{t.underConstruction.title}
			</h2>

			<!-- Description -->
			<p class="text-base md:text-lg text-gray-300 text-center max-w-md mx-auto mb-6">
				{t.underConstruction.message}
			</p>

			<!-- Progress Bar -->
			<div class="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
				<div class="h-full bg-cyber-cyan-500/50 rounded-full" style="width: 65%;"></div>
			</div>

			<!-- Decorative Dots -->
			<div class="flex justify-center gap-2 mt-8">
				<div class="w-2 h-2 bg-cyber-cyan-500/60 rounded-full animate-pulse"></div>
				<div class="w-2 h-2 bg-electric-purple-500/60 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
				<div class="w-2 h-2 bg-neon-pink-500/60 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
			</div>
		</div>
	</div>
</div>
