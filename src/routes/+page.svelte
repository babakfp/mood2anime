<script lang="ts">
    import { moods } from "$lib/data/moods"
    import { getMoodGenresById } from "$lib/utilities/getMoodGenresById"
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
        <ul class="mt-6 space-y-2">
            {#each moods as mood}
                <li>
                    <MoodCard
                        name={mood.name}
                        emoji={mood.emoji}
                        href="/moods/{mood.id}"
                    />
                    <div class="mt-2 flex gap-1">
                        {#each getMoodGenresById(mood.id) as genre}
                            <a
                                class="badge link badge-neutral text-2xs"
                                href={genre.url}
                                target="_blank"
                            >
                                {genre.name}
                            </a>
                        {/each}
                    </div>
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
