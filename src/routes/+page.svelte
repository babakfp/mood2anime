<script lang="ts">
    import moods from "$lib/moods.json"
    import MoodCard from "$lib/components/MoodCard.svelte"
</script>

<section class="text-center gap-4 grid mt-8">
    <span class="font-bubblegum">Mood2Anime</span>
    <h1 class="font-extrablack text-3xl">
        Discover Anime <br /> Based on Your Mood
    </h1>
    <div class="font-bold flex gap-2 justify-center">
        <span>😍</span> Horny
    </div>
</section>

<section class="mt-16">
    <h2 class="text-3xl font-black text-center">I feel?</h2>
    <ul class="mt-4 space-y-2">
        {#each moods as mood}
            <li>
                <MoodCard
                    name={mood.name}
                    emoji={mood.emoji}
                    href="/mood/{mood.id}"
                />
            </li>
        {/each}
    </ul>
</section>

<footer class="mb-8 mt-16 grid self-end">
    <p class="text-center">
        Made with ❤️ by
        <a class="link" href="https://github.com/babakfp" target="_blank">
            Babak
        </a>
    </p>
</footer>
