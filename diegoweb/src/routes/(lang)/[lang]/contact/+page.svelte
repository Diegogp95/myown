<script lang="ts">
	import SubSectionHeader from "$lib/SubSectionHeader.svelte";
	import ContactCard from "$lib/ContactCard.svelte";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

	let { data } = $props();
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
	<!-- Main header -->
	<div class="text-center mb-16">
		<h1 class="text-6xl md:text-7xl font-bold mb-4 bg-linear-to-r from-tech-blue-400 via-cyber-cyan-300 to-electric-purple-400 bg-clip-text text-transparent">
			{data.t.contact.title}
		</h1>
		<p class="text-xl md:text-2xl text-white/80 font-light">
			{data.t.contact.subtitle}
		</p>
	</div>

	<!-- Section: Connect with Me -->
	<div class="mb-16">
		<SubSectionHeader title={data.t.contact.socialSection} />

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
			<ContactCard
				icon={faGithub}
				label={data.t.contact.github.label}
				value="@{data.t.contact.github.username}"
				description={data.t.contact.github.description}
				href="https://github.com/{data.t.contact.github.username}"
				gradientClass="bg-linear-to-br from-tech-blue-500 to-tech-blue-600"
				hoverShadowClass="group-hover:shadow-tech-blue-glow-hover"
				hoverTextClass="group-hover:text-tech-blue-400"
			/>

			<ContactCard
				icon={faLinkedin}
				label={data.t.contact.linkedin.label}
				value="@{data.t.contact.linkedin.username}"
				description={data.t.contact.linkedin.description}
				href="https://linkedin.com/in/{data.t.contact.linkedin.username}"
				gradientClass="bg-linear-to-br from-cyber-cyan-500 to-cyber-cyan-600"
				hoverShadowClass="group-hover:shadow-cyber-cyan-glow-hover"
				hoverTextClass="group-hover:text-cyber-cyan-400"
			/>
		</div>
	</div>

	<!-- Section: Contact Information -->
	<div class="mb-16">
		<SubSectionHeader title={data.t.contact.infoSection} />

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
			<ContactCard
				icon={faEnvelope}
				label={data.t.contact.email.label}
				value={data.t.contact.email.address}
				description={data.t.contact.email.description}
				href="mailto:{data.t.contact.email.address}"
				gradientClass="bg-linear-to-br from-electric-purple-500 to-electric-purple-600"
				hoverShadowClass="group-hover:shadow-electric-purple-glow-hover"
				hoverTextClass="group-hover:text-electric-purple-400"
			/>

			<ContactCard
				icon={faLocationDot}
				label={data.t.contact.location.label}
				value={data.t.contact.location.city}
				description={data.t.contact.location.description}
				gradientClass="bg-linear-to-br from-emerald-500 to-emerald-600"
			/>
		</div>
	</div>
</div>
