<script lang="ts">
    export let data
</script>

<h1>Mood: {data.name}</h1>

{#each data.anime as anime}
    <div>
        <a href={anime.url}>{anime.title}</a>
        <img src={anime.images.jpg.image_url} />
    </div>
{/each}
