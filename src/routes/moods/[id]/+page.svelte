<script lang="ts">
    import { enhance } from "$app/forms"
    import { moods } from "$lib/data/moods"
    import MoodCard from "$lib/components/MoodCard.svelte"

    export let data
    export let form

    let animeIndex = 0
    $: anime = data.data.items[animeIndex]
    $: canShowMore = data.data.paginations.every((p) => p.has_next_page)

    $: if (form) {
        data.data.items = [...data.data.items, ...form.items]
        data.data.paginations = form.paginations
    }
</script>

<!-- TODO: REMOVE -->
<!-- <div class="flex flex-wrap">
    {#each data.data.items as anm}
        <a href={anm.url}>
            <img src={anm.images.webp.image_url} alt={anm.title} />
            {anm.title}
            <br />
            <p>score: {anm.score}</p>
            <p>scored_by: {anm.scored_by}</p>
            <p>rank: {anm.rank}</p>
            <p>popularity: {anm.popularity}</p>
            <p>favorites: {anm.favorites}</p>
        </a>
    {/each}
</div> -->

<div class="container pb-16 pt-8">
    <header>
        <a
            href="/"
            class="link text-center font-bubblegum text-white hover:text-opacity-50"
        >
            Mood2Anime
        </a>
    </header>

    <div class="mt-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
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

            <div class="mt-8 flex gap-4">
                {#if animeIndex < data.data.items.length - 1}
                    <button
                        class="btn btn-primary"
                        class:btn-disabled={animeIndex ===
                            data.data.items.length - 1}
                        on:click={() => {
                            if (animeIndex < data.data.items.length - 1) {
                                animeIndex += 1
                            }
                        }}
                    >
                        Show next ({animeIndex + 1} / {data.data.items.length})
                    </button>
                {:else}
                    <form method="post" use:enhance>
                        <input
                            type="hidden"
                            name="current_page"
                            value={data.data.paginations[0].current_page}
                        />
                        <button
                            class="btn btn-primary"
                            class:btn-disabled={!canShowMore}
                        >
                            Load more
                        </button>
                    </form>
                {/if}

                <button
                    class="btn btn-ghost"
                    class:btn-disabled={animeIndex < 1}
                    on:click={() => {
                        if (animeIndex > 0) {
                            animeIndex -= 1
                        }
                    }}
                >
                    Show previous
                </button>
            </div>
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
