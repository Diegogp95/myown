<script lang="ts">
	interface Props {
		title: string;
		children?: any;
		variant?: 'default' | 'highlight';
	}

	let {
		title,
		children,
		variant = 'default'
	}: Props = $props();

	const variants = {
		default: {
			title: 'text-white',
			container: 'bg-white/5'
		},
		highlight: {
			title: 'bg-clip-text text-transparent bg-linear-to-r from-tech-blue-400 to-cyber-cyan-400',
			container: 'bg-linear-to-br from-tech-blue-500/10 to-cyber-cyan-500/10 border border-tech-blue-500/20'
		}
	};
</script>

<section class="mb-12">
	<div class="container mx-auto px-4">
		<div class="rounded-xl p-8 {variants[variant].container} backdrop-blur-sm">
			<h2 class="text-2xl md:text-3xl font-bold mb-6 {variants[variant].title}">
				{title}
			</h2>
			<div class="text-white/80 leading-relaxed space-y-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</section>
