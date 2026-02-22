<script lang="ts">
    import Terminal from "$lib/Terminal.svelte";
    import Button from "$lib/Button.svelte";
    import SkillBadge from "$lib/SkillBadge.svelte";

    let { data } = $props();
    const t = data.t['home'];
</script>

<div class="max-w-5xl mx-auto flex flex-col items-center gap-16">

    <!-- Title -->
    <div class="flex flex-col items-center gap-6 mt-4 text-center">
        <div class="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2">
            <h1 class="text-3xl md:text-4xl text-white/70 font-light">{t.title1st}</h1>
            <h1 class="text-5xl md:text-6xl font-bold bg-linear-to-r from-tech-blue-400 via-cyber-cyan-300 to-tech-blue-400 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] animate-pulse" style="animation-duration: 3s;">
                {t.title2nd}
            </h1>
        </div>
        <p class="text-xl md:text-2xl text-white/70 font-light max-w-2xl drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">{t.subtitle}</p>
    </div>

    <!-- Terminal -->
    <Terminal line={t.description} />

    <!-- Main Skills -->
    <div class="flex flex-col items-center gap-4 w-full">
        <h2 class="text-sm font-semibold text-white/40 uppercase tracking-widest">{t.skillsTitle}</h2>
        <div class="flex flex-wrap justify-center gap-2">
            {#each t.skills.fields as skill}
                <SkillBadge label={skill.name} variant={skill.variant} color='indigo' />
            {/each}
        </div>
        <div class="flex flex-wrap justify-center gap-2">
            {#each t.skills.technologies as skill}
                <SkillBadge label={skill.name} level={skill.level} />
            {/each}
        </div>
    </div>

    <!-- CTA Buttons -->
    <div class="flex flex-col items-center gap-8 w-full">

        <!-- CV Button with subtext -->
        <div class="flex flex-col items-center gap-2">
            <Button
                href={t.cv}
                text={t.cvButton}
                icon="download"
                variant="primary"
                target="_blank"
            />
            <p class="text-sm text-white/40">{t.cvSubtext}</p>
        </div>

        <!-- Navigation buttons -->
        <div class="flex flex-wrap justify-center gap-4">
            <Button
                href={`/${data.lang}/about`}
                text={t.aboutButton}
                icon="arrow"
                variant="secondary"
            />
            <Button
                href={`/${data.lang}/projects`}
                text={t.projectsButton}
                icon="arrow"
                variant="secondary"
            />
            <Button
                href={`/${data.lang}/contact`}
                text={t.contactButton}
                icon="external"
                variant="accent"
            />
        </div>

    </div>

</div>