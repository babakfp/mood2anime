<script lang="ts">
    import IconCaretRightRegular from "phosphor-icons-svelte/IconCaretRightRegular.svelte"

    export let name: string
    export let emoji: string
    export let href: string
</script>

<a class="flex items-center justify-between rounded-xl bg-gray-900 p-4" {href}>
    <div class="flex gap-4">
        <div>{emoji}</div>
        {name}
    </div>
    <IconCaretRightRegular class="text-gray-600" />
</a>
