<script lang="ts">
    import IconCaretRightRegular from "phosphor-icons-svelte/IconCaretRightRegular.svelte"
    import { getMoodGenresById } from "$lib/utilities/getMoodGenresById"

    export let id: number
    export let name: string
    export let emoji: string
    export let href: string
</script>

<a
    class="flex items-center justify-between rounded-xl bg-primary-content p-4"
    {href}
>
    <div class="flex gap-4">
        <div>{emoji}</div>
        {name}
    </div>
    <IconCaretRightRegular />
</a>

<ul class="mt-1 flex gap-1">
    {#each getMoodGenresById(id) as genre}
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
