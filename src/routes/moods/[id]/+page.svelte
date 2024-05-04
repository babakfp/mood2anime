<script lang="ts">
    import { moods } from "$lib/data/moods"
    import MoodCard from "$lib/components/MoodCard.svelte"

    export let data

    console.log(data.anime)

    const anime = data.anime[0]
</script>

<div class="container pb-16 pt-8">
    <header>
        <a
            href="/"
            class="link text-center font-bubblegum text-white hover:text-opacity-50"
        >
            Mood2Anime
        </a>
    </header>

    <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-16">
        <div class="lg:sticky lg:top-8 lg:self-start">
            <img
                class="w-full rounded-xl"
                src={anime.images.webp.image_url}
                alt={anime.title}
            />

            <h1 class="mt-4 text-3xl font-extrablack text-white">
                {anime.title}
            </h1>

            <ul class="mt-4 flex flex-wrap gap-1">
                {#each anime.genres as genre}
                    <li>
                        <a
                            class="badge link badge-neutral text-2xs"
                            href={genre.url}
                            target="_blank"
                        >
                            {genre.name}
                        </a>
                    </li>
                {/each}
            </ul>

            <ul class="mt-4 list-inside list-disc">
                <li>Score: {anime.score} ({anime.scored_by})</li>
                {#if anime.trailer.url}
                    <li>
                        <a
                            class="link"
                            href={anime.trailer.url}
                            target="_blank"
                        >
                            Youtube Trailer
                        </a>
                    </li>
                {/if}
                <li>
                    <a class="link" href={anime.url} target="_blank">
                        View on MyAnimeList
                    </a>
                </li>
            </ul>

            <button class="btn btn-primary mt-8">Show Another</button>
        </div>

        <ul class="hidden space-y-2 lg:block">
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
</div>
