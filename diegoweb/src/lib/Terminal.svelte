<script lang="ts">
	import { onMount } from 'svelte';

	export let user: string = 'Diego@yourbrowser:';
	export let minHeight: string = '200px';
	export let preText: string = '';
	export let line: string = '';
	export let speed: number = 50;
	export let directory: string = '~/projects/diegoweb';

	let displayedText = '';
	let i = 0;
	let isTyping = false;

	function typeWriter() {
		if (i < line.length) {
			displayedText += line.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		} else {
			isTyping = false;
		}
	}

	onMount(() => {
		if (line) {
			isTyping = true;
			typeWriter();
		}
	});
</script>

<div class="bg-terminal-bg rounded-lg overflow-hidden shadow-2xl font-mono w-full">
	<div class="bg-linear-to-b from-terminal-header-from to-terminal-header-to px-3 py-2.5 flex items-center gap-3 border-b border-black/20">
		<div class="flex gap-2 shrink-0">
			<div class="w-3.5 h-3.5 rounded-full bg-linear-to-b from-terminal-close-from to-terminal-close-to
				hover:from-[#ff8577] hover:to-[#ff6e3a] flex items-center justify-center cursor-pointer transition-colors shadow-sm">
				<span class="text-[#5a1a12] text-[10px] font-bold leading-1 -mt-px">×</span>
			</div>
			<div class="w-3.5 h-3.5 rounded-full bg-linear-to-b from-terminal-button-from to-terminal-button-to
				hover:from-[#b8b8b8] hover:to-[#6a6a6a] cursor-pointer transition-colors shadow-sm flex items-center justify-center">
				<span class="text-black text-[10px] font-extrabold leading-1 -mt-px">−</span>
			</div>
			<div class="w-3.5 h-3.5 rounded-full bg-linear-to-b from-terminal-button-from to-terminal-button-to hover:from-[#b8b8b8]
				hover:to-[#6a6a6a] cursor-pointer transition-colors shadow-sm flex items-center justify-center">
				<span class="text-black text-[10px] font-extrabold leading-1 -mt-px">□</span>
			</div>
		</div>
		<div class="text-gray-200 text-sm font-medium truncate flex-1 min-w-0">{user}{directory}</div>
	</div>
	<div class="p-2 text-white text-sm leading-relaxed" style="min-height: {minHeight}">
		{#if preText}
			<div class="mb-1 whitespace-pre-wrap break-all">{preText}</div>
		{/if}
		<div class="break-all">
			<span class="text-green-400 font-bold">{user}</span
			><!--
			--><span class="text-blue-400 font-bold">{directory}</span
			><!--
			--><span>$ {displayedText}</span
			><!--
			--><span class="text-white {isTyping ? '' : 'animate-blink'}">▋</span>
		</div>
	</div>
</div>
