<script lang="ts">
    export let url: string
    export let title: string
    export let imageUrl: string
</script>

<a href={url}>
    <img class="aspect-[3/4]" src={imageUrl} alt="" />
    <h3 class="mt-2 text-sm">{title}</h3>
</a>
