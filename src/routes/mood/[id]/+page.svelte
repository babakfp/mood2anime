<script lang="ts">
    export let data
</script>

{#each data.anime.data as anime}
    <div>
        <a href={anime.url}>{anime.title}</a>
        <img src={anime.images.jpg.image_url} />
    </div>
{/each}
