<script lang="ts">
    import AnimeCard from "$lib/components/AnimeCard.svelte"

    export let data
</script>

<div class="container pb-16 pt-8">
    <h1>Mood: {data.mood.name}</h1>

    <br />

    <ul class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-6">
        {#each data.anime as anime}
            <li class="flex justify-center">
                <AnimeCard
                    url={anime.url}
                    title={anime.title}
                    imageUrl={anime.images.jpg.image_url}
                />
            </li>
        {/each}
    </ul>
</div>
