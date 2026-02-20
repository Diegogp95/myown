<script lang="ts">
	interface Props {
		images: Array<{
			src: string;
			alt: string;
			caption?: string;
		}>;
		columns?: 1 | 2 | 3;
	}

	let {
		images,
		columns = 2
	}: Props = $props();

	let selectedImage = $state<number | null>(null);

	const gridCols = {
		1: 'grid-cols-1',
		2: 'md:grid-cols-2',
		3: 'md:grid-cols-2 lg:grid-cols-3'
	};

	function openLightbox(index: number) {
		selectedImage = index;
	}

	function closeLightbox() {
		selectedImage = null;
	}

	function nextImage() {
		if (selectedImage !== null) {
			selectedImage = (selectedImage + 1) % images.length;
		}
	}

	function prevImage() {
		if (selectedImage !== null) {
			selectedImage = (selectedImage - 1 + images.length) % images.length;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (selectedImage !== null) {
			if (e.key === 'Escape') {
				closeLightbox();
			} else if (e.key === 'ArrowRight') {
				nextImage();
			} else if (e.key === 'ArrowLeft') {
				prevImage();
			}
		}
	}
</script>

<!-- Gallery Grid -->
<div class="grid {gridCols[columns]} gap-6">
	{#each images as image, i}
		<button
			onclick={() => openLightbox(i)}
			class="group relative overflow-hidden rounded-lg aspect-video bg-white/5 border border-white/10 hover:border-tech-blue-400/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-tech-blue-glow"
		>
			<img
				src={image.src}
				alt={image.alt}
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				{#if image.caption}
					<div class="absolute bottom-4 left-4 right-4">
						<p class="text-white font-medium">{image.caption}</p>
					</div>
				{/if}
			</div>
		</button>
	{/each}
</div>

<!-- Lightbox Modal -->
{#if selectedImage !== null}
	<div
		class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
		onclick={closeLightbox}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
		tabindex="-1"
	>
		<!-- Close button -->
		<button
			onclick={closeLightbox}
			class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
			aria-label="Close lightbox"
		>
			<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Navigation buttons -->
		{#if images.length > 1}
			<button
				onclick={(e) => { e.stopPropagation(); prevImage(); }}
				class="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
				aria-label="Previous image"
			>
				<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				onclick={(e) => { e.stopPropagation(); nextImage(); }}
				class="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
				aria-label="Next image"
			>
				<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}

		<!-- Image -->
		<div
			class="max-w-6xl max-h-full"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="button"
			tabindex="0"
			aria-label="Image container"
		>
			<img
				src={images[selectedImage].src}
				alt={images[selectedImage].alt}
				class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
			/>
			{#if images[selectedImage].caption}
				<p class="text-white text-center mt-4 text-lg">{images[selectedImage].caption}</p>
			{/if}
		</div>

		<!-- Image counter -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white">
			{selectedImage + 1} / {images.length}
		</div>
	</div>
{/if}
