<script lang="ts">
    import { moods } from "$lib/data/moods"
    import MoodCard from "$lib/components/MoodCard.svelte"
</script>

<div class="container grid min-h-screen items-start gap-16 py-8">
    <div class="space-y-4 text-center text-white">
        <div class="font-bubblegum">Mood2Anime</div>
        <h1 class="text-3xl font-extrablack">
            Discover Anime <br /> Based on Your
            <span class="underline decoration-wavy">Mood</span>
        </h1>
    </div>

    <div>
        <h2 class="text-center text-2xl font-bold">I'm in the mood of?</h2>
        <ul class="mx-auto mt-6 max-w-96 space-y-2">
            {#each moods as mood}
                <li>
                    <MoodCard
                        id={mood.id}
                        name={mood.name}
                        emoji={mood.emoji}
                        href="/moods/{mood.id}"
                    />
                </li>
            {/each}
        </ul>
    </div>

    <footer class="self-end text-center">
        Made with ❤️ by
        <a
            class="link link-primary font-bold"
            href="https://github.com/babakfp"
            target="_blank"
        >
            Babak
        </a>
    </footer>
</div>
