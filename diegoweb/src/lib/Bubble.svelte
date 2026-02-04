<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-white/5 p-6 m-2 rounded-lg shadow-lg">
	{@render children()}
</div>
