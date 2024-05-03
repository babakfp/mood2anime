<script lang="ts">
    import "../app.pcss"
    import FloatingBlob from "$lib/components/FloatingBlob.svelte"
</script>

<FloatingBlob />

<div class="container min-h-screen grid items-start">
    <slot />
</div>
