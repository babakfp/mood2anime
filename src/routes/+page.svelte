<script lang="ts">
    import { moods } from "$lib/data/moods"
    import { genres } from "$lib/data/genres"
    import MoodCard from "$lib/components/MoodCard.svelte"
</script>

<div class="container grid min-h-screen items-start gap-16 py-8">
    <div class="space-y-4 text-center">
        <div class="font-bubblegum">Mood2Anime</div>
        <h1 class="text-3xl font-extrablack">
            Discover Anime <br /> Based on Your Mood
        </h1>
    </div>

    <div>
        <h2 class="text-center text-2xl font-bold">I'm in the mood of?</h2>
        <ul class="mt-6 space-y-2">
            {#each moods as mood}
                {@const moodGenres = genres.filter((genre) =>
                    mood.genres.includes(genre.mal_id),
                )}
                <li>
                    <MoodCard
                        name={mood.name}
                        emoji={mood.emoji}
                        href="/mood/{mood.id}"
                    />
                    <div class="text-2xs">
                        Categories:
                        {#each moodGenres as genre, i}
                            {@const useComma =
                                i < moodGenres.length &&
                                i !== moodGenres.length - 1}
                            <a
                                class="underline"
                                href={genre.url}
                                target="_blank"
                            >
                                {genre.name}</a
                            >{useComma ? ", " : ""}
                        {/each}
                    </div>
                </li>
            {/each}
        </ul>
    </div>

    <footer class="self-end text-center">
        Made with ❤️ by
        <a
            class="font-bold text-primary underline hover:text-primary-light"
            href="https://github.com/babakfp"
            target="_blank"
        >
            Babak
        </a>
    </footer>
</div>
