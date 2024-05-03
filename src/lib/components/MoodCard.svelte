<script lang="ts">
    import IconCaretRightRegular from "phosphor-icons-svelte/IconCaretRightRegular.svelte"

    export let name: string
    export let emoji: string
    export let href: string
</script>

<a class="flex justify-between items-center p-4 bg-gray-900 rounded-xl" {href}>
    <div class="flex gap-2 justify-center">
        <span>{emoji}</span>
        {name}
    </div>
    <IconCaretRightRegular class="text-gray-600" />
</a>
